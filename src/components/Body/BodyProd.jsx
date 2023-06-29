import "./BodyProd.css";
import WebStore from "../../assets/WebStore.png";
import ProjectManager from "../../assets/ProjectManager.png";
import ToDoList from "../../assets/ToDoList.png";
import MacBook from "../../assets/FrameMacBook.jpg";

function BodyProd() {
  const link1 = "https://github.com/victormatta/StoreDiversifiedProducts";
  const link2 = "https://github.com/victormatta/ToDoList";
  const link3 = "https://github.com/victormatta/Full-Stack-Project";

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
            <a href={link1} target="_blank" rel="noopener noreferrer">
              <img src={WebStore} alt="Web Store" />
            </a>
            <div className="titleProd">
              <h1>Store WebSite</h1>

              <p>
                The project is a store about products purchases and sales. You
                can buy everything supermarket products to mobile devices.
              </p>
            </div>
          </div>
        </div>

        <div className="img">
          <div className="mac">
            <img src={MacBook} alt="" />
          </div>

          <div className="manager">
            <a href={link3} target="_blank" rel="noopener noreferrer">
              <img src={ProjectManager} alt="Web Store" />
            </a>
            <div className="titleProd">
              <h1>Project Manager</h1>

              <p>
                Do you know somewhere that you can save everything your
                projects?<strong>It's here!</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="img">
          <div className="mac">
            <img src={MacBook} alt="" />
          </div>

          <div className="todo">
            <a href={link2} target="_blank" rel="noopener noreferrer">
              <img src={ToDoList} alt="Web Store" />
            </a>
            <div className="titleProd">
              <h1>ToDo List</h1>

              <p>
                Do you need organization? Here you can write down everything and
                have control over yours projects or tasks.
              </p>
            </div>
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
