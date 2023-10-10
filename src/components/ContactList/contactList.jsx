import Contact from 'components/Contact/Contact';
// import {
//   ContactItemText,
// } from 'components/Contact/Contact.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactContainer } from './ContactList.styled';

const ContactList = () =>
  // { contacts, filter, onDeleteContact }
  {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredContacts = (filter, contacts) => {
      if (!filter) return;

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    };

    const showContacts = filteredContacts(filter, contacts);

    return (
      <ContactContainer>
        {(showContacts ?? contacts).map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            // name={contact.name}
            // number={contact.number}
          />
        ))}

        {/* {contacts.map(({ id, name, number }) => (
        // <ContactListItem key={id}>
        //   <ContactItemText>{name}</ContactItemText>
        //   <ContactItemText>{number}</ContactItemText>
        //   <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        //     Delete
        //   </DeleteBtn>
        // </ContactListItem>
      ))} */}
      </ContactContainer>
    );
  };
export default ContactList;
