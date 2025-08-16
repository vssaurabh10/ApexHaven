# 🌍 ApexHaven - Airbnb (EJS + Node.js)

An **Airbnb-style travel listings web application** built with **Node.js, Express, MongoDB, and EJS templates**.  
Users can explore destinations, add their own listings, leave reviews, and manage accounts – all in a **fully responsive interface**.  

---

## Demo
🚀 You can view the live demo of the project here: [Click me](https://apexhaven-airbnb-cd0g.onrender.com/)

---

## ✨ Features

- 👤 **User Accounts** – Sign up & Login with authentication  
- 🏡 **Listings Management** – Add, edit, delete, and view travel listings  
- 🔍 **Smart Search** – Find destinations easily  
- ⭐ **Review & Rating System** – Leave feedback and ratings on listings  
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop  

---

## 🛠️ Tech Stack

**Frontend:**  
- EJS templates  
- Tailwind CSS  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  

**Authentication & Security:**  
- Passport.js  
- bcrypt  

**Other Tools & Integrations:**  
- Cloudinary (Image Uploads)  
- Multer (File Handling)  
- Joi (Validation)  
- Method-Override (RESTful routes support)   

---

## 🚀 Getting Started  

### 1️⃣ Clone the repo  
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Add environment variables
```bash
ATLASDB_URL=your_mongodb_connection_string
MAP_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
```
### 4️⃣ Run the server
```bash
npm start
```

---

## 📂 Project Structure 
```bash
MAJORPROJECT
│── app.js
│── middleware.js
│── package.json
│── package-lock.json
│── schema.js
│── README.md
│
├── controllers
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── init
│ ├── data.js
│ └── index.js
│
├── models
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── public
│ ├── css
│ │ ├── rating.css
│ │ └── style.css
│ └── js
│   ├── map.js
│   └── script.js
│
├── routes
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── utils
│ ├── ExpressError.js
│ └── wrapAsync.js
│
└── views
├── includes
│ ├── flash.ejs
│ ├── footer.ejs
│ └── navbar.ejs
│
├── layouts
│ └── boilerplate.ejs
│
├── listings
│ ├── edit.ejs
│ ├── index.ejs
│ ├── new.ejs
│ └── show.ejs
│
├── users
│ ├── login.ejs
│ └── signup.ejs
│
├── cloudConfig.js
└── error.ejs
```

---

## 📌 Future Improvements
- Wishlist / Favorite listings
- Booking system integration
- Advanced filters (price, amenities, location)

---

## 📜 License
This project is licensed under the MIT License - see the LICENCE file for details.

