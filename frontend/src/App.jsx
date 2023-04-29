import {Route,Routes} from "react-router-dom";
import PrincipalPage from './pages/PrincipalPage';
import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import PersonalPage from "./pages/PersonalPage";
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id="mainheader">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PrincipalPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/personal" element={<PersonalPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
