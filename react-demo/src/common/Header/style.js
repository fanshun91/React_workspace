import styled from 'styled-components'
import logoPic from '../../statics/jianshu.png'

// 创建了一个带有样式的div元素
export const HeaderWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
// 在标签内添加属性
// export const Logo = styled.a.attrs({href: '/'})``
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.ul`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.li`
  position: relative;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &.search {
    .slide-enter {
      transition: all .2s ease-in;
    }
    .slide-enter-active,
    .slide-enter-done {
      width: 220px;
    }
    .slide-exit {
      transition: all .2s ease-in;
    }
    .slide-exit-active,
    .slide-exit-done {
      width: 160px;
    }
  }
  &.search .iconfont {
    position: absolute;
    top: 14px;
    right: 24px;
    width: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    &.focused {
      background-color: #666;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin: 8px 0 0 20px;
  padding: 0 40px 0 20px;
  border: 0;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  color: #888;
  &::placeholder {
    color: #999;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 220px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .iconfont {
    top: 18px !important;
    right: 60px !important;
  }
  .spin {
    transition: all .2s ease-in;
    transform: rotate(50deg);
    transform-origin: center;
  }
`

export const SearchInfoList = styled.div`
padding-bottom: 16px;
`

export const SearchInfoItem = styled.a`
  float: left;
  margin: 0 10px 6px 0;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  color: #aaa;
`

export const Addition = styled.div`
  position: absolute;
  top:0;
  right: 0;
  height: 56px;
`

export const Button = styled.button`
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #eee;
    background-color: #ec6149;
    .iconfont {
      margin-right: 8px;
    }
  }
`