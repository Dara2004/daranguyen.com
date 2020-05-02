import Socials from "./Socials";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <span><img src="/images/email-btn.png" /></span>
                <span><img src="/images/github-btn.png" /></span>
                <span><img src="/images/linkedin-btn.png" /></span>
                <p>Created by Dara Nguyen</p>
            </div>
            <style> {`
            .footer {
                height: 9em;
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
    )

}