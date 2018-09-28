import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends PureComponent {
  render() {

    const { list, page, getMoreList } = this.props

    return (
      <Fragment>
        {
          list.map((item, index) => (
            <ListItem className="clear" key={index}>
              <ListInfo>
                <Link to={'/detail/' + item.get('id')}>
                  <h3 className="title">{item.get('title')}</h3>
                </Link>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
              <Link to={'/detail/' + item.get('id')}>
                <img src={item.get('imgUrl')} alt="" />
              </Link>
            </ListItem>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreListItem(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)