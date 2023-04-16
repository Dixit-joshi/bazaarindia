import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'
function Header() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to='/' className='text-decoration-none d-flex'>
                <i className='bi bi-shop-window fs-4 text-warning me-2'></i>
                <a className="navbar-brand" href="#">Bazaar</a>
              </Link>
              <div className="input-group mb-3">
              <input type="text" className="form-control rounded 0" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span className="input-group-text bg-warning" id="basic-addon2"><i className='bi bi-search'></i></span>
              </div>
                <ul className="navbar-nav me-auto mt-2 ms-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active d-flex flex-column" href="#" aria-current="page">
                          <small style={{fontsize:"10px"}}>Hi,Guest</small>
                          <Link to="/Login" className="text-decoration-none text-white"><strong style={{fontsize:"11px"}}>Sign in</strong></Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active d-flex flex-column" href="#" aria-current="page">
                          <small style={{fontsize:"10px"}}>Your</small> <strong style={{fontsize:"11px"}}>Shop</strong>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active d-flex" to="/Checkout" aria-current="page">
                          <i className='bi bi-basket2 text-white me-1 fs-5'></i>
                          <span className='mt-1'><strong>{basket.length}</strong></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header