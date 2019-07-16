const React = require('react');
const { expect } = require('chai');
const { mount } = require('enzyme');
const { spy } = require('sinon');
const App = require('../client/components/App.jsx');

describe('<App /> --->', () => {
  it('calls componentDidMount', () => {
    spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});
