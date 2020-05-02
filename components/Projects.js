const img1 = "/images/projects/accounting-app-1";
const img2 = "/images/img1";
const img3 = "/images/img1";
export default function Projects(props) {
  return (
    <>
      <div className="bgimg-1">
        <div className="caption">
          <span className="border" style={{ backgroundColor: "black", fontSize: "25px", color: "#f7f7f7" }}>Accounting App</span>
        </div>
      </div>

      <div style={{
        position: "relative"
      }}>
        < div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
          <p>Accounting App is a full-stack server-side rendered web application to perform accounting functions in multiple languages and currencies.</p>
          <p>Technologies: React, Node.js, PostgreSQL, GraphQL, NextJS, TypeScript (JavaScript)</p>
        </div>
      </div >

      <div className="bgimg-2">
        <div className="caption">
          <span className="border" style={{ backgroundColor: "black", fontSize: "25px", color: "#f7f7f7" }}>UBC Campus Explorer</span>
        </div>
      </div>

      <div style={{
        position: "relative"
      }}>
        < div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
          <p>UBC Campus Explorer is a full-stack web app using RESTful API to perform queries on UBC’s course and room databases.</p>
          <p>Technologies: Node.js, TypeScript</p>
        </div>
      </div >

      <div className="bgimg-3">
        <div className="caption">
          <span className="border" style={{ backgroundColor: "black", fontSize: "25px", color: "#f7f7f7" }}>Housing Mapper</span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
          <p>Housing Mapper is an application which parses a list of properties in XML format into internal objects. Users can select properties based on a list of criteria and find their locations on a map.</p>
          <p>Technologies: Java</p>
        </div>
      </div>

      <div className="bgimg-4">
        <div className="caption">
          <span className="border" style={{ backgroundColor: "black", fontSize: "25px", color: "#f7f7f7" }}>Other projects</span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
          <p>Projects: Simon Said 🔗, Tic Tac Toe 🔗, Pomodoro Timer 🔗, Random Quote Machine 🔗</p>
          <p>Technologies: JavaScript, HTML, CSS</p>
        </div>
      </div>

      <style> {`
.bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4 {
  position: relative;
  opacity: 0.8;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
.bgimg-1 {
  background-image: url("/images/projects/accounting-app.svg");
  min-height: 500px;
}

.bgimg-2 {
  background-image: url("/images/projects/campus-explorer.svg");
  min-height: 500px;
}

.bgimg-3 {
  background-image: url("/images/projects/housing-mapper.svg");
  min-height: 500px;
}

.bgimg-4 {
  background-image: url("/images/projects/small-projects.svg");
  min-height: 500px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4 {
    background-attachment: scroll;
  }
}
            `}</style>
    </>
  )
}