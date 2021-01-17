import { createAction, props } from '@ngrx/store';
import { CardInfo } from '../../models/card-info';

export const loadCardInfos = createAction(
  '[CardInfo] Load CardInfos',
  (cardInfo: CardInfo) => ({ cardInfo })
);

export const loadCardInfosSuccess = createAction(
  '[CardInfo] Load CardInfos Success',
  props<{ data: any }>()
);

export const loadCardInfosFailure = createAction(
  '[CardInfo] Load CardInfos Failure',
  props<{ error: any }>()
);
