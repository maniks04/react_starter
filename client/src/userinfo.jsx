import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Userinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textOne: '',
            textTwo: '',
            textThree: ''
        }
//console.log(this.props)
    }
    
    
    //on button click, call {this.props.search(this.state.textOne, this.state.textTwo)}
    render() {
        console.log('proof that seamus is a god', this.state.textTwo)
        return(<div>
            <form id="userinfo">
                <input placeholder="First/Last Name"></input>
                <input placeholder="Email..." onChange={(e) => this.setState({textTwo : e.target.value})}></input>
                <input placeholder="Phone Number"></input>
                <button id="userinfoclick" 
                onClick={() => this.props.search(this.state.textOne,this.state.textTwo,this.state.textThree)
                        }>
                    Add me!
                </button>
            </form>
            </div>)
    }
}

// ReactDOM.render(<Userinfo />, document.getElementById('app'));

export default Userinfo