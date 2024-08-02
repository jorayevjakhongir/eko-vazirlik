import React from "react";

function Navbar() {
  return (
    <nav className="gene-nav">
      <ul className="menu">
        <li className="has-dropdown">
          <a href="javascript:void(0)">Home</a>
          <ul>
            <li>
              <a href="index.html">Homepage V1</a>
            </li>
            <li>
              <a href="index-2.html">Homepage V2</a>
            </li>
            <li>
              <a href="index-3.html">Homepage V3</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="javascript:void(0)">Adventures</a>
          <ul>
            <li>
              <a href="adventure-1.html">Adventure List One</a>
            </li>
            <li>
              <a href="adventure-2.html">Adventure List Two</a>
            </li>
            <li>
              <a href="adventure-3.html">Adventure List Three</a>
            </li>
            <li>
              <a href="adventure-detail-1.html">Adventure Details</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="javascript:void(0)">Blog</a>
          <ul>
            <li>
              <a href="blog-1.html">Blog List One</a>
            </li>
            <li>
              <a href="blog-2.html">Blog List Two</a>
            </li>
            <li>
              <a href="blog-grid.html">Blog Grid</a>
            </li>
            <li>
              <a href="blog-details.html">Blog Details</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="javascript:void(0)">Other Pages</a>
          <ul>
            <li>
              <a href="about.html">About Us</a>{" "}
            </li>
            <li>
              <a href="login.html">Log In</a>{" "}
            </li>
            <li>
              <a href="signup.html">Sign Up</a>{" "}
            </li>
            <li>
              <a href="404.html">Error</a>{" "}
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="javascript:void(0)">Cart Pages</a>
          <ul>
            <li>
              <a href="cart.html">Cart</a>
            </li>
            <li>
              <a href="check-out.html">Check Out</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
