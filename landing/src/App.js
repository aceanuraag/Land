import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Header/>
      <div className= "flex">
        <SideBar/>
        <Body/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
