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

    function useScrollDirection() {
        const [scrollDirection, setScrollDirection] = useState(null)

        useEffect(() => {
            let lastScrollY = window.pageYOffset

            const updateScrollDirection = () => {
                const scrollY = window.pageYOffset
                const direction = scrollY > lastScrollY ? "down" : "up"
                if (
                    direction !== scrollDirection &&
                    (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
                ) {
                    setScrollDirection(direction)
                }
                lastScrollY = scrollY > 0 ? scrollY : 0
            }
            window.addEventListener("scroll", updateScrollDirection) // add event listener
            return () => {
                window.removeEventListener("scroll", updateScrollDirection) // clean up
            }
        }, [scrollDirection])

        return scrollDirection
    }

    const scrollDirection = useScrollDirection()

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
            <SEO title={pageTitle} description="Blox Media Website"/>
            <div
                className="flex min-h-screen flex-col bg-black text-white"
                data-is-root-path={isHomePage}
            >
                {/* <div className="fixed z-50 w-full"> */}
                <header
                    className={cn(
                        "fixed z-50 w-full py-5 duration-200 ease-linear",
                        {
                            "bg-transparent": isScrollOnTop,
                            "top-0 bg-black/75 backdrop-blur-lg":
                                scrollDirection === "up" && !isScrollOnTop,
                            "-top-24": scrollDirection === "down",
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
                {/* </div> */}
                <motion.div className="progress-bar z-50" style={{ scaleX }} />

                <main>{children}</main>

                <footer className="z-20 mt-auto pt-20 text-white">
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
