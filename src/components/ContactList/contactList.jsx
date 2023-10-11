import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactContainer } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const showContacts = filteredContacts(filter, contacts);

  return (
    <ContactContainer>
      {(showContacts ?? contacts).map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactContainer>
  );
};
export default ContactList;
