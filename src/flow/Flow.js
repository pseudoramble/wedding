import React, { Component } from 'react';

import ChoicePrompt from './ChoicePrompt';
import InfoPrompt from './InfoPrompt';
import InputPrompt from './InputPrompt';
import LoginPrompt from './LoginPrompt';
import FinishedPrompt from './FinishedPrompt';
import NameCardPrompt from './NameCardPrompt';

import { prompts, flowGraph } from './flowSetup';

const replace = (values = [], id, newValue) => {
  const replacedValues = values.filter(v => v.id !== id);
  return [...replacedValues, newValue];
};

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
    const nextPrompt = flowGraph[promptInfo.id].edges.find(e => e.applies(value));

    this.setState({
      answers: replace(this.state.answers, promptInfo.id, { id: promptInfo.id, value }),
      currentQuestion: nextPrompt.id,
      history: [
        ...this.state.history,
        promptInfo.id
      ]
    });
  }

  onBack(promptInfo) {
    if (promptInfo.id !== prompts[0].id) {
      this.setState({
        currentQuestion: this.state.history[this.state.history.length - 1],
        history: this.state.history.slice(0, this.state.history.length - 1)
      });
    }
  }

  renderPrompt(id) {
    const promptInfo = prompts.find(p => p.id === id);
    const onResponse = value => this.onResponse(promptInfo, value);
    const onBack = () => this.onBack(promptInfo);

    if (promptInfo.type === 'info') {
      return <InfoPrompt onResponse={onResponse} onBack={onBack} title={promptInfo.title} subtitle={promptInfo.subtitle} responses={promptInfo.responses} optional={promptInfo.optional} />
    } else if (promptInfo.type === 'choice') {
      return <ChoicePrompt onResponse={onResponse} onBack={onBack} title={promptInfo.title} subtitle={promptInfo.subtitle} responses={promptInfo.responses} optional={promptInfo.optional} />
    } else if (promptInfo.type === 'input') {
      return <InputPrompt onResponse={onResponse} onBack={onBack} title={promptInfo.title} subtitle={promptInfo.subtitle} type={promptInfo.inputType} optional={promptInfo.optional} />
    } else if (promptInfo.type === 'login') {
      return (
        <LoginPrompt
          onResponse={onResponse} onBack={onBack} title={promptInfo.title} subtitle={promptInfo.subtitle} optional={promptInfo.optional}
        />
      );
    } else if (promptInfo.type === 'namecards') {
      const loginAnswers = this.state.answers.find(entry => entry.id === 'login');
      const totalGuests = loginAnswers ? loginAnswers.value.guests : parseInt(localStorage.getItem('guests'), 10);

      return (
        <NameCardPrompt
          onResponse={onResponse} onBack={onBack} title={promptInfo.title} subtitle={promptInfo.subtitle} optional={promptInfo.optional} totalGuests={totalGuests}
        />
      );
    }

    const attending = this.state.answers.find(entry => entry.id === 'attending').value;
    return <FinishedPrompt attending={attending} />;
  };

  render() {
    return (
      <div>
        {this.renderPrompt(this.state.currentQuestion)}
      </div>
    )
  }
}