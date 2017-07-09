/**
 * Created by user on 2017/7/9.
 */
import jsonp from 'common/js/jsonp'
import {commendParams, options} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg'
  const data = Object.assign({}, commendParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
