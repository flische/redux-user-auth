import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createAccount } from '../actions';
import { renderInputs } from '../helpers';

class SignUp extends Component {
    
    handleSignUp(values){
        console.log('Form Values:', values);

        this.props.createAccount(values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                <h1 className="text-center">Create Account</h1>
                <div className="row">
                    <Field className="col-6 offset-3" name="email" component={renderInputs} label="Email"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3" name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3" name="confirmPassword" component={renderInputs} label="Confirm Password"/>
                </div>
                <div className="row">
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-success">Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values){
    const { email,  password, confirmPassword } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }

    if(!password){
        errors.password = 'Please choose a password';
    }

    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, { createAccount: createAccount })(SignUp);
