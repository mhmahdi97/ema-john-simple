import React, { useContext } from 'react';
import "./Header.css"
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(result => {})
        .catch(error => console.log(error))
    }

    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign Up</Link>
            {user && <span className='text-white'>Welcome {user.email} <button className='btn-signout' onClick={handleLogout}>Log Out</button></span>}
            </nav>
        </div>
    );
};

export default Header;