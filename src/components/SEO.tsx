import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, pathname }: { title?: string; description?: string; keywords?: string; pathname?: string } = {}) => {
  const siteTitle = "SASTHA Tank Cleaning - Professional Water Tank Cleaning Services";
  const siteDescription = "SASTHA Tank Cleaning provides safe, professional water tank cleaning services across Coimbatore, Chennai, Madurai, Salem, Trichy, Ponneri, Udumalaipettai, Kottamangalam and all of Tamil Nadu. Protect your family's health with our expert cleaning services.";
  const siteKeywords = "water tank cleaning, tank cleaning services, overhead tank cleaning, underground sump cleaning, water storage cleaning, professional tank cleaning, Coimbatore tank cleaning, Chennai tank cleaning, Tamil Nadu water cleaning, water tank sanitization, water sump cleaning, tank maintenance, water hygiene, clean water storage, water tank service";
  const siteUrl = "https://sasthatankcleaning.com";

  const finalTitle = title ? `${title} - ${siteTitle}` : siteTitle;
  const finalDescription = description || siteDescription;
  const finalKeywords = keywords || siteKeywords;
  const finalUrl = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="SASTHA Tank Cleaning" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="SASTHA Tank Cleaning" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={`${siteUrl}/twitter-image.jpg`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tamil Nadu" />
      <meta name="geo.position" content="11.127123;78.656894" />
      <meta name="ICBM" content="11.127123, 78.656894" />
      
      {/* Service Areas Specific Tags */}
      <meta name="coverage" content="Tamil Nadu, India" />
      <meta name="distribution" content="local" />
      <meta name="rating" content="General" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SASTHA Tank Cleaning",
          "alternateName": "SASTHA Water Tank Cleaning Services",
          "description": "Professional water tank cleaning services across Tamil Nadu",
          "url": "https://sasthatankcleaning.com",
          "image": "https://sasthatankcleaning.com/logo.png",
          "logo": "https://sasthatankcleaning.com/logo.png",
          "telephone": "+91-63743-41251",
          "email": "info@sasthatankcleaning.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Service Across Tamil Nadu",
            "addressLocality": "Tamil Nadu",
            "addressRegion": "TN",
            "postalCode": "600001",
            "addressCountry": "IN"
          },
          "areaServed": [
            "Coimbatore",
            "Chennai", 
            "Madurai",
            "Salem",
            "Trichy",
            "Ponneri",
            "Udumalaipettai",
            "Kottamangalam",
            "All of Tamil Nadu"
          ],
          "serviceType": [
            "Water Tank Cleaning",
            "Overhead Tank Cleaning",
            "Underground Sump Cleaning",
            "Water Storage Sanitization"
          ],
          "openingHours": "Mo-Su 08:00-20:00",
          "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
          "priceRange": "$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "11.127123",
            "longitude": "78.656894"
          },
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "SASTHA Team"
          },
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water Tank Cleaning"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;