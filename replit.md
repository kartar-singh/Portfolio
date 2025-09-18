# Overview

This is a modern MERN (MongoDB, Express, React, Node.js) stack portfolio website for Kartar Singh, a full-stack developer. The application serves as a professional portfolio showcasing skills, projects, certifications, and providing a contact mechanism. It features a single-page application (SPA) with smooth scrolling navigation, responsive design, and interactive components built with modern web technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Session Management**: Express sessions with PostgreSQL session store
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot module replacement with Vite integration for seamless development

## Component Structure
- **Design System**: Radix UI primitives with custom shadcn/ui styling
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Fixed navbar with smooth scroll-to-section functionality
- **Sections**: Modular components for Hero, About, Projects, Skills, Certifications, Contact, and Footer

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database integration
- **Schema**: Centralized schema definitions in shared directory for type consistency
- **Storage**: In-memory storage abstraction with interface-based design for easy database integration

## Build and Development
- **Development Server**: Vite dev server with Express API integration
- **Production Build**: Separate client and server builds with ESM modules
- **TypeScript**: Strict type checking across frontend, backend, and shared code
- **Path Aliases**: Configured aliases for clean import statements (@/, @shared/)

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle Kit**: Database migrations and schema management

## UI and Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide Icons**: Modern icon library for consistent iconography
- **Google Fonts**: Custom font integration (Inter, DM Sans, Fira Code, Geist Mono)

## Development Tools
- **Replit Integration**: Vite plugins for Replit-specific development features
- **ESBuild**: Fast JavaScript bundler for server-side builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API endpoints

## Animation and Interaction
- **Framer Motion**: Production-ready motion library for React animations
- **Embla Carousel**: Lightweight carousel component for project showcases

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx/tailwind-merge**: Conditional class name utilities for Tailwind CSS
- **nanoid**: URL-safe unique string ID generator