import { DynamoDB } from "aws-sdk";

describe(DynamoDB, () => {
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/Converter.html
  describe("Converter", () => {
    describe("#marshall", () => {
      test("", () => {
        const input = { str: "1", num: 1 };
        const output = { str: { S: "1" }, num: { N: "1" } };
        expect(DynamoDB.Converter.marshall(input)).toEqual(output);
      });
    });

    describe("#unmarshall", () => {
      test("", () => {
        const input = { str: { S: "1" }, num: { N: "1" } };
        const output = { str: "1", num: 1 };
        expect(DynamoDB.Converter.unmarshall(input)).toEqual(output);
      });
    });
  });
});
