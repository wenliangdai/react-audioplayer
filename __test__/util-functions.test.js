import { combineClassNames, getCleanSizeNumber } from '../src/util-functions';

describe('Function combineClassNames', () => {
  it('should combine classNames without spaces', () => {
    expect(combineClassNames('foo')).toEqual('foo');
    expect(combineClassNames('foo', 'bar')).toEqual('foo bar');
  });

  it('should not combine undefined/null values', () => {
    expect(combineClassNames('foo', undefined, 'bar', null)).toEqual('foo bar');
  });
});

describe('Function getCleanSizeNumber', () => {
  it('should remove unit properly', () => {
    expect(getCleanSizeNumber('100px')).toEqual('100');
    expect(getCleanSizeNumber('100rem')).toEqual('100');
    expect(getCleanSizeNumber('100')).toEqual('100');
  });
});