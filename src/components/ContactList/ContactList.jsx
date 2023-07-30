import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { PropTypes } from 'prop-types';
import { removeContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const contacts = useSelector(state => state.contacts.items);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={css.container}>
      {visibleContacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          idx={id}
          onRemove={() => {
            dispatch(removeContacts(id));
          }}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactList;
