import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function UpperNavbar() {
  let dropDownMenu = useRef();
  let toggleMenu = () => {
    dropDownMenu.current.style.left = "0";
  };

  let close = useRef();
  let closeMenu = () => {
    dropDownMenu.current.style.left = "-100%";
  };

  let closeMenuWhileClicked = () => {
    dropDownMenu.current.style.left = "-100%";
  };

  return (
    <>
      <nav className="upperNavbar">
        <div className="container control">
          <div className="menu">
            <img onClick={toggleMenu} src="/svg icons/menu.svg" />
            <div ref={dropDownMenu} className="dropDown-menu">
              <div className="start menu-navbar">
                <div className="menu-buttons">
                  <Link to="" className="btn active">
                    Menu
                  </Link>
                  <Link to="/categories/" className="btn">
                    Categories
                  </Link>
                </div>
                <span className="close-icon">
                  <img
                    ref={close}
                    onClick={closeMenu}
                    src="/svg icons/close.png"
                  />
                </span>
              </div>
              <ul className="menu-links">
                <span className="column-border"></span>
                <li className="nav-item">
                  <Link onClick={closeMenuWhileClicked} className="link" to="/">
                    Home
                    <img src="/svg icons/plus.png" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={closeMenuWhileClicked}
                    className="link"
                    to="/categories/"
                  >
                    Categories
                    <img src="/svg icons/plus.png" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={closeMenuWhileClicked}
                    className="link"
                    to="/about"
                  >
                    Products
                    <img src="/svg icons/plus.png" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={closeMenuWhileClicked}
                    className="link"
                    to="/Blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <img src="/img/Logo.png" />
            </Link>
          </div>
          <div className="search-box">
            <select>
              <option>all tags</option>
              <option>air pods</option>
              <option>camera</option>
              <option>laptop</option>
              <option>mouse</option>
              <option>phone</option>
              <option>headphone</option>
            </select>
            <input type="text" placeholder="search our store" />
            <div className="search-icon-control">
              <img className="search-icon" src="/svg icons/search.svg" />
            </div>
          </div>
          <div className="nav-icons">
            <ul>
              <li>
                <Link>
                  <img src="/svg icons/Person.png" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="/svg icons/whishlist.png" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src="/svg icons/cart.png" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <span className="bottom-border"></span>
    </>
  );
}
