import React from 'react';
import './../Styles/Home.css'
function Navbar(props) {
    return (
        <div className="nav">
            <div>
              <h1>CONVIN</h1>
            </div>

            <div className="nav-links">
                <button type="submit" className="btn btn-primary btn2"> <a href="/">HOME</a> </button>
                <button type="submit" className="btn btn-primary btn2"> <a href="/cards">CARDS</a> </button>
            </div>            
          </div>
    );
}

export default Navbar;