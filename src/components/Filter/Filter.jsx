import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

export class Filter extends Component {
    render() {
        const {value, onChange} = this.props; 
        return (
            < label className={style.labelFilter}>
            Find contacts by name
            <input className={style.inputFilter} type="text" value={value} name="filter" onChange={onChange}/>
        </label>
        ) 
    }
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}