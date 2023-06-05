import "./NavBar.css";

function NavBar() {
  const name = "<VPM />";

  return (
    <div className="nav-bar">
      <h1>
        <a href="#">{name}</a>
      </h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
