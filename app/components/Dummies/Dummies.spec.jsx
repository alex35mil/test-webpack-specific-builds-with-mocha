import React from 'react';
import { shallowRender, expect } from 'app/utils/tests/utils';

import Dummies from './Dummies';
import css from './Dummies.scss';
import cssVars from '!!sass-variable-loader!./Dummies.scss';

describe('<Dummies />', () => {

  const dummies = [
    { id: 1, dummy: 'Tutti Frutti, good booty!' },
    { id: 2, dummy: 'A wop bop a loo bop a lop bam boom!' },
  ];

  const isLoading = false;

  const wrapper = shallowRender(<Dummies {...{ dummies, isLoading }} />);

  it('renders <h1 /> title', () => {
    const el = wrapper.find('h1');
    expect(el).to.have.length(1);
  });

  it('renders <section /> with `dummies` className', () => {
    const el = wrapper.find('section');
    expect(el).to.have.className(css.dummies);
  });

  it('renders <div /> `.subTitle` with SASS variable', () => {
    const el = wrapper.find(`.${css.subTitle}`).first();
    expect(el).to.contain.text(cssVars.sectionWidth);
  });

});
