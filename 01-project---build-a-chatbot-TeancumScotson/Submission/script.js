/**
 *
 * @param {string} userInput -  value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let level = 1;
let path = 0;
let globalName;

const getReply = (userInput) => {
  const lowerCaseUserInput = userInput.toLowerCase();
  const lowerCaseUserInputIsBuildMoreMuscle =
    lowerCaseUserInput === "build more muscle";
  const lowerCaseUserInputIs6Days = lowerCaseUserInput === "6 days";
  const lowerCaseUserInputIsArnoldSplit = lowerCaseUserInput === "arnold split";
  const lowerCaseUserInputIsBeMoreAthletic =
    lowerCaseUserInput === "be more athletic";
  const lowerCaseUserInputIsPushPullLegs =
    lowerCaseUserInput === "push pull legs";
  const lowerCaseUserInputIs3Days = lowerCaseUserInput === "3 days";
  const lowerCaseUserInputIs3DayArnoldSplit =
    lowerCaseUserInput === "3 day arnold split";
  const lowerCaseUserInputIs3DayPushPullLegs =
    lowerCaseUserInput === "3 day push pull legs";
  const lowerCaseUserInputIs2Days = lowerCaseUserInput === "2 days";
  const lowerCaseUserInputIsFullBody = lowerCaseUserInput === "full body";
  const lowerCaseUserInputIsUpperLower = lowerCaseUserInput === "upper lower";
  const lowerCaseUserInputIs5Days = lowerCaseUserInput === "5 days";
  const lowerCaseUserInputIsUpperLowerPower =
    lowerCaseUserInput === "upper lower power";
  const lowerCaseUserInputIsPushPullLegsAthletic =
    lowerCaseUserInput === "push pull legs athletic";
  const lowerCaseUserInputRestart = lowerCaseUserInput === "restart";
  const lowerCaseUserInputHelp = lowerCaseUserInput === "help";

  if (lowerCaseUserInputHelp) {
    return "you can copy and paste options into the word bar to continue ";
  }

  if (lowerCaseUserInputRestart) {
    level = 1;
    path = 0;
    return `Nice to meet you, ${globalName} what do you want to achive in the gym build more muscle or be more athletic`;
  }

  if (globalName === undefined) {
    globalName = userInput;
    return `Nice to meet you, ${globalName} what do you want to achive in the gym build more muscle or be more athletic`;
  }

  if (level === 1)
    if (lowerCaseUserInputIsBuildMoreMuscle) {
      level = 2;
      path = 1;
      return "Awsome now what sounds better. goto the gym 3 days or 6 days";
    }
  if (lowerCaseUserInputIsBeMoreAthletic) {
    level = 2;
    path = 2;
    return "great now what sounds better. goto the gym 2 days or 5 days";
  }
  if (path === 1)
    if (level === 2)
      if (lowerCaseUserInputIs6Days) {
        level = 3;
        return "Oh so your a gym rat here are diffrent routines you can do push pull legs or the arnold split";
      }

  if (level === 3)
    if (lowerCaseUserInputIsArnoldSplit) {
      return `That is a very based choice ${globalName}`;
    }

  if (level === 3)
    if (lowerCaseUserInputIsPushPullLegs) {
      return "classic split";
    }

  if (level === 2)
    if (lowerCaseUserInputIs3Days) {
      level = 3;
      return "nice great for a balanced life now here two diffrent routines that you can do 3 day arnold split or 3 day push pull legs";
    }

  if (level === 3)
    if (lowerCaseUserInputIs3DayArnoldSplit)
      return "oh a personal favorite of mine";

  if (level === 3)
    if (lowerCaseUserInputIs3DayPushPullLegs)
      return `what a chad choice ${globalName}`;

  if (path === 2)
    if (level === 2)
      if (lowerCaseUserInputIs2Days) {
        level = 3;
        return "Great for a busy life style here are two routines that should work for you, full body and upper lower";
      }

  if (level === 3)
    if (lowerCaseUserInputIsFullBody) return "Great get ready to feel sore";

  if (level === 3)
    if (lowerCaseUserInputIsUpperLower) return "Great get ready to feel sore";

  if (level === 2)
    if (lowerCaseUserInputIs5Days) {
      level = 3;
      return "committed I like that these are two beast workouts upper lower power and push pull legs athletic";
    }

  if (level === 3)
    if (lowerCaseUserInputIsUpperLowerPower)
      return "your gonna be on another level";

  if (level === 3)
    if (lowerCaseUserInputIsPushPullLegsAthletic)
      return "your gonna be on another level";

  return "you have reached the end please type restart";
};

export { getReply };
