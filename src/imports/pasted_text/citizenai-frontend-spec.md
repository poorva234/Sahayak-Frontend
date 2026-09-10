Design and generate the complete frontend code for a professional web application called "Sahayak".

## 1. Product Overview & Purpose
Sahayak is an intelligent citizen welfare platform that helps users discover public welfare schemes they may be eligible for, understand eligibility, upload/verify documents, receive AI-assisted application guidance, and track applications.

IMPORTANT:
This is ONLY the frontend.
Do NOT build backend, database, AI models, OCR processing, authentication server, or government API logic.
Use realistic mock data and clean API/service placeholders so a separate Spring Boot backend and AI engine can be connected later.

TECH STACK:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React icons
- Framer Motion for animations
- TanStack Query for API state management
- Responsive design
- Component-based architecture

DESIGN DIRECTION:
Create a premium, modern, professional product — NOT a typical government portal and NOT an obviously AI-generated website.

Color palette:
- Background: warm off-white / very light lavender
- Primary: elegant purple
- Secondary: soft violet
- Accent: subtle lavender/pink
- Text: deep charcoal
- Cards: white
- Borders: very subtle lavender/gray

The website should be:
- Medium-light overall
- Not completely white
- Not dark mode
- Sophisticated purple visual identity
- Clean typography
- Plenty of whitespace but not empty
- Professional enough for a final-year engineering project and research demonstration
- Accessible and easy for ordinary citizens to understand

Use subtle glassmorphism only where appropriate.
Avoid excessive gradients, excessive glowing effects, excessive rounded cards, neon colors, cartoon illustrations, or generic "AI dashboard" styling.

3D / INTERACTIVE DESIGN:
Use subtle 3D elements only in important sections.

Landing page hero:
Create a tasteful 3D/interactive visual representing an intelligent citizen-to-scheme network:
Citizen Profile → AI Analysis → Eligible Schemes → Application

Use floating cards/nodes around a central abstract 3D purple object/orb.
Keep it elegant and lightweight.

Add subtle:
- parallax movement
- floating elements
- hover animations
- scroll reveal animations
- smooth transitions

Do NOT make the entire website 3D.

--------------------------------------------------
WEBSITE STRUCTURE
--------------------------------------------------

Create these routes:

/
 /login
 /register
 /dashboard
 /profile
 /schemes
 /schemes/[id]
 /eligibility
 /documents
 /applications
 /applications/[id]
 /notifications
 /assistant

--------------------------------------------------
1. LANDING PAGE
--------------------------------------------------

Create a highly polished landing page.

Navbar:
- Sahayak logo
- Home
- How It Works
- Schemes
- About
- Login
- Get Started button

Hero:
Headline:
"Discover the Benefits You're Eligible For."

Supporting text:
"Sahayak intelligently connects your profile with public welfare schemes and guides you through the application journey."

Buttons:
"Check My Eligibility"
"Explore Schemes"

Hero visual:
Subtle 3D intelligent network showing:
Profile → AI → Eligibility → Scheme → Apply

Add a small trust/technology indicator:
"AI-powered • Citizen-centric • Secure"

Section: "How Sahayak Works"

Show 5 steps:

01 Create Profile
02 AI Eligibility Assessment
03 Personalized Scheme Matching
04 Document & Application Assistance
05 Track Your Application

Use an elegant horizontal/vertical timeline.

Section: "One Platform. The Complete Journey."

Show:
- Personalized Recommendations
- Eligibility Assessment
- Document Understanding
- Application Assistance
- Application Tracking
- Notifications

Section: Personalized Scheme Preview

Create realistic scheme cards with:
- Scheme name
- Category
- Short description
- Eligibility match percentage
- Required documents
- View Details button

Use mock data.

Section: "Built Around the Citizen"

Show simple statistics:
"100+ Schemes"
"AI-assisted Matching"
"Unified Application Journey"

Do NOT make unrealistic claims such as "100% accuracy".

Final CTA:
"Find schemes that fit your profile."
Button: "Get Started"

Professional footer.

--------------------------------------------------
2. LOGIN PAGE
--------------------------------------------------

Professional split-screen layout.

Left:
Sahayak branding and short message.

Right:
Login form:
- Email / Mobile
- Password
- Remember me
- Forgot password
- Login button

Also:
"Don't have an account? Create one"

Keep authentication frontend-only with mock login handling.

--------------------------------------------------
3. REGISTER PAGE
--------------------------------------------------

Create citizen registration UI.

