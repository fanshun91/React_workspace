import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import {
  LoginWrapper,
  LoginPanel,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginPanel>
            <Input
              placeholder="请输入账号"
              innerRef={input => this.account = input}
            />
            <Input
              placeholder="请输入密码"
              type="password"
              innerRef={input => this.password = input}
            />
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginPanel>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = dispatch => ({
  login(account, password) {
    dispatch(actionCreators.checkLogin(account.value, password.value))
  }
})

export default connect(mapState, mapDispatch)(Login)