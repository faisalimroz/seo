import Incomplete from '../Incomplete/Incomplete';
import Todo from '../Todo/Todo';
import Doing from '../Doing/Doing';
import Underreview from '../Underreview/Underreview';
import Complete from '../Complete/Complete';
import Overdue from '../Overdue/Overdue';
import  './Home.css'
function Home() {
    return (
        <div  className="home-container  ">
            <div className="sections-container">
                <Incomplete />
                <Todo />
                <Doing />
                <Underreview />
                <Complete />
                <Overdue />
            </div>
        </div>
    );
}

export default Home;