import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      directory: [],
      tempName: "",
      tempPosition: "",
      tempAge: "",
      tempNationality: "",
      delName: "",
      delPosition: "",
      delAge: "",
      delNationality: "",
      changeName: "",
      changePosition: "",
      changeAge: "",
      changeNationality: "",
      success: true
    }
  }
  
  getData() {
    fetch('/directory')
      .then(res => res.json())
      .then((direct) => {this.setState({ directory: direct.info }) });

  }
  putData(){
    let data =  {name: this.state.tempName, position: this.state.tempPosition, age: this.state.tempAge, nationality: this.state.tempNationality};
    let options ={
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/directory', options);
  }
  delData(){
    let data =  {name: this.state.delName, position: this.state.delPosition, age: this.state.delAge, nationality: this.state.delNationality};
    let options ={
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/directory', options);
    
  }
  changeData(){
    let data =  {name: this.state.changeName, position: this.state.changePosition, age: this.state.changeAge, nationality: this.state.changeNationality};
    let options ={
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/directory', options);
    
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //The nested divs are the forms
  render() {
    return (
      <div className="App">
        <h1>Squad List (GET DATABASE) - See Updated List</h1>
        <button onClick={() => { this.getData() }}>Squad List</button>
        <h1>Sign a Player (POST SPECIFIC ENTRY)</h1>
        <div>

          Enter Name:
          <input type="text" name="tempName" value={this.state.tempName} onChange={this.handleChange}></input>
          Enter Position:
          <input type="text" name="tempPosition" value={this.state.tempPosition} onChange={this.handleChange}></input>
          Enter Age:
          <input type="text" name="tempAge" value={this.state.tempAge} onChange={this.handleChange}></input>
          Enter Nationality:
          <input type="text" name="tempNationality" value={this.state.tempNationality} onChange={this.handleChange}></input>
          <button onClick={()=>{this.putData()}}>Sign</button>
        </div>



        <h1>Sell a Player (DELETE ENTRY)</h1> 
        <div>
          
          Enter Name:
          <input type="text" name="delName" value={this.state.delName} onChange={this.handleChange}></input>
          Enter Position:
          <input type="text" name="delPosition" value={this.state.delPosition} onChange={this.handleChange}></input>
          Enter Age:
          <input type="text" name="delAge" value={this.state.delAge} onChange={this.handleChange}></input>
          Enter Nationality:
          <input type="text" name="delNationality" value={this.state.delNationality} onChange={this.handleChange}></input>
          <button onClick={()=>{this.delData()}}>Sell</button>
        </div>

        <h1>Change Age (UPDATE ENTRY)</h1>
        <div>

          Enter Name:
          <input type="text" name="changeName" value={this.state.changeName} onChange={this.handleChange}></input>
          Enter New Age:
          <input type="text" name="changeAge" value={this.state.changeAge} onChange={this.handleChange}></input>
          <button onClick={()=>{this.changeData()}}>Change</button>
        </div>

        <ol>
          {this.state.directory.map(players =>
            <li key={players.age}>Name: {players.name}, Position: {players.position}, Age: {players.age}, Nationality: {players.nationality} </li>)}
        </ol>
      </div>
    );
  }
}

export default App;
