
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <div className='min-h-screen bg-primary '>
                <Navbar></Navbar>
            
                <Outlet></Outlet>
          
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;