

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
                   <p className=' kzui-n1 kzui-the '><NavLink to='/b' ><span className=' kzui-text-color'>Welcome</span></NavLink></p>
                   <p className=' kzui-n1 kzui-the '><NavLink to='/b' ><span className=' kzui-text-color'>Blocks</span></NavLink></p>
                   <p className=' kzui-n1 kzui-the '><NavLink to='/b' ><span className=' kzui-text-color'>Setting</span></NavLink></p>
               </div> 
            </div>

          
            
        </div>
    );
};

export default Nav;