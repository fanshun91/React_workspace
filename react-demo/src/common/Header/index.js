// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import * as loginActionCreators from '../../pages/login/store/actionCreators'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button
} from './style'


class Header extends Component {
  constructor(props) {
    super(props)
    this.getSearchInfo = this.getSearchInfo.bind(this)
  }

  getSearchInfo() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    const jsList = list.toJS()
    const pageList = []

    if (jsList.length) {
      for (let i = page * 5; i < (page + 1) * 5; i++) {
        jsList[i] && pageList.push(
          <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={icon => this.spinIcon = icon} className="iconfont icon-yulanxuanzhuan spin"></i>
              换一换
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList className="clear">
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, list, login, handleFocus, handleBlur } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav className="navWrapper">
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="left search">
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                placeholder="搜索"
                className={focused ? 'focused' : ''}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <i className={focused ? classnames('iconfont icon-sousuo', 'focused') : 'iconfont icon-sousuo'}></i>
            {this.getSearchInfo(focused)}
          </NavItem>
          {
            login
              ? <NavItem className="right" onClick={this.props.loginOut}>退出</NavItem>
              : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }

          <NavItem className="right">
            <i className="iconfont icon-Aa"></i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Link to="/write">
            <Button className="writing"><i className="iconfont icon-pan_icon"></i>写文章</Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  // focused: state.get('header').get('focused')
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = dispatch => ({
  handleFocus(list) {
    (list.size === 0) && dispatch(actionCreators.getSearchInfoList())
    dispatch(actionCreators.getSearchFocused())
  },
  handleBlur() {
    dispatch(actionCreators.getSearchBlured())
  },
  handleMouseEnter() {
    dispatch(actionCreators.getMouseEntered())
  },
  handleMouseLeave() {
    dispatch(actionCreators.getMouseLeaved())
  },
  handleChangePage(page, totalPage, spin) {
    // 添加icon旋转效果
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
    originAngle = originAngle ? parseInt(originAngle, 10) : 0
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'

    if (page >= totalPage - 1) {
      dispatch(actionCreators.getChangePage(0))
    } else {
      dispatch(actionCreators.getChangePage(page + 1))
    }
  },
  loginOut() {
    dispatch(loginActionCreators.loginOut())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
