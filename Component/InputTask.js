import { useState } from 'react'

export default function InputTask(props) {

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('')

    const handlerInputTitle = (e)=> setTitle(e.target.value)
    const handlerInputTask = (e)=>setTask(e.target.value)
    const handlerSubmit = async (e)=>{
        e.preventDefault();
        if(title !=='' && task !== ''){

            const ftch = await fetch(`${window.location.origin}/api/postTask?title=${title}&task=${task}`);

            props.addItemTask(!props.render);
            setTask('');
            setTitle('');
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <label>Titulo</label>
                <div>
                    <input type="text" onChange={handlerInputTitle} value={title}/>
                </div>
            </div>
            <div>
                <label>Tarea</label>
                <div>
                    <input type="text" onChange={handlerInputTask} value={task}/>
                </div>
            </div>
            <div>
                <input type="submit" value="Añadir"/>
                {/* <button> Cancelar</button> */}
            </div>
        </form>
    )
}