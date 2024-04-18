
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


function App(){
  return (
    <Router>
      <Header/>
    <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/videoes" element={<Videos/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
    </Routes>
    
  </Router>
  )
  
  ;
}

export default App;
