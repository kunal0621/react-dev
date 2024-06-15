import Button from "./Button";

function Modal({children, show, closeModal}) {
    return (
        <>
        { show ? 
            <div className="modal-bg">
                <div className="modal-player">
                    <Button className="btn-close" onClick={closeModal}>X</Button>
                    {children}
                </div>
            </div> : null

        }
        </>
    );
}

export default Modal;