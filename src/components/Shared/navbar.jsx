import React, { Component } from 'react';
import { Link } from '@reach/router';
class Navbar extends Component {

  onLogout = ()=>{
    localStorage.removeItem("userId");
    window.location.href = "/";
  }

  render() {

    return (


      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">goodreads</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={`/user/${localStorage.getItem("userId")}`}>Home <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authors">Authors</Link>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0" style={{ marginRight: '10%' }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          <Link to = {`/user/${localStorage.getItem("userId")}`} class="inset" style={{ marginRight: '3%' }}>
            <img src="http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200" />
          </Link>

          <div class="pull-right">
            <ul class="nav pull-right">
              <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Welcome, { localStorage.getItem("User-Name")  
              }  <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li class="divider"></li>
                  <li onClick={this.onLogout} style={{cursor: "pointer"}}><label><i class="icon-off"></i> Logout</label></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    );

  }

}

export default Navbar; 
