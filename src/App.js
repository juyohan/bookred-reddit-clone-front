import './App.css';
import Routers from "./Router";
import {RootProvider} from "./Context/RootContext";
import Token from "./JwtToken/Token";

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
