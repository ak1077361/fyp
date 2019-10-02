import React,{ Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import ErrorBoundry from '../components/ErrorBoundry';


import './App.css';


  class App extends Component{
    constructor(){
      super()  
      this.state = {
        robots: [],
        searchfield: ''
      
      }
    }
      componentDidMount(){
        console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=> {this.setState({robots:users})});

        
      }
    onSearchChange = (event) => {
     this.setState({searchfield: event.target.value})
    }
    
      
    render(){
      const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })

      if(this.state.robots.length===0){
        return <h1>Loading</h1>
      }else{
    
      return(
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onsearchChange}  />
          <Scroll>
             <ErrorBoundry>
              <Cardlist robots={filteredRobots}/>
             </ErrorBoundry>
          </Scroll>
          
          </div>
        );
      }
    }
   
  }

export default App;
