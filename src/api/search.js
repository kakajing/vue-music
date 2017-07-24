import jsonp from 'common/js/jsonp'
import {commendParams, options} from './config'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commendParams, {
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function search (query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, commendParams, {
    p: page,
    perpage,
    platform: 'h5',
    needNewCode: 1,
    w: query,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    n: perpage,
    remoteplace: 'txt.mqq.all'
  })
  return jsonp(url, data, options)
}
