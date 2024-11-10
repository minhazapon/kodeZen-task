
import { Link } from 'react-router-dom';
import '../raw css file/style.css'


const Welcome = () => {


    return (

        <div className=" kzui-welcome-margin kzui-padding ">
            <div>
            <p className=" kzui-text-setting  ">Setting</p>
            <div>
        <div className=" kzui-border ">
            <div className="  ">
            <p className="kzui-menu ">Menu</p>
            <Link>
            <div className=" kzui-general ">
            <img src="https://cdn-icons-png.flaticon.com/128/888/888108.png" alt="" height="30px" width="30px" />
            <p className=" kzui-menu">General</p>
            </div>
            </Link>
            
            <Link>
            <div className=" kzui-general ">
            <img src="https://cdn-icons-png.flaticon.com/128/13433/13433333.png" alt="" height="30px" width="30px" />
            <p className=" kzui-menu">Design System</p>
            </div>
            </Link>

            <Link>
            <div className=" kzui-general  ">
            <img src="https://cdn-icons-png.flaticon.com/128/8637/8637195.png" alt="" height="30px" width="30px" />
            <p className=" kzui-menu">integration</p>
            </div>
            </Link>   
           
            </div>
            </div>
            </div>
        </div>
        </div>
       
    );
};

export default Welcome;