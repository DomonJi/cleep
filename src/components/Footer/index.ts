/**
 * Created by Domon on 17/4/14.
 */

import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {Sources, Sinks, Reducer, Action, State, Component} from '../../interfaces'

import intent from './intent'
import model from './model'
import view from './view'

const Footer: Component = function (source: Sources): Sinks {
  return {
    DOM: view(model(intent(source)))
  }
}

export default Footer
