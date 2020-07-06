import { withFormik } from 'formik';
import * as Yup from "yup";

const FormikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name : Yup.string().required("This field is Required"),
    email : Yup.string().required("This field is Required").email("Please enter valid Email ")
  }),

  mapPropsToValues: props => ({
    name: props.editedData ? props.editedData.name : "",
    email: props.editedData ? props.editedData.email : "",
    avatar : props.editedData ? props.editedData.avatar : null
  }),
  handleSubmit: values => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true

});

export default FormikEnhancer;