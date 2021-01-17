import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as cardInforeducer from '../reducers/card-info.reducer';

export const selectCardInfoState = createFeatureSelector<cardInforeducer.State>(
    cardInforeducer.cardInfoFeatureKey,
);

export const selectCardInfo = createSelector(
    selectCardInfoState,
    (state: cardInforeducer.State) => state
);
