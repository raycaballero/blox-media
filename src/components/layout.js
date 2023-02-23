import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import cn from "classnames"
// import parse from "html-react-parser"
import SEO from "./seo"
import Logo from "./partials/logo"
import { motion, useScroll, useSpring } from "framer-motion"

const Layout = ({ pageTitle, isHomePage, children }) => {
    const [isScrollOnTop, setIsScrollOnTop] = useState(true)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    useEffect(() => {
        window?.addEventListener("scroll", function () {
            setIsScrollOnTop(this.scrollY === 0)
        })
    })

    const {
        wp: {
            generalSettings: { title },
        },
    } = useStaticQuery(graphql`
        query LayoutQuery {
            wp {
                generalSettings {
                    title
                    description
                }
            }
        }
    `)

    return (
        <>
            <SEO title={pageTitle} />
            <div
                className="flex min-h-screen flex-col bg-black text-white"
                data-is-root-path={isHomePage}
            >
                
                <header
                    className={cn(
                        "fixed z-50 w-full py-5 duration-200 ease-linear",
                        {
                            "bg-transparent": isScrollOnTop,
                            "bg-black/75 backdrop-blur-lg": !isScrollOnTop,
                        }
                    )}
                >
                    <div className="container mx-auto flex items-center justify-center md:justify-between">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Link to="/">
                            <button className="hidden rounded-full bg-gradient-to-r from-blox-magenta to-blox-indigo px-10 py-1 text-lg font-semibold text-white duration-300 ease-in-out md:block">
                                Watch Live Webinar
                            </button>
                        </Link>
                        {/* {parse(title)} */}
                    </div>
                </header>
                <motion.div className="progress-bar z-50" style={{ scaleX }} />

                <main>{children}</main>

                <footer className="mt-auto pt-20 text-white z-20">
                    <div className="container mx-auto grid grid-cols-1 gap-y-10 border-t py-20 md:grid-cols-3">
                        <div className="flex items-center justify-center md:justify-start">
                            <Logo />
                        </div>
                        <span className="copyright flex items-center justify-center text-center">
                            © {new Date().getFullYear()} {title} - All Rights
                            Reserved
                        </span>
                        <div className="footer-contact flex justify-center text-center md:justify-end md:text-left">
                            <div>
                                <div>Contact</div>
                                <div>events@bloxmedia.io</div>

                                <div className="mt-5">+63.976.179.6763</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout
