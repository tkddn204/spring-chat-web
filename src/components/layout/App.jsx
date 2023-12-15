import Header from "./Header";
import {useNavigate} from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white">
            <Header/>
            <div className="grid place-items-center">
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                    <span
                        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        로그인하세용
                    </span>
                </button>
            </div>
        </div>
    );
}

export default App;
