export const filter = (firstName) => {
  return {
    type: "CONTACT_FILTER",
    payload: firstName
  }
};
