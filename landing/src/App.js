import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';

function App() {
  return (
    <BrowserRouter >
    <div className="main-app">
      <Header/>

        
        <Body/>
      </div>

    </BrowserRouter>
  );

}

export default App;
