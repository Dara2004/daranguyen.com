import { useState, useEffect } from "react";
import TypeMe from "./TypeMe";

export default function AboutMe() {
  const [canType, setCanType] = useState(false);
  useEffect(() => setCanType(true), []);
  return (
    <>
      <div className="about">
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="intro">
          <TypeMe />
        </div>
      </div>

      <img src="/images/me.svg" className="profile-pic"></img>

      <div className="my-resume-button">
        <a href="/Nguyen_Dara_resume.pdf">
          <img className="view-resume-btn" src="/images/view-resume-btn.svg" />
        </a>
      </div>

      <style jsx>{`
        .about {
          display: grid;
          grid-template-areas:
            "padding padding"
            "intro profile-pic"
            "my-resume profile-pic";
          width: 97vw;
          height: 100vh;
          min-width: 0;
        }
        .profile-pic {
          top: 50%;
          width: 50%;
          height: 50%;
        }
        .view-resume-btn {
          position: absolute;
          top: 50%;
          width: 15em;
          height: 15em;
          z-index: 1;
          text-align: center;
        }
        @media (max-width: 600px) {
          .view-resume-btn {
            top: 80%;
          }
        }
        .view-resume-btn:hover {
          content: url("/images/resume-hover.svg") no-repeat;
        }
      `}</style>
    </>
  );
}
