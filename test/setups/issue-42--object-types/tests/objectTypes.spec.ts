import {
  Primitive,
  TypeOf,
  assert,
  assertArbitrary,
  notNullOrUndefined,
  notOfType,
  nullable,
  numeric,
  oneOf,
  primitive,
  symbol,
} from '../../../utils/utils.v2';
import { isA, typeCheckFor } from 'ts-type-checked';
import fc from 'fast-check';

describe('object types', () => {
  test('should work with example provided in #43', () => {
    type MyTest = {
      name: string;
      pos: number;
    };

    debugger;

    assert(
      fc.record({
        name: fc.string(),
        pos: numeric(),
      }),
      fc.constantFrom({}, []),
      [typeCheckFor<MyTest>(), (value) => isA<MyTest>(value)],
    );

    // assertArbitrary(nonNullableNotOfType, [typeCheckFor<MyTest>(), (value: unknown) => isA<MyTest>(value)], true);

    // const objToCheck = {
    //     name: 'test',
    //     pos: 2
    // };

    // if (isA<MyTest>(objToCheck)) {
    //     console.log('objToCheck is MyTest');
    // }

    // if (isA<MyTest>({})) {
    //     console.log('empt object is MyTest');
    // }
  });
});
