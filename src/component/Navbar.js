import * as React from 'react'
import logo from '../images/icon.png'
import { navigate } from 'gatsby'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light mb-5" >
            <div class="container-fluid">
                <a class="navbar-brand">
                    <img src={logo} alt="" width="30" height="24"></img>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul class="navbar-nav me-auto" >
                        <li class="nav-item cursor" onClick={() => navigate('/dashboard/user')}>
                            <a class="nav-link active" aria-current="page" >User</a>
                        </li>
                        <li class="nav-item cursor" onClick={() => navigate('/dashboard/asset')} >
                            <a class="nav-link active" aria-current="page" >Asset</a>
                        </li>
                    </ul>
                    <button class="btn btn-outline-danger" type="submit" onClick={() => navigate('/')}>Logout</button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar