import { Action, createReducer, on } from '@ngrx/store';
import { CardInfo } from '../../models/card-info';
import * as CardInfoActions from '../actions/card-info.actions';



export const cardInfoFeatureKey = 'cardInfo';

export interface State {
  cardInfo: CardInfo;
}

export const initialState: State = {
  cardInfo: {
    card_number: '',
    card_holder: '',
    expiry_date: null,
    security_code: '',
    amount: 0
  },
};


export const cardInforeducer = createReducer(
  initialState,
  on(CardInfoActions.loadCardInfos,
    (state: State, { cardInfo }) =>
    ({
      ...state,
      ...cardInfo
    }))

);

export function reducer(state: State | undefined, action: Action): any {

  if (action.type === '[CardInfo] Load CardInfos') {
    state = action['cardInfo'];
  }
  return state;
  // return cardInforeducer(state, action);
}
