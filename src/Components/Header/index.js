import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/images/logo.png';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from 'react-icons/io5';
import Navigation from './navigation/navigation'; 

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center text-white">
                        Barefoot Artemis Pet Shop: Where Every Paw Finds Its Path to Happiness!
                    </p>
                </div>
            </div>
            
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}>
                                <img src={Logo} alt='Logo' />
                            </Link>
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <div className='headerSearch d-flex align-items-center ml-2'>
                                <input type='text' placeholder='Search for products...' />
                                <button style={{ background: 'white', border: 'none', borderRadius: '50%' }}>
                                    <IoIosSearch style={{ color: 'black' }} />
                                </button>
                            </div>
                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'>
                                    <FiUser style={{ color: 'orange' }} />
                                </Button>
                                <div className='cartTab d-flex align-items-center'>
                                    <span className='price'>$3.29</span>
                                    <div className='position-relative ml-2'>
                                        <Button className='circle'>
                                            <IoBagOutline style={{ color: 'orange' }} />
                                        </Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation /> 
        </div>
    );
}

export default Header;
