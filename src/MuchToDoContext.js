import React from 'react'

const MuchToDoContext = React.createContext({
    IncompleteTasks: [],
    CompletedTasks: [],
    Categories: [],
    handleAddTask:  () => {},
    handleAddCategory:  () => {},
    handleMarkTaskComplete:  () => {},
})

export default MuchToDoContext
