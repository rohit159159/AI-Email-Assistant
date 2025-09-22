import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      title: "AI-Powered Replies",
      description: "Our tool uses cutting-edge AI technology to craft smart, professional email responses in seconds."
    },
    {
      title: "Time Saver",
      description: "Generate replies instantly, reducing the time you spend writing emails and improving productivity."
    },
    {
      title: "User Friendly",
      description: "Designed with simplicity in mind, anyone can create professional email responses effortlessly."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Our AI Tool</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI Email Reply Generator helps you write perfect email responses instantly. 
            Save time, stay professional, and let AI handle the hard work while you focus on what matters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-glow transition-smooth">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card rounded-2xl p-12 shadow-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Boost Your Email Productivity?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who trust our AI to generate professional email replies effortlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient">10K+</div>
                <div className="text-muted-foreground">Emails Generated Daily</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">5K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">99%</div>
                <div className="text-muted-foreground">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
