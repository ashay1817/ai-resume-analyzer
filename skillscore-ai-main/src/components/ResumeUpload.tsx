import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, ClipboardPaste } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResumeUploadProps {
  onResumeUpload: (text: string, type: 'file' | 'text') => void;
}

const ResumeUpload = ({ onResumeUpload }: ResumeUploadProps) => {
  const [resumeText, setResumeText] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (!file) return;
    
    // Validate file type
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain'
    ];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, Word document, or text file.",
        variant: "destructive"
      });
      return;
    }
    
    // For demo purposes, we'll simulate file reading
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      // For demo, we'll use placeholder text
      const mockResumeText = `John Doe
Software Engineer

EXPERIENCE
Senior Software Developer at TechCorp (2020-2023)
• Developed scalable web applications using React, Node.js, and PostgreSQL
• Led a team of 5 developers in implementing microservices architecture
• Improved application performance by 40% through code optimization

Software Developer at StartupXYZ (2018-2020)
• Built responsive web applications using JavaScript, HTML5, and CSS3
• Collaborated with designers and product managers on feature development
• Implemented automated testing frameworks reducing bugs by 30%

SKILLS
• Programming Languages: JavaScript, TypeScript, Python, Java
• Frontend: React, Vue.js, Angular, HTML5, CSS3
• Backend: Node.js, Express, Django, Spring Boot
• Databases: PostgreSQL, MongoDB, Redis
• Cloud: AWS, Docker, Kubernetes
• Version Control: Git, GitHub, GitLab

EDUCATION
Bachelor of Science in Computer Science
University of Technology (2014-2018)
GPA: 3.8/4.0`;
      
      onResumeUpload(mockResumeText, 'file');
      toast({
        title: "Resume uploaded successfully!",
        description: `Processed ${file.name}`,
      });
    };
    reader.readAsText(file);
  }, [onResumeUpload, toast]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate the same process as drop
      const mockEvent = {
        dataTransfer: { files: [file] },
        preventDefault: () => {}
      } as any;
      handleDrop(mockEvent);
    }
  };

  const handleTextSubmit = () => {
    if (!resumeText.trim()) {
      toast({
        title: "Please enter your resume text",
        description: "The text area cannot be empty.",
        variant: "destructive"
      });
      return;
    }
    onResumeUpload(resumeText, 'text');
    toast({
      title: "Resume text submitted!",
      description: "Your resume is ready for analysis.",
    });
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upload Your Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred method to upload your resume for AI-powered analysis
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 shadow-card">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload File
              </TabsTrigger>
              <TabsTrigger value="paste" className="flex items-center gap-2">
                <ClipboardPaste className="w-4 h-4" />
                Paste Text
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="mt-8">
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  isDragging
                    ? 'border-primary bg-primary/5 scale-[1.02]'
                    : 'border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">
                  Drag and drop your resume here
                </h3>
                <p className="text-muted-foreground mb-6">
                  or click to browse files
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileInput}
                  className="hidden"
                  id="file-input"
                />
                <label htmlFor="file-input">
                  <Button asChild>
                    <span className="cursor-pointer">Choose File</span>
                  </Button>
                </label>
                <p className="text-sm text-muted-foreground mt-4">
                  Supported formats: PDF, DOC, DOCX, TXT (Max 10MB)
                </p>
              </div>
            </TabsContent>

            <TabsContent value="paste" className="mt-8">
              <div className="space-y-6">
                <Textarea
                  placeholder="Paste your resume text here..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  className="min-h-[400px] text-sm"
                />
                <div className="flex justify-end">
                  <Button onClick={handleTextSubmit} className="px-8">
                    Analyze Resume
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default ResumeUpload;