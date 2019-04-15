import React, { Component } from 'react';
import './App.scss';
import Loading from './components/Loading'
import HomePage from './pages/HomePage'
import axios from 'axios';
import NavBar from './NavBar'
// import UserImages from './containers/UserImages';
import { Route, Link } from "react-router-dom"
import UserProfile from './pages/UserProfile'
// import NameForm from './components/NameForm'


class App extends React.Component {
  state = {
    users: [],
    isLoading: true,
  }

  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        const users = result.data;
        this.setState({ users: users, isLoading: false })
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })
  }

  render() {
    return (

      <div>
        <div>
          <NavBar />
        </div>

        <div>
          <Loading loading={this.state.isLoading} />
        </div>

        <div >
          <Route exact path='/' component={props => <HomePage users={this.state.users} {...props} />} />
          <Route path='/user/:id' component={props => <UserProfile users={this.state.users} {...props} />} />
        </div>
      </div>
    )
  }
}

export default App;
