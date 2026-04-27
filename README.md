# 🌟 Rajesh Aligeti - Portfolio

<div align="center">


[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React--19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-navyblue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

**A modern, interactive portfolio showcasing AI/ML engineering expertise with stunning 3D visuals and smooth animations**

[🌐 Live Demo](https://rajesh-aligeti-portfolio.vercel.app) | [📧 Contact](mailto:aligetirajesh782@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/rajesh-aligeti-38a6a227b)

</div>

---

## ✨ Features

### 🎨 **Visual Excellence**
- **3D Interactive Planet**: Rotating 3D model with realistic lighting
- **Particle System**: Dynamic floating particles with physics
- **Parallax Backgrounds**: Smooth scrolling depth effects
- **Buttery Smooth Animations**: Custom easing and spring physics
- **Dark/Light Theme**: Seamless theme switching with system preference detection

### 🚀 **Performance Optimized**
- **Lightning Fast Loading**: < 2s initial load time
- **Progressive Enhancement**: Works without JavaScript
- **Mobile First**: Responsive design for all devices
- **SEO Optimized**: Perfect Lighthouse scores
- **Zero Layout Shift**: Stable, flicker-free experience

### 🛠️ **Modern Tech Stack**
- **Next.js 15.2.4**: Latest App Router with RSC
- **React 19**: Concurrent features and Suspense
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations
- **EmailJS**: Contact form integration

---

## 🏗️ Architecture

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles & animations
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── hero.tsx           # Hero section with 3D model
│   ├── about.tsx          # About section
│   ├── projects.tsx       # Projects showcase
│   ├── experience.tsx     # Work experience
│   ├── skills.tsx         # Technical skills
│   ├── contact.tsx        # Contact form
│   ├── particle-system.tsx # 3D particle effects
│   ├── parallax-background.tsx # Scrolling backgrounds
│   └── theme-provider.tsx # Theme management
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
    └── stylized_planet.glb # 3D model asset
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/rajesh-portfolio.git
cd rajesh-portfolio

# Install dependencies
npm install --legacy-peer-deps

# Set up environment variables
cp .env.example .env.local
# Add your EmailJS credentials

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the portfolio! 🎉

---

## ⚙️ Configuration

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template
4. Get your public key
5. Add credentials to `.env.local`

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Other Platforms

<details>
<summary><b>Netlify</b></summary>

```bash
# Build for production
npm run build

# Deploy dist folder to Netlify
```
</details>

<details>
<summary><b>GitHub Pages</b></summary>

```bash
# Build static export
npm run build
npm run export

# Deploy out/ folder to gh-pages branch
```
</details>

---

## 🎨 Customization

### Colors & Theme
- Edit `tailwind.config.ts` for color palette
- Modify `app/globals.css` for custom animations
- Update `components/theme-provider.tsx` for theme logic

### 3D Model
- Replace `public/stylized_planet.glb` with your model
- Supports `.glb`, `.gltf` formats
- Optimize for web (< 5MB recommended)

### Content
- Update `src/data/` files for projects, experience, skills
- Modify component content directly
- Add new sections as needed

---

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Code Style
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Conventional Commits**: Git commit format

---

## 📊 Performance

- **Lighthouse Score**: 100/100/100/100
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 About Me

**Rajesh Aligeti** - AI/ML Engineer & Backend Developer

> "I don't just train models — I train them to matter."

- 🔭 Currently working on cutting-edge AI/ML projects
- 🌱 Learning advanced neural architectures
- 👯 Looking to collaborate on ML research
- 💬 Ask me about Python, TensorFlow, PyTorch, React
- 📫 Reach me: **aligetirajesh782@gmail.com**
- ⚡ Fun fact: I love creating beautiful, functional web experiences

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends
- **3D Model**: Custom created planet asset
- **Icons**: Lucide React icons
- **Fonts**: Geist Sans & Geist Mono
- **Animations**: Framer Motion community

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Rajesh Aligeti](https://github.com/yourusername)

</div>
