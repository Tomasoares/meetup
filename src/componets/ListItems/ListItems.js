import React, { Component } from 'react'
import produtos from '../../products.json'
import Price from './Price'

export default class ListItens extends Component {
  constructor(props) {
      super(props)
  }

  listItems = () => {
    return produtos.products.map((item, index) => {
        return (
            <div className="col-md-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <Price on_sale={item.on_sale} regular_price={item.regular_price} actual_price={item.actual_price} />
                        <p className="card-title">{item.name}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    })
  }
  render() {
    
    return (
      <div className="row">
        {this.listItems()}
      </div>
    )
  }
}
