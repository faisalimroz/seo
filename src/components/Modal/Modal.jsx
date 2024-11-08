import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Modal({ attachments, isOpen, onClose, cardId, onUploadSuccess, uploadUrl }) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    if (!isOpen) return null;

   
    const handleFileSelect = (event) => {
        setSelectedFiles(event.target.files);
    };

  
    const handleUpload = async () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }
        formData.append('cardId', cardId);

        try {
            await axios.post(uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onUploadSuccess();
            setSelectedFiles([]); 
            onClose();
        } catch (error) {
            console.error('Error uploading files', error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-white p-6 rounded shadow-lg w-96 relative">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>&times;</button>
                <h2 className="text-lg font-semibold mb-4">Attachments</h2>

                <div className="flex flex-col items-center">
                    <input
                        id="upload-file"
                        type="file"
                        className="mb-4"
                        multiple
                        onChange={handleFileSelect} 
                    />
                    <button
                        onClick={handleUpload} 
                        className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                        disabled={selectedFiles.length === 0}
                    >
                        Upload Files
                    </button>
                </div>

                <ul className="mt-4">
                    {attachments.length > 0 ? (
                        attachments.map((file, index) => (
                            <li key={index} className="text-sm text-gray-700">
                                File Name: {file.name} and Type: {file.type}
                            </li>
                        ))
                    ) : (
                        <li className="text-sm text-gray-700">No attachments available.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

Modal.propTypes = {
    attachments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    cardId: PropTypes.string.isRequired,
    onUploadSuccess: PropTypes.func.isRequired,
    uploadUrl: PropTypes.string.isRequired, 
};

export default Modal;