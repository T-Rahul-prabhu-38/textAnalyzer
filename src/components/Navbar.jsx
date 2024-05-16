import React from 'react'
import '../App.css';
//import PropTypes from 'prop-types'//impt


export default function Navbar(props) {

  /*************** 
    code for dark mode 
  
    const [mystyle, setMyStyle] = useState({
      color:'black',
      backgroundColor:'white'
    });
    const [btn, SetBtn] = useState("enable dark mode");
  
    const toggleScreen = () => {
      if (mystyle.color === 'black') {
        setMyStyle({
          color: 'white',
          backgroundColor: 'black'
        })
        SetBtn("enable light mode");
      }
      else {
        setMyStyle({
          color: 'black',
          backgroundColor: 'white'
        })
      }
      SetBtn("enable light mode");
    };
  *************/
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/src/components/landingPage.jsx'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propType ={
//     title :PropTypes.string,
// }
