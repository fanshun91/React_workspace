import React, { PureComponent } from 'react'
import { AppDownload, DownloadInfo } from '../style'

class Download extends PureComponent {
  render() {
    return (
      <AppDownload href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
        <img src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
        <DownloadInfo>
          <h4>下载简述APP ></h4>
          <span>随时随地发现和创作</span>
        </DownloadInfo>
      </AppDownload>
    )
  }
}

export default Download