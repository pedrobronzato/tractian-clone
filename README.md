# Tractian Clone - Technical Challenge

## 📋 About the Project

This project was developed as a technical challenge for the **Mid Full Stack Web Developer** position at Tractian. The goal was to faithfully reproduce the [Who We Serve - Plant Manager](https://tractian.com/en/who-we-serve/plant-manager) page, maintaining:

-  Original style patterns
-  Configured URLs and routes
-  Full responsiveness
-  Internationalization (i18n)
-  Accessibility

## Technologies Used

### Core
- **[Next.js 16.1.3](https://nextjs.org/)** - React Framework with App Router and React Server Components
- **[React 19.2.3](https://react.dev/)** - Library for building user interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### Libraries and Tools

#### UI and Interactivity
- **[@headlessui/react](https://headlessui.com/)** - Unstyled accessible components (used for dropdowns, modals)
- **[Swiper](https://swiperjs.com/)** - Modern carousel and sliders for testimonials and clients
- **[yet-another-react-lightbox](https://yet-another-react-lightbox.com/)** - Lightbox for image viewing

#### Internationalization
- **[next-intl](https://next-intl-docs.vercel.app/)** - Complete i18n solution for Next.js
  - Support for 3 languages: Portuguese (pt), English (en), and Spanish (es)
  - Translated and localized routes

#### Forms and Notifications
- **[react-international-phone](https://www.npmjs.com/package/react-international-phone)** - International phone input
- **[react-toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications

#### Code Quality
- **[ESLint 9](https://eslint.org/)** - Linter
- **[Prettier 3.8](https://prettier.io/)** - Code formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for automation

## Project Architecture

The project follows a modular and scalable architecture based on templates 

### Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Routes with i18n support
│   │   ├── layout.tsx           # Layout with Header and Footer
│   │   └── who-we-serve/
│   │       └── [role]/          # Dynamic route for different roles
│   │           └── page.tsx     # Main page
│   ├── fonts.ts                 # Font configuration (Inter)
│   ├── globals.css              # Global styles and Tailwind
│   └── layout.tsx               # Root layout
│
├── components/                   # React Components
│   ├── common/                  # Reusable components
│   │   ├── Button.tsx
│   │   ├── CustomLightbox.tsx
│   │   ├── DetailedLink.tsx
│   │   ├── DropdownButton.tsx
│   │   ├── DropdownMenuButton.tsx
│   │   ├── FormSelect.tsx
│   │   ├── InteractiveChecklist.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── Link.tsx
│   │   ├── MobileAccordion.tsx
│   │   ├── Swiper.tsx
│   │   └── Tabs.tsx
│   │
│   ├── layout/                  # Layout components
│   │   ├── DemoForm.tsx         
│   │   ├── Footer.tsx
│   │   ├── FooterAccordion.tsx
│   │   ├── FooterHeader.tsx
│   │   ├── FooterInformations.tsx
│   │   ├── FooterLinks.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderMenu.tsx
│   │   ├── HeaderMenuMobile.tsx
│   │   ├── SectionMenu.tsx
│   │   └── TitleSectionMenu.tsx
│   │
│   └── who-we-serve/            # Page-specific components
│       ├── Advantages.tsx
│       ├── AdvantagesCard.tsx
│       ├── Benefits.tsx
│       ├── Clients.tsx
│       ├── ClientsCarousel.tsx
│       ├── Faq.tsx
│       ├── FaqQuestion.tsx
│       ├── Features.tsx
│       ├── Hero.tsx
│       ├── Mission.tsx
│       ├── Steps.tsx
│       ├── StepsCard.tsx
│       ├── TestimonialCard.tsx
│       └── Testimonials.tsx
│
├── content/                      # Content and configurations
│   ├── DemoForm.tsx             # Form structure
│   ├── Footer.tsx               # Footer content
│   ├── FooterConfig.ts
│   ├── Header.ts
│   ├── HeaderMenu.ts
│   ├── MenuConfig.tsx           # Menu configuration
│   ├── who-we-serve.tsx         # Page content
│   └── icons/                   # SVG icon components
│       ├── AicpaIcon.tsx
│       ├── AiIcon.tsx
│       ├── (50+ icons...)
│       └── index.ts
│
├── hooks/                        # Custom React Hooks
│   ├── useDemoForm.tsx          # Demo form logic
│   ├── useLocale.ts             # Hook to manage locale
│   └── useMountHref.ts          # Hook for mounted URLs
│
├── i18n/                         # Internationalization configuration
│   ├── navigation.ts            # Internationalized navigation
│   ├── request.ts               # Request handler for i18n
│   └── routing.ts               # Route configuration
│
├── messages/                     # Translation files
│   ├── en.json                  # English
│   ├── es.json                  # Spanish
│   └── pt.json                  # Portuguese
│
├── utils/                        # Utilities
│   └── validateForm.ts          # Form validation
│
└── proxy.ts                     
```

## Implemented Features

### Interface
- Hero section with call-to-action
- Features section
- Benefits and advantages
- Client carousel
- User testimonials
- FAQ with accordion
- Demo form
- Header with complete navigation
- Footer with links and information

## How to Run

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pedrobronzato/tractian-clone.git

# Enter the project folder
cd tractian-clone

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized build
npm run build

# Run production server
npm start
```

##  Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Create production build
npm run start        # Run production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying

# Git Hooks
npm run prepare      # Install Husky hooks
```





##  License

This project was developed for educational purposes as part of a selection process.


**Developed by Pedro Bronzato** | Tractian Technical Challenge - Mid Full Stack Web Developer
