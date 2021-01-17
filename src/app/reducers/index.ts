import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRoot from '../shared/store/reducers/card-info.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  cardInfo: fromRoot.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
