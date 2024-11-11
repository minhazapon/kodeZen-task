

import {  NavLink } from 'react-router-dom';
import './raw css file/style.css'


const Nav = () => {


    return (
        <div>
        <div className='kzui-navbar '>
        <div className=' kzui-icon '>
        <img  src="https://cdn-icons-png.flaticon.com/128/4494/4494512.png" alt="" height="50px" width="50px" />
        <p className=" kzui-name ">aBlocks</p>
        </div>
        <div className=' kzui-navChild'>
        <NavLink to='/welcome' ><button className=' kzui-n1 kzui-the '><span className=' kzui-text-color'>Welcome</span></button></NavLink>
        <NavLink to='/block' ><button className=' kzui-n1 kzui-the '><span className=' kzui-text-color'>Blocks</span></button></NavLink>
        <NavLink to='/setting' ><button className=' kzui-n1 kzui-the '><span className=' kzui-text-color'>Setting</span></button></NavLink>
        </div> 
        </div>
        </div>
    );
};

export default Nav;