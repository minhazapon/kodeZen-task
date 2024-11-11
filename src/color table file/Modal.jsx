


const Modal = () => {
    return (
        <div className=" kzui-modal-container ">

            <div className=" kzui-modal-form ">

                <form>

                   <p>Name:</p>
                   <input className=" kzui-modal-name  " placeholder="Name" type="text"  />
                   <p>Value</p>
                   <input className=" kzui-modal-name  " placeholder="Value" type="text"  />
                   <br></br>
                   <input className=" kzui-button-name  " type="submit" value="Suibmit" />




                </form>


            </div>
            
        </div>
    );
};

export default Modal;