import './App.css';
import Routers from "./Router";
import {RootProvider} from "./Context/RootContext";

function App() {
    // const jsKey = "e6aa1b357b6ebaf69be6b59499b5d15c";
    //
    // if(!window.Kakao.isInitialized()) {
    //     window.Kakao.init(jsKey);
    //     console.log(window.Kakao.isInitialized());
    // }

    return (
        <>
            <RootProvider>
                <Routers/>
            </RootProvider>
        </>
    );
}

export default App;
