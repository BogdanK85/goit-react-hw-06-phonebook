export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.filter;

// export const selectFilteredContacts = state => {
//   const filter = selectFilter(state);
//   const contacts = selectContacts(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
