import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-black text-white">
            <div className="container-fluid">
                <Link
                    className="navbar-brand text-white"
                    to="/">To-Do</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                aria-current="page"
                                to="/">Home</Link>
                        </li>

                        {
                            localStorage.getItem('token') ?
                                <>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link text-white"
                                            to="/your_todos">your todos</Link>
                                    </li>

                                </> : ''
                        }

                    </ul>
                    
                    {
                        !localStorage.getItem('token') ?
                            <>
                                <button
                                    className="btn btn-sm btn-success mx-2"
                                    type="button"
                                    onClick={() => navigate('/signup')}> Sign up</button>

                                <button
                                    className="btn btn-sm btn-success"
                                    type="button"
                                    onClick={() => navigate('/signin')}> Sign in</button>
                            </>
                            :

                            <button
                                className="btn btn-sm btn-success"
                                type="button"
                                onClick={() => handleLogout()}>Log out</button>

                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar