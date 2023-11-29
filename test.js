const data = [
  [
    ["", ""],
    ["f", ""],
  ],
  [
    ["dhruvik", "123456789"],
    ["harshil", "123456789"],
  ],
];

// const finalData = []
// data.map((section) => {
//   const pp = section.map((person) => {
//     if (person[0] || person[1]) {
//       if(person !== undefined){
//         return person
//       }
//       finalData.push(pp)
//     }
//   });
// });
// console.log("finalData==>>", finalData);

const finalData = [];

data.forEach((section) => {
  const filteredSection = section.filter((person) => person[0] || person[1]);
  console.log("filteredSection",filteredSection);
  if (filteredSection.length > 0) {
    finalData.push(filteredSection);
  }
});

console.log(finalData);