import Modal from 'react-modal';

interface TransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal"
            overlayClassName="Overlay"
        >

            <form>
                <h2>Nova transação</h2>

                <input type="text" placeholder="Titulo" />
                <input type="number" placeholder="Valor" />
            </form>

        </Modal>
    )
}