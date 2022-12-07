import { SortTopicPipe } from './sort-topic.pipe';

describe('SortTopicPipe', () => {
  let pipe: SortTopicPipe;

  beforeEach(() => {
    pipe = new SortTopicPipe();
  });

  it('should return the input array of objects filtered by the provided topics', () => {
    const input = [
      { name: 'foo', topic: 'Topic 1' },
      { name: 'bar', topic: 'Topic 2' },
      { name: 'baz', topic: 'Topic 3' },
    ];

    const expectedOutput = [
      { name: 'foo', topic: 'Topic 1' },
      { name: 'bar', topic: 'Topic 2' },
    ];

    expect(
      pipe.transform(input, [{ name: 'Topic 1' }, { name: 'Topic 2' }])
    ).toEqual(expectedOutput);
  });

  it('should return the input array unmodified if no topics are provided', () => {
    const input = [
      { name: 'foo', topic: 'Topic 1' },
      { name: 'bar', topic: 'Topic 2' },
      { name: 'baz', topic: 'Topic 3' },
    ];

    expect(pipe.transform(input,[])).toEqual(input);
  });
});
