import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
 
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  test ('renders', async () => {
    render(<App />);
    const input = HTMLInputElement = screen.getByTestId("input-text");
    await userEvent.type(input, "hello");
    await waitFor(() => expect(input).toHaveValue("hello"));
    expect(input).toHaveValue("hello");
  })
})
