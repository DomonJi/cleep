import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'

import {Sources, Sinks, Reducer, Action, State} from './interfaces'

export function App(sources: Sources): Sinks {
  const action$: Rx.Observable<Action> = intent(sources.DOM)
  const model$: Rx.Observable<State> = model(action$)
  const vdom$: Rx.Observable<VNode> = view(model$)

  return {
    DOM: vdom$
  }
}

function intent(DOM: DOMSource): Rx.Observable<Action> {
  const add$ = DOM.select('.add').events('click')
    .mapTo({type: 'add'})

  const subtract$ = DOM.select('.subtract').events('click')
    .mapTo({type: 'subtract'})

  return Rx.Observable.merge(add$, subtract$)
}

function model(action$: Rx.Observable<Action>): Rx.Observable<State> {
  const addReducer: Rx.Observable<Reducer> = action$
    .filter(action => action.type === 'add')
    .mapTo(state => ({...state, count: state.count + 1}))

  const subtractReducer: Rx.Observable<Reducer> = action$
    .filter(action => action.type === 'subtract')
    .mapTo(state => ({...state, count: state.count - 1}))

  const reducer$: Rx.Observable<Reducer> = Rx.Observable.merge(addReducer, subtractReducer)

  return reducer$.startWith(_ => ({count: 0})).scan((state, reducer) => reducer(state), {count: 0})
}

function view(state$: Rx.Observable<State>): Rx.Observable<VNode> {
  return state$
    .map(s =>
      <div>
        <h2>Cleep</h2>
        <span>{ 'Counter: ' + s.count }</span>
        <button type='button' className='add'>Increase</button>
        <button type='button' className='subtract'>Decrease</button>
      </div>
    )
}
