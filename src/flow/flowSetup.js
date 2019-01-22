export const prompts = [
  {
    type: 'info',
    title: "Woohoo! Let's get ready!",
    subtitle: "We'll walk you through step-by-step what you should do to get ready. If you have any questions or think something is missing, contact us!",
    id: "intro",
    optional: false,
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
    type: 'choice',
    title: 'Will you be attending?',
    id: 'attending',
    optional: false,
    responses: [
      ["Yes, we excitedly accept!", true],
      ["No, we regretfully decline.", false]
    ]
  },
  {
    type: 'namecards',
    title: 'What names would you like on your name card(s)?',
    subtitle: 'This isn\'t for the kids. That\'s why you do not see a spot for them!',
    id: 'namecards'
  },
  {
    type: 'choice',
    title: 'Are you bringing any kids with you?',
    id: 'kiddos',
    responses: [
      ["Yes", 1],
      ["No", 0]
    ]
  },
  {
    type: 'input',
    inputType: 'textarea',
    title: 'Do you have any specific dietary restrictions?',
    subtitle: "We will do our best to make accommodations. Please reach out if you have more concerns.",
    id: 'dietaryRestrictions'
  },
  {
    id: 'finished',
    type: 'finished'
  }
];

const when = {
  anyResponseGiven: () => true,
  userIsLoggedIn: () => localStorage.getItem('token'),
  responseValueIs: expected => actual => expected === actual,
  userCanBringKids: () => localStorage.getItem('kids') > 0
};

export const flowGraph = {
  "intro": {
    id: "intro",
    edges: [
      {
        id: "attending",
        applies: when.userIsLoggedIn
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
        id: "attending",
        applies: when.anyResponseGiven
      }
    ]
  },
  "attending": {
    id: "attending",
    edges: [
      {
        id: "namecards",
        applies: when.responseValueIs(true)
      },
      {
        id: "finished",
        applies: when.responseValueIs(false)
      }
    ]
  },
  "namecards": {
    id: "namecards",
    edges: [
      {
        id: "kiddos",
        applies: when.userCanBringKids
      },
      {
        id: "dietaryRestrictions",
        applies: when.anyResponseGiven
      }
    ]
  },
  "kiddos": {
    id: "kiddos",
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
