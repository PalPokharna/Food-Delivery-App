# Food Delivery Application

A full-stack food delivery web application with MongoDB, Express, React, and Node.js.

## Features

- Browse food items by categories
- View item details and add to cart
- User authentication and registration
- Order tracking
- Admin panel for food management
- Responsive design for mobile and desktop

## Project Structure

- `/frontend` - React frontend application
- `/backend` - Node.js and Express backend API
- `/admin` - Admin dashboard (if applicable)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

2. Set up the backend:

```
cd backend
npm install
```

3. Set up the frontend:

```
cd ../frontend
npm install
```

4. Create `.env` file in the backend directory with:

```
PORT=4000
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/food-del
JWT_SECRET=your_jwt_secret
```

5. Add food images to the `/backend/uploads` folder

## Running the Application

1. Start the backend server:

```
cd backend
npm run dev
```

2. Start the frontend development server:

```
cd frontend
npm run dev
```

3. Access the application:
   - Frontend: http://localhost:5173 (or your configured port)
   - Backend API: http://localhost:4000

## Database Seeding

To populate the database with sample food items:

```
cd backend
node utils/seedData.js
```

## API Endpoints

- `GET /api/food/list` - Get all food items
- `POST /api/user/signup` - Register new user
- `POST /api/user/login` - Login user
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get cart items
- `POST /api/order` - Create new order
- `GET /api/order` - Get user orders

## Deployment

The application can be deployed on:

- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Heroku, Render, or Railway
- Database: MongoDB Atlas

## License

MIT

## Contact

Your Name - your.email@example.com
