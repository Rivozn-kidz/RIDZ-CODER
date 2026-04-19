# 🎯 FULL PROJECT SPECIFICATION: Ridz Coder Portfolio

## 1. PROJECT OVERVIEW
Modern glassmorphism-style developer portfolio with 3D animated background, admin dashboard for project management, and dynamic content display. Dark theme with red accent (#ff1744).

---

## 2. DESIGN SYSTEM

### Color Palette (CSS Variables)
- --background: 0 0% 6% (dark gray/black)
- --foreground: 0 0% 100% (white)
- --primary: 348 100% 55% (red #ff1744)
- --card: 0 0% 10% (glass card bg)
- --muted: 0 0% 15%
- --border: 0 0% 18%

### Typography
- Font: Inter (Google Fonts)
- Mono font for time display

### Glassmorphism Effect
```css
.glass-card {
  background: hsla(0, 0%, 10%, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid hsla(0, 0%, 100%, 0.09);
}
```

### Custom Animations
- animate-float: 3s ease-in-out infinite vertical float
- animate-pulse-glow: 3s ease-in-out infinite shadow pulse
- animate-fade-in-up: 0.8s ease fade + slide up
- animate-blink: 1s infinite cursor blink
- animate-color-shift: 8s ease-in-out infinite gradient cycle (red → purple → teal)

---

## 3. TECH STACK
- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Three.js / React Three Fiber (3D background)
- Supabase (backend + auth)
- React Router DOM
- TanStack Query
- Sonner (toast notifications)

---

## 4. DATABASE SCHEMA

### Table: projects
- id: UUID PRIMARY KEY
- user_id: UUID (references auth.users)
- title: TEXT NOT NULL
- description: TEXT
- techs: TEXT[]
- url: TEXT
- button_text: TEXT
- image_url: TEXT
- sort_order: INTEGER
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

### RLS Policies
- SELECT: Allow all (public viewing)
- INSERT/UPDATE/DELETE: Only authenticated owner

---

## 5. PAGES & COMPONENTS

### A. Landing Page (/)
Layout Order:
1. Scene3D - Full-screen fixed background
2. MenuButton - Top-right hamburger menu
3. ProfileSection - Animated avatar, name, typing role effect
4. SocialLinks - GitHub, Telegram, WhatsApp icons
5. TimeBattery - Live EAT time + battery indicator
6. TechStackSection - 3-column grid of 12 techs with emoji icons
7. ProjectsSection - Dynamic project cards from database
8. ContactSection - Formspree contact form
9. Footer - Auto-updating copyright year

### B. Login Page (/login)
- Email/password form
- "Forgot password?" → sends to smtechofcmods@gmail.com
- Glass card styling
- Admin: 

### C. Reset Password Page (/reset-password)
- New password form
- Handles Supabase recovery hash

### D. Dashboard (/dashboard) (Protected)
- CRUD operations for projects
- Fields: title, description, techs (comma-separated), url, button_text, image_url, sort_order
- List view with edit/delete buttons

---

## 6. 3D BACKGROUND (Scene3D)

Components:
- ParticleField: 800 particles, red/white colors, slow rotation
- FloatingGeometry:
  - Icosahedron (wireframe, red, distort effect)
  - Octahedron (wireframe, purple)
  - Torus (wireframe, red)
- OrbitControls: Auto-rotate, no zoom/pan
- Lighting: Ambient (0.3) + 2 point lights (red + purple)

---

## 7. KEY COMPONENTS

### ProfileSection
- Circular avatar with animated gradient border (8s color shift)
- Typing animation: "Developer" → "Designer" → "Creator" → "Innovator"
- Cursor blink effect

### TechStackSection
12 technologies with emoji icons:
React ⚛️, TypeScript 🔷, Node.js 🟢, Python 🐍, Tailwind CSS 🎨, MongoDB 🍃, PostgreSQL 🐘, Git 🔀, Docker 🐳, Firebase 🔥, Next.js ▲, Supabase ⚡

### ProjectCard
- Image thumbnail (16:10 ratio)
- Title + icon header
- Description with left border accent
- Tech badges (rounded pills)
- CTA button with glow hover effect

### ContactSection
- Formspree integration
- Fields: name, email, message
- Toast feedback
- No page redirect

### MenuButton
- Hamburger → X animation
- Slide-out drawer from right
- Auth-aware navigation

---

## 8. AUTHENTICATION FLOW
1. Login: Supabase auth with email/password
2. Session: AuthContext provider
3. Protected Routes: Dashboard redirects if not authenticated
4. Password Reset: 

---

## 9. ADMIN DASHBOARD FEATURES
- Add/Edit/Delete projects
- Fields: title, description, techs, url, button_text, image_url, sort_order
- Real-time updates to portfolio

---

## 10. RESPONSIVE DESIGN
- Mobile-first (max-w-md container)
- 3-column tech grid → stacks on mobile
- Project cards full-width

---

## 11. FOOTER
©2023 - [current year] • Developed by Ridz Coder
(Auto-updates year dynamically)

---

## 12. SOCIAL LINKS
- GitHub: github.com/ridzcoder
- Telegram: t.me/ridzcoder
- WhatsApp: wa.me/message/ridzcoder

---

## 13. TIME & BATTERY DISPLAY
- Real-time EAT (Kampala) timezone clock
- Live battery percentage with color indicator

---

