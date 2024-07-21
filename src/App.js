import './App.css';
import Navbar from './Components/Navbar';
import SectionLast from './Components/SectionLast';
import SectionThrid from "./Components/SectionThrid";
import Footer from "./Components/Footer";
import Headerhome from './Components/Headerhome';

function App() {
  return (
    <div className="App">
<Navbar/>
<Headerhome/>
<SectionLast/>
<SectionThrid/>
<Footer/>
    </div>
  );
}

export default App;
