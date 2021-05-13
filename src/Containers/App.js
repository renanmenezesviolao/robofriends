import React, {Component} from 'react'
import Cardlist from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import {robots} from '../robots'
import './App.css';

import Scroll from '../Components/Scroll';
class App extends Component {
      constructor() {
      	super()
      	this.state= {
      		robots: robots,
      		searchfield : ''
      	}

      }
      onsearchchange = (event) => {
            this.setState({searchfield: event.target.value})
             const filtered = this.state.robots.filter(robots=>{
                  return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) })
             console.log(filtered)
          
      	
      }

      render() {
                   const filtered = this.state.robots.filter(robots=>{
                  return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) })
      	return(
		<div className = "tc ">
		<h1 className="f1">RoboFriends</h1>
        <SearchBox searchchange={this.onsearchchange} /> 
        <Scroll>
      <Cardlist robots={filtered} />
      </Scroll>
      <div className = "pt5 underline">
      <h3>This robots index whas made by @renanmenezes violão/andreineagoie.It is just to have fun!</h3>
      </div>
      </div>)
      }

}


	






export default App
