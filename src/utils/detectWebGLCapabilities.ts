/**
 * Detects whether the current device and browser have sufficient
 * hardware and WebGL capabilities to run 3D Spline scenes without crashing or lagging.
 */
export function isWebGLAvailableAndPerformant(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  // 1. Check for reduced motion preference
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
  } catch {
    // Ignore matchMedia errors on very old browsers
  }

  // 2. Check for Data Saver mode
  // @ts-expect-error Connection API is experimental
  if (navigator.connection?.saveData === true) {
    return false;
  }

  // 3. Screen size threshold (desktop screens only)
  if (window.innerWidth < 1024) {
    return false;
  }

  // 4. Bot & crawler detection
  const isBotOrLighthouse =
    /Lighthouse|HeadlessChrome|Chrome-Lighthouse|bot|crawler|spider/i.test(
      navigator.userAgent,
    );
  if (isBotOrLighthouse) {
    return false;
  }

  // 5. Hardware Concurrency (CPU logical cores):
  // Devices with 4 or fewer cores struggle with WASM 3D + heavy fragment shaders
  if (
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 4
  ) {
    return false;
  }

  // 6. Device Memory (RAM):
  // Devices with less than 4GB RAM easily hit OOM (Out Of Memory) tab crashes with 3D runtimes
  const deviceMemory = (navigator as unknown as { deviceMemory?: number })
    .deviceMemory;
  if (typeof deviceMemory === "number" && deviceMemory < 4) {
    return false;
  }

  // 7. WebGL context & Software Renderer (SwiftShader/llvmpipe) detection
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;

    // Spline requires robust WebGL 2.0 support
    const gl = canvas.getContext("webgl2") as WebGL2RenderingContext | null;
    if (!gl) {
      return false;
    }

    // Check for software rasterization (CPU-emulated WebGL)
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = (
        gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || ""
      ).toLowerCase();
      const vendor = (
        gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || ""
      ).toLowerCase();
      const combined = `${renderer} ${vendor}`;

      const softwareKeywords = [
        "swiftshader",
        "llvmpipe",
        "software rasterizer",
        "basic render driver",
        "lavapipe",
        "apple software renderer",
        "mesa software",
      ];

      for (const keyword of softwareKeywords) {
        if (combined.includes(keyword)) {
          // Detected software CPU rendering: abort 3D to prevent tab crash/freeze
          return false;
        }
      }
    }

    // Clean up test context immediately
    const loseContextExt = gl.getExtension("WEBGL_lose_context");
    if (loseContextExt) {
      loseContextExt.loseContext();
    }

    return true;
  } catch {
    return false;
  }
}
