import { useLocation } from "react-router-dom";

export const CompletedTasks = () => {
    const location = useLocation();
    const completedTasks = location.state?.completedTasks || [];

    return (
        <div>
            <h1>Completed Tasks</h1>
            {completedTasks.length > 0 ? (
                completedTasks.map((task, index) => (
                    <div key={index}>
                        <h3>{task.text}</h3>
                        <h3>Priority: {task.priority}</h3>
                    </div>
                ))
            ) : (
                <h3>No completed tasks.</h3>
            )}
        </div>
    );
};
