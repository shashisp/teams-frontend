import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

class UserForm extends React.Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div>
                <div className={className}>
                    <label>{field.label}</label>
                    <input className="form-control" type="text" {...field.input} />
                    <div className="text-help">
                        {touched ? error : ""}
                    </div>
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.onSubmit(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="app ui container">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="First Name"
                    name="firstName"
                    component={this.renderField}
                />
                <Field
                    label="Last Name"
                    name="lastName"
                    component={this.renderField}
                />
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                />
                <Field
                    label="Phone"
                    name="phone"
                    component={this.renderField}
                />
                <div>
                    <label>Role</label>
                    <div>
                        <label>
                            <Field name="userType" component="input" type="radio" value="admin" />
                            {' '}
                            Admin
                    </label>
                        <label>
                            <Field name="userType" component="input" type="radio" value="regular" />
                            {' '}
                            Regular
                    </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'userForm',
})(UserForm);
