import { useState, useEffect } from "react";
import TypeMe from "./TypeMe";

export default function AboutMe() {
  const [canType, setCanType] = useState(false);
  useEffect(() => setCanType(true), []);
  return (
    <>
      <div className="about">
        <div className="intro">
          <TypeMe />
        </div>
        <div className="profile-pic-holder">
          <img src="/images/me.svg" className="profile-pic"></img>
        </div>
        <div className="my-resume">
          <a href="/Nguyen_Dara_resume.pdf" className="view-resume-btn">
            <img width="230px" src="/images/view-resume-btn.svg" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding-top: 10vh;
          padding-right: 8vw;
          display: grid;
          grid-template-rows: 270px 175px 200px;
          grid-template-areas:
            "profile-pic-holder"
            "intro"
            "my-resume";
          width: 97vw;
          height: 100vh;
          min-width: 0;
        }

        @media (min-width: 700px) {
          .about {
            padding-top: 20vh;
            padding-right: 8vw;
            display: grid;
            grid-template-columns: 3fr 2fr;
            grid-template-rows: 3fr 5fr;
            grid-template-areas:
              "intro profile-pic-holder"
              "my-resume profile-pic-holder";
            width: 97vw;
            height: 100vh;
            min-width: 0;
          }
        }

        .intro {
          display: flex;
          grid-area: intro;
          text-align: center;
          align-items: center;
          justify-content: center;
        }
        .profile-pic-holder {
          grid-area: profile-pic-holder;
          text-align: center;
        }

        .my-resume {
          grid-area: my-resume;
          text-align: center;
        }

        @media (max-width: 699px) {
          .profile-pic {
            width: 80%;
            height: 80%;
          }

          .view-resume-btn {
            text-align: center;
            width: 50%;
          }
        }

        .view-resume-btn {
          width: 70%;
        }

        .view-resume-btn:hover {
          content: url("/images/resume-hover.svg") no-repeat;
        }
      `}</style>
    </>
  );
}