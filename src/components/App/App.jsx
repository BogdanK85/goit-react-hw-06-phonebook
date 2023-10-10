import { Filter } from 'components/Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/contactList';
import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  // const filter = useSelector(selectFilter);

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <div>
        {/* {filteredContacts.length > 0 ? ( */}
        <ContactList
        // contacts={filteredContacts}
        // filter={filter}
        // onDeleteContact={deleteContact}
        />
        {/* ) : (
          <Notification message="There are no contacts in this list" />
        )} */}
      </div>
    </div>
  );
};
