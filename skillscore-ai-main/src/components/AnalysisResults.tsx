import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Target, 
  BookOpen,
  Download,
  Share2,
  RefreshCw
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

interface AnalysisResultsProps {
  resumeText: string;
  jobDescription: string;
  onNewAnalysis: () => void;
}

const AnalysisResults = ({ resumeText, jobDescription, onNewAnalysis }: AnalysisResultsProps) => {
  // Mock analysis data - in real app this would come from AI service
  const matchScore = 87;
  const analysisData = {
    overallScore: matchScore,
    keywordMatches: {
      found: 23,
      missing: 7,
      total: 30
    },
    sections: {
      skills: 92,
      experience: 85,
      education: 78,
      keywords: 89
    },
    improvements: [
      {
        category: "Skills",
        priority: "high",
        suggestion: "Add experience with Docker and Kubernetes to match job requirements",
        impact: "+8 points"
      },
      {
        category: "Keywords",
        priority: "medium", 
        suggestion: "Include 'CI/CD pipelines' and 'automated testing' terminology",
        impact: "+5 points"
      },
      {
        category: "Experience",
        priority: "low",
        suggestion: "Quantify your achievements with specific metrics and percentages",
        impact: "+3 points"
      }
    ],
    missingKeywords: [
      "Docker", "Kubernetes", "CI/CD", "Automated Testing", "AWS", "Azure", "Accessibility"
    ],
    foundKeywords: [
      "React", "TypeScript", "JavaScript", "Node.js", "HTML5", "CSS3", 
      "PostgreSQL", "Git", "Performance Optimization", "Microservices"
    ]
  };

  const pieData = [
    { name: 'Found Keywords', value: analysisData.keywordMatches.found, fill: '#22c55e' },
    { name: 'Missing Keywords', value: analysisData.keywordMatches.missing, fill: '#ef4444' }
  ];

  const sectionData = Object.entries(analysisData.sections).map(([name, score]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    score
  }));

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <TrendingUp className="w-4 h-4" />;
      case 'low': return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Analysis Results</h2>
          <p className="text-lg text-muted-foreground">
            AI-powered insights to optimize your resume for this position
          </p>
        </div>

        {/* Overall Score */}
        <Card className="max-w-4xl mx-auto p-8 mb-8 bg-gradient-primary text-white shadow-glow">
          <div className="text-center">
            <div className="text-6xl font-bold mb-4">{matchScore}%</div>
            <h3 className="text-2xl font-semibold mb-2">Overall Match Score</h3>
            <p className="text-white/80 mb-6">
              Your resume is a strong match for this position with room for targeted improvements
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" className="gap-2">
                <Download className="w-4 h-4" />
                Download Report
              </Button>
              <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4" />
                Share Results
              </Button>
              <Button variant="outline" onClick={onNewAnalysis} className="gap-2 border-white/20 text-white hover:bg-white/10">
                <RefreshCw className="w-4 h-4" />
                New Analysis
              </Button>
            </div>
          </div>
        </Card>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Keyword Analysis */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Keyword Analysis
            </h3>
            <div className="space-y-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">{analysisData.keywordMatches.found}</div>
                  <div className="text-sm text-muted-foreground">Found Keywords</div>
                </div>
                <div className="p-4 bg-destructive/10 rounded-lg">
                  <div className="text-2xl font-bold text-destructive">{analysisData.keywordMatches.missing}</div>
                  <div className="text-sm text-muted-foreground">Missing Keywords</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Section Scores */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Section Breakdown
            </h3>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {Object.entries(analysisData.sections).map(([section, score]) => (
                <div key={section} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium capitalize">{section}</span>
                    <span>{score}%</span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Improvement Suggestions */}
        <Card className="max-w-6xl mx-auto mt-8 p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-6">Improvement Suggestions</h3>
          <div className="space-y-4">
            {analysisData.improvements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="mt-1">
                  {getPriorityIcon(improvement.priority)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={getPriorityColor(improvement.priority) as any}>
                      {improvement.priority} priority
                    </Badge>
                    <Badge variant="outline">{improvement.category}</Badge>
                    <span className="text-sm text-success font-medium">{improvement.impact}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{improvement.suggestion}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Keywords Breakdown */}
        <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Found Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysisData.foundKeywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                  {keyword}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              Missing Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysisData.missingKeywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="bg-destructive/10 text-destructive hover:bg-destructive/20">
                  {keyword}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalysisResults;