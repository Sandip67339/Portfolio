# 🚀 Sandip Nyoupane - Modern Animated Portfolio

A modern, highly animated personal portfolio website built with React, Tailwind CSS, and Framer Motion. Designed for a Computer Science graduate and aspiring Frontend Developer from Nepal.

## ✨ Features

- **🎨 Modern Dark UI** - Gradient backgrounds, glassmorphism cards, and smooth animations
- **⚡ Fully Animated** - Smooth scroll animations, page transitions, and hover micro-interactions
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop screens
- **⌨️ Typing Effect** - Animated typing effect in the hero section
- **📊 Skills Section** - Animated progress bars and categorized skills
- **🎯 Project Showcase** - Featured projects with hover animations and live links
- **📈 Timeline Experience** - Animated timeline for work experience
- **✉️ Contact Form** - Fully functional contact form with validation
- **🔍 SEO Optimized** - Meta tags, structured data, and performance optimized
- **🚀 Fast Loading** - Optimized bundle size and lazy loading

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with mobile menu
│   │   ├── Footer.jsx            # Footer component
│   │   └── sections/
│   │       ├── Hero.jsx          # Hero section with typing effect
│   │       ├── About.jsx         # About me section
│   │       ├── Skills.jsx        # Skills with progress bars
│   │       ├── Projects.jsx      # Featured projects showcase
│   │       ├── Experience.jsx    # Work experience timeline
│   │       └── Contact.jsx       # Contact form section
│   ├── utils/
│   │   └── animations.js         # Framer Motion animation configs
│   ├── data/
│   │   └── portfolio.js          # Portfolio data (projects, skills, etc.)
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html                    # HTML entry point
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information
Edit `/src/data/portfolio.js`:
- Change name, title, and location
- Update skills and categories
- Add/modify projects and experience
- Update social media links

### Customize Colors
Edit `/tailwind.config.js`:
```javascript
colors: {
  primary: "#0f0f23",      // Main background
  secondary: "#16213e",    // Secondary background
  accent: "#00d4ff",       // Accent color
}
```

### Modify Content
- **Hero Section** - `/src/components/sections/Hero.jsx`
- **About Section** - `/src/components/sections/About.jsx`
- **Skills Section** - `/src/components/sections/Skills.jsx`
- **Projects Section** - `/src/components/sections/Projects.jsx`
- **Experience Section** - `/src/components/sections/Experience.jsx`
- **Contact Section** - `/src/components/sections/Contact.jsx`

## 📱 Sections Overview

### 1. **Hero Section**
- Typing effect animation
- Call-to-action buttons
- Resume download link
- Parallax animations

### 2. **About Section**
- Professional summary
- Key achievements
- Education information
- Statistics showcase

### 3. **Skills Section**
- Categorized skills (Frontend, Backend, Tools, Testing)
- Animated skill badges
- Proficiency progress bars
- Smooth animations on scroll

### 4. **Projects Section**
- Featured project cards
- Project descriptions and tech stack
- Links to GitHub and live demos
- Hover effects and animations

### 5. **Experience Section**
- Timeline view of work experience
- Company and position details
- Timeline animations
- Duration and responsibilities

### 6. **Contact Section**
- Contact form with validation
- Contact information
- Social media links
- Form submission handling

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Vite and build settings
5. Your site will be live in minutes!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to GitHub Pages

1. Update `package.json` with your repo name as homepage
2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

4. Run `npm run deploy`

## 🔧 Environment Variables

Create a `.env.local` file for any sensitive information:
```
VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
VITE_EMAIL_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAIL_PUBLIC_KEY=your_emailjs_public_key
```

## 📊 Performance Optimization

- **Bundle Size**: ~340KB (ungzipped), ~106KB (gzipped)
- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use appropriate formats
- **CSS Optimization**: Tailwind CSS purges unused styles

## 🎯 SEO Features

- Meta tags for all social platforms
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Responsive design for mobile SEO
- Fast page load times

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dev Server Not Starting
```bash
# Check port conflicts
npm run dev -- --port 3000
```

### Styles Not Loading
```bash
# Rebuild Tailwind cache
rm -rf node_modules/.vite
npm run dev
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sandip Nyoupane**
- Location: Kathmandu, Nepal
- Email: sandipnyoupane45@gmail.com
- GitHub: [@sandipnyoupane](https://github.com/sandipnyoupane)
- LinkedIn: [Sandip Nyoupane](https://linkedin.com/in/sandipnyoupane)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for fast development
- [React Icons](https://react-icons.github.io/react-icons/) for icons

---

Built with ❤️ using React, Tailwind CSS & Framer Motion
