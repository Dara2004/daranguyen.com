import { useEffect, useState } from "react";

export default function NavBar(props) {
  const [navbar, setNavbar] = useState({
    background: "",
    about: "#8A8687",
    projects: "white",
    triangleUpAbout: "#C4C4C4",
    triangleUpProjects: "#E7E2DC",
  });
  useEffect(() => {
    const node = document.createElement("h1");
    node.appendChild(document.createTextNode("John is a poop"));
    window.navbar.appendChild(node);

    document.addEventListener("scroll", () => {
      const backgroundColor = window.scrollY < 70 ? "" : "white";
      const aboutTextColor = window.scrollY < 70 ? "#8A8687" : "#C4C4C4";
      const projectsTextColor = window.scrollY < 70 ? "white" : "#8A8687";
      const triangleUpAboutColor = window.scrollY < 500 ? "#C4C4C4" : "white";
      let triangleUpProjectsColor = "#E7E2DC";
      if (window.scrollY >= 0 && window.scrollY <= 70) {
        triangleUpProjectsColor = "#E7E2DC";
      } else if (window.scrollY > 70 && window.scrollY <= 500) {
        triangleUpProjectsColor = "white";
      } else if (window.scrollY > 500) {
        triangleUpProjectsColor = "#C4C4C4";
      }
      setNavbar({
        background: backgroundColor,
        about: aboutTextColor,
        projects: projectsTextColor,
        triangleUpAbout: triangleUpAboutColor,
        triangleUpProjects: triangleUpProjectsColor,
      });
    });
  }, []);

  return (
    <>

      <div className="nav-bar">
        <div className="row">
          <div className="col-md-4">
            <a href="#about" style={{ marginRight: "30px" }}><img src="/images/logo.png" className="logo" /></a>
          </div>

          <div className="col-md-8">
            <div className="menu">
              <div className="about">
                <a href="#about"><span className="about-menu">ABOUT</span></a>
                <div className="triangle-up-about"></div>
              </div>
              <span>&nbsp;&nbsp;</span>
              <div className="projects">
                <a href="#projects"><span className="project-menu">PROJECTS</span></a>
                <div className="triangle-up-projects"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
       .nav-bar {
         margin-top: -1em;
          position: fixed;
          width: 100em;
          height: 5em;
          background-color: ${navbar.background};
          z-index: 2;
        }
        .logo {
          margin-top: 0.7em;
          margin-left: 20%;
        }
        .menu {
          margin-top: 1em;
          font-size: 1.5em;
          // margin-left: 20vw; 
          // margin-right: 40vw;
        }
        .about {
          display: inline-block;
        }
        .projects {
          display: inline-block;
        }
        .about-menu {
          display: inline-block;
          font-weight: bold;
          color: ${navbar.about};
       }
       .project-menu {
         display: inline-block;
         font-weight: bold;
         color: ${navbar.projects};
       }
      .triangle-up-about {
        width: 0;
        height: 0;
        border-left: 0.3em solid transparent;
        border-right: 0.3em solid transparent;
        border-bottom: 0.6em solid ${navbar.triangleUpAbout};
        text-align: center;
        margin: auto;
    }
    .triangle-up-projects {
        width: 0;
        height: 0;
        border-left: 0.3em solid transparent;
        border-right: 0.3em solid transparent;
        border-bottom: 0.6em solid ${navbar.triangleUpProjects};
        text-align: center;
        margin: auto;
    }
    `}</style>
    </>
  )
}