Fields:
- Full Name
- Email
- Mobile Number
- Password
- Confirm Password

Include:
Terms checkbox
Create Account button

Do NOT request unnecessary sensitive information during registration.

--------------------------------------------------
4. CITIZEN DASHBOARD
--------------------------------------------------

This is the main application dashboard.

Sidebar:
- Dashboard
- My Profile
- Find Schemes
- Eligibility
- Documents
- Applications
- Notifications
- AI Assistant
- Settings

Top header:
- Search
- Notifications
- User profile

Main dashboard:

Greeting:
"Good morning, [Citizen Name]"

Profile completion card:
"Complete your profile to improve scheme recommendations."

Quick actions:
- Check Eligibility
- Find Schemes
- Upload Documents
- Track Applications

AI Recommendation section:
"Recommended For You"

Show 3-4 scheme cards with match percentages.

Application overview:
- Draft
- Submitted
- Under Review
- Approved / Rejected

Recent activity timeline.

--------------------------------------------------
5. PROFILE PAGE
--------------------------------------------------

Create a clean citizen profile form.

Sections:
Personal Information
- Name
- Age
- Gender
- Location

Education
- Education level
- Student status

Employment
- Employment status
- Occupation

Financial
- Income range

Family
- Family size
- Special circumstances

Use editable cards and progress indicators.

Include:
"Update Profile"

Do NOT collect unnecessary sensitive information.

--------------------------------------------------
6. SCHEMES PAGE
--------------------------------------------------

Create a modern scheme discovery interface.

Top:
"Find Welfare Schemes"

Search bar:
"Search schemes..."

Filters:
- Category
- State
- Age group
- Employment
- Education
- Income range

Tabs:
- Recommended
- All Schemes
- Saved

Scheme cards should show:
- Scheme name
- Government department
- Category
- Short description
- Eligibility Match: 94%
- Required documents
- Benefits
- View Details

Use realistic Indian public welfare scheme examples as DEMO DATA only.

Clearly label demo/mock data where appropriate.

--------------------------------------------------
7. SCHEME DETAILS PAGE
--------------------------------------------------

Show:

Scheme title
Department
Benefits
Eligibility Criteria
Required Documents
Application Process
Important Information

Show a visual eligibility indicator.

Buttons:
"Check My Eligibility"
"Start Application"

--------------------------------------------------
8. ELIGIBILITY PAGE
--------------------------------------------------

Create an intelligent eligibility assessment interface.

Show:
"AI Eligibility Assessment"

Profile information summary.

Assessment progress:
Analyzing profile
Checking eligibility rules
Matching scheme requirements
Generating result

Result card:
"Likely Eligible"

Show:
- Matching criteria
- Criteria requiring verification
- Missing information
- Required documents

IMPORTANT:
Do not claim that AI makes legally final eligibility decisions.
Use wording such as:
"Preliminary eligibility assessment" and
"Final eligibility is determined by the relevant authority."

--------------------------------------------------
9. DOCUMENTS PAGE
--------------------------------------------------

Create a secure document management interface.

Title:
"Your Documents"

Upload area:
"Upload Certificate / ID / Document"

Support:
PDF, JPG, PNG

Document cards:
- Document name
- Type
- Upload date
- Verification status

Statuses:
Verified
Needs Review
Processing

Add OCR interface mockup:
Show uploaded document preview on left and extracted fields on right.

Example:
Name
Date of Birth
Income
Certificate Number

This is ONLY UI.
OCR processing will later come from the AI/backend service.

--------------------------------------------------
10. APPLICATION ASSISTANT PAGE
--------------------------------------------------

Create a professional AI-assisted application interface.

Layout:
Left: application form
Right: AI Assistant panel

AI Assistant should help users:
- Understand fields
- Identify missing information
- Suggest which uploaded document supports a field
- Explain application requirements

Example conversation:

Citizen:
"What document is required here?"

Assistant:
"This field requires your income certificate. You can select the uploaded document from your Documents section."

Do NOT make the AI pretend to have submitted anything.

--------------------------------------------------
11. APPLICATION PREVIEW
--------------------------------------------------

Before submission show:

Application Summary
Citizen Details
Scheme Details
Entered Information
Supporting Documents

Show validation status:
✓ Information complete
✓ Documents attached
⚠ One field requires verification

Buttons:
"Edit"
"Continue"

--------------------------------------------------
12. OTP / CAPTCHA UI
--------------------------------------------------

Create a verification screen.

Show:
"Verify Before Submission"

OTP input.

CAPTCHA placeholder component.

