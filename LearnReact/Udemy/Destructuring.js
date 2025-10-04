const notes = [
    {title: 'Meeting Notes', content: 'Discuss project roadmap'},
    {title: 'Grocery List', content: 'Buy milk, eggs, bread'},
    {title: 'Workout plan', content: 'Push day: Bench, Shoulder Press'},
    {title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos'},
];

const [firstNote, ...otherNotes] = notes;

console.log('\n');
console.log(firstNote);
console.log('\n');
console.log(otherNotes);
console.log('\n');
