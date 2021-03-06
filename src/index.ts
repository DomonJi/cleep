import 'babel-polyfill' //This will be replaced based on your babel-env config

import {run} from '@cycle/rxjs-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {Component} from './interfaces'

import {App} from './app'

const main : Component = App
const drivers: any = {
  DOM: makeDOMDriver('body'),
  HTTP: makeHTTPDriver()
}

run(main, drivers)
