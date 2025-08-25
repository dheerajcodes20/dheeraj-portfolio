# Replit Project Guide

## Overview

This is a full-stack portfolio website built with React and Express, showcasing a developer's professional profile. The application features a modern single-page design with sections for hero introduction, about, skills, projects, education, and contact functionality. The frontend uses React with TypeScript, styled with TailwindCSS and shadcn/ui components, while the backend provides API endpoints for contact form submissions and potential future features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing (currently single-page with smooth scrolling navigation)
- **Component Structure**: Organized into reusable UI components in `/client/src/components/ui/` and page-specific components for portfolio sections

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful endpoints with JSON responses
- **Contact Handling**: Basic contact form validation and processing (currently logs submissions, ready for email integration)
- **Development Setup**: Vite integration for hot module replacement in development mode
- **Error Handling**: Centralized error middleware with proper status codes and JSON error responses

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `/shared/schema.ts`
- **Schema Management**: Type-safe database schemas with Zod validation
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development and database implementation ready for production
- **User Management**: Basic user schema with username/password fields, UUID primary keys

### Authentication and Authorization
- **User Schema**: Prepared user table structure with unique usernames and password storage
- **Storage Interface**: Abstract storage layer ready for authentication implementation
- **Session Management**: Infrastructure in place (connect-pg-simple) for PostgreSQL session storage

### Development and Build Configuration
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Build Process**: Vite for frontend bundling, ESBuild for backend compilation
- **Asset Handling**: Static asset serving with proper aliases for images and resources
- **Environment**: Development/production environment handling with conditional plugin loading

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **TailwindCSS**: Utility-first CSS framework with custom color scheme and responsive design
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography

### Data and State Management
- **TanStack Query**: Server state management with caching, background updates, and optimistic updates
- **React Hook Form**: Form handling with validation support
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Zod**: Runtime type validation and schema validation

### Development Tools
- **Vite**: Fast development server and build tool with plugin ecosystem
- **Replit Integration**: Development environment plugins for Replit-specific features
- **TypeScript**: Static type checking and enhanced development experience

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database service
- **PostgreSQL**: Primary database system with session storage capabilities
- **Environment Variables**: Database connection and configuration management

### Potential Integrations (Ready for Implementation)
- **Email Services**: Infrastructure ready for SendGrid, AWS SES, or Nodemailer integration
- **File Upload**: Asset handling system prepared for resume downloads and media uploads
- **Analytics**: Structure in place for user interaction tracking and portfolio analytics