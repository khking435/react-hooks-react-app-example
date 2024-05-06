import { render, screen } from '@testing-library/react';
import App from '../App';

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  const headerElement = screen.getByText(/Now/);
  expect(headerElement).toBeInTheDocument();
});

test('should include the ExampleComponent', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Whoa!/);
  expect(paragraphElement).toBeInTheDocument();
});

test('should include the TestComponent', () => {
  render(<App />);
  const iframe = screen.getByTitle(/time video/);
  expect(iframe).toBeInTheDocument();  
});

//   it('should include "Now" in the header instead of a time', () => {
//     expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
//     expect(wrapper.find('header').text()).to.include('Now')
//   });

//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });
