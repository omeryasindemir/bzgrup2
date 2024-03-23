import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="header-top">
          <div className="logo">
            <img src="https://bzgrup.com/img/logo.png" alt="" />
          </div>
          <div className="search-bar">
            
            <input type="text" name="search" id="search" placeholder="Search on BZGRUP"/>
            <i class="bi bi-search"></i>
          </div>
          <div className="auth-btn">
            <i class="bi bi-person-lock"></i>
            <div className="ll">Login</div>
          </div>
        </div>
        <div className="header-bottom">
          <li><a href="#">Mattress</a></li>
          <li><a href="#">Sofa Sets</a></li>
          <li><a href="#">Garden Furniture</a></li>
          <li><a href="#">Table & Chair</a></li>
          <li><a href="#">Coffee Table</a></li>
          <li><a href="#">Bedroom Sets</a></li>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
