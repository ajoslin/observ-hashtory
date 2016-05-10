'use strict'

var window = require('global/window')
var Event = require('geval')

module.exports = Hashtory()

function Hashtory () {
  observable.set = set
  var listen = hashChangeEvent()

  return observable

  function observable (fn) {
    return fn ? listen(fn) : get()
  }
}

function hashChangeEvent () {
  if (!window.location) return

  return Event(function (broadcast) {
    window.addEventListener('hashchange', function (event) {
      broadcast(get())
    })
  })
}

function set (path) {
  if (!window.location) return

  if (path.charAt(0) !== '/') path = '/' + path
  if (path.charAt(0) !== '#') path = '#' + path

  window.location.hash = path
}

function get () {
  if (!window.location) return
  return (window.location.hash || '').substring(1)
}
