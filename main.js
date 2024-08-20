const example = [
  ["A","A","A"],
  ["A","A","A"],
  ["B","A","A"]
];

function whereIsWaldo(matrix) {
  let target = matrix[0][0];

  // التكرار على الصفوف للعثور على الصف الذي يحتوي على العنصر المختلف
  let rowIndex = matrix.findIndex(row => row.includes(target) && row.filter(el => el !== target).length === 1);

  // العثور على العمود الذي يحتوي على العنصر المختلف داخل الصف الذي وجدناه
  let colIndex = matrix[rowIndex].findIndex(col => col !== target);

  // نعيد الإحداثيات على شكل 1-indexed
  return [rowIndex + 1, colIndex + 1];
}


const whereIsWaldo = (matrix) => {
  
}

console.log(whereIsWaldo(example))
// should output [3,1]

