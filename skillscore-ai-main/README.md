# ResumeSync AI

An AI-powered resume analyzer that helps job seekers optimize their resumes by comparing them against job descriptions.

## Features

- Resume upload (PDF/DOCX) or paste text
- Job description analysis
- Match score calculation (0-100)
- Keyword gap analysis
- AI-generated improvement suggestions
- Visual coverage charts
- Professional dashboard interface

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd resumesync-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.tsx        # Landing page hero section
│   ├── ResumeUpload.tsx   # Resume upload component
│   ├── JobDescriptionInput.tsx  # Job description input
│   └── AnalysisResults.tsx      # Results display
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Usage

1. **Upload Resume**: Drag and drop a PDF/DOCX file or paste your resume text
2. **Add Job Description**: Enter the target job description
3. **Analyze**: Click "Analyze Resume" to get your match score
4. **Review Results**: See your match score, keyword analysis, and improvement suggestions

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License.