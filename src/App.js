
// import About from './About';
import { useState } from 'react';
import './App.css';
import Textform from './Textform.js';
import Navbar from './components/Navbar';
import Alert from './components/Alert';


function App() {
const[mode,setMode]=useState({
     theme:"light",
     navColor:'light',  //excp
     colour:'black',
      background:"white"
});

const[alert,setAlert]=useState(null);

const showAlert=(msg,type)=>{
  setAlert({
    message:msg,
    type:type
  })
}

const toggleMode=()=>{
  if(mode.theme==='light'){
    setMode({
       theme:"dark",
       navColor:'dark',
       color:'white',
       background:"black"
    });
    document.body.style.backgroundColor="grey";
    showAlert("Dark mode has been Enabled","Success")

  }
  else{
    setMode({
       theme:"light",
       color:'black',
      background:"white"
    });
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been Enabled","success")

  }
}


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <Textform mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
