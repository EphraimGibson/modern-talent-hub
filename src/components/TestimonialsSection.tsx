import { useState, useEffect } from "react";
import { testimonials } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section id="testimonials" className="section-pattern pattern-dots py-20">
      <div className="section-container">
        <h2 className="section-title">Client Testimonials</h2>

        <div className="mt-12 relative">
          <div
            className="max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 absolute w-full ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20 pointer-events-none"
                }`}
                style={{
                  position: index === activeIndex ? "relative" : "absolute",
                }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-accent-green/10 rounded-full p-3">
                      <Quote className="h-8 w-8 text-accent-green" />
                    </div>
                  </div>

                  <blockquote className="text-lg text-center text-foreground/80 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="text-center">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 p-0 rounded-full ${
                  index === activeIndex ? "bg-accent-green" : "bg-white/20"
                }`}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
