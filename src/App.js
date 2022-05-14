//import logo from './logo.svg';
import './App.css';
//import './add.js';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react' 
function App() {
  const [searchTerm, setSearchTerm]=useState('')
  return (
    <div className="App">
      <img className='logo' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fgetspottabl&psig=AOvVaw1b6cSudpxUma-NoBx46C0m&ust=1652600560588000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjy-IC_3vcCFQAAAAAdAAAAABAD' alt='logo'></img>
      <div className='heading'>

      
      <h2>Your SPOTTABL Team</h2>
      <h6>SPOTTABL supports you all througout</h6>
      </div>
      <div className='box'>
      <h3 className='heading3'>Customer Success Managers</h3>

      <input id='search' type="text" placeholder="Add by Name or email" onChange={event=>{setSearchTerm(event.target.value)}} />
      <hr></hr>
      <a ><button  className='button' >Add CSM</button> </a>

      {JSONDATA.filter((val)=>{
        if(searchTerm===""){
          return val;
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return(

         <div className='user' key={key}>
           <p>{val.first_name }{" "}{val.last_name}<br/> {val.Position} <hr></hr></p>
        </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;



// import React, { Component } from "react";
// import { Form, Button } from 'semantic-ui-react';
// import jsonfile from'jsonfile';

// var file = 'MOCK_DATA.json'

// var obj = {name: 'JP'}


// export default class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       name: "",
//       email: ""
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
// }


// handleChange = (e, {name, value}) => {
//   this.setState({[name]: value})
// }

// sendDataSomewhere = function jsonfile(file){
// jsonfile.writeFile(file, obj, function (err) {
//   console.error(err);
// });
// };



//   render() {
//     return (
//      <div>
//       <Form onSubmit={this.sendDataSomewhere}>
//         <Form.Field>
//           <Form.Input name="name" value={this.state.name} onChange={this.handleChange}/>
//         </Form.Field>
//         {/* <Form.Field>
//           <Form.Input name="email" value={this.state.email} onChange={this.handleChange}/>
//         </Form.Field> */}
//         <Button type="submit">Submit</Button>
//        </Form>
//      </div>
//     );
//   }
// }

// const handleSaveToPC = (jsonData,filename) => {
//   const fileData = JSON.stringify(jsonData);
//   const blob = new Blob([fileData], {type: "text/plain"});
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.download = `${filename}.json`;
//   link.href = url;
//   link.click();
// }