import "./Body.css";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import BodyProd from "./BodyProd";
import Arrow from "../NavBar/Arrow";
import Link from "./Link";

function Body() {
  const urlCurriculum =
    "https://drive.google.com/file/d/1Y9M9TASU28xvX_6oIVKiSFQ1PqV4Vad_/view?usp=sharing";

  return (
    <div className="body">
      <div id="nav"></div>
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
                size={43}
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
                size={43}
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
                size={43}
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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%">
            <stop offset="0%" stop-color="rgb(126, 72, 177)" />
            <stop offset="100%" stop-color="rgba(54, 31, 94)" />
          </radialGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0 50 C 40 90, 60 90, 100 50 S 160 10, 200 50 S 260 90, 300 50 S 360 10, 400 50 S 460 90, 500 50 V 0 H 0 V 50"
        />
      </svg> */}
      <Arrow />
      <BodyProd />

      <Link />
    </div>
  );
}

export default Body;
