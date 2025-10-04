const note = {
    title: 'Meeting notes',
    content: 'Discuss project roadmap',
    timestamp: Date.now(),
    isPinned: true,
};

const noteText = `
    Title: ${note.title}
    Status: ${note.isPinned ? ' Pinned Note' : 'Regular Note'}
    Last Edited: ${new Date(note.timestamp).toLocaleString()}
    `;

console.log(noteText);