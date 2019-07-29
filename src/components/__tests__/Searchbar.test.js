import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Searchbar from '../Searchbar';

describe('Searchbar', () => {
  it('Can type inside', () => {
    const handleSearch = jest.fn();
    const { getByTestId } = render(<Searchbar onSearch={handleSearch} />);
    const searchbar = getByTestId('searchbar');

    fireEvent.change(searchbar, { target: { value: 'Action' } });
    expect(searchbar.value).toBe('Action');
  });

  it('Searchs', () => {
    const handleSearch = jest.fn();
    const { getByText, getByTestId } = render(
      <Searchbar onSearch={handleSearch} />
    );
    const button = getByText(/search/i);

    fireEvent.click(button);
    expect(handleSearch).toHaveBeenCalledTimes(0);

    const searchbar = getByTestId('searchbar');
    fireEvent.change(searchbar, { target: { value: 'Action' } });
    expect(searchbar.value).toBe('Action');

    fireEvent.keyDown(searchbar, { key: 'Enter', code: 13, charCode: 13 });
    expect(handleSearch).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(handleSearch).toHaveBeenCalledTimes(2);
  });
});
