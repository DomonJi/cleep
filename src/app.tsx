import * as Rx from 'rxjs'
import {VNode, DOMSource, div} from '@cycle/dom'

import {Sources, Sinks, Reducer, Action, State} from './interfaces'

import Header from './components/Header'
import KeepList from './components/KeepList'
import Footer from './components/Footer'

export function App(sources: Sources): Sinks {
  return {
    DOM: Rx.Observable.combineLatest(Header(sources).DOM, KeepList(sources).DOM, Footer(sources).DOM,
      (d1, d2, d3) => {
        return <div id='app'>
          {d1}
          {d2}
          {d3}
        </div>
      })
  }
}
