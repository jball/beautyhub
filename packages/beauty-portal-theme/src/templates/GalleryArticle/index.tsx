import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import Gallery from '../../components/Gallery';
import RelatedArticles from '../../components/RelatedArticles';
import PageSchema from '../../components/PageSchema';
import Tags from '../../components/Tags';
import ReadNext from '../../components/ReadNext';
import Breadcrumb from '../../components/Breadcrumb';
import RichText from '../../components/RichText';
import ArticleHeader from '../../components/ArticleHeader';
import OGTags from '../../components/OGTags';

const GalleryArticlePage = (props: GalleryArticlePageProps) => {
  const {
    data: {
      page,
      galleryArticles: { nodes: galleryNodes },
      featureArticles: { nodes: featureNodes },
      howToArticles: { nodes: howToNodes },
      brandInfo,
      sectionTitles,
    },
  } = props;

  const relatedArticles = [...galleryNodes, ...featureNodes, ...howToNodes];
  return (
    <Layout>
      <SEO
        lang={'en-us'}
        title={page.seo.metaTitle}
        description={page.seo.metaDescription}
        keywords={page.seo.metaKeywords}
      />
      <PageSchema
        type={'Article'}
        name={page.headline}
        description={page.subheading || page.headline}
        slug={page.path}
        image={{
          url: page.heroImage.asset.url,
          width: page.heroImage.asset.metadata.dimensions.width,
          height: page.heroImage.asset.metadata.dimensions.height,
        }}
        data={page}
      />
      <OGTags type={'article'} slug={page.path} data={page} />
      <Breadcrumb tag={page.tags[0]} pageTitle={page.headline} />
      <div className="container">
        <ArticleHeader
          article={page}
          type={'gallery'}
          socialLinks={brandInfo}
        />
        <Gallery
          data={page._rawImageGallery}
          name={page.headline}
          authorName={page.author.name}
          slug={page.path}
        />
      </div>

      <div className="container">
        <Grid container spacing={2}>
          <Grid xs={12} item sm={7}>
            <RichText data={page._rawBody} />
            {page.readnext && (
              <ReadNext data={page} title={sectionTitles.nextRead} />
            )}
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={4} style={{ position: 'relative' }}>
            {relatedArticles.length !== 0 && (
              <RelatedArticles
                articles={relatedArticles}
                title={sectionTitles.relatedArticlesName}
              />
            )}
          </Grid>
        </Grid>
        <Tags data={page.tags} title={sectionTitles.relatedTopicsName} />
      </div>
    </Layout>
  );
};

export default GalleryArticlePage;

export const query = graphql`
  query($slug: String!, $tags: [String!], $id: [String!]) {
    galleryArticles: allSanityGalleryArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...GalleryFieldsTile
      }
    }

    howToArticles: allSanityHowToArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...HowToFieldsTile
      }
    }

    featureArticles: allSanityFeatureArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...FeatureFieldsTile
      }
    }

    page: sanityGalleryArticle(slug: { current: { eq: $slug } }) {
      ...GalleryFieldsFull
    }

    brandInfo: sanityBrandInfo {
      pinteresturl
      twitterurl
      youtubeurl
      facebookurl
      instaurl
      spotifyurl
    }

    sectionTitles: sanityHowToTemplate {
      name
      nextRead
      productName
      relatedArticlesName
      relatedTopicsName
      toolName
    }
  }
`;

interface GalleryArticlePageProps {
  data: {
    page: any;
    galleryArticles: any;
    featureArticles: any;
    howToArticles: any;
    brandInfo: any;
    sectionTitles: any;
  };
  pageContext: {
    slug: string;
    title: string;
    tags: any;
  };
}
