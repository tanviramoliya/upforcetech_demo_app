import * as Yup from "yup";

const FirstStepSchema = Yup.object().shape({
  FirstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  LastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  MiddleName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  MobileNo: Yup.string()
    .length(10, "Mobile Number should be 10 digits")
    .matches(/^[0-9]{10}/, "Mobile Number should be 10 digits")
    .required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
  Birthday: Yup.string().required("Required"),
  Age: Yup.number()
    .max(100, "Age cannot be more than 100")
    .required("Required"),
  BloodGroup: Yup.string().required("Required"),
  Height: Yup.number()
    .min(5, "Height cannot be less than 5")
    .max(100, "Height cannot be more than 100")
    .required("Required"),
  Weight: Yup.number()
    .min(5, "Weight cannot be less than 5")
    .max(100, "Weight cannot be more than 100")
    .required("Required"),
  Gender: Yup.string().required("Please Select your Gender"),
  MaritalStatus: Yup.string().required("Please Select your Marital Status"),
});

const SecondStepSchema = Yup.object().shape({
  AddressLine1: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  AddressLine2: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  City: Yup.string().required("Required"),
  State: Yup.string().required("Required"),
  Country: Yup.string().required("Required"),
  PinCode: Yup.string()
    .length(6, "Pin Code should be 6 digits only")
    .matches(/^[0-9]{6}/, "Pin Code should be 6 digits only")
    .required("Required"),
});
export { FirstStepSchema, SecondStepSchema };
