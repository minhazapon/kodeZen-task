import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";




const Table = ({rows, deleteRow, editRow}) => {


    return (
        <div>
        <div>
        {
        rows.map( (row, idx) => {
        return <div key={idx} className=" kzui-title kzui-hover  ">
        <p className=" kzui-table-title ">{ row.name }</p>
        <p className=" kzui-table-title kzui-c-m  "> {row.value} </p>
        <p className=" kzui-table-title kzui-BsFillTrashFill  "> <BsFillTrashFill onClick={() => { deleteRow(idx)
        if(deleteRow){
        Swal.fire({
        title: 'Delete!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
        })}}} ></BsFillTrashFill></p>
        <p className=" kzui-table-title kzui-BsFillPenFill   "><BsFillPenFill onClick={() => editRow(idx)} ></BsFillPenFill></p>
        <div>
        <hr></hr>
        </div>
        </div>   
        })}
        </div>
        </div>
    );
};

export default Table;