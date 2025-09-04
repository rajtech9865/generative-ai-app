// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const { Random } = require("random-js");
// const simpleGit = require("simple-git");
// const random = new Random(); // uses the nativeMath engine

// const FILE_PATH = "./data.json";

// // Generate a list of all valid dates (excluding weekends) between two dates
// const generateDates = (startDate, endDate) => {
//   const dates = [];
//   let currentDate = moment(startDate);

//   while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, "day")) {
//     // Skip Saturdays (6) and Sundays (0)
//     if ((currentDate.day() !== 0 && currentDate.day() !== 6) || Boolean(random.integer(0, 1))) {
//       dates.push(currentDate.format("YYYY-MM-DD"));
//     }
//     currentDate.add(1, "day");
//   }

//   return dates;
// };

// // Generate random commits for each valid date
// const MakeCommits = async () => {
//   const endDate = moment(); // Current date
//   const startDate = moment().subtract(8, "years"); // 6 years ago
//   console.log("date", endDate, startDate)
//   const dates = generateDates(startDate, endDate);

//   for (const date of dates) {
//     const commitsForDay = random.integer(0, 7); // Random number of commits (0-3)

//     for (let i = 0; i < commitsForDay; i++) {
//       const commitDate = date;

//       // Write to the file
//       const data = { date: commitDate };
//       jsonfile.writeFileSync(FILE_PATH, data);

//       // Make the commit
//       await simpleGit()
//         .add([FILE_PATH])
//         .commit(commitDate, { "--date": commitDate });
//     }

//     console.log(`Commits made for ${date}: ${commitsForDay}`);
//   }

//   // Push all the commits after processing all the dates
//   await simpleGit().push();
// };

// // Start the commit process
// MakeCommits().then(() => console.log("Commits completed!"));


// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const { Random } = require("random-js");
// const simpleGit = require("simple-git");
// const random = new Random(); // uses the nativeMath engine

// const FILE_PATH = "./data.json";

// // Generate a list of all valid dates (excluding weekends) between two dates
// const generateDates = (startDate, endDate) => {
//   const dates = [];
//   let currentDate = moment(startDate);

//   while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, "day")) {
//     // Allow weekend commits occasionally - 1 out of 5 weekends
//     if (
//       (currentDate.day() !== 0 && currentDate.day() !== 6) ||
//       random.integer(1, 5) === 1
//     ) {
//       dates.push(currentDate.format("YYYY-MM-DD"));
//     }
//     currentDate.add(1, "day");
//   }

//   return dates;
// };

// // Generate random commits for each valid date
// const MakeCommits = async () => {
//   const endDate = moment(); // Current date
//   const startDate = moment().subtract(8, "years"); // 8 years ago
//   const dates = generateDates(startDate, endDate);
//   const git = simpleGit();

//   for (const date of dates) {
//     const commitsForDay = random.integer(1, 7); // Random number of commits (1-7)

//     for (let i = 0; i < commitsForDay; i++) {
//       const commitDate = date;
//       const commitTime = `${date}T${random.integer(0, 23)}:${random.integer(
//         0,
//         59
//       )}:${random.integer(0, 59)}Z`;

//       // Write to the file
//       const data = { date: commitDate, time: commitTime };
//       jsonfile.writeFileSync(FILE_PATH, data);

//       // Make the commit
//       await git
//         .add([FILE_PATH])
//         .commit(`Commit on ${commitDate} at ${commitTime}`, {
//           "--date": commitTime,
//         });
//     }

//     console.log(`Commits made for ${date}: ${commitsForDay}`);
//   }

//   // Push all the commits after processing all the dates
//   await git.push();
// };

// // Start the commit process
// MakeCommits().then(() => console.log("Commits completed!"));
