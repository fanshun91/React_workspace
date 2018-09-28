import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map(item => (
            <TopicItem key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
              {item.get('title')}
            </TopicItem>
          ))
        }

      </TopicWrapper>
    )
  }
}

const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)