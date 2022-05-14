//import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react' 
function App() {
  const [searchTerm, setSearchTerm]=useState('')
  return (
    <div className="App">
      <img className='logo' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fgetspottabl&psig=AOvVaw1b6cSudpxUma-NoBx46C0m&ust=1652600560588000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjy-IC_3vcCFQAAAAAdAAAAABAD' alt='logo'></img>
      <div className='heading'>

      
      <h2>Your SPOTTABLE Team</h2>
      <h6>SPOTTABLE supports you all througout</h6>
      </div>
      <div className='box'>
      <h3 className='heading3'>Customer Success Managers</h3>

      <input type="text" placeholder="Add by Name or email" onChange={event=>{setSearchTerm(event.target.value)}} />

      {JSONDATA.filter((val)=>{
        if(searchTerm==""){
          return val
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val,key)=>{
        return(

         <div className='user' key={key}><p>{val.first_name }{" "}{val.last_name} </p>
        </div>
        );
      })};
      </div>
    </div>
  );
}

export default App;
