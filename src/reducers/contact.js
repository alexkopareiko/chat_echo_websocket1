const initialState = [
   {
    id: 1,
    firstName: "Kolia",
    lastName: "Popov",
    tel: "123-456-7890",
    company: "company1",
    email: "mail1@mail.com",
    photo: "https://driverlan.files.wordpress.com/2013/07/contact_us.jpg?w=300&h=300"
  },
  {
    id: 2,
    firstName: "Nikita",
    lastName: "Lesov",
    tel: "732-456-3603",
    company: "company2",
    email: "mail2@mail.com",
    photo: "https://static1.squarespace.com/static/561bbe91e4b0beb41675a492/t/56659babe4b083247743c69f/1449499564547/CONTACT_GREEN+GUY.jpg?format=300w"
  },
  {
    id: 3,
    firstName: "Nastya",
    lastName: "Grezova",
    tel: "446-326-7890",
    company: "company3",
    email: "mail3@mail.com",
    photo: "https://www1.nyc.gov/assets/nycha/images/content/pages/contact-phone.png"
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
