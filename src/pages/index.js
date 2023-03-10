import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import FadeIn from "../components/animations/FadeIn"
// import Bounce from "../components/animations/Bounce"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
    const { hero, featured, community, connect } = data.wpPage.home

    return (
        <Layout isHomePage={true} className="relative text-white">
            {/* Hero */}
            <section className="hero flex min-h-screen items-center justify-center">
                <div className="container z-30 flex flex-col space-y-8 px-3 text-center">
                    <FadeIn duration={0.5}>
                        <h1 className="stroke-strong animated text-3xl font-extrabold uppercase md:text-6xl">
                            {parse(hero.heading)}
                        </h1>
                    </FadeIn>
                    <FadeIn duration={0.5}>
                        <p className="text-sm md:text-lg">
                            {parse(hero.description)}
                        </p>
                    </FadeIn>
                    <FadeIn duration={0.5}>
                        <Link to={hero.ctaUrl ?? ""}>
                            <button className="btn-blox-gradient">
                                {hero.ctaLabel}
                            </button>
                        </Link>
                    </FadeIn>
                </div>

                {/* BG */}
                <div className="absolute">
                    <div className="hero-overlay"></div>
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
            <section className="featured container mx-auto grid min-h-screen grid-cols-1 overflow-x-hidden pb-20 lg:grid-cols-2">
                {/* <StaticImage
                    src="../../static/ellipse-indigo.png"
                    alt="Ellipse Indigo"
                    className="blob-indigo !fixed -right-72 top-0 z-10 h-160 w-160"
                />
                <StaticImage
                    src="../../static/ellipse-magenta.png"
                    alt="Ellipse Magenta"
                    className="blob-magenta !fixed -left-72 bottom-0 z-10 h-160 w-160"
                /> */}
                <div className="relative z-20 flex items-center justify-center text-center">
                    <div className="z-20">
                        <FadeIn
                            duration={0.2}
                            delay={0.5}
                            startX={20}
                            startY={20}
                            initialOpacity={1}
                            rotate={-5}
                        >
                            <GatsbyImage
                                image={
                                    featured.image.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={"Hero Image"}
                                className="w-10/12 rounded-3xl md:rounded-8xl"
                            />
                        </FadeIn>
                    </div>
                    <div className="absolute top-1/3 left-[27%] z-10 hidden xl:block 2xl:left-1/3">
                        <FadeIn
                            duration={0.2}
                            delay={0.5}
                            startX={-50}
                            startY={-50}
                            // initialOpacity={1}
                            rotate={5}
                            className="absolute"
                        >
                            <StaticImage
                                src="../../static/square-outline-magenta.png"
                                alt="Square Outline Magenta"
                                className="scale-[1.15] 2xl:scale-[1.35]"
                            />
                        </FadeIn>
                    </div>
                </div>
                <div className="z-20 flex items-center justify-center p-3 md:p-10">
                    <div className="flex flex-col space-y-8 p-8">
                        <FadeIn duration={0.5}>
                            <h1 className="stroke-strong animated mt-5 text-3xl font-extrabold uppercase md:mt-10 md:text-6xl">
                                {parse(featured.heading)}
                            </h1>
                        </FadeIn>
                        <FadeIn duration={0.6}>
                            <p className="wysiwyg text-sm md:text-lg">
                                {parse(featured.description)}
                            </p>
                        </FadeIn>
                        <FadeIn duration={0.5}>
                            <div className="flex justify-center md:justify-start">
                                <Link to={featured.ctaUrl ?? ""}>
                                    <button className="btn-blox-gradient">
                                        {featured.ctaLabel}
                                    </button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Community */}
            <section className="community container mx-auto grid min-h-screen grid-cols-1 py-10 md:py-20">
                <div className="z-10 text-center">
                    <FadeIn duration={0.5}>
                        <p className="text-sm font-bold uppercase text-blox-pink md:text-lg">
                            {parse(community.caption)}
                        </p>
                        <h1 className="stroke-strong animated mt-3 text-3xl font-extrabold uppercase md:text-6xl">
                            {parse(community.heading)}
                        </h1>
                    </FadeIn>
                </div>
                <FadeIn duration={0.7}>
                    <div className="flex flex-col items-center lg:flex-row">
                        <div className="z-10 mt-5 flex md:mt-20 lg:order-2 lg:mt-0">
                            {/* <Bounce> */}
                            <GatsbyImage
                                image={
                                    community.image.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={"Community Image"}
                                className="mx-auto w-10/12 rounded-3xl md:rounded-8xl"
                            />
                            {/* </Bounce> */}
                        </div>
                        <div className="z-20 m-5 -mt-10 rounded-3xl bg-blox-gray px-10 py-8 md:mt-0 md:rounded-8xl md:px-20 md:py-16 lg:order-1 lg:-mr-40">
                            <p className="wysiwyg text-sm md:text-lg">
                                {parse(community.description)}
                            </p>
                            <div className="mt-8 flex justify-center">
                                <Link to={community.ctaUrl ?? ""}>
                                    <button className="btn-blox-gradient">
                                        {community.ctaLabel}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Connect */}
            <section className="connect container mx-auto grid min-h-screen grid-cols-1 py-10 md:py-20">
                <div className="z-10 text-center">
                    <FadeIn duration={0.5}>
                        <p className="text-sm font-bold uppercase text-blox-pink md:text-lg">
                            {parse(connect.caption)}
                        </p>
                        <h1 className="stroke-strong animated mt-3 text-3xl font-extrabold uppercase md:text-6xl">
                            {parse(connect.heading)}
                        </h1>
                    </FadeIn>
                </div>
                <FadeIn duration={0.7}>
                    <div className="flex flex-col items-center lg:flex-row">
                        {/* <Bounce> */}
                        <div className="z-10 mt-5 flex md:mt-20 lg:mt-0">
                            <GatsbyImage
                                image={
                                    connect.image.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={"Connect Image"}
                                className="relative m-auto w-10/12 rounded-3xl md:rounded-8xl"
                            />
                        </div>
                        {/* </Bounce> */}
                        <div className="z-20 m-5 -mt-10 rounded-3xl bg-blox-gray px-10 py-8 md:mt-0 md:rounded-8xl md:px-20 md:py-16 lg:-ml-40">
                            <p className="wysiwyg text-sm md:text-lg">
                                {parse(connect.description)}
                            </p>
                            <div className="mt-8 flex justify-center">
                                <Link to={connect.ctaUrl ?? ""}>
                                    <button className="btn-blox-gradient">
                                        {connect.ctaLabel}
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-5 text-center">
                                <a
                                    aria-label={`Email us at ${connect.contact}`}
                                    href={`mailto:${connect.contact}`}
                                    className="text-sm font-bold text-blox-pink md:text-lg"
                                >
                                    {connect.contact}
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
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
