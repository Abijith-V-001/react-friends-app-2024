import logo from './logo.svg';
import './App.css';
import { AddFriend } from './Components/AddFriend';
import SearchFriend from './Components/SearchFriend';
import ViewFriends from './Components/ViewFriends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/search' element={<SearchFriend/>}/>
      <Route path='/view' element={<ViewFriends/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
