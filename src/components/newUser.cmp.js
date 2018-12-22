import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class NewUserForm extends Component {
    state= {
        firstName: '',
        lastName: ''
    }

    handleChange = (type, {value}) => {
        this.setState({ [type]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleSubmit({...this.state});
        this.setState( {
            firstName: '',
            lastName: ''
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input value={this.state.firstName} onChange={({target}) => this.handleChange('firstName', target)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Last Name</Label>
                    <Input value={this.state.lastName} onChange={({target}) => this.handleChange('lastName', target)}/>
                </FormGroup>

                <FormGroup>
                    <Button block outline type="submit" color="primary">Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}