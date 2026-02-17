import React from 'react'
import GoogleReviewsWidget from 'google-reviews-widget'

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            <span>What Our Customers Say</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Don't just take our word for it. Here's what our valued customers have to say about our services.
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <GoogleReviewsWidget instanceId="01aTqZri8IFm92kyCMI3" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
