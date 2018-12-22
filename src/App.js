import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRequest, addUserRequest, deleteUserRequest, userError } from './store/actions/users.action';
import { UsersList } from './components/users.cmp';
import { NewUserForm } from './components/newUser.cmp';
import { Alert } from 'reactstrap';

class App extends Component {
  
  componentDidMount() {
    this.props.getUserRequest()
  }

  handleSubmit = (user) => {
    this.props.addUserRequest(user)
  }

  handleDeleteUser = ( userId ) => {
    this.props.deleteUserRequest(userId)
  }

  handleCloseAlart = () => {
    this.props.userError({ error: '' })
  }
  
  render() {
    const { users, error } = this.props;
    return(
      <div style={{ margin: '0 auto', padding: '30px', maxWidth: '600px'}}>
        <Alert color='danger' isOpen={!!error} toggle={this.handleCloseAlart}>
          { error }
        </Alert>

        <NewUserForm handleSubmit={ this.handleSubmit }/>
        { users && <UsersList users={users} handleDelete={this.handleDeleteUser}/> }
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users: users.items, error: users.error });

export default connect(mapStateToProps, { getUserRequest, addUserRequest, deleteUserRequest, userError })(App);
