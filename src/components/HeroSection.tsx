import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            AI Email
            <span className="text-gradient block animate-fadeInUp-delay-1">
               Reply Generator
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeInUp-delay-2 max-w-2xl mx-auto">
            Turn your emails into smart replies in seconds. Join thousands of users who rely on our 
            AI to craft perfect responses every time
          </p>
          
          {/* Buttons */}
          <div className="flex flex-row flex-wrap gap-2 justify-center animate-fadeInUp-delay-3">
            <Button
              size="lg"
              className="bg-gradient-hero hover:shadow-glow transition-smooth text-base px-4 py-3 sm:px-8 sm:py-6"
              onClick={() => {
                const element = document.getElementById("email-generator");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-4 py-3 sm:px-8 sm:py-6 hover:bg-primary hover:text-primary-foreground transition-smooth"
               onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </Button>
          </div>
          
          {/* Animated floating elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full animate-bounce opacity-60 hidden lg:block" />
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-primary rounded-full animate-bounce opacity-40 hidden lg:block" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
