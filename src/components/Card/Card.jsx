
import { FaClipboard } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

const Card = () => {
    return (
        <div>

            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1.5">
                    <img
                        className="w-5 h-5 rounded-full"
                        src="https://i.ibb.co/gwpC9Rz/image.png"
                        alt="Client avatar"
                    />
                    <p className="text-gray-900 font-medium text-sm">Client Name</p>
                </div>
                <div className="flex items-center space-x-1.5">
                    <img
                        className="w-5 h-5 rounded-full"
                        src="https://i.ibb.co/6rfWP1N/fssss.png"
                        alt="User avatar"
                    />
                    <span className="text-gray-900 font-medium text-sm">Sadik Istiak</span>
                </div>
            </div>

            <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center space-x-1.5">
                    <FaLayerGroup className="text-sm" />
                    <p className="text-xs">Lorem ipsum dolor sit amet curn...</p>
                </div>
                <div className="flex items-center space-x-1 text-gray-500 bg-gray-100 p-1 rounded text-xs">
                    <FaClipboard />
                    <p>1/2</p>
                </div>
            </div>

            
        </div>
    );
};

export default Card;
