import {fizzybuzz, buzz, fizz, fizzbuzz, projectName} from "./index";

describe('Starter project should', () => {
  it('output its name', () => {
    expect(projectName()).toEqual('Kata starter project');
  });
});

describe('Fizzbuzz function should', () => {
  it('output 1 when given 1', () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
});

describe('Fizz function should', () => {
  it('output fizz when given 3', () => {
    expect(fizz(3)).toEqual("fizz");
  });
});

describe('Buzz function should', () => {
  it('output buzz when given 5', () => {
    expect(buzz(5)).toEqual("buzz");
  });
});

describe('fizzybuzz function should', () => {
  it('output fizzybuzz when given 15', () => {
    expect(fizzybuzz(15)).toEqual("fizzybuzz");
  });
});