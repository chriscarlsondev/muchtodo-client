import React, { Component } from 'react'
import MuchToDoContext from '../../MuchToDoContext';
import './CategoryTag.css'

export default class CategoryTag extends Component {

    static defaultProps = {
        Tasks: [],
        Categories: []
    };
    
    static contextType = MuchToDoContext;

    render() {
        const { Categories } = this.context;
        if (this.props.taskcategory && Categories.length > 0) {
            let category = Categories.find(cat => cat.id === parseInt(this.props.taskcategory));
            return (
                <span className='categorytag'>
                    {category.categoryname}
                </span>
            )
        } else {
            return (<span className='nocategorytag'>No category selected</span>);
        }
    }
}