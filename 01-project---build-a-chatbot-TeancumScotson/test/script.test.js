// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getReply = module.getReply;
    getReply("name");
    jest.resetModules();
  });
});

describe("getReply", () => {
  it("should reply with - build more muscle 6 days arnold split - Oh so your a gym rat here are diffrent routines you can do push pull legs or the arnold split", () => {
    const reply1 = getReply("build more muscle");
    const expectedReply1 =
      "Awsome now what sounds better. goto the gym 3 days or 6 days";
    const reply2 = getReply("6 days");
    const expectedReply2 =
      "Oh so your a gym rat here are diffrent routines you can do push pull legs or the arnold split";
    const reply3 = getReply("arnold split");
    const expectedReply3 = "That is a very based choice name";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });

  it("should reply with - build more muscle 6 days push pull legs - Oh so your a gym rat here are diffrent routines you can do push pull legs or the arnold split", () => {
    const reply1 = getReply("build more muscle");
    const expectedReply1 =
      "Awsome now what sounds better. goto the gym 3 days or 6 days";
    const reply2 = getReply("6 days");
    const expectedReply2 =
      "Oh so your a gym rat here are diffrent routines you can do push pull legs or the arnold split";
    const reply3 = getReply("push pull legs");
    const expectedReply3 = "classic split";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });

  it("should reply with - build more muscle 3 days 3 day arnold split - oh a personal favorite of mine ", () => {
    const reply1 = getReply("build more muscle");
    const expectedReply1 =
      "Awsome now what sounds better. goto the gym 3 days or 6 days";
    const reply2 = getReply("3 days");
    const expectedReply2 =
      "nice great for a balanced life now here two diffrent routines that you can do 3 day arnold split or 3 day push pull legs";
    const reply3 = getReply("3 day arnold split");
    const expectedReply3 = "oh a personal favorite of mine";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });

  it("should reply with - build more muscle 3 days 3 day arnold split - oh a personal favorite of mine ", () => {
    const reply1 = getReply("build more muscle");
    const expectedReply1 =
      "Awsome now what sounds better. goto the gym 3 days or 6 days";
    const reply2 = getReply("3 days");
    const expectedReply2 =
      "nice great for a balanced life now here two diffrent routines that you can do 3 day arnold split or 3 day push pull legs";
    const reply3 = getReply("3 day push pull legs");
    const expectedReply3 = "what a chad choice name";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });
  it("should reply with - Be more athletic 2 days full body - Great get ready to feel sore ", () => {
    const reply1 = getReply("be more athletic");
    const expectedReply1 =
      "great now what sounds better. goto the gym 2 days or 5 days";
    const reply2 = getReply("2 days");
    const expectedReply2 =
      "Great for a busy life style here are two routines that should work for you, full body and upper lower";
    const reply3 = getReply("full body");
    const expectedReply3 = "Great get ready to feel sore";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });
  it("should reply with - Be more athletic 2 days upper lower - Great get ready to feel sore ", () => {
    const reply1 = getReply("be more athletic");
    const expectedReply1 =
      "great now what sounds better. goto the gym 2 days or 5 days";
    const reply2 = getReply("2 days");
    const expectedReply2 =
      "Great for a busy life style here are two routines that should work for you, full body and upper lower";
    const reply3 = getReply("upper lower");
    const expectedReply3 = "Great get ready to feel sore";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });
  it("should reply with - Be more athletic 5 days upper lower power - your gonna be on another level ", () => {
    const reply1 = getReply("be more athletic");
    const expectedReply1 =
      "great now what sounds better. goto the gym 2 days or 5 days";
    const reply2 = getReply("5 days");
    const expectedReply2 =
      "committed I like that these are two beast workouts upper lower power and push pull legs athletic";
    const reply3 = getReply("upper lower power");
    const expectedReply3 = "your gonna be on another level";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });
  it("should reply with - Be more athletic 5 days push pull legs athletic foucs - your gonna be on another level ", () => {
    const reply1 = getReply("be more athletic");
    const expectedReply1 =
      "great now what sounds better. goto the gym 2 days or 5 days";
    const reply2 = getReply("5 days");
    const expectedReply2 =
      "committed I like that these are two beast workouts upper lower power and push pull legs athletic";
    const reply3 = getReply("push pull legs athletic");
    const expectedReply3 = "your gonna be on another level";
    // Uncomment the following line and update your expectation
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });
});
