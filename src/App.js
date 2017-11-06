import React, { Component } from 'react';
import 'whatwg-fetch'
import ObjectInspector from 'react-object-inspector';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const { message, json } = props;
    this.state = {
      message,
      json: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  sendMessage(message) {
    fetch('/api/parse/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'parse',
        data: message,
      })
    }).then(response => response.json())
    .then((response) => {
      this.setState({ json: response });
    });
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { message, json } = this.state;

    return (
      <div className="App">
        <h2 className="appTitle">HipChat Assignment</h2>
        <div className="chatInput">
          <textarea
            className="message-input"
            name="message-input"
            id="messageInput"
            onChange={this.handleChange}
            value={message}
          >
          </textarea>
          <button
            className="closeBtn"
            id="sendMessage"
            onClick={() => this.sendMessage(message)}
            type="button"
          >
          Send Message
          </button>
        </div>
        <div className="jsonList">
          <ObjectInspector className="jsonListObj" 
            data={ json } 
            initialExpandedPaths={['root *']}
          />
        </div>
      </div>
    );
  }
}

export default App;
