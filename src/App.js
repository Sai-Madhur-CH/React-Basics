import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters : [],
      searchMonster :''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters : users}));
  }

  handleChange = (e) => { 
    this.setState({searchMonster : e.target.value})
  }

  render(){

    const {monsters,searchMonster}= this.state;
    const filteredMonsters=monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())
      );

    return (
      <div className="App">
          <h1 className='h1style'>Monsters Rolodex</h1>
          <SearchBox placeholder='Search Monsters' 
            handleChange = {this.handleChange}/>
          <CardList monsters={filteredMonsters}/>
      </div>
        );
  }
}

export default App;