Important:
Do NOT implement CAPTCHA bypassing or automatic OTP handling.

Use:
"Enter OTP"
"Verify & Continue"

--------------------------------------------------
13. APPLICATION TRACKING
--------------------------------------------------

Create a beautiful application tracking page.

Timeline:

Application Created
↓
Documents Submitted
↓
Application Submitted
↓
Under Review
↓
Decision

Show:
Application ID
Scheme
Submission Date
Current Status

Statuses:
Draft
Submitted
Under Review
Approved
Rejected

Use timeline visualization.

--------------------------------------------------
14. NOTIFICATIONS
--------------------------------------------------

Create notification center.

Examples:
"Your application has been submitted."
"Your document requires verification."
"Application status updated."

Use categories:
All
Applications
Documents
System

--------------------------------------------------
15. AI ASSISTANT
--------------------------------------------------

Create a floating AI assistant accessible throughout the application.

Use a small purple assistant button.

Opening it shows:
"How can Sahayak help?"

Suggested prompts:
"Find schemes for me"
"Check my eligibility"
"What documents do I need?"
"Explain this scheme"

This should be a FRONTEND UI with mock responses.

Keep it useful and professional, not like a generic ChatGPT clone.

--------------------------------------------------
COMPONENT ARCHITECTURE
--------------------------------------------------

Use reusable components.

Create:

components/
├── layout/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
│
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Modal.tsx
│   └── Progress.tsx
│
├── schemes/
│   ├── SchemeCard.tsx
│   ├── SchemeFilters.tsx
│   └── EligibilityBadge.tsx
│
├── documents/
│   ├── DocumentUpload.tsx
│   ├── DocumentCard.tsx
│   └── OCRPreview.tsx
│
├── applications/
│   ├── ApplicationTimeline.tsx
│   ├── ApplicationStatus.tsx
│   └── ApplicationPreview.tsx
│
├── assistant/
│   ├── AIAssistant.tsx
│   └── ChatMessage.tsx
│
└── dashboard/
    ├── RecommendationSection.tsx
    ├── QuickActions.tsx
    └── ActivityTimeline.tsx

--------------------------------------------------
DATA / API STRUCTURE
--------------------------------------------------

Keep backend integration simple.

Create:

lib/
├── api.ts
├── mockData.ts
└── utils.ts

types/
├── citizen.ts
├── scheme.ts
├── document.ts
├── application.ts
└── notification.ts

hooks/
├── useSchemes.ts
├── useApplications.ts
├── useProfile.ts
└── useNotifications.ts

Use mock API functions initially.

Structure them so they can later be replaced with REST API calls to:

Spring Boot backend

Example:

GET /api/schemes
GET /api/schemes/:id
GET /api/citizen/profile
POST /api/documents
GET /api/applications
POST /api/applications

AI services can later be connected separately.

Do NOT hardcode API URLs throughout components.

--------------------------------------------------
FOLDER STRUCTURE
--------------------------------------------------

Generate an easy-to-maintain structure:

citizen-ai-frontend/
│
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── schemes/
│   │   ├── eligibility/
│   │   ├── documents/
│   │   ├── applications/
│   │   ├── notifications/
│   │   └── assistant/
│   │
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── types/
│
├── package.json
└── README.md

Keep the architecture simple so multiple developers can work simultaneously.

--------------------------------------------------
IMPORTANT UI PRINCIPLES
--------------------------------------------------

1. Every page must feel like part of the same product.
2. Maintain consistent spacing, typography, colors and components.
3. Use animations sparingly and professionally.
4. Avoid excessive AI visual clichés.
5. Avoid excessive purple everywhere.
6. Use purple primarily for actions, highlights and important AI elements.
7. Use off-white backgrounds and white cards for readability.
8. Make forms extremely clear for ordinary citizens.
9. Make the dashboard information-dense but clean.
10. Ensure complete mobile responsiveness.
11. Use accessible contrast and keyboard-friendly controls.
12. Include loading, empty, error and success states.
13. Use skeleton loaders for async content.
14. Use realistic mock data.
15. Never make fake claims about actual government integration.
16. Clearly separate UI from API/business logic.
17. Keep all backend/AI integrations replaceable.

FINAL RESULT:
The final frontend should look like a serious technology product developed for an engineering/research project — professional enough for a BE project demonstration, visually impressive enough for a project presentation, but still practical and believable.

The signature visual identity should be:

"Citizen-first public service + premium modern product design + subtle intelligent/3D elements."

Generate the complete frontend code and all required files following this architecture.