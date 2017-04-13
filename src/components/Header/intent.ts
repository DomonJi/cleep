import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

export default function intent(source: Sources): Rx.Observable<Action> {
  const DOM: DOMSource = source.DOM
  const search$ = DOM.select('#search-btn').events('click').mapTo({type: 'toggleSearch'})
  const layout$ = DOM.select('#layout-btn').events('click').mapTo({type: 'layout'})
  return Rx.Observable.merge(search$, layout$)
}