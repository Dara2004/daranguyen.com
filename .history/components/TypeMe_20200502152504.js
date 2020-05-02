import Typist from "react-typist";

export default class TypistExample extends React.Component {
  state = {
    renderMsg: false,
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    return (
      <>
        <div className="TypistExample">
          <Typist
            className="TypistExample-header"
            avgTypingDelay={70}
            startDelay={1000}
            onTypingDone={this.onHeaderTyped}
          >
            <span className="intro-text" style={{ color: "#BFA884" }}>
              Nice to meet you
            </span>
            <span className="intro-text">, I am</span>
            <span className="intro-text" style={{ color: "#BFA884" }}>
              {" "}
              Dara Nguyen
            </span>
            <span className="intro-text">, </span>
            <br></br>
            <span className="intro-text">
              a Computer Science student at UBC
            </span>
          </Typist>
        </div>
        <style jsx global>
          {`
            .intro-text {
              color: #8a8687;
              font-size: 1.5em;
              line-height: 2em;
              text-alight: left;
            }

            .Typist .Cursor {
              display: inline-block;
              font-size: 2em;
              color: white;
            }

            .Typist .Cursor--blinking {
              opacity: 1;
              font-size: 2em;
              animation: blink 1s linear infinite;
            }

            @keyframes blink {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        </style>
      </>
    );
  }
}
