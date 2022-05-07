import { useDeleteContactMutation } from '../../redux/contacts/contacts-slice.js';
import s from '../ListContact/ListContact.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const ItemListContact = ({ id, name, number }) => {
  const [deleteContact, { isLoading: deleting }] = useDeleteContactMutation();

  return (
    <>
      <li className={s.item}>
        name : <span className={s.span}>{name}</span>
        <br /> phone : <span className={s.span}>{number}</span>
        <button
          className={s.btn}
          onClick={() => {
            deleteContact(id);
            toast.success(`${name} is successfully deleted`);
          }}
          disabled={deleting}
        >
          {deleting ? <p>Deleting...</p> : 'Delete'}
        </button>
      </li>
    </>
  );
};
ItemListContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ItemListContact;
