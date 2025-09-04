const jsonfile = require("jsonfile");
const moment = require("moment");
const { Random } = require("random-js");
const simpleGit = require("simple-git");
const random = new Random(); // uses the nativeMath engine

const FILE_PATH = "./data.json";


// Define a random date within the past 6 years to the current date
const randomDate = () => {
  const currentDate = moment(); // Current date
  const sixYearsAgo = moment().subtract(5, "years"); // Date 6 years ago

  // Generate a random timestamp between sixYearsAgo and currentDate
  const randomTimestamp = random.integer(sixYearsAgo.valueOf(), currentDate.valueOf());

  // Format the random timestamp into a readable date
  return moment(randomTimestamp).format("YYYY-MM-DD");
};

console.log(randomDate());


const MakeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  // const x = random.integer(1, 53);
  // const y = random.integer(1, 4);
  const DATE = randomDate()
  const date = {
    date: DATE,
  };
  console.log(date, n);
  jsonfile.writeFile(FILE_PATH, date, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }, MakeCommit.bind(this, --n));
  });
};
MakeCommit(10000);
