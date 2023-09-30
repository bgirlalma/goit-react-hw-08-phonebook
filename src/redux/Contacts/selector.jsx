export const getTasks = state => state.dataContacts.contacts;
console.log(getTasks)
export const getContacts = state => state.dataContacts.contacts.items;
export const getIsLoading = state => state.dataContacts.contacts.isLoading;
export const getError = state => state.dataContacts.contacts.error;
export const getFilters = state => state.filters;