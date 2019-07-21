import React, { Component } from 'react'
import MuchToDoContext from '../../MuchToDoContext';

export default class CategoryTag extends Component {
    static contextType = MuchToDoContext;

    render() {
        const { Categories } = this.context;
        if (this.props.categoryId === "") {
            return (<>No category selected</>);
        } else {
            let category = Categories.find(cat => cat.id === this.props.categoryId);
            return (
                <>
                    {category.categoryName}
                </>
            )
        }
    }
}