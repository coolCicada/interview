const http = require('http')
const url = require('url')

function createApplication () {
  const app = (req, res) => {
    const m = req.method.toLocaleLowerCase()
    const { pathname } = url.parse(req.url, true)

    for (let i = 0; i < app.routes.length; i++) {
      const { method, path, handler } = app.routes[i]
      if (method === m && path === pathname) {
        return handler(req, res)
      }
    }
    res.end('Cannot')
  }
  app.routes = []
  http.METHODS.forEach(method => {
    method = method.toLocaleLowerCase()
    app[method] = function (path, handler) {
      const layer = {
        method, path, handler
      }
      app.routes.push(layer)
    }
  })
  app.listen = function () {
    const server = http.createServer(app)
    server.listen(...arguments)
  }
  return app
}

module.exports = createApplication