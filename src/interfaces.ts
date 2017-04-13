import * as Rx from 'rxjs'
import {VNode, DOMSource} from '@cycle/dom'
import {HTTPSource, RequestOptions} from '@cycle/http'

export interface Sources {
  DOM: DOMSource,
  HTTP: HTTPSource
  prop?: Rx.Observable<any>
}

export interface Sinks {
  DOM?: Rx.Observable<VNode>,
  HTTP?: Rx.Observable<RequestOptions>
}

export interface State {
  count: number,
  search: boolean,
  list: Array<Item>,
  layout: boolean
}

export interface Item {
  type: ItemType
}

export enum ItemType {
  text,
  voice,
  drawing,
  todolist,
  reminder
}

export interface Action {
  type: string,
  playload?: any
}

export type Component = (s: Sources) => Sinks
export type Reducer = (prevState: State) => State
