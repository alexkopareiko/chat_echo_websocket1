export const deleteContact = (contact) => {
  return {
    type: "CONTACT_DELETE",
    payload: contact
  }
};
