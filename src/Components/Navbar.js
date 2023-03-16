import React from 'react'

export default function Navbar(props) {
  return (
    < >
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">{props.feature}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.about}</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="form-check form-switch mx-5" >
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className= {`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`}  htmlFor="flexSwitchCheckDefault"> Enable Darkmode</label>
</div>
  </nav>
  </>
  )
}
  