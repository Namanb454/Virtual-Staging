import React from "react";
// import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                <Toaster />
                {children}
            </main>
            {/* <Footer /> */}
        </>
    );
};

Layout.defaultProps = {
    title: "Virtual Staging",
    description: "Vritual Staging",
    keywords: "Vritual Staging",
    author: "Nikhil Bafna",
};

export default Layout;