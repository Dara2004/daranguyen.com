export default function Socials() {
    return (
        <>
            <div className="socials">
                <span><img src="/images/email-btn.svg" /></span>
                <span><img src="/images/github-btn.svg" /></span>
                <span><img src="/images/linkedin-btn.svg" /></span>
            </div>
            <style>{`
            .socials {
               display: inline;
            }
            .socials img {
                display: inline-block;
                width: 4vw;
            }
            `}
            </style>
        </>
    );
}