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
    type: 'login',
    title: "You'll need to login before getting going",
    subtitle: "Your login information is on the invitation.",
    id: "login",
    optional: false
  },
  {
    type: 'namecards',
    title: 'What names would you like on your name card(s)?',
    id: 'namecards'
  },
  {
    type: 'input',
    inputType: 'textarea',
    title: 'Do you have any specific dietary restrictions or requests?',
    subtitle: "We will do our best to make accommodation.",
    id: 'dietaryRestrictions'
  },
  {
    id: 'finished',
    type: 'finished'
  }
];

const when = {
  anyResponseGiven: () => true,
  isLoggedIn: () => localStorage.getItem('token'),
  responseValueIs: expected => actual => expected === actual
};

export const flowGraph = {
  "intro": {
    id: "intro",
    edges: [
      {
        id: "namecards",
        applies: when.isLoggedIn
      },
      {
        id: "login",
        applies: when.anyResponseGiven
      }
    ]
  },
  "login": {
    id: "login",
    edges: [
      {
        id: "namecards",
        applies: when.anyResponseGiven
      }
    ]
  },
  "namecards": {
    id: "namecards",
    edges: [
      {
        id: "dietaryRestrictions",
        applies: when.anyResponseGiven
      }
    ]
  },
  "dietaryRestrictions": {
    id: "dietaryRestrictions",
    edges: [
      {
        id: 'finished',
        applies: when.anyResponseGiven
      }
    ]
  }
};
