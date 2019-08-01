import './hmr'

document.body.style.background = 'url(http://i.imgur.com/9D5Rg.jpg)'
document.body.style.backgroundSize = 'cover'

if (module.hot) {
  module.hot.accept('./hmr.js')
}