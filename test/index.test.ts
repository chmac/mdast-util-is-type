import { isRoot } from '../src';

describe('mdast-util-is-type', () => {
  describe('isRoot()', () => {
    it('Returns true for an object with type=root #a7uiHL', () => {
      expect(isRoot({ type: 'root' })).toEqual(true);
    });
  });
});
