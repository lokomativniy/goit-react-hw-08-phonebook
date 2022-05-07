import React, { useEffect } from 'react';
import s from './ListContact.module.css';

import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import {
  contactsApi,
  useFetchContactsQuery,
} from '../../redux/contacts/contacts-slice.js';
import ItemListContact from '../ItemListContact/ItemListContact';
import Loader from '../Loader';
import { toast } from 'react-toastify';
import { store } from '../../redux/store';

const ListContact = () => {
  const filtered = useSelector(getFilter);
  const { data: contacts, error, isFetching } = useFetchContactsQuery();
  const normalizedFilter = filtered.toLowerCase();

  const filteredContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
      );
    }
  };
  useEffect(() => {
    return () => {
      store.dispatch(contactsApi.util.resetApiState());
    };
  }, []);

  return (
    <div>
      <h2 className={s.title}>Contacts</h2>
      <div className={s.loader}>{isFetching && <Loader />}</div>
      {error && toast.error(`Something went wrong`)}
      {contacts && (
        <ul className={s.list}>
          {filteredContacts().map(contact => (
            <ItemListContact key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListContact;
