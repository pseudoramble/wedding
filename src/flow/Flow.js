import React, { Component } from 'react';

import ChoicePrompt from './ChoicePrompt';
import InfoPrompt from './InfoPrompt';
import InputPrompt from './InputPrompt';
import FinishedPrompt from './FinishedPrompt';

const prompts = [
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
    subtitle: "We have blocked off some rooms at The Hilton. We have a few other recommendations too!",
    id: "hotelReservation",
    optional: false,
    responses: [
      ["Yes, at the Hilton", "Hilton"],
      ["Yes, from Best Western", "Best Western"],
      ["No thanks. I'm going to stay with the happy couple", "Apartment"],
      ["No thanks. I'll reserve my hotel room later on", "Later"]
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
]

export default class Flow extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      currentQuestion: 'intro',
      history: []
    };
  }

  onResponse(promptInfo, value) {
    console.info(promptInfo);
    console.info(value);
  }

  renderPrompt(id) {
    const promptInfo = prompts.find(p => p.id === id);
    const onResponse = value => this.onResponse(promptInfo, value);

    if (promptInfo.type === 'info') {
      return <InfoPrompt onResponse={onResponse} title={promptInfo.title} subtitle={promptInfo.subtitle} responses={promptInfo.responses} optional={promptInfo.optional} />
    } else if (promptInfo.type === 'choice') {
      return <ChoicePrompt onResponse={onResponse} title={promptInfo.title} subtitle={promptInfo.subtitle} responses={promptInto.responses} optional={promptInfo.optional} />
    } else if (promptInfo.type === 'input') {
      return <InputPrompt onResponse={onResponse} title={promptInfo.title} subtitle={promptInfo.subtitle} type={promptInfo.inputType} optional={promptInfo.optional} />
    }

    return <FinishedPrompt />;
  };

  render() {
    return (
      <div>
        {this.renderPrompt(this.state.currentQuestion)}
      </div>
    )
  }
}