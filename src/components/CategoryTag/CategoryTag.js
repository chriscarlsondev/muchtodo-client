import React, { Component } from 'react'
import MuchToDoContext from '../../MuchToDoContext';
import './CategoryTag.css'

export default class CategoryTag extends Component {
    static contextType = MuchToDoContext;

    render() {
        const { Categories } = this.context;
        if (this.props.taskcategory === "") {
            return (<span className='nocategorytag'>No category selected</span>);
        } else {
            let category = Categories.find(cat => cat.id === this.props.taskcategory);
            return (

                <span className='categorytag'>
                    {category.categoryname}
                </span>
            )
        }
    }
}