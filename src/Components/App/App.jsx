import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import All from '../All/All';
import Create from '../Create/Create';
import Delete from '../Delete/Delete';
import Find from '../Find/Find';
import Update from '../Update/Update';

function App() {
  return (
    <div className='app'>
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/find" element={<Find/>}/>
      </Routes> 

    </div>
  );
}

export default App;
