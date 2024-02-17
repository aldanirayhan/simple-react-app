import Button from "../Button/Button.jsx";
import InputForm from "../Input/index.jsx";

const FormLogin = () => {
  return (
    <form action="">
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
        <Button classname="bg-blue-600 w-full">Log in</Button>
      </form>
  )
}

export default FormLogin