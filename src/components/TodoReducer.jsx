function TodoReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.task,
          complete: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "deletedAllTask": {
      return tasks.map((t) => {
        if (t) {
          return tasks.splice((t) => t.id !== action.id);
        } else {
          return t;
        }
      });
    }
    //work! but only value is deleted not the list
    case "deletedDoneTask": {
      return tasks.map((t) => {
        if (t.complete === true) {
          return tasks.filter((t) => t.id !== action.id);
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
export default TodoReducer;
