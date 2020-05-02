import Head from "next/head";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe.js";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Route, NavLink, HashRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dara Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          type="text/css"
        ></link>
      </Head>
      <div className="container">
        <div id="navbar">
          <NavBar></NavBar>
        </div>

        <div id="about">
          <AboutMe></AboutMe>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
        <Footer></Footer>
        <style jsx>{`
          .container {
            background-color: #e7e2dc;
            margin: 15px;
            min-width: 97.4vw;
            min-height: 100vh;
          }
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Ubuntu Mono", sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}
