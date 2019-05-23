import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import Root from 'Root';
import App from 'components/App';

let originalTimeout;

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  // moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  moxios.install();
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  console.log('Starting test at' + Date.now());
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });

  wrapped.find('.fetch-comments').simulate('click');

  // let onFulfilled = sinon.spy();
  // axios.get('http://jsonplaceholder.typicode.com/comments').then(onFulfilled);

  moxios.wait(() => {
    wrapped.update();
    console.log('Wait fires at' + Date.now());

    expect(wrapped.find('li').length).toEqual(2);
    done();

    wrapped.unmount();
  });
});
