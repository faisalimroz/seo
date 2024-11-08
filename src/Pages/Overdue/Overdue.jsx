import  { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegComments } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import { toast } from 'react-toastify'; 
import Modal from '../../components/Modal/Modal';
import Card from '../../components/Card/Card';
import Images from '../../components/Images/Images';
import useModal from '../../components/useModal/useModal';
const Overdue = () => {
    const [cards, setCards] = useState([]);
    
    // Use the custom modal hook
    const { modalData, selectedCardId, isModalOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5000/overdue');
                setCards(result.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    
    return (
        <div className='section'>
            <div className='flex justify-between items-center'>
                <h2 className="section-title">Overdue</h2>
                <h2 className='section-title'>0</h2>
            </div>
             <div className="card-container">
                {cards.map((card) => (
                    <div className="card" key={card._id}>
                        <div className="max-w-[300px] mx-auto bg-white rounded-lg shadow-md p-3 space-y-1.5">
                            <Card></Card>

                            <div className="flex items-center space-x-6 text-gray-500">
                                <Images></Images>
                                <div className="flex items-center space-x-2.5">
                                    <div className="flex items-center space-x-1 text-xs">
                                        <FaRegComments />
                                        <p>15</p>
                                    </div>
                                    <div className="flex items-center space-x-1 text-xs">
                                        <button onClick={() => openModal(card.attachments, card._id)}> 
                                            <RiAttachment2 />
                                        </button>
                                        <p>{card.attachments ? card.attachments.length : 0}</p> 
                                    </div>
                                    <div className="flex items-center space-x-1 text-xs">
                                        <FaRegCalendarDays />
                                        <p>{card.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal 
                attachments={modalData} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                cardId={selectedCardId} 
                uploadUrl="http://localhost:5000/uploadoverdue" 
                onUploadSuccess={() => toast.success('Files uploaded successfully!')} // Trigger toast on success
            />
        </div>
    );
};

export default Overdue;