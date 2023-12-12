import {Link, redirect} from "react-router-dom";
import AuthApi from "../../api/auth";

const Header = () => {

    const member = sessionStorage.getItem('member');

    const Logout = async () => {
        sessionStorage.removeItem("member");
        await AuthApi.logout();
        return redirect("/");
    };

    return (
        <header className="inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Spring-Chat</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Spring-Chat-Logo"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {member ? (
                        <button
                            onClick={() => Logout()}
                            className="text-sm font-semibold leading-6 text-gray-900">
                            Log out <span aria-hidden="true">&rarr;</span>
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 m-2">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900 m-2">
                                Sign up <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;