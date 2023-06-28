import "./BodyProd.css";
import WebStore from "../../assets/WebStore.png";
import ProjectManager from "../../assets/ProjectManager.png";
import ToDoList from "../../assets/ToDoList.png";
import MacBook from "../../assets/FrameMacBook.jpg";

function BodyProd() {
  return (
    <div className="bodyProd">
      <div className="welcome">
        <h1>Welcome to my Portfolio 🦾</h1>
      </div>
      <div className="prod1">
        <div className="img">
          <div className="mac">
            <img src={MacBook} alt="" />
          </div>

          <div className="webStore">
            <img src={WebStore} alt="Web Store" />
          </div>
        </div>

        <div className="img">
          <div className="mac">
            <img src={MacBook} alt="" />
          </div>

          <div className="manager">
            <img src={ProjectManager} alt="Web Store" />
          </div>
        </div>

        <div className="img">
          <div className="mac">
            <img src={MacBook} alt="" />
          </div>

          <div className="todo">
            <img src={ToDoList} alt="Web Store" />
          </div>
        </div>
        {/* <div className="img">
          <img src={WebStore} alt="Web Store" />
        </div> */}
      </div>
    </div>
  );
}

export default BodyProd;
