import React, { Component } from 'react';

import ChoicePrompt from './ChoicePrompt';
import InfoPrompt from './InfoPrompt';
import InputPrompt from './InputPrompt';
import FinishedPrompt from './FinishedPrompt';

import { prompts, flowGraph } from './flowSetup';

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
      currentQuestion: nextPrompt.id
    });
  }

  renderPrompt(id) {
    const promptInfo = prompts.find(p => p.id === id);
    const onResponse = value => this.onResponse(promptInfo, value);

    if (promptInfo.type === 'info') {
      return <InfoPrompt onResponse={onResponse} title={promptInfo.title} subtitle={promptInfo.subtitle} responses={promptInfo.responses} optional={promptInfo.optional} />
    } else if (promptInfo.type === 'choice') {
      return <ChoicePrompt onResponse={onResponse} title={promptInfo.title} subtitle={promptInfo.subtitle} responses={promptInfo.responses} optional={promptInfo.optional} />
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