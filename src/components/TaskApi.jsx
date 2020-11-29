import {useEffect} from "react";

const TaskApi = () => {
    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/tasks`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ tasks: data });
          console.debug(data);
        })
        .catch(console.log);
    }

    return ([]);
}

export default TaskApi;
