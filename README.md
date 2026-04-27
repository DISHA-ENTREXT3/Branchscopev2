# 🚀 BranchScope — AI Career Simulation Platform

BranchScope is an AI-powered SaaS platform designed to help students make **informed career decisions before choosing a stream or degree**. Instead of relying on generic advice, BranchScope provides **real insights, structured learning paths, and AI-driven recommendations**.

---

# 🌟 Core Idea

> **“Students don’t regret hard work — they regret choosing the wrong path.”**

BranchScope solves this by combining:

* 📊 Data (subjects, difficulty, outcomes)
* 🌐 Real-world insights (via web search)
* 🧠 AI reasoning (Groq LLaMA)

---

# 🧠 Key Features

## ✅ 1. AI Career Advisor

Users can ask:

* “Is CSE hard?”
* “Should I choose Mechanical?”
* “What is ROI of MBA?”

👉 Powered by **Groq API (LLaMA 3)**

---

## ✅ 2. Hybrid AI Agent (ODS-lite)

BranchScope uses a **3-step intelligence pipeline**:

```
Database → Web (Serper) → AI → Final Decision
```

* 🔹 Uses stored data (future upgrade)
* 🔹 Falls back to real-time Google search (Serper API)
* 🔹 Generates final answer using AI

---

## ✅ 3. Career Simulation Engine

The system returns:

* 📊 Score (career suitability)
* ⚠️ Risk (difficulty level)
* 💰 ROI (return on investment)
* 💡 Suggestion (AI advice)

---

## ✅ 4. Firebase Authentication

* Google Login
* Secure access control
* Route protection

---

## ✅ 5. Clean SaaS UI

* Chat-based interface
* Sidebar navigation
* Result analysis panel

---

# 🏗️ Tech Stack

## 🔹 Frontend

* Next.js (App Router)
* React.js
* Tailwind CSS

## 🔹 Backend

* Next.js API Routes (Serverless)

## 🔹 AI

* Groq API (LLaMA 3)

## 🔹 Web Search

* Serper API (Google Search)

## 🔹 Authentication

* Firebase Auth (Google Sign-in)

---

# 📁 Project Structure

```
Branch-Scope-code/
│
├── app/
│   ├── api/
│   │   └── ask/
│   │       └── route.js          # AI Agent Backend
│   │
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── ChatBox.js
│   │   ├── ResultCard.js
│   │
│   ├── login/
│   │   └── page.js              # Login Page
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js                 # Main App (Protected)
│
├── lib/
│   └── firebase.js             # Firebase Config
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .env.local
```

---

# 🔐 Environment Variables

Create `.env.local` and add:

```
# 🔹 AI & Search
GROQ_API_KEY=your_groq_key
SERPER_API_KEY=your_serper_key

# 🔹 Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

⚠️ Never expose this file publicly.

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```
git clone https://github.com/akashbauri/Branch-Scope-code.git
cd Branch-Scope-code
```

## 2. Install Dependencies

```
npm install
```

## 3. Run Locally

```
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

# 🔐 Authentication Flow

1. User visits `/`
2. If not logged in → redirected to `/login`
3. Login via Google (Firebase)
4. Redirected back to main app

---

# 🧠 AI Flow (How It Works)

```
User Question
      ↓
Program Selected
      ↓
Serper API (Google Search Data)
      ↓
Groq AI (LLaMA)
      ↓
Response Generated
      ↓
Frontend Displays:
   - Score
   - Risk
   - ROI
   - Suggestion
```

---

# 🚀 Deployment

## Deploy on Vercel

1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy

---

# ⚠️ Common Issues & Fixes

## ❌ Build Failed

* Check duplicate functions in API
* Ensure imports are at top level
* Verify env variables

## ❌ Firebase Login Not Working

* Enable Google Auth in Firebase Console
* Add Vercel domain to authorized domains

## ❌ API Not Responding

* Check GROQ_API_KEY & SERPER_API_KEY
* Verify API route path `/api/ask`

---

# 🔥 Future Roadmap

* 📊 Real dataset integration (India + USA)
* 📈 Advanced ROI calculation
* 🔄 Career switching simulation
* 📄 Resume analyzer
* 🤖 Multi-agent AI system
* 🎯 Personalized recommendations

---

# 👨‍💻 Author

**Akash Bauri**
Founder — BranchScope
AI Creator | Data Analyst | Product Builder

---

# ⭐ Final Note

BranchScope is not just a project —
it’s a step toward **reducing career regret through data + AI**.

---
