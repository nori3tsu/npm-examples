import * as _ from "lodash";
describe("lodash", () => {
  describe("#uniq", () => {
    test("", () => {
      const input = [1, 1, 2, 3];
      const output = [1, 2, 3];
      expect(_.uniq(input)).toEqual(output);
    });
  });
});
