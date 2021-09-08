import './App.css';
import Routers from "./Router";
import {RootProvider} from "./Context/RootContext";

function App() {
    return (
        <>
            <RootProvider>
                <Routers/>
            </RootProvider>
        </>
    );
}

export default App;
