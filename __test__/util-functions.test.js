import { combineClassNames } from '../src/util-functions';

describe('Function combineClassNames', () => {
  it('should combine classNames without spaces', () => {
    expect(combineClassNames('foo')).toEqual('foo');
    expect(combineClassNames('foo', 'bar')).toEqual('foo bar');
  });

  it('should not combine undefined/null values', () => {
    expect(combineClassNames('foo', undefined, 'bar', null)).toEqual('foo bar');
  });
});
