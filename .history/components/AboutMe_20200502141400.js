import { useState, useEffect } from "react";
import TypeMe from "./TypeMe";

export default function AboutMe() {
  const [canType, setCanType] = useState(false);
  useEffect(() => setCanType(true), []);
  return (
    <>
      <div className="about">
        <div className="padding"></div>
        <div className="padding2"></div>
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
            "padding padding padding2"
            "intro profile-pic-holder padding2"
            "my-resume profile-pic-holder padding2";
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
        }
        .view-resume-btn {
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
