//-*- mode: rjsx-mode;

import React from 'react';

export default class Books extends React.Component {

  constructor(props) {
    super(props);
    //console.log(props,'',this);
    //@TODO other initialization
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //@TODO other methods
  onBlur(event) {
    
  }

  onSubmit(event) {
    
  }

  render() {
    //@TODO complete rendering
    const element = (
      <form className="search">
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
