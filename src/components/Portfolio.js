import React, { Component } from 'react';
import PropTypes from 'prop-types'
import data from '../data';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    this.state = { selected: this.filters[0], data: data };
  }

  onSelectFilter(category) {
    if (this.state.selected === category) return;
    this.setState({
      selected: category,
      data:
        category === 'All'
          ? data
          : data.filter((item) => item.category === category),
    });
  }

  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList project={this.state.data} />
      </>
    );
  }
}

Portfolio.propTypes = {
  selected: PropTypes.string,
  data: PropTypes.array
}

export default Portfolio;
