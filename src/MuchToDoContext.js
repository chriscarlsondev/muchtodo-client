import React from 'react'

const MuchToDoContext = React.createContext({
    Tasks: [],
    Categories: [],
    handleAddNewIncompleteTask:  () => {},
    handleAddCategory:  () => {},
    handleMarkTaskComplete:  () => {},
})

export default MuchToDoContext
