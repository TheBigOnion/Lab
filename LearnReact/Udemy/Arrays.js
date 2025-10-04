const notes = [
    { title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true },
    { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
    { title: 'Workout plan', content: 'Push day: Bench, Shoulder Press', isPinned: false },
    { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false },
];
// use map
const noteTitles = notes.map((note, index) => `${index}. ${note.title}` );

console.log(noteTitles);

console.log('\n');

const pinnedNotes = notes
                    .filter((note) => note.isPinned)
                    .map((note) => note.title)
;

console.log(pinnedNotes);

//Get the total characters in the content field above
const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);

console.log(`\nTotal Characters : ${totalCharacters}`);

//Total up some numbers in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);

console.log(`\nSum : ${sum}`);
console.log('\n');

//Let's look at "for each"
notes.forEach((note) => console.log(note.title));


console.log('\n');