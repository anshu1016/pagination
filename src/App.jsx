import React from 'react';
import { useGlobalContext } from "./context/GlobalContext";
import { Page1 } from "./pages/Page1";

function App() {
    const { page } = useGlobalContext();
    console.log(page, "App state");

    return (
        <div className='min-w-full min-h-screen'>
            HELLO TAILWIND
            <Page1 />
        </div>
    );
}

export default App;
