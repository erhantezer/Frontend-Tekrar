

const ShowTask = ({tasks, setTasks}) => {
    console.log(tasks);
    return (
        <div>
            {tasks?.map((task) => {
                const { id, task, text, day, isDone } = task;
                return (
                    <div 
                    key={id}
                    className={`task ${isDone ? 'done' : ''} `}
                    onDoubleClick={() => toggleDone(id)}
                    >

                    </div>
                )
            
            })}
        </div>
    )
}

export default ShowTask