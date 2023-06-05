import "./Body.css";
import developer from "../../assets/developer-icon.jpg";

function Body() {
  return (
    <div className="body">
      <div className="main">
        <div className="smallText1">
          <h2>Hello World,</h2>
        </div>

        <div className="mainText">
          <h1>I am a </h1>
          <div className="job">
            <h1>Web Developer</h1>
          </div>
        </div>

        <div className="smallText2">
          <h2>welcome to my portfolio website!</h2>
        </div>

        <div className="aboutMe">
          <h2>More about me</h2>
        </div>

        <div className="imageDev">
          <img src={developer} alt="Developer Image" />
        </div>
      </div>
    </div>
  );
}

export default Body;
