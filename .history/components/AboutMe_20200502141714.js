import { useState, useEffect } from "react";
import TypeMe from "./TypeMe";

export default function AboutMe() {
  const [canType, setCanType] = useState(false);
  useEffect(() => setCanType(true), []);
  return (
    <>
      <div className="about">
        <div className="paddingTop"></div>
        <div className="paddingRight"></div>
        <div className="intro">
          <TypeMe />
        </div>
        <div className="profile-pic-holder">
          <img src="/images/me.svg" className="profile-pic"></img>
        </div>
        <div className="my-resume">
          <a href="/Nguyen_Dara_resume.pdf" className="view-resume-btn">
            <img src="/images/view-resume-btn.svg" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .about {
          display: grid;
          grid-template-columns: 5fr 3fr 1fr;
          grid-template-areas:
            "paddingTop paddingTop paddingRight"
            "intro profile-pic-holder paddingRight"
            "my-resume profile-pic-holder paddingRight";
          width: 97vw;
          height: 100vh;
          min-width: 0;
        }
        .intro {
          grid-area: intro;
          text-align: center;
          height: 50px;
        }
        .profile-pic-holder {
          grid-area: profile-pic-holder;
        }
        // .profile-pic {
        //   top: 50%;
        //   width: 50%;
        //   height: 50%;
        // }
        .my-resume {
          grid-area: my-resume;
          width: 315px;
          text-align: center;
        }
        .view-resume-btn {
          width: 15em;
          height: 15em;
          z-index: 1;
          text-align: center;
        }

        .view-resume-btn:hover {
          content: url("/images/resume-hover.svg") no-repeat;
        }
      `}</style>
    </>
  );
}
