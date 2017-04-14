import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

export default function intent(source: Sources): Rx.Observable<Action> {
  return Rx.Observable.of({})
}