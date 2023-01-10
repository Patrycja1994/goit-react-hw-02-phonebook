import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactsList = ({ contacts, deleteValue }) => (
    <ul className={style.list}>
        { contacts.map(({ id, name, number}) => (
            <li className={style.id__list} key={id}>
                <p className={style.id__nameList}>{name}:  </p>
                <p className={style.id__numberList}> {number}</p>

                <button className={style.id__button} type="button" onClick={ () => deleteValue(id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
)

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
        deleteValue: PropTypes.func.isRequired,
}