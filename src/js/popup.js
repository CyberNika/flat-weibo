$(function() {
  _init()
})

function _init() {
  // 选择主题
  $('.theme').click(function(event) {
    let theme = $(this).data('theme')
    console.log(theme)
  })

  // 确定
  $('.flat-btn').click(function(event) {
    alert(1)
  })
}
