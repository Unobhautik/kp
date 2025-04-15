import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  article?: boolean;
  canonicalUrl?: string;
}

const defaultDescription = "Experience Nature's Liquid Gold with Kalpraj's selection of raw, unfiltered honey including Ajwain, Suva, Til, and Fennel varieties sourced from sustainable apiaries.";
const defaultKeywords = "kalpraj, raw honey, unfiltered honey, ajwain honey, suva honey, til honey, fennel honey, pure honey, natural honey, organic honey";
const defaultTitle = "Kalpraj - Premium Raw & Unfiltered Honey | Nature's Liquid Gold";
const siteUrl = "https://kalpraj.in";

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = "/logo.png",
  ogUrl = siteUrl,
  article = false,
  canonicalUrl = siteUrl
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kalpraj",
            "url": "https://kalpraj.in",
            "logo": "https://kalpraj.in/logo.png",
            "description": "Premium provider of raw, unfiltered honey varieties including Ajwain, Suva, Til, and Fennel sourced from sustainable apiaries.",
            "slogan": "Experience Nature's Liquid Gold"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;