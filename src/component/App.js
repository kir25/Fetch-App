import React, { Component, Fragment } from 'react';
import './App.css';
import { DEFAULT_HPP, PATH_BASE, DEFAULT_QUERY, PATH_SEARCH, PARAM_SEARCH, PARAM_PAGE, PARAM_HPP } from './constants';
import Search from './components/Search';
import Table from './components/Table';
import Button from './components/Button';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
    };
  }

  componentDidMount() {
    let { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm })
    this.fetchSearchTopStories(searchTerm)
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(res => this.setSearchTopStories(res))
      .catch(error => this.setState({ error }))
  }

  setSearchTopStories = (res) => {
    let { result, searchKey } = this.state;
    const { hits, page } = res;
    const oldHits = result && result[searchKey] ? result[searchKey].hits : [];
    const apdateHits = [...oldHits, ...hits];
    this.setState({ result: { ...result, [searchKey]: { hits: apdateHits, page } } });
  }

  needsToSearchTopStories = (searchTerm) => {
    let { result } = this.state;
    return !result[searchTerm]
  }

  onSearchSubmit = (e) => {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm })
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm)
    }
    e.preventDefault()
  }

  onDismiss = (id1) => {
    let { result, searchKey } = this.state;
    const { hits, page } = result[searchKey];
    const isNotId = item => item.objectID !== id1;
    const updatedHits = hits.filter(isNotId);
    this.setState({
      result: { ...result, [searchKey]: { hits: updatedHits, page } }
    });
  }

  onSearchChange = ({ target }) => {
    this.setState({ searchTerm: target.value })
  }

  render() {
    const { searchTerm, searchKey, result, error } = this.state;
    if (error) {
      return <h1 className='interaction'>Something is wrong</h1>
    }

    const page = (result &&
      result[searchKey] &&
      result[searchKey].page) || 0;

    const list = (result &&
      result[searchKey] &&
      result[searchKey].hits) || [];

    return (
      <>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}>
          <h1>Search</h1>
        </Search>

        {result
          &&
          <>
            <Table
              list={list}
              onDismiss={this.onDismiss} />
            <div>
              <Button className='button-inline btn-bott'
                onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
                More histories
              </Button>
            </div>
          </>
        }
      </>
    );
  }
}

export default App;
