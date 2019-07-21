import React from 'react'

const MuchToDoContext = React.createContext({
    IncompleteTasks: [],
    CompletedTasks: [],
    Categories: [],
    handleAddNewIncompleteTask:  () => {},
    handleAddCategory:  () => {},
    handleMarkTaskComplete:  () => {},
})

export default MuchToDoContext
