# Gestionando - Business Management System

A comprehensive web application for managing small and medium-sized enterprises (SMEs) and businesses of all types.

## Features

### Financial Management
- Manual data entry for income and expenses
- File import capabilities
- Financial reports generation:
  - Income statements
  - Customer and supplier accounts
  - Cash flow statements
  - Key financial metrics
- Data-driven recommendations

### User Interface
- Simple and intuitive design
- Clear graphs and visualizations
- Smooth navigation
- Quick access to financial reports

### Interactivity
- Easy data entry and editing
- Customizable filters and analysis options

## Tech Stack

### Frontend
- React with TypeScript
- Material-UI/Chakra UI for components
- Chart.js/Recharts for visualizations
- Redux Toolkit for state management
- React Hook Form for form handling

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create `.env` files in both client and server directories
   - Configure necessary environment variables

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend development server
   cd ../client
   npm start
   ```

## Project Structure

```
gestionando/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── store/         # Redux store
│   │   ├── utils/         # Utility functions
│   │   └── App.tsx        # Main App component
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Business logic
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business services
│   │   └── app.js         # Express app
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 