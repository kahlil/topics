import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Action } from './action/action';
import { curry, camelCase } from 'lodash';

@Injectable()
export class OddStreamService {
  public dispatcher$: any;
  private actionCreators: any;

  constructor() {
    this.dispatcher$ = new Subject();
  }

  dispatch(action$: Observable<any>, actionType: string): Subscription {
    const actionCreator$ = this.mapToActionCreator(action$, actionType);
    const nextFn = (data: any) => this.dispatcher$.next(data);
    const errorFn = (error: {}) => console.error('🔥', error);
    return actionCreator$.subscribe(nextFn, errorFn);
  }

  makeStateStream(reducers: any, initialState: any = []) {
    const getReducer = (actionType: string) => reducers[camelCase(actionType)];
    const mapReducer = (action: Action) => curry(getReducer(action.type))(action);
    return this.dispatcher$
      .filter((action: Action) => !!getReducer(action.type))
      .map(mapReducer)
      .scan((state: any, reducer: (state: any) => any) => reducer(state), initialState)
      .publishReplay(1).refCount();
  }

  mapToActionCreator(stream: Observable<any>, actionType: string) {
    const actionCreator = this.actionCreators[camelCase(actionType)];
    if (!!actionCreator === false) {
      throw new Error(`No action creator defined for this action: ${actionType}`);
    }
    return stream.map(actionCreator);
  }

  setActionCreators(actionCreators: {}) {
    this.actionCreators = actionCreators;
  }

  getDispatcher$() {
    return this.dispatcher$;
  }
}
