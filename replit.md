# CTF Event Website

## Overview

This project is a modern web application for a Capture The Flag (CTF) cybersecurity competition hosted by Royal College of Engineering & Technology. The application features a dynamic landing page with event information, countdown timer, registration capabilities, and a cyberpunk-themed design. Built as a full-stack application with React frontend and Express backend, it's designed to promote and manage a cybersecurity competition event.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom cyberpunk theme featuring dark colors, neon accents, and futuristic design elements
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling system
- **Animations**: Framer Motion for smooth animations, transitions, and interactive effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API development
- **Language**: TypeScript for consistent type safety across the entire stack
- **Storage Layer**: Dual storage approach with in-memory storage for development and PostgreSQL support for production
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **API Design**: RESTful architecture with /api prefix for all backend routes

### Data Storage Solutions
- **Development**: In-memory storage using Map-based implementation for rapid prototyping
- **Production**: PostgreSQL database with Neon serverless hosting
- **Schema Management**: Drizzle migrations for version-controlled database changes
- **Type Safety**: Zod schemas for runtime validation and TypeScript integration

### Design System
- **Theme**: Cyberpunk aesthetic with dark backgrounds, neon colors (purple, cyan, blue)
- **Typography**: Multiple font families including Orbitron for futuristic headings, Inter for readability, and Source Code Pro for code elements
- **Components**: Modular design system with reusable components for cards, buttons, animations, and interactive elements
- **Responsive Design**: Mobile-first approach with responsive breakpoints and adaptive layouts

## External Dependencies

### UI and Design
- **Radix UI**: Complete set of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and consistent design
- **Framer Motion**: Production-ready motion library for React animations and gestures
- **Lucide React**: Modern icon library with comprehensive set of SVG icons

### Database and ORM
- **Neon Database**: Serverless PostgreSQL platform for scalable database hosting
- **Drizzle ORM**: Lightweight, type-safe ORM for PostgreSQL with excellent TypeScript support
- **Drizzle Kit**: CLI tools for database migrations and schema management

### Development Tools
- **Vite**: Next-generation frontend build tool with hot module replacement
- **TanStack Query**: Powerful data synchronization library for React applications
- **Zod**: TypeScript-first schema validation library
- **React Hook Form**: Performant forms library with minimal re-renders

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library for date manipulation
- **clsx**: Utility for constructing className strings conditionally
- **class-variance-authority**: Library for creating variant-based component APIs

### Replit-Specific
- **Replit Plugins**: Development tools including runtime error overlay, cartographer, and dev banner for enhanced Replit development experience