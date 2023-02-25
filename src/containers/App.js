import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import {robots} from "../robots";
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    // Smart component as designed using class method
    // constructor and render come from React
    // Any componenet that owns a state should be defined as class instance instead of state itself
    constructor () {
        super()  // calls constructor of parent class Component
        // entire app is defined by these 2 fields robots and searchfields
        this.state = {
            robots: robots,
            searchfield: ''
        }
        // console.log('1');
    }

    // componentDidMount() {
    //     // f you need to load data from a remote endpoint, 
    //     // this is a good place to instantiate the network request.
    //     // const myResponse = 
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             response.json()
    //         })
    //         .then(users => {
    //             this.setState({ robots: users})
    //             // Error is because fetched user is undefined
    //             // console.log('users', users);
    //             // return users
    //         });
    //     // this.setState({ robots: myResponse})
    // }

    onSearchChange = (event) => {
        // this.state - will refer to object of event
        this.setState({searchfield: event.target.value})
        // const filterRobots = this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // })
         
        // console.log(filterRobots);
    }

    render() {
        const {robots, searchfield} = this.state
        console.log(robots);
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (robots.length === 0) {
            return <h1>Loading...</h1>
        }
        
        return (
            <div className="tc">
                <h1 className="f1">Alien Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        );
        
    }
}

export default App;
