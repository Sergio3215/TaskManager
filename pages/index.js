import InputTask from "../Component/InputTask";
import ShowTask from "../Component/ShowTask";
import { useState } from 'react'

function useForceUpdate() {
    const [value, setValue] = useState(0);

    return () => setValue(value => value + 1)
}

export default function App() {

    const forceUpdate = useForceUpdate();

    const [render, serRender] = useState(false);

    const addItemTask = (value) => {
        serRender(value);
        forceUpdate();
    }

    return (
        <>
            <InputTask addItemTask={addItemTask} render={render} />
            <ShowTask render={render} addItemTask={addItemTask} />
        </>
    )
}