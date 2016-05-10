
'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var EventTarget = require('dom-event-target')

test('history (server)', function (t) {
  var hashHistory = proxyquire('./', {
    'global/window': {}
  })()

  t.doesNotThrow(hashHistory.set, 'pushState is a noop')
  t.doesNotThrow(hashHistory, 'onPopState is a noop')
  t.end()
})

test('history (browser)', function (t) {
  t.plan(3)

  var window = new EventTarget()
  window.location = {
    hash: '#/foo'
  }

  var hashHistory = proxyquire('./', {
    'global/window': window
  })()

  t.equal(hashHistory(), '/foo')
  hashHistory.set('/bar')

  t.equal(hashHistory(), '/bar')

  var unlisten = hashHistory(function (hash) {
    t.equal('/baz', hash)
  })

  hashHistory.set('/baz')
  window.send('hashchange')

  unlisten()

  // Should not fire again after unlisten, t.plan handles this expectation
  hashHistory.set('/bang')
})
