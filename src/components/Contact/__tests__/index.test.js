/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';
import Nav from '../../Nav';

afterEach(cleanup);

describe('Contact Form component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders h1 tag', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });

  it('renders button text', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
});
