import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar'
import { selectSignedIn } from './features/Userslice';
import {useSelector} from 'react-redux'
import Blogs from './components/Blogs'

function App() {
  const isSignedIn=useSelector(selectSignedIn)

  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      {isSignedIn&&<Blogs/>}
    </div>
  );
}

export default App;
