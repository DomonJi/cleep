/**
 * Created by Domon on 17/4/14.
 */
import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State, Component} from '../../interfaces'

const KeepList: Component = function (source: Sources): Sinks {
  return {
    DOM: Rx.Observable.of(<div className="list-container main"></div>)
  }
}

export default KeepList
