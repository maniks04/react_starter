import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Userinfo from './userinfo.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(queryOne, queryTwo, queryThree) {
    //do something
    console.log(queryOne)
  }
  render () {
  	return (<Userinfo search={this.handleSearch}/>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));