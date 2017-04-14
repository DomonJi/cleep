import * as Rx from 'rxjs'
import {VNode, DOMSource, header, span, p, input} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State} from '../../interfaces'

export default function view(state$: Rx.Observable<State>): Rx.Observable<VNode> {
  return Rx.Observable.of(<footer className='footer'>
    <span>Take a note...</span>
    <i className="fa fa-list"></i>
    <i className="fa fa-pencil"></i>
    <i className="fa fa-microphone"></i>
    <i className="fa fa-camera"></i>
  </footer>)
}
