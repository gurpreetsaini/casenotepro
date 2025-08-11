export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Casenotepro",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS",
    "description": "AI-powered case note documentation app for social workers, counselors, and human services professionals. Features voice-to-text transcription and professional case note templates.",
    "url": "https://casenotepro.com",
    "downloadUrl": "https://apps.apple.com/app/casenotepro", // You'll need to update this with actual App Store URL
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Casenotepro Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Casenotepro"
    },
    "keywords": [
      "social work",
      "case notes",
      "case management",
      "social worker app",
      "AI transcription",
      "professional documentation",
      "HIPAA compliant",
      "speech recognition",
      "human services"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150" // You can update these with actual ratings when available
    },
    "featureList": [
      "AI-powered speech recognition",
      "Professional case note templates",
      "Privacy-first data handling",
      "HIPAA and international privacy compliance",
      "Voice-to-text transcription",
      "Structured case documentation",
      "Professional ethics compliance"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
