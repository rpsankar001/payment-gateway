import * as fromCardInfo from './card-info.actions';

describe('loadCardInfos', () => {
  it('should return an action', () => {
    expect(fromCardInfo.loadCardInfos().type).toBe('[CardInfo] Load CardInfos');
  });
});
