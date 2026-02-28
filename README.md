# Sunil Khurana & Associates - Web Application

A professional web application for Sunil Khurana & Associates, providing tax consultancy, legal advisory, and financial compliance services.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add any necessary environment variables. You can refer to `.env.example` for the required variables.

```bash
cp .env.example .env
```

### 4. Run the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### 6. Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Project Structure

- `src/`: Contains the React source code.
- `src/pages/`: Individual page components (Home, About, Calculators, Contact).
- `src/components/`: Reusable UI components.
- `public/`: Static assets.

## Technologies Used

- **React 19**: Frontend framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Styling
- **Lucide React**: Icon library
- **Motion**: Animations
