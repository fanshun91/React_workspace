import React, { Component, Fragment } from 'react'
import OrderItem from '../OrderItem'

class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  handleSubmit = (id, comment, stars) => {
    const { data } = this.state
    const newData = data.map(item => {
      return item.id === id ? {
        ...item, comment, stars, isCommented: true
      } : item
    })
    this.setState({
      data: newData
    })
  }

  render() {
    const { data } = this.state
    return (
      <Fragment>
        {
          data.map(item => (
            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          ))
        }
      </Fragment>
    )
  }

  componentDidMount() {
    fetch('/api/order.json')
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              this.setState({ data })
            })
        }
      })
  }
}

export default OrderList