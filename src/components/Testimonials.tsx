const Testimonials = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Customers Say</h2>
        </div>
              
        {/* Taggbox Reviews Widget */}
        <div className="max-w-4xl mx-auto">
          <iframe src="https://widget.taggbox.com/317097?website=1" allow="fullscreen" style={{width:"100%", height:"600px", overflow:"auto", border:"none"}}></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;