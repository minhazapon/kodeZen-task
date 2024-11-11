
import { Link, Outlet } from 'react-router-dom';
import '../raw css file/style.css'


const Welcome = () => {


    return (

        

        <div className='  kzui-flex '>

        <div className=" kzui-welcome-margin kzui-padding ">
        <div>
        <p className=" kzui-text-setting  ">Setting</p>
        <div>
        <div className=" kzui-border ">
        <div className="  ">
        <p className="kzui-menu ">Menu</p>
        <div className=" kzui-general ">
        <img src="https://cdn-icons-png.flaticon.com/128/888/888108.png" alt="" height="30px" width="30px" />
        <p className=" kzui-menu">General</p>
        </div>
        <Link to="DSystem" >
        <button className=' kzui-button '>
        <div className=" kzui-general ">
        <img src="https://cdn-icons-png.flaticon.com/128/13433/13433333.png" alt="" height="30px" width="30px" />
        <p className=" kzui-menu">Design System</p>
        </div>
        </button>
        </Link>
        <div className=" kzui-general  ">
        <img src="https://cdn-icons-png.flaticon.com/128/8637/8637195.png" alt="" height="30px" width="30px" />
        <p className=" kzui-menu">integration</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        
        {/* //////outlet section */}


        <div>

           
            <Outlet></Outlet>
 

        </div>





        </div>




       
    );
};

export default Welcome;