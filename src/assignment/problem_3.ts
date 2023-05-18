function reverseInput<T>(...args: T[]): T[] {
  return args.reverse();
}

console.log(reverseInput("one", "two", "three", "four", "five"));
