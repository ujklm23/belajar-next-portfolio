// import Link from "next/link";
// import Img from "next/image";
import { $ } from "../helper";

const Navbar = () => {
  const handleSlide = () => {
    $("._nav_ul").classList.toggle("slide");
    $("._nav_ul").classList.toggle("slide_transition");
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="_nav_brand">
            <a href="#home">
              <img
                src="/Circus.svg"
                alt="myLogo"
                height="44"
                width="80"
                id="brand"
              />
            </a>
          </div>

          <ul className="_nav_ul">
            <li><a href="#home" className="nav_link">Home</a></li>
            <li><a href="#about" className="nav_link">About</a></li>
            <li><a href="#gallery" className="nav_link">Gallery</a></li>
            <li><a href="#contact" className="nav_link">Contact</a></li>
          </ul>

          <div className="_menu_toggle">
            <input type="checkbox" onClick={handleSlide} />
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
