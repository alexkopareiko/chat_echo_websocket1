export const filter = (contact) => {
  return {
    type: "CONTACT_FILTER",
    payload: contact
  }
};
