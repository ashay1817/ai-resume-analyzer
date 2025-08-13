import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Analysis</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Your Resume
                </span>
                <br />
                with AI Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Get instant AI-powered feedback on your resume. Analyze match scores, 
                identify keyword gaps, and receive personalized improvement suggestions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-primary hover:shadow-glow transition-all duration-300 animate-pulse-glow">
                Analyze Your Resume
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Match Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Resumes Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3x</div>
                <div className="text-sm text-muted-foreground">Interview Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative animate-slide-up">
            <img 
              src={heroImage} 
              alt="AI Resume Analysis Dashboard" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Smart Matching</h3>
            <p className="text-muted-foreground">
              Advanced AI algorithms analyze your resume against job descriptions for precise match scoring.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in">
            <TrendingUp className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Keyword Analysis</h3>
            <p className="text-muted-foreground">
              Identify missing keywords and optimize your resume for ATS systems and recruiters.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in">
            <Users className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Expert Insights</h3>
            <p className="text-muted-foreground">
              Get actionable improvement suggestions based on industry best practices and trends.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;