import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

export default function Home({ data }) {
    const { hero, featured, community, connect } = data.wpPage.home

    return (
        <Layout isHomePage={true} className="relative text-white">
            <div className="hero flex min-h-screen items-center justify-center">
                <div className="z-40 flex flex-col space-y-8 text-center">
                    <h1 className="stroke-strong text-3xl font-extrabold uppercase md:text-6xl">
                        {parse(hero.heading)}
                    </h1>
                    <p className="text-sm md:text-lg">
                        {parse(hero.description)}
                    </p>
                    <Link to={hero.ctaUrl}>
                        <button className="rounded-full bg-gradient-to-r from-blox-magenta to-blox-indigo px-10 py-1 text-sm font-semibold text-white duration-300 ease-in-out md:text-lg">
                            {hero.ctaLabel}
                        </button>
                    </Link>
                </div>
                <GatsbyImage
                    image={hero.image.localFile.childImageSharp.gatsbyImageData}
                    alt={"Hero Image"}
                    className="h-100 absolute h-screen w-screen"
                />
            </div>
            <div className="featured"></div>
            <div className="community">
                <GatsbyImage
                    image={
                        community.image.localFile.childImageSharp
                            .gatsbyImageData
                    }
                    alt={community.caption}
                />
            </div>
            <div className="connect"></div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        wpPage(id: { eq: "cG9zdDoy" }) {
            id
            home {
                community {
                    caption
                    ctaLabel
                    ctaUrl
                    description
                    heading
                    image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                hero {
                    ctaLabel
                    ctaUrl
                    description
                    fieldGroupName
                    heading
                    image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                featured {
                    ctaLabel
                    ctaUrl
                    description
                    fieldGroupName
                    heading
                    image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
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
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`
