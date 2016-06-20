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
    // Use an RxJS Subject as the dispatcher.
    this.dispatcher$ = new Subject();
  }

  // Dispatch an action.
  dispatch(action$: Observable<any>, actionType: string): Subscription {
    const actionCreator$ = this.mapToActionCreator(action$, actionType);
    const nextFn = (data: any) => this.dispatcher$.next(data);
    const errorFn = (error: {}) => console.error('🔥', error);
    return actionCreator$.subscribe(nextFn, errorFn);
  }

  // Create a statestream with a set of reducers.
  makeStateStream(reducers: any, initialState: any = []) {
    const getReducer = (actionType: string) => reducers[camelCase(actionType)];
    const mapReducer = (action: Action) => curry(getReducer(action.type))(action);
    return this.dispatcher$
      .filter((action: Action) => !!getReducer(action.type))
      .map(mapReducer)
      .scan((state: any, reducer: (state: any) => any) => reducer(state), initialState)
      .publishReplay(1).refCount();
  }

  // Map an action creator to an action with the same name.
  mapToActionCreator(stream: Observable<any>, actionType: string) {
    const actionCreator = this.actionCreators[camelCase(actionType)];
    if (!!actionCreator === false) {
      throw new Error(`No action creator defined for this action: ${actionType}`);
    }
    return stream.map(actionCreator);
  }

  // Set the action creators for app.
  setActionCreators(actionCreators: {}) {
    this.actionCreators = actionCreators;
  }

  // Expose the dispatcher if needed.
  getDispatcher$() {
    return this.dispatcher$;
  }
}
