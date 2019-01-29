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
    id: 'registeredNames'
  },
  {
    type: 'choice',
    title: 'Are you bringing any kids with you?',
    id: 'kidCount',
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
    id: 'dietaryRestrictions',
    persist: true
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
        id: "registeredNames",
        applies: when.responseValueIs(true)
      },
      {
        id: "finished",
        applies: when.responseValueIs(false)
      }
    ],
    shouldPersist: when.responseValueIs(false)
  },
  "registeredNames": {
    id: "registeredNames",
    edges: [
      {
        id: "kidCount",
        applies: when.userCanBringKids
      },
      {
        id: "dietaryRestrictions",
        applies: when.anyResponseGiven
      }
    ]
  },
  "kidCount": {
    id: "kidCount",
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
    ],
    shouldPersist: when.anyResponseGiven
  }
};
