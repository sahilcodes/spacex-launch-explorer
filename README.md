# 🚀 SpaceX Launch Explorer

A **React + TypeScript** web application to explore past and upcoming SpaceX launches. Users can **search, filter, and view launch details** while toggling between **light and dark modes**.

## 📌 Features

✔️ View a list of past SpaceX launches with mission name, date, rocket used, and success/failure status.  
✔️ **Search** launches by mission name.  
✔️ **Filter** launches (successful, failed, upcoming).  
✔️ **View detailed launch info**, including links to videos, Wikipedia, and images.  
✔️ **Toggle Light/Dark mode** (persists across refresh).  
✔️ **Load More Button** for paginated viewing.  
✔️ **Live search and viewing count display.**  

---

## 🛠️ Tech Stack

- **React 19 (Vite)** - Fast development and optimized build.  
- **TypeScript** - Ensures type safety.  
- **React Router** - Handles navigation.  
- **Context API** - Manages theme state.  
- **Axios** - Fetches data from the SpaceX API.  
- **SCSS (SASS)** - Styled UI components with modular SCSS.  

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
\`\`\`sh
git clone https://github.com/sahilcodes/spacex-launch-explorer.git
cd spacex-launch-explorer
\`\`\`

### 2️⃣ Install Dependencies
\`\`\`sh
npm install
# OR
yarn install
\`\`\`

### 3️⃣ Start the Development Server
\`\`\`sh
npm run dev
# OR
yarn dev
\`\`\`

📌 **Access the app at:** [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

\`\`\`
spacex-launch-explorer/
│── src/
│   ├── assets/                 # Static assets (images, styles)
│   │   ├── styles/
│   │   │   ├── base/           # Global styles (reset, typography)
│   │   │   ├── components/     # Component-specific styles
│   │   │   ├── pages/          # Page-specific styles
│   │   │   ├── themes/         # Light & Dark mode themes
│   ├── components/             # UI components (LaunchCard, ThemeToggle)
│   ├── context/                # ThemeContext provider
│   ├── hooks/                  # Custom hooks (useLaunches, useLaunchDetails)
│   ├── pages/                  # Page components (Home, LaunchDetails)
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # React app entry point
│   ├── routes.tsx              # React Router setup
│── public/                     # Static files
│── package.json                # Dependencies & scripts
│── tsconfig.json               # TypeScript config
│── vite.config.ts              # Vite config
│── README.md                   # Project documentation
\`\`\`

---

## 🌍 API Usage

This project uses the **SpaceX API** to fetch launch details:

### 🔹 Get All Launches
🔗 [https://api.spacexdata.com/v5/launches](https://api.spacexdata.com/v5/launches)

### 🔹 Get a Specific Launch by ID
🔗 [https://api.spacexdata.com/v5/launches/{id}](https://api.spacexdata.com/v5/launches/{id})

### 🔹 Get Upcoming Launches
🔗 [https://api.spacexdata.com/v5/launches/upcoming](https://api.spacexdata.com/v5/launches/upcoming)

---

## 🖥️ Deployment

You can deploy this project on **Vercel, Netlify, or GitHub Pages.**

### 🔹 Deploy on Vercel
\`\`\`sh
npm run build
vercel deploy
\`\`\`

### 🔹 Deploy on Netlify
\`\`\`sh
npm run build
netlify deploy
\`\`\`

---

## 🧪 Running Tests (Not added yet)

This project includes unit tests using **Jest & React Testing Library**.

\`\`\`sh
npm run test
# OR
yarn test
\`\`\`

---

## 📸 Screenshots (Work in progress)

### 🌞 Light Mode
![Light Mode]()

### 🌙 Dark Mode
![Dark Mode]()

---

## 🤝 Contributing

Contributions are welcome! Feel free to **fork the repository, create a branch, and submit a pull request.** 🚀

---

## 📜 License
This project is **open-source**.

---

## 📬 Contact
🔗 **GitHub**: [@yourusername](https://github.com/sahilcodes)  
📧 **Email**: sahilcancode@gmail.com  

---

### 🎉 Happy Coding & Enjoy Exploring SpaceX Launches! 🚀
