module.exports = {
  index: function (req, res) {
    res.view('index', { tab: 'index' })
  }
}