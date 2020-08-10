export const initialState = {
    taskList: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
    ]
}

export function reducer(state, action){
    switch(action.type){
        case "ADD_TODO" : 
        return {taskList: [...state.taskList,{ task: action.task, completed: false, id: new Date.now()}]}
    }

}