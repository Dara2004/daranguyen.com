
import { useState, useEffect } from 'react';
import TypeMe from './TypeMe';

export default function AboutMe() {

  const [canType, setCanType] = useState(false);
  useEffect(() => setCanType(true), []);
  return (
    <>
      <div className="about">
        <div className="row middle-md">
          <div className="col-md-4">
            <div className="intro">
              <TypeMe />
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="/images/me.svg" className="profile-pic"></img>
          </div>
          <a href="/Nguyen_Dara_resume.pdf"><img className="view-resume-btn" src="/images/view-resume-btn.svg" /></a>

        </div>
      </div>
      <style jsx>{`
      .row {
        text-align: center;
      }
        .about {
          width: 97vw;
          height: 100vh;
          min-width: 0;
        }
        .profile-pic {
          position: relative;
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
  )
}