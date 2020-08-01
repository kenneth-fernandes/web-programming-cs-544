//-*- mode: rjsx-mode;

import React from 'react';

export default class Books extends React.Component {

  constructor(props) {
    super(props);
    //@TODO other initialization
    this.state = { result: '' };
    this.performResNavigation = this.performResNavigation.bind(this);
  }

  //@TODO other methods
  async recordSrchResult(result) {
    await this.setState({ result: result });
  }

  async performResNavigation(url) {
    const result = await this.props.app.ws.get(url);
    await this.recordSrchResult(result);
  }

  render() {
    //@TODO complete rendering
    const app = this.props.app;
    const books = this;
    const srchFrmComponent = <SearchForm key="search" app={app} books={books} />;
    const resultsComponent = <Results key="results" app={app} result={this.state.result} />;
    const prevScrollComponent = <Scroll key="prev" result={this.state.result} resNav={this.performResNavigation} dir="prev" />;
    const nextScrollComponent = <Scroll key="next" result={this.state.result} resNav={this.performResNavigation} dir="next" />;
    return <div className="Books">{[srchFrmComponent, resultsComponent, prevScrollComponent, nextScrollComponent]}</div>;
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
      const result = await this.props.app.ws.findBooks(elemVal);

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
class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { app, result } = this.props;
    const items = result ? result.result : Array.from({ length: 0 });

    const components = items ? items.map(
      function (element, index) {
        return <div className="result" key={index}>
          <Book book={element} full={true} />
          <div className="buy">
            <button onClick={() => app.buy(element)}>Buy</button>
          </div>
        </div>;
      }) : '';
    return components;
  }
}
function Scroll({ result, resNav, dir }) {
  const link = result ? result.links.filter(
    function (item) {
      return item.rel === dir
    })[0] : '';
  return link
    ? <span className="scroll">
      <a href="#" rel={dir} onClick={(event) => {
        event.preventDefault();
        resNav(link.href);
      }}>{SCROLLS[dir]}</a>
    </span>
    : '';

}
export function Book({ book, full }) {
  //@TODO return rendering of book based on full
  const namesArr = book['authors'].map(function (item) {
    const nameArr = item.split(',');
    return nameArr[1].trim().concat(" ".concat(nameArr[0].trim()));
  });
  const { title, isbn, publisher, year, pages } = book;
  const authors = namesArr.slice(0, namesArr.length - 1).join(', ')
    + ' and '
    + namesArr.slice(-1);
  const element = full ?
    (<div className="book">
      <span className="title">{title}</span>
      <span className="authors">{authors}</span>
      <span className="isbn"><label>ISBN:</label>{isbn}</span>
      <span className="publisher">{publisher}</span>
      <span key="year" className="year">{year}, </span>
      <span className="pages">{pages} pages</span>
    </div>) :
    (<div className="book">
      <span className="title">{title}</span>
      <span className="authors">{authors}</span>
    </div>);

  return element;
}

//@TODO other components like SearchForm, Results, etc.

/** text for scroll controls */
const SCROLLS = {
  next: 'Next >>',
  prev: '<< Previous',
};
