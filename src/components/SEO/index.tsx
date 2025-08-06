import React from "react";
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
  const defaultTitle = "ANC Davao - Serving Christ through Charity and Mission";
const defaultDescription =
  "A Catholic mission initiative in Davao City committed to serving the poor, promoting human dignity, and living out the Gospel through love, service, and community outreach.";
const defaultKeywords =
  "ANC Davao, Catholic mission, Davao charity, Roman Catholic, discipleship, corporal works of mercy, community service, Gospel values, social outreach, ACLAIM, Archdiocese of Davao";
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
