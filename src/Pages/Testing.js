import React from 'react';
import MyForm from '../../components/form/Form++';

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h2>I am here</h2>
      <MyForm />
      {/* <MyForm initialValues={this.props.initialValues} validationSchema={this.props.validationSchema} fields={this.props.children} fieldItems={["email", "password"]} /> */}
    </>
  );
};

export default SignupForm;
