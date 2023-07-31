import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          onRemove(id);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default ContactItem;
