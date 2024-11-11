import { Link } from "react-router-dom";



const Blocks = () => {
    return (
        <div className=" kzui-block-page ">
            
            <Link to='/'>
            <div>
                <button className=" kzui-button1 kzui-the ">Go <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="20px" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </span> Design System Page</button>
            </div>
            </Link>
            
            
        </div> 
    );
};

export default Blocks;