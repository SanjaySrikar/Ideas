import { SortByStringPipe } from './sort-by-string.pipe';

describe('SortByStringPipe', () => {
  let pipe: SortByStringPipe;

  beforeEach(() => {
    pipe = new SortByStringPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the input array of length of arguments is zero', () => {
    const input = [
      { name: 'foo', votes: 10 },
      { name: 'bar', votes: 5 },
      { name: 'baz', votes: 15 },
    ];

    expect(pipe.transform(input)).toEqual(input);
  });



  it('should return null if the input or arguments are undefined', () => {
    expect(pipe.transform(undefined)).toEqual(undefined);
    expect(pipe.transform([], undefined)).toEqual([]);
  });

  it('should sort the input array in descending order by the specified property', () => {
    const input = [
      { name: 'foo', votes: 10 },
      { name: 'bar', votes: 5 },
      { name: 'baz', votes: 15 },
    ];
    const expectedOutput = [
      { name: 'bar', votes: 5 },
      { name: 'baz', votes: 15 },
      { name: 'foo', votes: 10 },
    ];

    expect(pipe.transform(input,'name')).toEqual(expectedOutput);
  });

  it('should filter the input array by the specified name before sorting', () => {
    const input = [
      { name: 'foo', votes: 10 },
      { name: 'bar', votes: 5 },
      { name: 'baz', votes: 15 },
      { name: 'foo', votes: 20 },
    ];
    const expectedOutput = [
      { name: 'foo', votes: 10 },
      { name: 'foo', votes: 20 },
    ];

    expect(pipe.transform(input, 'votes', 'foo')).toEqual(
      expectedOutput
    );
  });

  it('should return the input array unmodified if no arguments are provided', () => {
    const input = [
      { name: 'foo', votes: 10 },
      { name: 'bar', votes: 5 },
      { name: 'baz', votes: 15 },
    ];

    expect(pipe.transform(input)).toEqual(input);
  });
});
