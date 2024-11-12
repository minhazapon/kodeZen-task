import { useState } from "react";



const Modal = ({closeModal, onSubmit}) => {

    const [formState, setFormState] = useState({

        name:"",
        value:""

    })


    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

  
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState);
        closeModal();
    };
 


    return (

        <div className=" kzui-modal-container " onClick={ (e) => { if(e.target.className === "kzui-modal-container" ) closeModal()  }} >
        <div className=" kzui-modal-form ">
        <form>
        <p>Name:</p>
        <input className=" kzui-modal-name  " placeholder="Name" required type="text" name="name" value={formState.name} onChange={handleChange}  />
        <p>Value:</p>
        <input className=" kzui-modal-name  " placeholder="Value" required type="text" name="value" value={formState.value} onChange={handleChange}  />
        <br></br>
        <input onClick={handleSubmit} className=" kzui-button-name kzui-button-hover   " type="submit" value="Submit" />
        </form>
        </div>
        </div>

    );
};

export default Modal;