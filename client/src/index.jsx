import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Userinfo from './userinfo.jsx'
import axios from 'axios'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  
  
  handleSearch(queryOne, queryTwo, queryThree) {
    console.log(queryOne, queryTwo, queryThree)
    axios.post('/fitness/workout', {
      name : queryOne,
      workout : queryTwo,
      number : queryThree
    }).then(function(response) {
      console.log(response)
    }).catch(function(error) {
      console.log(error)
    })
    
  }
  
  
  
  render () {
  	return (<Userinfo search={this.handleSearch}/>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


/*
axios.post('/poop/shit', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});*/