export const formValidatorHelper = values => {

    const errors = {};
  
    if (!values.firstName1) {
      errors.firstName1 = "First name is required";
    } else if (values.firstName1.length < 3) {
      errors.firstName1 = "First name should be > 3";
    }
  
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last name should be > 3";
    }
      
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
      errors.email = "Invalid Email !!!";
    }
  
    console.log(errors);
    return errors;
  };