import { useState } from "react";
import Modal from "./Modal";
import Table from "./Table";



const ColorTable = () => {

    const [modalValue, setModalValue] = useState(false)

    const [rows , setRows] = useState([  
       { name:"primary", value:" [#fff]" }
    ])

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
      };
    
      const handleSubmit = (newRow) => {
        rowEdit === null
          ? setRows([...rows, newRow])
          : setRows(
              rows.map((currRow, idx) => {
                if (idx !== rowEdit) return currRow;
                return newRow;
              })
            );
      };

    const [rowEdit, setRowEdit] = useState(null)

    const handleRowEdit = (idx) =>{
       setRowEdit(idx)
       setModalValue(true)
    }

    return (
        <div>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleRowEdit} ></Table>
        <button className=" kzui-add-button kzui-add-button-border  " onClick={() => setModalValue(true)} >+ AddColor</button>
        <div className=" kzui-modal-flex ">
        { modalValue && <Modal  closeModal={() => { setModalValue(false), setRowEdit(null) } } onSubmit={handleSubmit}
         defaultValue={rowEdit !== null && rows[rowEdit] }
        ></Modal>}
        </div>
        </div>
    );
};

export default ColorTable;