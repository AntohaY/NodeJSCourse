const fs = require('fs');
const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
    
        saveNotes(notes)
        console.log('Yas')
    } else {
        console.log('Note title taken')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const filteredNotes = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > filteredNotes) {
        console.log('Note removed')
    } else {
        console.log('No note found')
    }

    saveNotes(filteredNotes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(`Title: ${note.title}; Body: ${note.body}`)
        console.log()
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
}