import React from 'react';

const Images = () => {
    return (
        <div className="flex items-center space-x-3">
        <img
            className="w-5 h-5 rounded-full"
            src="https://i.ibb.co/cTqhG54/image.png"
            alt="Avatar"
        />
        <img
            className="w-5 h-5 rounded-full"
            src="https://i.ibb.co/KbLdRq4/image.png"
            alt="Avatar"
        />
        <p className="text-xs bg-gray-200 rounded-full px-1">12+</p>
    </div>

    );
};

export default Images;