import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./myworks/MyWorks";
import {DistanceWork} from "./distanceWork/DistanceWork";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistanceWork/>
        </div>
    );
}

export default App;
