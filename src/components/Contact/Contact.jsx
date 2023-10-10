import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItemText, ContactListItem, DeleteBtn } from './Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(contact.id));
  return (
    <ContactListItem>
      <ContactItemText>Name: {contact.name}</ContactItemText>
      <ContactItemText>Phone: {contact.number}</ContactItemText>
      <DeleteBtn type="button" onClick={onDeleteContact}>
        Delete
      </DeleteBtn>
    </ContactListItem>
  );
};

export default Contact;
