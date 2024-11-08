import { useState } from 'react';

function useModal() {
    const [modalData, setModalData] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (attachments, cardId) => {
        setModalData(attachments || []);
        setSelectedCardId(cardId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return {
        modalData,
        selectedCardId,
        isModalOpen,
        openModal,
        closeModal,
    };
}

export default useModal;
