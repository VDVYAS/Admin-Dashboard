
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import { Maindash } from './component/Maindash/Maindash';
import { RightSide } from './component/RightSide/RightSide';

function App() {
    return (
    <div className="App">
        <div className="AppGlass">
         <Sidebar/>
         <Maindash/>
         <RightSide/>
        </div>
    </div>
    );
}

export default App;