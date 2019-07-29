import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';

const NOOP = () => {};

const Searchbar = ({ onSearch = () => {} }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e, value) => {
    if (e.key === 'Enter' && value) {
      onSearch(value);
    }
  };

  return (
    <InputGroup>
      <Input
        data-testid='searchbar'
        title='Search movies by genre'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => handleKeyDown(e, value)}
      />
      <InputGroupAddon addonType='append'>
        <Button
          color='secondary'
          onClick={() => {
            if (!isEmpty(value)) {
              onSearch(value);
            }
          }}
        >
          SEARCH
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

Searchbar.defaultProps = {
  onSearch: NOOP(),
};

export default Searchbar;
