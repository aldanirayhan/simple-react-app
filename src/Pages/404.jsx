import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center flex-col bg-blue-200 min-h-screen items-center">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="text-slate-my-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-slate-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
export default ErrorPage
