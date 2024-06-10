import logo from './logo.svg';
import './App.css';
import { AddFriend } from './Components/AddFriend';
import SearchFriend from './Components/SearchFriend';
import ViewFriends from './Components/ViewFriends';

function App() {
  return (
    <div>
      <AddFriend/>
      <SearchFriend/>
      <ViewFriends/>
    </div>
  );
}

export default App;
