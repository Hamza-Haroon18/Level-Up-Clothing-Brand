

# 🛍️ **LevelUp Clothing Brand – Full Stack MERN Website**

A modern e-commerce clothing store built using **React**, **Node.js**, **Express**, and **MongoDB**.
The application includes full **user + admin functionalities**, authentication, product management, order handling, and contact messaging system.

---

## 🚀 **Features**

### 👤 **User Features**

* User Registration & Login (Session/Token-based authentication)
* Browse Products (Men / Women / Sale items)
* Product Search & Filters
* Product Details Page
* Add to Cart & Checkout
* Track Orders
* Discount badge on sale items
* Contact Admin Form + View Admin Replies
* User Dashboard (Orders, Profile)
* Responsive UI (Mobile Friendly)

### 🔐 **Admin Features**

* Admin Login
* Manage Products (Add, Edit, Delete)
* Upload Product Images
* Manage Categories
* View Orders / Update Order Status
* Reply to User Messages (Email + DB save)
* Admin dashboard with statistics

---

## 🏗️ **Tech Stack**

### **Frontend**

* React.js
* CSS / Tailwind / Custom Styles
* Fetch API 

### **Backend**

* Node.js
* Express.js
* Nodemailer (Admin replies email system)

### **Database**

* MongoDB

---

## 📁 **Project Structure**

```
/client
  ├── src
  │   ├── components
  │   ├── pages
  │   ├── context
  │   ├── css
  │   └── App.js
  ├── public
  └── package.json

/server
  ├── routes
  ├── models
  ├── controllers
  ├── middleware
  ├── .env
  ├── server.js
  └── package.json
```

---

## ⚙️ **Environment Variables (.env)**

Create a `.env` file inside `/server`

```
MONGO_URI=your_mongodb_uri
PORT=3000

EMAIL_SERVICE=gmail
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

---

## ▶️ **How to Run the Project**

### 🔹 1. Clone Repository

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 🔹 2. Install Backend Dependencies

```
cd server
npm install
```

### 🔹 3. Install Frontend Dependencies

```
cd ../client
npm install
```

### 🔹 4. Start Backend

```
cd server
npm start
```

### 🔹 5. Start Frontend

```
cd client
npm start
```

---

## 📬 **Contact Admin Email System**

* Users can send messages to admin.
* Admin replies are sent using **Nodemailer**.
* Replies are also stored in MongoDB.
* Users can view replies with pagination.

---

## 🛒 **E-Commerce Features**

* Product CRUD (Admin)
* Discounts & Sale Products
* Price calculation with discount logic
* Cart management (Add / Remove / Update)
* Order placement + automatic order ID
* Order status update (Admin)

---

## 🔒 **Authentication**

* Login / Signup with password hashing
* Auth middleware for protected routes
* Separate routes for **user** and **admin**

---

## 📦 **API Endpoints (Short Overview)**

### **Auth**

* POST `/register`
* POST `/login`

### **Products**

* GET `/products`
* GET `/products/:id`
* POST `/admin/add-product`
* PUT `/admin/update-product/:id`
* DELETE `/admin/delete-product/:id`

### **Cart & Orders**

* POST `/order`
* GET `/orders/:userId`
* PUT `/admin/order-status/:id`

### **Messages**

* POST `/send-email`
* POST `/reply-email`
* GET `/admin-replies?email=user@example.com`


## 📌 **Future Improvements**

* Payment Gateway (Stripe/PayPal)
* Admin Analytics Dashboard
* Wishlist Feature
* Product Reviews & Ratings

---

## 👨‍💻 **Developer**

**Muhammad Hamza Haroon**
Junior Web Developer | MERN Stack | React | Node.js

---
