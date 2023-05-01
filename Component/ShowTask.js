import style from '../components/BoxTask.module.css'
import { useEffect, useState } from 'react'

export default function ShowTask({ render, addItemTask }) {

    const [task, setTask] = useState([])

    // useEffect(()=>getTasks(),[])

    useEffect(() => {

        async function getTasks() {

            const ftch = await fetch(`${window.location.origin}/api/getTasks`);
            const res = await ftch.json();

            setTask(res);
        }

        getTasks();

    }, [render])

    const handlerDelete = async (e)=>{
        await fetch(`${window.location.origin}/api/deleteTask?id=${e.target.name}`);
        addItemTask(!render);
    }

    return (
        <>
            <div className={style.containerBox}>
                {
                    task.map((item, index) => {
                        return (
                        (item.Default != 'default')?
                            <div id="task---container" key={index}>
                                <div id="task---header">{item.title}</div>
                                <div id="task---body">{item.task}</div>
                                <div id="task-footer"><button name={item.__id} onClick={(e)=>handlerDelete(e)}>Borrar</button></div>
                            </div>
                            :
                            null
                        )
                    })
                }
            </div>
        </>
    )
}