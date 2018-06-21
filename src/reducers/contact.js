const initialState = [
   {
    id: 1,
    firstName: "Kolia",
    lastName: "Popov",
    tel: "123-456-7890",
    company: "company1",
    email: "mail1@mail.com",
    photo: "http://files.softicons.com/download/android-icons/maximal-circle-icons-by-fritz-franke/png/128x128/contacts.png"
  },
  {
    id: 2,
    firstName: "Nikita",
    lastName: "Lesov",
    tel: "732-456-3603",
    company: "company2",
    email: "mail2@mail.com",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Google_Contacts_logo.png/128px-Google_Contacts_logo.png"
  },
  {
    id: 3,
    firstName: "Nastya",
    lastName: "Grezova",
    tel: "446-326-7890",
    company: "company3",
    email: "mail3@mail.com",
    photo: "http://www.myziptel.com/static/f_website/img/contacts.ico"
  }
]


export default function contactReducers(state = initialState, action) {
  switch(action.type) {
    case "CONTACT_ADD":
    return [
      ...state,
      action.payload
    ]
      break;

    case "CONTACT_DELETE":
    const contactId = action.payload;
    return state.filter(contact => contact.id !== contactId);
      break;

    case "CONTACT_EDIT":
    return state.map( (item, index) => {

        if(item.id != action.payload.id) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value

        return {
            ...item,
            ...action.payload
        };
      });
      break

    default:
      return state;
  }
}
