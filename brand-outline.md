# Brand Outline & Design System

## 1. Brand Identity & Tone

- **Brand Name:** Gourav Kashiv (Portfolio)
- **Core Identity:** Full-Stack Engineer, MERN Specialist, DevOps & Cloud Infrastructure Developer.
- **Tone:** Professional, Technical, Modern, and Authoritative. The language communicates strong ownership ("End-to-end architect", "Speed", "Reliability").

## 2. Color Palette

The color system relies on a deep, tech-inspired dark mode setting with a high-contrast futuristic accent.

- **Primary Background (`--color-dark`):** `#0a192f`
  - _Usage:_ Base body background, creating a deep, immersive canvas.
- **Secondary Background (`--color-light-bg`):** `#112240`
  - _Usage:_ Slightly elevated surfaces, inputs, and deep layered elements.
- **Primary Accent (`--color-accent`):** `#64ffda` (Teal / Mint Green)
  - _Usage:_ Buttons, interactive elements, text highlights, hovering states, and glowing background aesthetic elements.
- **Primary Text (`--color-light`):** `#ccd6f6` (Light Grayish-Blue)
  - _Usage:_ Main headings, primary readable paragraph text.
- **Secondary Text (`--color-gray`):** `#8892b0` (Slate Gray)
  - _Usage:_ Subheadings, secondary descriptions, metadata, and subtle details.

## 3. Typography

The typography merges a clean, highly readable sans-serif for long-form content with a distinct, tech-heavy geometric font for headings and highlights.

- **Paragraphs & General Text:** `Inter`
  - _Characteristics:_ Clean, neutral, high legibility.
  - _Weight:_ Normal (400) with a slight negative letter spacing (`-0.01em`) and relaxed line height (`1.7`).
- **Headings & Monospaced Elements:** `Space Grotesk`
  - _Characteristics:_ Geometric, modern, slightly brutalist but polished.
  - _Usage:_ All `h1` through `h6` tags, and explicitly marked monospace classes (`.font-mono`). Used heavily for "tech" accents (e.g., "Hi, my name is").

## 4. UI Components & Styling Patterns

### Glassmorphism & Depth

- **Standard Glass (`.glass`):** Dark transparent background (`bg-dark/70`) with medium backdrop blue (`backdrop-blur-md`) and a subtle light border. Used for floating elements like navigation.
- **Glass Cards (`.glass-card`):** Lighter transparency (`bg-dark/40`), large blur (`backdrop-blur-lg`), rounded corners (`rounded-2xl`), and a very faint white border. Great for displaying projects, skills, and feature highlights.

### Buttons & Interactive Elements

- **Magnetic Interaction:** Elements dynamically track the cursor location pulling slightly toward the mouse via spring animations, adding a highly premium physical feel.
- **Primary Button Style:**
  - Transparent background, outlined with the accent color (`border-accent/50`).
  - Text color matches the accent (`#64ffda`).
  - On hover: The background fills with the solid accent color from bottom to top, and text transitions to the dark background color (`#0a192f`).
- **Selection State:** Overriding default browser highlights with the accent color background and dark text foreground.

## 5. Visual Language & Animation

- **Custom Cursor:** The default cursor is hidden across the app (`cursor: none !important`) and replaced by a unified custom trailing cursor to make interactions feel bespoke.
- **Background Textures:**
  - A persistent subtle _Noise Overlay_ to give depth to the solid dark colors.
  - Large, blurred, ambient orbs (`bg-accent/20 blur-3xl animate-pulse`) positioned strategically behind hero and key sections for an atmospheric tech-glow.
- **Motion & Scrolling:**
  - _Smooth Scrolling_ via Lenis to ensure navigation feels fluid and premium.
  - Staggered entrance animations via `framer-motion` using spring physics (fast snap with a slight bounce) for new elements appearing on screen.

## 6. Layout Principles

- **Container Structure:** Max width of `max-w-5xl`, centered with ample vertical and horizontal padding (`px-6 md:px-12 lg:px-24`).
- **Spacing:** Heavy use of whitespace margin-bottom implementations to let content breathe.
- **Layout Flow:** Stacked elements natively aligned, utilizing flex and grid columns on larger screens for cards to keep a highly linear, predictable reading path.
