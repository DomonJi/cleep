/**
 * Created by Domon on 17/4/14.
 */

import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

export default function model(action$: Rx.Observable<Action>): Rx.Observable<State> {
  return Rx.Observable.of({})
}
