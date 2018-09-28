import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Download from './components/Download'
import Writer from './components/Writer'
import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRigth,
  BackTop
} from './style'
import banner from '../../statics/banner.jpg'

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.onscroll = this.props.changeScrollStatus
  }

  render() {
    return (
      <HomeWrapper className="clear">
        <HomeLeft>
          <img className="banner" src={banner} alt="banner" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRigth>
          <Recommend />
          <Download />
          <Writer />
        </HomeRigth>
        {this.props.showBackTop && <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.onscroll = null
  }
}

const mapStateToProps = state => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollStatus() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleBackTop(true))
    } else {
      dispatch(actionCreators.toggleBackTop(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)