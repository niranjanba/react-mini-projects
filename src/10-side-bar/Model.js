import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Model() {
    const { showModal, closeModal } = useGlobalContext();

    return (
        <div className={`modal-overlay ${showModal && "show-modal"}`}>
            <div className="modal-container">
                <h3>model content</h3>
                <button className="close-modal" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default Model;
