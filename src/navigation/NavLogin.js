import React from 'react';

class NavLogin extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <a className="navbar-brand" href="/">EAT & GO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">CONTACT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">ABOUT US</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default NavLogin;