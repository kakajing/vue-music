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

export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commendParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'ygg',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 5381,
    singermid: singerId
  })

  return jsonp(url, data, options)
}
