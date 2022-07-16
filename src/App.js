import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Sills} from "./skills/Sills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Sills/>
        </div>
    );
}

export default App;
