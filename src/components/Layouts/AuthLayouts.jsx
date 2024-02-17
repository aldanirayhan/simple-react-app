import { Link } from "react-router-dom"

const AuthLayouts = (props) => {
    const { children, title, type } = props
  return (
    <div className="flex justify-center bg-blue-200 min-h-screen items-center">
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="font-medium text-slate-500">
            Welcome, Please enter your details
            </p>
            {children}
            <Navigation type={type}/>
            {/* <div className="mt-2 text-center">
                <p className="text-slate-500">Already have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
            </div> */}
        </div>
    </div>
  )
}

const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <div className="mt-2 text-center">
        <p className="text-slate-500">Don't have an account? <Link to="/register" className="font-bold text-blue-600">Register</Link></p>
      </div>
    )
  } else {
    return (
      <div className="mt-2 text-center">
        <p className="text-slate-500">Already have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
      </div>
    )
  }
}

export default AuthLayouts