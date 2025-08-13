import { useState } from "react";
import Hero from "@/components/Hero";
import ResumeUpload from "@/components/ResumeUpload";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import AnalysisResults from "@/components/AnalysisResults";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState<{text: string, type: 'file' | 'text'} | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleResumeUpload = (text: string, type: 'file' | 'text') => {
    setResumeData({ text, type });
    setCurrentStep(2);
  };

  const handleJobDescriptionSubmit = (description: string) => {
    setJobDescription(description);
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentStep(3);
    }, 2000);
  };

  const handleNewAnalysis = () => {
    setCurrentStep(1);
    setResumeData(null);
    setJobDescription("");
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {currentStep === 1 && (
        <>
          <Hero />
          <ResumeUpload onResumeUpload={handleResumeUpload} />
        </>
      )}
      
      {currentStep === 2 && (
        <div className="min-h-screen">
          <div className="pt-20">
            <JobDescriptionInput 
              onJobDescriptionSubmit={handleJobDescriptionSubmit}
              isAnalyzing={isAnalyzing}
            />
          </div>
          {isAnalyzing && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                <h3 className="text-xl font-semibold">Analyzing your resume...</h3>
                <p className="text-muted-foreground">Our AI is comparing your resume with the job requirements</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {currentStep === 3 && resumeData && (
        <div className="pt-20">
          <AnalysisResults 
            resumeText={resumeData.text}
            jobDescription={jobDescription}
            onNewAnalysis={handleNewAnalysis}
          />
        </div>
      )}
    </div>
  );
};

export default Index;