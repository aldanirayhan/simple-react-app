import Button from "../Button/Button.jsx";
import InputForm from "../Input/index.jsx";

const FormRegister = () => {
  return (
    <form action="">
        <InputForm 
          label="Fullname" 
          type="text" 
          name="fullname" 
          placeholder="Your full name"
        />
        <InputForm 
          label="Email" 
          type="email" 
          name="email" 
          placeholder="name@example.com"
        />
        <InputForm 
          label="Password" 
          type="password" 
          name="password" 
          placeholder="****"
        />
        <InputForm 
          label="Confirm Password" 
          type="password" 
          name="confirmPassword" 
          placeholder="****"
        />
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
  )
}

export default FormRegister