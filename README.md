# 🎵 School of Music Technology

A modern, interactive music school website built with Next.js 14, TypeScript, and stunning UI components from Aceternity UI. This project showcases a beautiful, animated landing page for a music education platform with course listings, testimonials, and contact features.

![Music School Banner](https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=400&fit=crop)

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful animations and interactive components using Framer Motion
- **🌊 Dynamic Backgrounds**: Wavy backgrounds, animated beams, and gradient effects
- **📱 Fully Responsive**: Optimized for all device sizes
- **🎯 Featured Courses**: Showcase your best courses with 3D card effects
- **👨‍🏫 Instructor Profiles**: Animated tooltips displaying instructor information
- **💬 Testimonials**: Infinite scrolling testimonial cards
- **📅 Upcoming Webinars**: Interactive hover effects for webinar listings
- **📧 Contact Form**: Beautiful contact page with background beams
- **🎭 Typewriter Effects**: Smooth typewriter animations for headings
- **🔦 Spotlight Effects**: Dynamic spotlight animations
- **🎪 Sticky Scroll**: Engaging scroll-reveal sections

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Aceternity UI](https://ui.aceternity.com/)
- **Utilities**: 
  - `clsx` - Utility for constructing className strings
  - `tailwind-merge` - Merge Tailwind CSS classes
  - `simplex-noise` - Noise generation for wavy backgrounds


## 📁 Project Structure
```
musicnextjs/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── courses/
│   │   └── page.tsx          # All courses page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Aceternity UI components
│   │   ├── 3d-card.tsx
│   │   ├── animated-tooltip.tsx
│   │   ├── background-beams.tsx
│   │   ├── background-gradient.tsx
│   │   ├── card-hover-effect.tsx
│   │   ├── infinite-moving-cards.tsx
│   │   ├── moving-border.tsx
│   │   ├── navbar-menu.tsx
│   │   ├── Spotlight.tsx
│   │   ├── sticky-scroll-reveal.tsx
│   │   ├── typewriter-effect.tsx
│   │   └── wavy-background.tsx
│   ├── FeaturedSection.tsx   # Featured courses section
│   ├── Footer.tsx            # Footer component
│   ├── HeroSection.tsx       # Hero/Landing section
│   ├── Instructors.tsx       # Instructors section
│   ├── Navbar.tsx            # Navigation bar
│   ├── TestimonialCards.tsx  # Testimonials section
│   ├── UpcomingWebinars.tsx  # Webinars section
│   └── WhyChooseUs.tsx       # Features section
├── data/
│   └── music_courses.json    # Course data
├── utils/
│   └── cn.ts                 # Utility functions
└── package.json
```

## 🎨 Key Components

### Hero Section
- Animated typewriter effect
- Spotlight background
- Call-to-action button with moving border

### Featured Courses
- 3D card effects on hover
- Background gradient animations
- Responsive grid layout

### Testimonials
- Infinite scrolling carousel
- Smooth animations
- Grid pattern background

### Instructors
- Wavy animated background
- Animated tooltip profiles
- Responsive layout

### Contact Page
- Background beams effect
- Form validation
- Typewriter heading

## 🎯 Course Data Structure

Courses are stored in `data/music_courses.json`:
```json
{
  "id": 1,
  "title": "Guitar Fundamentals",
  "slug": "guitar-fundamentals",
  "description": "Learn the basics of playing guitar...",
  "price": 99.99,
  "instructor": "John Doe",
  "isFeatured": true,
  "image": "/courses/guitar.jpg"
}
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://school-music-three.vercel.app/)

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🎨 Customization

### Changing Colors
Edit the Tailwind config or use the utility classes in components:
- Primary: `teal-500`, `teal-600`
- Secondary: `blue-500`, `blue-700`
- Background: `gray-900`, `black`

### Adding New Courses
Add course data to `data/music_courses.json` with the required fields.

### Modifying Animations
Adjust Framer Motion props in component files for custom animations.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://school-music-three.vercel.app//) for hosting solutions
- All contributors and supporters

---

**Built with ❤️ using Next.js and Aceternity UI**