import * as Rx from 'rxjs'
import {VNode, DOMSource, header, span, p, input} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

function renderHeader(state: State): VNode {
  const middle = state.search ? <input id='search-input' placeholder='Search...' type='text'/> : <span>Cleep</span>
  return <header>
    <button id='menu'>Menu</button>
    {middle}
    <button id='search-btn'>Search</button>
    <button id='layout-btn' className={state.layout ? 'layout-grid' : 'layout-list'}>Layout</button>
  </header>
}

export default function view(state$: Rx.Observable<State>): Rx.Observable<VNode> {
  return state$.map(renderHeader)
}
