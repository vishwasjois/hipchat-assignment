import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const testValues = {
      inputText: '@bob @john (success) such a cool feature; https://twitter.com/jdorfman/status/430511497475670016',
      responseText: {"mentions":["@bob","@john"],"emoticons":["(success)"],"links":[{"url":"https://twitter.com/jdorfman/status/430511497475670016","title":"Justin Dorfman; on Twitter: \"nice @littlebigdetail from @HipChat (shows hex colors when pasted in chat). http://t.co/7cI6Gjy5pq\""},{"url":"https://facebook.com","title":"Facebook - ಲಾಗ್ ಇನ್ ಅಥವಾ ಸೈನ್ ಅಪ್"}],"test":["https://twitter.com/jdorfman/status/430511497475670016","https://facebook.com"]},
      sendMessage: jest.fn(),
    };

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders App header', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>HipChat Assignment</h2>;
  expect(wrapper.contains(welcome));
});

it('renders TextArea', () => {
  const wrapper = shallow(<App />);
  const textarea = <textarea name="message-input"></textarea>;
  expect(wrapper.contains(textarea));
});

it('renders sendBtn', () => {
  const wrapper = shallow(<App />);
  const sendBtn = <button class="closeBtn" type="button">Send Message</button>;
  expect(wrapper.contains(sendBtn));
});

it('renders jsonBrowser', () => {
  const wrapper = shallow(<App />);
  const jsonBrowser = <div class="jsonList"></div>;
  expect(wrapper.contains(jsonBrowser));
});
