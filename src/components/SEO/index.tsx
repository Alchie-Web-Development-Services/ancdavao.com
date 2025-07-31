import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
}) => {
  const router = useRouter();
  const defaultTitle = "ANC Davao - Advancing the Kingdom of God";
  const defaultDescription =
    "Advancing the Kingdom of God through discipleship, community, and service in Davao City and beyond.";
  const defaultKeywords =
    "ANC Davao, church, Davao, Christian, discipleship, community, service, kingdom of God";
  const defaultOgImage = "/images/logo.png"; // Assuming your logo is in public/images
  const defaultOgUrl = `https://ancdavao.com${router.asPath}`; // Replace with your actual domain

  return (
    <Head>
      <title>{title ? `${title} | ANC Davao` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={ogUrl || defaultOgUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
    </Head>
  );
};

export default SEO;
