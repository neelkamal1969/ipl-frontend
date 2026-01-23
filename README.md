# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


---

# IPL Frontend Dashboard

A responsive React-based frontend dashboard for visualizing IPL match data and statistics.  
This application consumes a RESTful backend API and presents structured data through an intuitive user interface.

## Table of Contents

1. [Project Overview](#1-project-overview)  
2. [Tech Stack](#2-tech-stack)  
3. [Application Architecture](#3-application-architecture)  
4. [Routing Strategy](#4-routing-strategy)  
5. [API Integration](#5-api-integration)  
6. [State Management](#6-state-management)  
7. [Local Setup Instructions](#7-local-setup-instructions)  
8. [Environment Configuration](#8-environment-configuration)  
9. [Deployment Details](#9-deployment-details)  
10. [Project Structure](#10-project-structure)  
11. [Key Design Decisions](#11-key-design-decisions)  
12. [Known Limitations](#12-known-limitations)  
13. [Future Enhancements](#13-future-enhancements)  

## 1. Project Overview

The IPL Frontend Dashboard provides:
- Match listings with pagination for efficient data browsing
- Team-based insights, including win/loss records
- Venue-based statistics, such as match counts per location
- A clean and minimal UI for data exploration and quick insights

The frontend is intentionally lightweight and fully decoupled from the backend, allowing for independent development and deployment. It focuses on user-friendly navigation and responsive design, ensuring accessibility on desktop and mobile devices.

## 2. Tech Stack

- **Framework:** React (for building dynamic UIs with components)
- **Build Tool:** Vite (for fast development and optimized builds)
- **Language:** JavaScript (with JSX for React components)
- **Routing:** React Router (for client-side navigation)
- **HTTP Client:** Axios (for reliable API requests with interceptors)
- **Deployment Platform:** Vercel (for seamless static hosting)

Minimal dependencies are used to keep the bundle size small and load times fast.

## 3. Application Architecture

The architecture is component-based and follows a unidirectional data flow:

- **Browser → React Components**: Render UI based on state and props.
- **API Service Layer (Axios)**: Handles all backend communications, including error handling and retries.
- **FastAPI Backend**: Source of data; the frontend remains agnostic to backend details.

This setup promotes reusability (e.g., reusable components for tables/charts) and testability.

## 4. Routing Strategy

Client-side routing is implemented using React Router for a Single Page Application (SPA) experience, avoiding full page reloads.

### Routes

| Path      | Description                        |
|-----------|------------------------------------|
| /         | Dashboard home with overview       |
| /matches  | Match listing page with pagination |
| /teams    | Team statistics and details        |
| /stats    | Aggregated insights and metrics    |

Routes include fallback handling for 404 errors, ensuring a smooth user experience.

## 5. API Integration

The frontend communicates with the backend using Axios for all HTTP requests. Calls are centralized in a service file for consistency.

### Example
```javascript
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const fetchMatches = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/matches?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

Interceptors can be added for global headers (e.g., auth tokens) or loading indicators.

## 6. State Management

- **Local Component State**: Used via React's `useState` and `useEffect` for UI rendering and data fetching.
- **Data Fetching**: Occurs on component mount or route changes, with memoization to prevent unnecessary re-fetches.
- **Loading and Error States**: Handled gracefully with spinners and user-friendly messages.

No external libraries like Redux are used, keeping the app simple for its scope. For larger features, context API could be introduced.

## 7. Local Setup Instructions

### Prerequisites
- Node.js 18+
- npm (or yarn)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/neelkamal1969/ipl-frontend.git
   cd ipl-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will run at: http://localhost:5173

## 8. Environment Configuration

Configure via a `.env` file or directly in code.

Key Variable:
- `VITE_API_BASE_URL=https://ipl-backend-z0i3.onrender.com` (points to the backend API)

This allows easy switching between local and production backends.

## 9. Deployment Details

The frontend is deployed on Vercel for optimal performance.

- **Live Frontend URL**: https://ipl-frontend-two.vercel.app/
- **Deployment Features**:
  - Static asset optimization and CDN distribution.
  - SPA routing fallback to handle client-side paths.
  - Continuous deployment from GitHub pushes.
  - Preview deployments for branches.

Vercel provides analytics for traffic and errors.

## 10. Project Structure

```
ipl-frontend/
├── src/
│   ├── components/      # Reusable UI elements (e.g., tables, cards)
│   ├── pages/           # Route-specific pages (e.g., MatchesPage.jsx)
│   ├── services/        # API services and utilities
│   ├── App.jsx          # Main app component with router
│   ├── main.jsx         # Entry point
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── README.md            # This documentation
```

This organization supports scalability and quick feature additions.

## 11. Key Design Decisions

- **Vite**: Faster than Create React App for dev/build times.
- **Axios**: Provides robust HTTP handling with promises and interceptors.
- **SPA Routing**: Ensures seamless navigation without server reloads.
- **Minimal Dependencies**: Reduces complexity and vulnerability surface.

These prioritize speed, maintainability, and user experience.

## 12. Known Limitations

- **No Authentication Layer**: Relies on public APIs; no user sessions.
- **No Server-Side Rendering**: Fully client-side, which may affect initial load SEO (though not critical for dashboards).
- **UI Focus**: Emphasizes functionality; visual polish is basic (e.g., no advanced styling frameworks like Tailwind).

These are scoped for the project's goals.

## 13. Future Enhancements

- Integrate charts (e.g., via Chart.js) for visual analytics.
- Improve responsive design with media queries and testing.
- Add error boundary components for better fault tolerance.
- Implement loading skeletons for improved UX during fetches.
- Add end-to-end testing with Cypress or Playwright.

## Author

Neelkamal Gupta  
Full Stack Developer
