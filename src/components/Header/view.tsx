import * as Rx from 'rxjs'
import {VNode, DOMSource, header, span, p, input} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

function renderHeader(state: State): VNode {
  const middle = state.search ?
    <input className='header-main' id='search-input' placeholder='Search...' type='text'/>
    : <span className='header-main'>Notes</span>
  return <header className='header'>
    <div id='menu' className='header-icon'><i className="fa fa-bars"></i></div>
    {middle}
    <div id='search-btn' className='header-icon'><i className="fa fa-search"></i></div>
    <div id='layout-btn' className={state.layout ? 'layout-grid header-icon' : 'layout-list header-icon'}>
      <i className="fa fa-th-large"></i>
    </div>
  </header>
}

export default function view(state$: Rx.Observable<State>): Rx.Observable<VNode> {
  return state$.map(renderHeader)
}
