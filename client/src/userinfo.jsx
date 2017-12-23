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
        //console.log('proof that seamus is a god', this.state.textOne)
        return(<div>
            <form id="userinfo">
                <input id="username" placeholder="First/Last Name..." onChange={(e) => this.setState({textOne : e.target.value})}></input>
                <div>Enter your First/Last Name</div><p></p><p></p>
                <input id="userworkout" placeholder="Workout..." onChange={(e) => this.setState({textTwo : e.target.value})}></input>
                <div>Enter your workout of choice (chest/back/legs/challenge)</div><p></p><p></p>
                <input id="usernumber" placeholder="1234567890..." onChange={(e) => this.setState({textThree : e.target.value})}></input>
                <div>Enter your Phone Number (Include area code) (no dashes)</div><p></p><p></p>
                <button id="userinfoclick" 
                onClick={(e) => {
                    console.log('clickd')
                    e.preventDefault()
                    this.props.search(this.state.textOne,this.state.textTwo,this.state.textThree)
                    //this.setState({textOne : ''})
                    }
                        }>
                    Text me my Workout!
                </button>
            </form>
            </div>)
    }
}

// ReactDOM.render(<Userinfo />, document.getElementById('app'));

export default Userinfo