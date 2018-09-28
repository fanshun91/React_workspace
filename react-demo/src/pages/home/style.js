import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin-left: auto;
  margin-right: auto;
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner {
    width: 625px;
    height: 270px;
  }
`

export const HomeRigth = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin: 0 16px 12px 0;
  padding-right: 10px;
  line-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  font-size: 14px;
  color: #666;
  img {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  img {
    float: right;
    width: 124px;
    height: 100px;
    border-radius: 7px;
  }
`

export const ListInfo = styled.div`
  float: left;  
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    padding: 8px 12px 0 0;
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
`

export const RecommendItem = styled.div`
  height: 50px;
  margin-bottom: 6px;
  background-image: url(${props => props.bgImg});
  background-size: contain;
`

export const AppDownload = styled.a`
  display: block;
  box-sizing: border-box;
  height: 82px;
  padding: 10px 22px;
  border: 1px solid #ddd;
  border-radius: 3px;
  img {
    float: left;
    width: 60px;
    height: 60px;
  }
`

export const DownloadInfo = styled.div`
  float: left;
  margin-left: 20px;
  h4 {
    padding-top: 6px;
    line-height: 29px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
  }
  span {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`

export const WriterWrapper = styled.div`
  margin-top: 32px;
  h6 {
    font-size: 14px;
    font-weight: 500;
    color: #969696;
  }
`

export const WriterItem = styled.div`
  position: relative;
  margin-top: 16px;
  line-height: 20px;
`

export const WriterInfo = styled.a`
  &:hover {
    text-decoration: none;
  }
  img {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .writerName {
    padding-top: 6px;
    font-size: 14px;
    color: #333;
  }
  .writerStatus {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const FollowWriter = styled.div`
  position: absolute;
  top: 10px;
  right: 4px;
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background-color: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #fcfcfc;
  border: 1px solid #ccc;
`