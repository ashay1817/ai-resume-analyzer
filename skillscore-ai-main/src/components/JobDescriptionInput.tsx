import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase } from "lucide-react";

interface JobDescriptionInputProps {
  onJobDescriptionSubmit: (description: string) => void;
  isAnalyzing?: boolean;
}

const JobDescriptionInput = ({ onJobDescriptionSubmit, isAnalyzing = false }: JobDescriptionInputProps) => {
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = () => {
    if (!jobDescription.trim()) return;
    onJobDescriptionSubmit(jobDescription);
  };

  // Sample job description for demo
  const sampleJD = `Senior Software Engineer - Frontend

We are seeking a Senior Software Engineer to join our dynamic team. The ideal candidate will have strong experience in modern web technologies and a passion for creating exceptional user experiences.

Key Responsibilities:
• Develop and maintain scalable frontend applications using React, TypeScript, and modern JavaScript
• Collaborate with UX/UI designers to implement responsive and accessible web interfaces
• Work with backend engineers to integrate APIs and optimize application performance
• Lead code reviews and mentor junior developers
• Implement automated testing strategies and maintain high code quality standards

Required Skills:
• 5+ years of experience in frontend development
• Expert knowledge of React, TypeScript, HTML5, CSS3, and JavaScript ES6+
• Experience with state management libraries (Redux, Zustand, or similar)
• Proficiency with modern build tools (Webpack, Vite, etc.)
• Strong understanding of responsive design and cross-browser compatibility
• Experience with version control systems (Git)
• Knowledge of automated testing frameworks (Jest, Cypress, etc.)

Preferred Qualifications:
• Experience with Node.js and full-stack development
• Familiarity with cloud platforms (AWS, Azure, or GCP)
• Knowledge of CI/CD pipelines
• Experience with Docker and containerization
• Understanding of accessibility standards (WCAG)
• Bachelor's degree in Computer Science or related field`;

  const fillSample = () => {
    setJobDescription(sampleJD);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Add Job Description</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste the job description you're targeting to get a precise match analysis
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 shadow-card">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <Label htmlFor="job-description" className="text-lg font-semibold">
                  Job Description
                </Label>
              </div>
              <Button variant="outline" onClick={fillSample} size="sm">
                Use Sample JD
              </Button>
            </div>
            
            <Textarea
              id="job-description"
              placeholder="Paste the complete job description here including requirements, responsibilities, and qualifications..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="min-h-[400px] text-sm"
            />
            
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-muted-foreground">
                {jobDescription.length} characters • Include all requirements for better analysis
              </p>
              <Button 
                onClick={handleSubmit} 
                disabled={!jobDescription.trim() || isAnalyzing}
                className="px-8"
              >
                {isAnalyzing ? "Analyzing..." : "Start Analysis"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default JobDescriptionInput;