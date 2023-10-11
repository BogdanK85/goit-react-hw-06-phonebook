import { Filter } from 'components/Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/contactList';
import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <div>
        <ContactList />
      </div>
    </div>
  );
};
