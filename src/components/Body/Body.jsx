import Arrow from "./Arrow";
import "./Body.css";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";

function Body() {
  const urlCurriculum =
    "https://drive.google.com/file/d/1eCsIRlWMQfwr8tDnh6e3aA_KjDK5-NrY/view?usp=sharing";
  return (
    <div className="body">
      <div className="main">
        <div className="mySelf">
          <h1>HI 👋 I'M VICTOR</h1>
        </div>

        <div className="job">
          <div className="react">
            REACT
            <a
              href="https://www.linkedin.com/in/victor-da-matta-2aa0b1245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="iconIten"
                size={50}
                color="ff7"
                title="Profile - LinkedIn"
              />
            </a>
            <a
              href="https://github.com/victormatta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="iconIten"
                size={50}
                color="ff7"
                title="Profile - GitHub"
              />
            </a>
            <a
              href={urlCurriculum}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FaDownload
                className="iconIten"
                size={50}
                color="ff7"
                title="Curriculum - Download"
              />
            </a>
          </div>
          <div className="category">DEVELOPER</div>
        </div>

        <div className="mySelf2">
          <h1>I'M 19 AND I'M A FRONT-END DEVELOPER FOR 1 YEAR.</h1>
        </div>
      </div>

      <Arrow />
    </div>
  );
}

export default Body;
