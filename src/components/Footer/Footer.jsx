import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-primary py-2 border-t border-gray-300">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                  
                   
                    <div className="text-gray-700 mb-2 md:mb-0">
                        <img
                            src="https://st.prntscr.com/2023/07/24/0635/img/footer-logo.png"
                            alt="Footer Logo"
                            className="h-4 md:h-6"
                        />
                    </div>

                  
                    <div className="flex flex-wrap justify-center space-x-4 text-sm text-center mb-2 md:mb-0">
                        <a href="#" className="text-blue-600 hover:underline">
                            Download
                        </a>
                        <a href="#" className="text-blue-600 hover:underline">
                            Tutorials
                        </a>
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy
                        </a>
                        <a href="#" className="text-blue-600 hover:underline">
                            Help
                        </a>
                        <a href="#" className="text-blue-600 hover:underline">
                            Advertise
                        </a>
                    </div>

                  
                    <div className="text-gray-500 text-xs md:text-sm text-center">
                        Skillbrains © 2009-2022
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
