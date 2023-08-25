import { render, screen } from "@testing-library/react";
import App from "../src/App";
import LandingPage from "../src/Pages/LandingPage";

import { shallow } from 'enzyme';

describe('My first test suite!', () => {
  it('correctly renders', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
