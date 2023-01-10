import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactsForm.module.css';

const INITIAL_STATE = {
    name: '',
    number: '',
  };

  export class ContactsForm extends Component {
    state =  { ...INITIAL_STATE, };


    handleInput = (event) => {
        const {name, value} = event.currentTarget;

        this.setState ({ [name]: value });
    }

    reset = () => {
      this.setState({...INITIAL_STATE});
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    }

    render() {
      const { name, number } = this.state;

      return (
        <form className={style.formSubmit} onSubmit={this.handleSubmit}>
          <label className={style.formSubmit__name}>Name
          <input 
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
        <label className={style.formSubmit__number}>Number
        <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

          <button className={style.formSubmit__button} type="submit">
            Add contact
          </button>
        </form>
      )
    }
  }

  ContactsForm.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string,
  }