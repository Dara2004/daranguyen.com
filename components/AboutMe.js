
import { useState, useEffect } from 'react';
import TypeMe from './TypeMe';

export default function AboutMe() {

  const [canType, setCanType] = useState(false);
  useEffect(() => setCanType(true), []);
  return (
    <>
      <div className="about">
        <div className="row middle-md">
          <div className="col-md-6">
            <img src="/images/me.svg" className="profile-pic"></img>
          </div>
          <div className="col-md-6">
            <div className="intro">
              <TypeMe />
              <a href="/Nguyen_Dara_resume.pdf"><img className="view-resume-btn" src="/images/view-resume-btn.svg" /></a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          width: 97vw;
          height: 100vh;
          justify: center;
          align-content: center;
          text-align: center;
          min-width: 0;
        }
        .profile-pic {
          // margin-left: 40%;
          width: 50%;
          margin-top: 8em;
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