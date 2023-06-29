import { IoMdArrowUp } from "react-icons/io";
import "./Arrow.css";

function Arrow() {
  return (
    <div className="arrowMain">
      <a href="#nav">
        <IoMdArrowUp size={50} className="arrow" />
      </a>
    </div>
  );
}

export default Arrow;
