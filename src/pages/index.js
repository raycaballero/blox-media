import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
    return (
        <Layout>
            <SEO />
            <div className="text-red-500 font-bold">{data.wpPage.home.hero.heading}s</div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    wpPage(id: {eq: "cG9zdDoy"}) {
      id
      home {
        community {
          caption
          ctaLabel
          ctaUrl
          description
          heading
          image {
            id
            sourceUrl
          }
        }
        hero {
          ctaLabel
          ctaUrl
          description
          fieldGroupName
          heading
          image {
            sourceUrl
          }
        }
        featured {
          ctaLabel
          ctaUrl
          description
          fieldGroupName
          heading
          image {
            sourceUrl
          }
        }
        connect {
          caption
          contact
          ctaLabel
          ctaUrl
          description
          heading
          image {
            sourceUrl
          }
        }
      }
    }
  }
`