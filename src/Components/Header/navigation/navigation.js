import React from 'react';  
import { Link } from 'react-router-dom';   
import Button from '@mui/material/Button';  
import { IoIosMenu } from "react-icons/io";  
import { FaAngleDown } from "react-icons/fa";  

const Navigation = () => {  
    return (  
        <nav>  
            <div className='container'>  
                <div className='row'>  
                    <div className='col-sm-3 navPart1 d-flex align-items-center justify-content-center'>  
                        <Button className='allCatTab align-items-center'>   
                            <span className='icon1 mr-2'><IoIosMenu/></span>  
                            <span className="text">ALL CATEGORIES</span>  
                            <span className='icon2 ml-2'><FaAngleDown/></span>  
                        </Button>  
                    </div>  

                    <div className='col-sm-9 navPart2 d-flex align-items-center justify-content-center'>  
                    <div style={{ textAlign: 'center' }}>
                       <ul className='list list-inline ml-auto'>  
                         <li className='list-inline-item'>
                         <Link to="/"><Button>Home</Button></Link>
                              <div className='submenu'>
                              </div>
                         </li>  
                         <li className='list-inline-item'>
                        <Link to="/cat-foods"><Button>Cat Foods</Button></Link>
                        ``
                        </li>  
                         <li className='list-inline-item'><Link to="/dog-foods"><Button>Dog Foods</Button></Link></li>  
                         <li className='list-inline-item'><Link to="/accessories"><Button>Accessories</Button></Link></li>  
                         <li className='list-inline-item'><Link to="/treats"><Button>Treats</Button></Link></li>  
                         <li className='list-inline-item'><Link to="/treats"><Button>Contact Us</Button></Link></li>  
                        
                       </ul>  
                    </div>
 
                    </div>  
                </div>  
            </div>  
        </nav>  
    );  
}  

export default Navigation;