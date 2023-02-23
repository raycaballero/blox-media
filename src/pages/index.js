import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Animate from "../components/animations/animate"

export default function Home({ data }) {
    const { hero, featured, community, connect } = data.wpPage.home

    return (
        <Layout isHomePage={true} className="relative text-white">
            {/* Hero */}
            <section className="hero flex min-h-screen items-center justify-center">
                <div className="container z-40 flex flex-col space-y-8 px-3 text-center">
                    <Animate startY={0} duration={0.5}>
                        <h1 className="stroke-strong text-3xl font-extrabold uppercase md:text-6xl">
                            {parse(hero.heading)}
                        </h1>
                    </Animate>
                    <Animate startY={0} duration={0.5}>
                        <p className="text-sm md:text-lg">
                            {parse(hero.description)}
                        </p>
                    </Animate>
                    <Animate startY={0} duration={0.5}>
                        <Link to={hero.ctaUrl ?? ""}>
                            <button className="rounded-full bg-gradient-to-r from-blox-magenta to-blox-indigo px-10 py-1 text-sm font-semibold text-white duration-300 ease-in-out md:text-lg">
                                {hero.ctaLabel}
                            </button>
                        </Link>
                    </Animate>
                </div>

                {/* BG */}
                <div className="absolute">
                    <div className="overlay absolute z-20 h-screen w-screen bg-black opacity-70"></div>
                    <GatsbyImage
                        image={
                            hero.image.localFile.childImageSharp.gatsbyImageData
                        }
                        alt={"Hero Image"}
                        className="h-screen w-screen"
                    />
                </div>
            </section>

            {/* Featured Event */}
            <section className="featured container mx-auto grid min-h-screen grid-cols-1 lg:grid-cols-2">
                <div className=" flex pt-20 lg:pt-0">
                    <GatsbyImage
                        image={
                            featured.image.localFile.childImageSharp
                                .gatsbyImageData
                        }
                        alt={"Hero Image"}
                        className="outline-shadow relative m-auto w-10/12 rounded-3xl md:rounded-8xl"
                    />
                </div>
                <div className="flex p-3 md:p-10">
                    <div className="m-auto flex flex-col space-y-8 p-8">
                        <h1 className="stroke-strong text-3xl font-extrabold uppercase md:text-6xl">
                            {parse(featured.heading)}
                        </h1>
                        <p className="featured-description text-sm md:text-lg">
                            {parse(featured.description)}
                        </p>
                        <Link to={featured.ctaUrl ?? ""}>
                            <button className="rounded-full bg-gradient-to-r from-blox-magenta to-blox-indigo px-10 py-1 text-sm font-semibold text-white duration-300 ease-in-out md:text-lg">
                                {featured.ctaLabel}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Community */}
            <section className="community">
                <GatsbyImage
                    image={
                        community.image.localFile.childImageSharp
                            .gatsbyImageData
                    }
                    alt={community.caption}
                />
            </section>

            {/* Connect */}
            <section className="connect"></section>
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
