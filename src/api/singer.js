/**
 * Created by user on 2017/7/12.
 */
import jsonp from 'common/js/jsonp'
import {commendParams, options} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commendParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'ygg',
    g_tk: 401736439
  })
  return jsonp(url, data, options)
}
