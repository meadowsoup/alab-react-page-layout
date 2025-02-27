import './App.css'
import Homepage from './components/homepage'
import EmployeePage from "./components/EmployeePage"
// import Payload from './components/Payload'

function App() {

  // let openPortal = true;

  return (
    <div className='app-container'>
      {/* {openPortal &&  <Payload />} */}
      <Homepage />
      <EmployeePage />
      {/* <h1 className='header'>React Page Layout</h1> */}
    </div>
    
  );
}

export default App
