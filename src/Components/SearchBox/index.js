import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
    return (
        <div className='col-sm-10 d-flex align-items-center part2'>
            <div className='headerSearch d-flex align-items-center ml-2'>
                <input type='text' placeholder='Search for products...' />
                <button style={{ background: 'white', border: 'none', borderRadius: '50%' }}>
                    <IoIosSearch style={{ color: 'orange' }} />
                </button>
            </div>

        </div> 
    );
}

export default SearchBox;
