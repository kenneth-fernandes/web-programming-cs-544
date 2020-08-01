//-*- mode: rjsx-mode;

import React from 'react';
import ReactDom from 'react-dom';

import { Book } from './books.jsx';

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //@TODO render cart by mapping LineItem over each item in props.items.
    const { app, items } = this.props;
    const lineItemComponentArr = items.map(function (item, index) {
      return <LineItem app={app} item={item} key={index} />;
    });
    return lineItemComponentArr;
  }
}

class LineItem extends React.Component {

  constructor(props) {
    super(props);
    //@TODO
    this.state = { nUnits: props.item.nUnits };
    this.onChange = this.onChange.bind(this);
  }

  async onChange(event){
    const nUnits = event.target.value;
    this.setState({nUnits: nUnits});
    await this.props.app.update(this.props.item.book, nUnits);
  }

  //@TODO other methods
  render() {

    const { book, nUnits } = this.props.item;
    const option = [<option value="0" key="0">0 (Delete)</option>].concat(
      Array.from({ length: 9 },
        function (v, i) {
          return <option key={i + 1} value={i + 1}>{i + 1}</option>;
        }));
    const select = <select value={nUnits} onChange={this.onChange}>
      {option}
    </select>;
    return (<div className="line-item">
      <Book book={book} full={false} />
      <div className="nUnits">
        <label>Quantity</label>
        {select}
      </div>
    </div>);
  }
}
