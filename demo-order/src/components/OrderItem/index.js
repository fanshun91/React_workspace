import React, { Component } from 'react'
import './index.css'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || '',
    }
    // this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  renderEditArea() {
    const { comment } = this.state
    return (
      <div className="orderItem__commentContainer">
        <textarea className="orderItem__comment" onChange={this.handleCommentChange} value={comment} name="" id="" cols="30" rows="10"></textarea>
        {this.renderStars()}
        <button className="orderItem__btn orderItem__btn--grey" onClick={this.handleCancel}>取消</button>
        <button className="orderItem__btn orderItem__btn--red" onClick={this.handleConfirm}>提交</button>
      </div>
    )
  }

  renderStars() {
    const { stars } = this.state
    return (
      <div>
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            console.log(item, stars)
            const light = stars >= item ? 'orderItem__star--light' : ''
            return <span key={index} className={"orderItem__star " + light} onClick={this.handleClickStars.bind(this, item)}>★</span>
          })
        }
      </div>
    )
  }

  // handleBtnClick() {}
  handleBtnClick = () => {
    this.setState({ editing: true })
  }

  handleCommentChange = e => {
    const value = e.target.value
    this.setState({
      comment: value
    })
  }

  handleClickStars = stars => {
    this.setState({ stars })
  }

  handleCancel = () => {
    const { data } = this.props
    this.setState({
      editing: false,
      comment: data.comment || '',
      stars: data.stars || 0
    })
  }

  handleConfirm = () => {
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.setState({
      editing: false,
    })
    this.props.onSubmit(id, comment, stars)
  }

  render() {
    const { shop, product, price, pic, isCommented } = this.props.data
    const { editing } = this.state
    return (
      <div className="orderItem">
        <div className="orderItem_picContainer">
          <img className="orderItem__pic" src={pic} alt="img" />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__shop">{shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            <div className="orderItem__btn">
              {
                isCommented ? (
                  <button className="orderItem__btn orderItem__btn--grey">已评价</button>
                ) : (
                    <button className="orderItem__btn orderItem__btn--red" onClick={this.handleBtnClick}>评价</button>
                  )
              }
            </div>
          </div>
        </div>
        {editing ? this.renderEditArea() : null}
      </div>
    )
  }
}

export default OrderItem

