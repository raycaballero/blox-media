import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"
import SEO from "./seo"
import Logo from "./partials/logo"

const Layout = ({ pageTitle, isHomePage, children }) => {
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
                className="
                    flex min-h-screen flex-col bg-black text-white
                "
                data-is-root-path={isHomePage}
            >
                {/* <header className="fixed z-50 hidden w-full bg-black py-5 md:block"> */}
                <header className="fixed z-50 hidden w-full bg-black py-5">
                    <div className="container mx-auto flex items-center justify-between">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Link to="/">
                            <button className="rounded-full bg-gradient-to-r from-blox-magenta to-blox-indigo px-10 py-1 text-lg font-semibold text-white duration-300 ease-in-out hover:scale-125">
                                Watch Live Webinar
                            </button>
                        </Link>
                        {/* {parse(title)} */}
                    </div>
                </header>

                <main>{children}</main>

                <footer className="mt-auto bg-black text-white">
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
