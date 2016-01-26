import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

export const { expect } = chai;
export const shallowRender = shallow;
