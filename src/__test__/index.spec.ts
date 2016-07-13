import { helloWorld } from '../index.ts';
import * as chai from 'chai';
const expect = chai.expect;

describe('hello world', () => {

  it('should print hello world', () => {
    const res = helloWorld();
    expect(res).to.equal('hello world');
  });

});