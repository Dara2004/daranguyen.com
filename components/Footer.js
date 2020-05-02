import Socials from "./Socials";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <span>
          <a href="mailto: duongnt1204@gmail.com"><img src="/images/email-btn.png" /></a>
        </span>
        <span>
          <a href="https://github.com/Dara2004"><img src="/images/github-btn.png" /></a>
        </span>
        <span>
          <a href="https://linkedin.com/in/daranguyen"><img src="/images/linkedin-btn.png" /></a>
        </span>
        <p>Created by Dara Nguyen</p>
      </div>
      <style>
        {" "}
        {`
            .footer {
                height: 8.5em;
                background-color: black;       
                text-align: center; 
                align-
            }
            .footer img {
                margin: 2em 0.5em 0em 0.5em;
                display: inline-block;
                width: 2.5em;
            }
            .footer p {
                font-size: 0.9em;
                color: white;
                margin-bottom: 2em
            }
            `}
      </style>
    </>
  );
}
