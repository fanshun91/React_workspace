import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  z-index: -1;
  background-color: #eee;
`

export const LoginPanel = styled.div`
  width: 400px;
  height: 180px;
  margin: 80px auto;
  padding-top: 40px;
  background-color: #fefefe;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 32px;
  margin: 10px auto;
  line-height: 32px;
  padding: 0 10px;
  color: #777;
`

export const Button = styled.button`
  display: block;
  width: 220px;
  height: 32px;
  margin: 18px auto;
  line-height: 32px;
  background-color: #3194d0;
  border: 0;
  border-radius: 16px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`