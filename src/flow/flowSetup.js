export const prompts = [
  {
    type: 'info',
    title: "Woohoo! Let's get ready!",
    subtitle: "We'll walk you through step-by-step what you should do to get ready. If you have any questions or think something is missing, contact us!",
    id: "intro",
    inputType: 'info',
    optional: true,
    responses: [
      ["Let's do it!", ""]
    ]
  },
  {
    type: 'input',
    title: "We need to check who you are first",
    subtitle: "Your invitation includes a code to be entered here.",
    id: "code",
    inputType: 'text',
    optional: false
  },
  {
    type: 'choice',
    title: "Would you like to reserve a hotel room?",
    subtitle: "We have rooms booked off at The Hampton Inn ($100/night) and the Holiday Inn ($75/night)",
    id: "hotelReservation",
    optional: false,
    responses: [
      ["Yes, at the Hampton", "hotelHampton"],
      ["Yes, at the Holiday Inn", "hotelHoliday"],
      ["No thanks. I plan on staying elsewhere.", "hotelOther"]
    ]
  },
  {
    type: 'info',
    title: "Info on the Hampton Inn",
    subtitle: "The Hampton Inn has a rate of $100/night. To make a reservation, go to https://secure3.hilton.com/en_US/hp/reservation/book.htm?execution=e1s1 or call 1-802-773-9066",
    id: "hotelHampton",
    inputType: 'info',
    optional: true,
    responses: [
      ["OK, will do!", ""]
    ]
  },
  {
    type: 'info',
    title: "Info on the Holiday Inn",
    subtitle: "The Holiday Inn has a rate of $75/night. To make a reservation, go to https://www.ihg.com/holidayinn/hotels/us/en/rutland/rutvt/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-US-_-RUTVT or call 1-802-775-1911",
    id: "hotelHoliday",
    inputType: 'info',
    optional: true,
    responses: [
      ["OK, will do!", ""]
    ]
  },
  {
    type: 'info',
    title: "Staying Elsewhere",
    subtitle: "There are a bunch of hotels in the Rutland area to try. There are also a variety of Bed & Breakfast style locations in the area.",
    id: "hotelOther",
    inputType: 'info',
    optional: true,
    responses: [
      ["Next", ""]
    ]
  },
  {
    type: 'choice',
    title: "Would you like to purchase a gift now?",
    subtitle: null,
    id: "giftPurchase",
    optional: true,
    responses: [
      ["Yes, from the Amazon registry", "Amazon"],
      ["Yes, from the other registry", "Other"],
      ["No thanks. I'll provide a gift later on", "Later"]
    ]
  },
  {
    type: 'choice',
    title: "Head on over to Amazon to see how you can help",
    subtitle: null,
    id: "amazonRegistry",
    optional: true,
    responses: [
      ["All finished", "Done"]
    ]
  },
  {
    type: 'choice',
    title: "Head on over to the other registry to see how you can help",
    subtitle: null,
    id: "otherRegistry",
    optional: true,
    responses: [
      ["All finished", "Done"]
    ]
  }
];

const when = {
  anyResponseGiven: () => true,
  responseValueIs: expected => actual => expected === actual
};

export const flowGraph = {
  "intro": {
    id: "intro",
    edges: [
      {
        id: "code",
        applies: when.anyResponseGiven
      }
    ]
  },
  "code": {
    id: "code",
    edges: [
      {
        id: "hotelReservation",
        applies: when.anyResponseGiven
      }
    ]
  },
  "hotelReservation": {
    id: "hotelReservation",
    edges: [
      {
        id: "hotelHampton",
        applies: when.responseValueIs('hotelHampton')
      },
      {
        id: "hotelHoliday",
        applies: when.responseValueIs('hotelHoliday')
      },
      {
        id: "hotelOther",
        applies: when.responseValueIs('hotelOther')
      },
    ]
  },
  "hotelHampton": {
    id: "hotelHampton",
    edges: [
      {
        id: "giftPurchase",
        applies: when.anyResponseGiven
      }
    ]
  },
  "hotelHoliday": {
    id: "hotelHoliday",
    edges: [
      {
        id: "giftPurchase",
        applies: when.anyResponseGiven
      }
    ]
  },
  "hotelOther": {
    id: "hotelOther",
    edges: [
      {
        id: "giftPurchase",
        applies: when.anyResponseGiven
      }
    ]
  },
};
