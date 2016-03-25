const ELES = {
  'myinfo': '#v6_pl_rightmod_myinfo', // 个人信息
  'rank': '#v6_pl_rightmod_rank',  // 电影/音乐排名
  'recominfo': '#v6_pl_rightmod_recominfo', // 热门话题
  'attfeed': '#v6_pl_rightmod_attfeed', // 好友关注动态
  'member': '#v6_trustPagelet_recom_member', // 会员专区
  'noticeboard': '#v6_pl_rightmod_noticeboard',  // 公告栏
  'postad': '#v6_pl_content_publishertop .title_area > .key', // 输入框广告
  'webim': '#WB_webim',  // 私信聊天
  'mplayer': '.PCD_mplayer',  // 音乐播放器
}


$(function() {
  for(let key in ELES) {
    if(key === 'myinfo') {
      continue
    }

    $(ELES[key]).addClass('disable')
  }
})
