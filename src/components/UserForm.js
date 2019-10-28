import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

class UserForm extends React.Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `ui-input ${touched && error ? "error" : ""}`;

        return (
            <div>
                <div className={className}>
                    <label>{field.label}</label>
                    <input className="ui-input" type="text" {...field.input} />
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
            <div className="ui container">
                <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="First Name"
                        name="firstName"
                        type="text"
                        className="field"
                        component={this.renderField}
                    />
                    <br/>
                    <Field
                        label="Last Name"
                        name="lastName"
                        className="field"
                        component={this.renderField}
                    />
                    <br/>
                    <Field
                        label="Email"
                        name="email"
                        className="field"
                        component={this.renderField}
                    />
                    <Field
                        label="Phone"
                        name="phone"
                        className="field"
                        component={this.renderField}
                    />
                    <div>
                        <label>Role</label>
                        <div>
                            <label>
                                <Field name="userType" className="field" component="input" type="radio" value="admin" />
                                {' '}
                                Admin
                    </label>
                            <label>
                                <Field name="userType" className="field" component="input" type="radio" value="regular" />
                                {' '}
                                Regular
                    </label>
                        </div>
                    </div>
                    <button type="submit" className="ui primary button">Submit</button>
                    <Link to="/" className="ui primary basic button">Cancel</Link>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'userForm',
})(UserForm);
