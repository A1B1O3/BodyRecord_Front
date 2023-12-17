import { useState } from 'react';
import ModalBasic from './ModalBasic';


function Modal() {
  
    const [modalOpen, setModalOpen] = useState(false);
    
    const toggleModal = () => {
        setModalOpen((prevModalOpen) => !prevModalOpen);
      };

    const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
        <button style={{  width:"120px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height:"120px",
        position:"fixed",
        top:"85vh",
        backgroundColor:"#6100FF",
        border:"none",
        right:"70px",
        borderRadius:"100px"}}  onClick={toggleModal}
    >
        <img src = "img/Line.png"/>
    </button>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </div>
    );
}

export default Modal;