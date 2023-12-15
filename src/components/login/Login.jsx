import {OAUTH_API_URL, OAUTH_PARAMS, OAUTH_PROVIDER} from "../../constant/url";

const Login = () => {
    const oAuthNavigate = (provider) => {
        const oAuthApiURL = new URL(OAUTH_API_URL[provider]);
        const oAuthSearchParams = new URLSearchParams(OAUTH_PARAMS[provider]);
        for (const [key, value] of oAuthSearchParams) {
            oAuthApiURL.searchParams.set(key, value);
        }
        window.location.href = oAuthApiURL.toString();
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-5 px-6 sm:px-0 max-w-sm">
                    <button type="button"
                            onClick={() => oAuthNavigate(OAUTH_PROVIDER.google)}
                            className="text-white w-full inline-flex bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false"
                             data-prefix="fab"
                             data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 488 512">
                            <path fill="currentColor"
                                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Sign up with Google
                        <div></div>
                    </button>
                </div>

                <div className="mt-5 px-6 sm:px-0 max-w-sm">
                    <button type="button"
                            onClick={() => oAuthNavigate(OAUTH_PROVIDER.kakao)}
                            className="text-black w-full inline-flex bg-[#FEE500] hover:bg[#FEE500]/90 focus:ring-4 focus:outline-none focus:ring-[#FEE500]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between dark:focus:ring-[#FEE500]/55 mr-2 mb-2">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             className="mr-2 -ml-2 w-7 h-7" viewBox="0 0 34 35"
                             preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M105 275 c-40 -21 -55 -43 -55 -80 0 -21 9 -40 26 -55 18 -18 23 -31
19 -48 -6 -23 -5 -23 22 -8 15 8 45 17 65 21 21 3 51 17 68 31 91 77 -34 196
-145 139z"/>
                            </g>
                        </svg>
                        Sign up with Kakao
                        <div></div>
                    </button>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register!
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;