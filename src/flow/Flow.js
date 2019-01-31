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

const url = 'https://kerryanddoug-api.herokuapp.com';

export default class Flow extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      currentQuestion: 'intro',
      history: []
    };
  }

  componentDidMount() {    
    return fetch(`${url}/registered`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
          .then(attending => {
            this.setState({
              currentQuestion: 'finished',
              answers: [{ id: 'attending', value: attending }]
            });
        })
      }
    })
    .catch(err => {
      console.error('An issue happened while checking if they were registered already: ', err);
    });
  }

  onResponse(promptInfo, value) {
    const nextPrompt = flowGraph[promptInfo.id].edges.find(e => e.applies(value));

    this.setState({
      answers: replace(this.state.answers, promptInfo.id, { id: promptInfo.id, value })
    }, () => {
      new Promise((resolve, reject) => {
        const currentNode = flowGraph[promptInfo.id];
        if (currentNode.shouldPersist && currentNode.shouldPersist(value)) {
          this.sendToMotherShip(this.state.answers).then(resolve).catch(reject);
        } else {
          resolve();
        }
      })
      .then(() => {
        this.setState({
          currentQuestion: nextPrompt.id,
          history: [
            ...this.state.history,
            promptInfo.id
          ]
        });
      })
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

  sendToMotherShip(answers) {
    const answersPayload = answers.reduce((acc, answer) => 
      Object.assign({}, acc, { [answer.id]: answer.value })
    , { kidCount: parseInt(localStorage.getItem('kids')) });

    return fetch(`${url}/register`, {
        method: 'POST',
        body: JSON.stringify(answersPayload),
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
      .catch(err => {
        console.error('An issue happened while sending data: ', err);
      });
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

    const attendingEntry = this.state.answers.find(entry => entry.id === 'attending');
    return <FinishedPrompt attending={attendingEntry ? attendingEntry.value : true} />;
  };

  render() {
    return (
      <div>
        {this.renderPrompt(this.state.currentQuestion)}
      </div>
    )
  }
}