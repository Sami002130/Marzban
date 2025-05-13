import "react-datepicker/dist/react-datepicker.css";
import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Router";

function App() {
    return (
        <main className="p-4 sm:p-6 md:p-8 transition-all">
            <RouterProvider router={router} />
        </main>
    );
}

export default App;