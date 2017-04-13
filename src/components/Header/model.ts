/**
 * Created by Domon on 17/4/13.
 */

import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

export default function model(action$: Rx.Observable<Action>): Rx.Observable<State> {
  const search$ = action$.filter(_ => _.type === 'toggleSearch')
    .mapTo(state => ({...state, search: !state.search}))

  const layout$ = action$.filter(_ => _.type === 'layout')
    .mapTo(state => ({...state, layout: !state.layout}))

  return Rx.Observable.merge(search$, layout$)
    .startWith(_ => ({search: false, layout: true}))
    .scan((state, reducer) => reducer(state), {search: false, layout: true})
}
