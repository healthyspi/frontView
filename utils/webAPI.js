import APIConfig from '../constants/apiConfig'
import fetchHelper from '../helper/fetchHelper'

const WebAPI = {
  GET_DATA: (id, data)=>{
    // 測試
    fetchHelper(
      APIConfig.GET_DATA(id),
      cb => {
        data(cb)
      },
    )
  },
  GET_ARTICLE: (page, type, callback) => {
    // 拿文章
    fetchHelper(
      APIConfig.GET_ARTICLE(page, type),
      cb => {
        callback(cb)
      },
    )
  }
}

export default WebAPI  