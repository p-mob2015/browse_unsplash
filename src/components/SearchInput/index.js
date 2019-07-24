import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import './styles.scss';

class SearchInput extends React.PureComponent {
  static propTypes = {   
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    keyword: '',
  };

  lazyTriggerSearch = debounce(() => this.triggerSearch(), 1000)

  triggerSearch = () => {
    this.props.onSearch(this.state.keyword);
  }

  handleKeywordChange = event => {
    this.lazyTriggerSearch();
    this.setState({
      keyword: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder || 'Start typing...'}
        value={this.state.keyword}
        onChange={this.handleKeywordChange}
      />
    );
  }
}

export default SearchInput;
