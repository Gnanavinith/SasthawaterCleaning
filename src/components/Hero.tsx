import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Phone, ArrowRight, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Clean Water Starts With a Clean Tank",
    subtitle: "Professional Water Tank Cleaning Services"
  },
  {
    image: "/hero2.jpg",
    title: "Protect Your Family's Health",
    subtitle: "Expert Cleaning & Sanitization"
  },
  {
    image: "/hero3.jpg",
    title: "Serving All of Tamil Nadu",
    subtitle: "Fast, Reliable, Professional Service"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(Array(slides.length).fill(false));
  const [imageError, setImageError] = useState(Array(slides.length).fill(false));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleImageError = (index) => {
    setImageError(prev => {
      const newError = [...prev];
      newError[index] = true;
      return newError;
    });
    setImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true; // Mark as loaded even if errored
      return newLoaded;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image with loading skeleton */}
            <div className="relative w-full h-full">
              {/* Skeleton loader */}
              {!imageLoaded[index] && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
              )}
              
              {/* Error fallback */}
              {imageError[index] && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <ImageOff className="h-16 w-16 mx-auto mb-4 text-white/60" />
                    <p className="text-lg font-medium">Image unavailable</p>
                    <p className="text-sm opacity-75">Professional water tank cleaning services</p>
                  </div>
                </div>
              )}
              
              {/* Actual image */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded[index] && !imageError[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-900/95" />
          </div>
        ))}
      </div>

      {/* Animated water elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-[calc(100vh-4rem)] lg:min-h-[600px] flex items-center py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-100 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-in fade-in slide-in-from-top duration-700">
              <Droplets className="h-4 w  -4" />
              Professional Water Tank Cleaning
            </div>

            {/* Dynamic Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-top duration-700 delay-100" style={{ fontFamily: 'Lora, serif' }}>
              {slides[currentSlide].title.split("Clean Tank").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                      Clean Tank
                    </span>
                  )}
                </span>
              ))}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-4 animate-in fade-in slide-in-from-top duration-700 delay-200" style={{ fontFamily: 'Lora, serif' }}>
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-top duration-700 delay-300" style={{ fontFamily: 'Lora, serif' }}>
              Sastha Tank Cleaning provides safe, professional water tank cleaning services across Coimbatore and all of Tamil Nadu. Protect your family's health today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-top duration-700 delay-500">
              <Button 
                size="lg" 
                asChild 
                className="text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                <a href="tel:+916374341251">
                  <Phone className="mr-2 h-5 w-5" /> Call 63743 41251
                </a>
              </Button>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-6 animate-in fade-in duration-700 delay-700">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-gradient-to-r from-blue-400 to-cyan-400"
                        : "w-2 h-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 md:h-24 text-background"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;