import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'

import {Sources, Sinks, Reducer, Action, State} from './interfaces'

import Header from './components/Header'

export function App(sources: Sources): Sinks {
  return {
    DOM: Header(sources).DOM
  }
}
