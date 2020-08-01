//-*- mode: rjsx-mode;

import React from 'react';

export default class Books extends React.Component {

  constructor(props) {
    super(props);
    //@TODO other initialization
    this.state = { result: '' };
  }

  //@TODO other methods
  recordSrchResult(result) {
    this.setState({ result: result });
  }

  render() {
    //@TODO complete rendering
    const app = this.props.app;
    const books = this;
    const element = <SearchForm key="search" app={app} books={books} />;
    return element;
  }

}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { srchTerm: '' };
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  async onBlur(event) {
    const elem = event.target;
    await this.performSrch(elem);
  }

  async onSubmit(event) {
    event.preventDefault();
    const elem = event.target.querySelector('#search');
    await this.performSrch(elem);

  }

  async performSrch(srchInputElem) {
    const elemVal = srchInputElem ? srchInputElem.value.trim() : '';
    if (elemVal && elemVal !== this.state.srchTerm) {
      this.setState({ srchTerm: elemVal, });
      const { result, links } = await this.props.app.ws.findBooks(elemVal);
      await this.props.books.recordSrchResult(result);
    }
  }

  render() {
    //@TODO complete rendering
    const element = (
      <form className="search" onSubmit={this.onSubmit}>
        <label htmlFor="search">
          Search Catalog
        </label>
        <input name="authorsTitleSearch" id="search" onBlur={this.onBlur} />
      </form>);
    return element;
  }
}

export function Book({ book, full }) {
  //@TODO return rendering of book based on full
  return '';
}

//@TODO other components like SearchForm, Results, etc.

/** text for scroll controls */
const SCROLLS = {
  next: 'Next >>',
  prev: '<< Previous',
};
