
import FormLogin from "../components/Elements/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
        <FormLogin />
    </AuthLayouts>
  )
}

export default LoginPage