import Section from '../components/Section/Section.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ListContact from '../components/ListContact/ListContact.jsx';
import Filter from '../components/Filter/Filter.jsx';

const ContactsView = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '15px',
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
        <Filter />
      </Section>
      <Section>
        <ListContact />
      </Section>
    </div>
  );
};
export default ContactsView;
