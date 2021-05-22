import styled from "@emotion/styled";

const ProjectImg = styled.div((props) => ({
  backgroundImage: `url(${props.url})`,
  position: "relative",
  opacity: "0.6",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Caption = styled.div`
  width: fit-content;
  padding: 18px;
  letter-spacing: 10px;
  background-color: #bfa884;
  font-size: 25px;
  color: #f7f7f7;
`;

const DescriptionContainer = styled.div`
  color: #ddd;
  background-color: #282e34;
  text-align: center;
  padding: 50px 80px;
  text-align: justify;
`;
const Icon = styled.img`
  width: 2em;
`;
const Description = ({ description, tech, github, projectUrl }) => {
  return (
    <>
      <p>{description}</p>
      <p>Technologies: {tech}</p>

      <span>
        {github && (
          <a href={github}>
            <Icon src="/images/github-btn.png" />
          </a>
        )}
      </span>
      <span>&nbsp; &nbsp;</span>
      <span>
        {projectUrl && (
          <a href={projectUrl}>
            <Icon src="/images/link.png" />
          </a>
        )}
      </span>
    </>
  );
};

export default function Projects(props) {
  return (
    <>
      {/* CODER COMMUNITY */}
      <ProjectImg url="/images/projects/ae.png">
        <Caption>Employee Directory</Caption>
      </ProjectImg>

      <DescriptionContainer>
        <Description
          description={
            "A new corporate directory created for Associated Engineering which focuses on distilling the same data as the existing system of AE but facilitated by a modern, simple UI and a more efficient search flow."
          }
          tech={"React, C#, ASP.NET, AWS Lambda, Entity Framework"}
          github={"https://github.com/Dara2004/EmployeeDirectory"}
          projectUrl={"https://www.employeedirectory.design/"}
        />
      </DescriptionContainer>

      {/* CODER COMMUNITY */}
      <ProjectImg url="/images/projects/cc.png">
        <Caption>Coder Community</Caption>
      </ProjectImg>

      <DescriptionContainer>
        <Description
          description={
            "Coder Community is a social platform for software developers of all levels. On Coder Community, you can join and grow with a community and read and write articles, post and watch videos, join and create groups, live chat, and undertake coding challenges together."
          }
          tech={
            "React/Redux, TypeScript, Node.js, MongoDB, REST API, Web Sockets"
          }
          github={"https://github.com/john-zou/coder-community"}
          projectUrl={
            "http://ec2-13-229-215-75.ap-southeast-1.compute.amazonaws.com/home"
          }
        />
      </DescriptionContainer>

      {/* FLASHCARD APP */}
      <ProjectImg url="/images/projects/goi2.png">
        <Caption>Flashcard App</Caption>
      </ProjectImg>

      <DescriptionContainer>
        <Description
          description={
            "A flashcard maker app which generates the UI simultaneously as users type in a code editor using DSL processing methods."
          }
          tech={"React, TypeScript"}
          github={"https://github.com/Dara2004/Goi"}
          projectUrl={"/other-projects/goi/goi"}
        />
      </DescriptionContainer>

      {/* ACCOUNTING APP */}
      <ProjectImg url="/images/projects/accounting-app.svg">
        <Caption>Accounting App</Caption>
      </ProjectImg>

      <DescriptionContainer>
        <Description
          description={
            "Accounting App is a full-stack server-side rendered web application to perform accounting functions in multiple languages and currencies."
          }
          tech={"React, Node.js, PostgreSQL, GraphQL, NextJS, TypeScript"}
          github={"https://github.com/Dara2004/accounting_app"}
        />
      </DescriptionContainer>

      {/* CAMPUS EXPLORER */}
      <ProjectImg url="/images/projects/campus-explorer.svg">
        <Caption>Campus Explorer</Caption>
      </ProjectImg>

      <DescriptionContainer>
        <Description
          description={
            "UBC Campus Explorer is a full-stack web app using RESTful API to perform queries on UBC’s course and room databases."
          }
          tech={"Node.js, TypeScript"}
          github={"https://github.com/Dara2004/Campus-Explorer"}
          projectUrl={
            "http://ec2-13-229-215-75.ap-southeast-1.compute.amazonaws.com:4321/"
          }
        />
      </DescriptionContainer>

      {/* HOUSING MAPPER */}
      <ProjectImg url="/images/projects/housing-mapper.svg">
        <Caption>Housing Mapper</Caption>
      </ProjectImg>
      <DescriptionContainer>
        <Description
          description={
            "Housing Mapper is an application which parses a list of properties in XML format into internal objects. Users can select properties based on a list of criteria and find their locations on a map."
          }
          tech={"Java, Swing"}
        />
      </DescriptionContainer>

      {/* MINI APPS */}
      <ProjectImg url="/images/projects/small-projects.svg">
        <Caption>Mini apps</Caption>
      </ProjectImg>

      <DescriptionContainer>
        <p>
          Mini apps:{" "}
          <a
            href="/other-projects/random-quote-machine/random-quote-machine"
            className="project-link"
          >
            Random Quote Generator 🔗
          </a>
          ,{" "}
          <a
            href="/other-projects/simon-game/simon-game"
            className="project-link"
          >
            Simon Said 🔗
          </a>
          ,
          <a
            href="/other-projects/tic-tac-toe/tic-tac-toe"
            className="project-link"
          >
            {" "}
            Tic Tac Toe 🔗
          </a>
        </p>
        <p>Technologies: JavaScript, HTML, CSS</p>
      </DescriptionContainer>

      <style>
        {`
        .project-link {
            text-decoration: none;
            color: white;
        }
            `}
      </style>
    </>
  );
}
