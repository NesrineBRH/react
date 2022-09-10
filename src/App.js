import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<h1>Contact Page</h1>
<h2>Please Fill-in This Form</h2>
  <form>
  <div className="mb-3 row">
    <input className="form-control" type="text" placeholder="First Name" aria-label="Disabled input example" />
    <input className="form-control" type="text" defaultValue="Last Name" aria-label="Disabled input example" />
  </div>
  <div classname="mb-3 row">
  <label htmlFor="exampleDataList" className="form-label">Your Statut</label>
  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type Your Statut." />
  <datalist id="datalistOptions">
    <option value="Teacher">
    </option><option value="Student Level 2">
    </option><option value="Student Level 1">
    </option></datalist>
</div>
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control-plaintext" id="staticEmail"  />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  </div>
</form>




    </div>
  );
}

export default App;
