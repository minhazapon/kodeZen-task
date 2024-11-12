import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";




const Table = ({rows, deleteRow}) => {


    return (
        <div>

            <div>

          
              
              {
                rows.map( (row, idx) => {
                return <div key={idx} className=" kzui-title kzui-hover  ">
                <p className=" kzui-table-title ">{ row.name }</p>
                <p className=" kzui-table-title kzui-c-m  "> {row.value} </p>
                <p className=" kzui-table-title kzui-BsFillTrashFill  "> <BsFillTrashFill onClick={() => deleteRow(idx)} ></BsFillTrashFill></p>
                <p className=" kzui-table-title kzui-BsFillPenFill   "><BsFillPenFill></BsFillPenFill></p>
                <div>
                <hr></hr>
                </div>
                </div>   
                } )
              }

        

            </div>
               
        </div>
    );
};

export default Table;