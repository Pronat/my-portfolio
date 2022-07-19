import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./myworks/MyWorks";
import {DistanceWork} from "./distanceWork/DistanceWork";
import {Contacts} from "./contacts/Contacts";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistanceWork/>
            <Contacts/>
        </div>
    );
}

export default App;
