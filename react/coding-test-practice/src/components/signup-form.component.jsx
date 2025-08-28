import useForm from "../hooks/useForm";

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    gender: "",
  };

  const { handleChange, handleSubmit } = useForm(initialValues);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="gender" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default SignUpForm;
