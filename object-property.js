const students = [
{id: 40, name: 'Omar Sunny'},
{id: 50, name: 'Manna'},
{id: 16, name: 'Munmun'},
{id: 45, name: 'Deefjol'},
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);