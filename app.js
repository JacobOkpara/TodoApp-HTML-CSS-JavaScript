let teams = ["chelsea", "ac milan", "liverpool", "arsenal"];

function app() {
  let teams = ["chelsea", "ac milan", "liverpool", "arsenal"];
  teams.pop();
  return teams;
}

console.log(app());

function joe() {
  let object = ["house", "property", "mankind", "lovebirds", "moneyman"];
  object.pop();
  return object;
}

console.log(joe());

// argument and parameters

// parameters

function mydaterush(daterush1, daterush2, daterush3) {
  return {
    name: daterushName,
    age: daterushAge,
    gender: daterushGender,
  };
}

console.log(mydaterush("jacob", "22", "male"));
