import React from 'react';
import sinon from 'sinon';
import { shallowRender, expect } from 'app/utils/tests/utils';

import App from './App';

describe('<App />', () => {

  const apiCall = sinon.spy();

  const wrapper = shallowRender(<App {...{ apiCall }} />);

  it('renders <App /> with apiCall prop', () => {
    expect(wrapper).to.have.prop('apiCall');
  });

});
