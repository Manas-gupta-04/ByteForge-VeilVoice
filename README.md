# 📝 Complaint Box

Team: ByteForge  


 Table of Contents
- Overview
- Features
- TechStack
- Setup Instructions
- Usage
- Future Plans


<a href="/">
    <img
      alt="name"
      src="/2.png"
      width="100%"
    />
  </a>
<a href="/">
    <img
      alt="name"
      src="/1.png"
      width="100%"
    />
  </a>
<a href="/">
    <img
      alt="name"
      src="/3.png"
      width="100%"
    />
  </a>
<a href="/">
    <img
      alt="name"
      src="/4.png"
      width="100%"
    />
  </a>


-OVERVIEW
Complaint Box** is a platform that allows students to submit complaints anonymously regarding any issues in their institution. Students can freely express concerns without revealing their identity, ensuring their voices are heard and problems are addressed efficiently.


-FEATURES
Student Features
- Submit complaints category-wise.
- Track complaints using a *secret code*.
- View status of complaints: "Pending" or "Solved"
- See if a faculty has replied to the complaint.

-ADMIN FEATURES
- Secure admin login.
- Reply to complaints on behalf of faculty.
- Mark complaints as solved.

-FUTURE FEATURES
- Auto-forward unresolved complaints to higher authorities after a set time.
- AI integration for smart responses and complaint analytics.



-TECH STACK
- Frontend: Next.js, React.js, CSS  
- Backend:* Node.js, Express  
- Database:Firebase Firestore  
- Design:Figma <https://www.figma.com/design/tHDhtXCJxa31YUrPEMSgPY/VeilVoice?node-id=0-1&t=EXXS8U7bQEanePNb-1>  
- Version Control: GitHub  
- Assets:Icons and images from various sources  
- Future AI Integration: GPT, Perplexity  



- SETUP INSTRUCTIONS
Follow these steps to run the project locally:

1. Clone the repository
bash
git clone <your-repo-url>
cd <repository-folder>

2. Install dependencies

npm install

3. Set up environment variables

Create a .env file in the root directory.

Add Firebase credentials and secret keys:

FIREBASE_API_KEY=your_api_key
FIREBASE_PROJECT_ID=your_project_id
JWT_SECRET=your_jwt_secret

4. Set up Firebase database

Configure Firestore with collections used in the project (complaints, users, etc.).


5. Run the project

npm run dev

6. Open in browser: http://localhost:3000

USAGE

1. Students click on Complaint Box to submit a complaint.


2. Select the category and submit the complaint.


3. Receive a secret code to track the complaint.


4. Check complaint status: Pending / Solved.


5. View faculty replies if available.


6. Admin logs in to the Dashboard to:

Add replies

Mark complaints as solved


-FUTURE PLANS

Automatically escalate unresolved complaints to higher authorities.

Integrate AI to provide smart replies and analytics.