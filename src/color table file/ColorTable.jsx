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
    
    const handleSubmit = (newRow) =>{

        setRows([...rows, newRow])

    }


    return (
        <div>
        <Table rows={rows} deleteRow={handleDeleteRow} ></Table>
        <button className=" kzui-add-button kzui-add-button-border  " onClick={() => setModalValue(true)} >+ AddColor</button>
        <div className=" kzui-modal-flex ">
        { modalValue && <Modal  closeModal={() => { setModalValue(false) } } onSubmit={handleSubmit} ></Modal>}
        </div>
        </div>
    );
};

export default ColorTable;