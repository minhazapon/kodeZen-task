import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";




const Table = () => {


    return (
        <div>

            <div>


             <div className=" kzui-title">
               <p className=" kzui-table-title ">Name</p>
               <p className=" kzui-table-title ">Value</p>
               <p className=" kzui-table-title kzui-c-delete ">Delete</p>
               <p className=" kzui-table-title ">Edit</p>
             </div>
              
              <div>
                <hr></hr>
              </div>
        

             <div className=" kzui-title kzui-hover  ">
               <p className=" kzui-table-title ">Primary</p>
               <p className=" kzui-table-title kzui-c-m ">Color: [#fff]</p>
               <p className=" kzui-table-title kzui-BsFillTrashFill  "> <BsFillTrashFill></BsFillTrashFill></p>
               <p className=" kzui-table-title kzui-BsFillPenFill  "><BsFillPenFill></BsFillPenFill></p>
             </div>
             <div>
              <hr></hr>
             </div>
            






           



            </div>
               
        </div>
    );
};

export default Table;