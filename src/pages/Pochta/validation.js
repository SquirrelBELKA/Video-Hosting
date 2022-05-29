import * as yup from "yup";

const schema = yup.object().shape({
  
  to: yup.string().email().required(),
  
});

export default schema;