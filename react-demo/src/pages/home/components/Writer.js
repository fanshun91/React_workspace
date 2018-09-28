import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterItem,
  WriterInfo,
  FollowWriter
} from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <h6>推荐作者</h6>
        {
          this.props.list.map(item => (
            <WriterItem key={item.get('id')}>
              <WriterInfo>
                <img src={item.get('profile')} alt="" />
                <div className="writerName">{item.get('author')}</div>
                <p className="writerStatus">{item.get('statu')}</p>
              </WriterInfo>
              <FollowWriter>+ 关注</FollowWriter>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = state => ({
  list: state.getIn(['home', 'authorList'])
})

export default connect(mapStateToProps, null)(Writer)