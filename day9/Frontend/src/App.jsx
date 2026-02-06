import { useEffect, useState } from 'react'
import axios from "axios"

function App() {

  const [notes, setNotes] = useState([
    {
      title: "test title 1",
      description: "test description 1"
    },
    {
      title: "test title 2",
      description: "test description 2"
    },
    {
      title: "test title 3",
      description: "test description 3"
    },
    {
      title: "test title 4",
      description: "test description 4"
    },
  ])
  
  function fetchNotes() {
    axios.get('http://localhost:3000/notes')
      .then((res) => {
      setNotes(res.data.notes)
    })
  }  

  useEffect(() => { 
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements;

    axios.post('http://localhost:3000/notes', {
      title: title.value,
      description: description.value
    })
    .then(res => {
      console.log(res.data);
      fetchNotes()
        
    })
    
  }

  function handleDeleteNote(noteId) {
    axios.delete('http://localhost:3000/notes/'+noteId)
    .then(res => {
      fetchNotes()
    })
  }

  return (
    <>
      <form className='create-notes-form' action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter title' name='title' />
        <input type="text" placeholder='Enter description' name='description' />
        <button>Create note</button>
      </form>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
            <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
          </div>
          })
        }
      </div>
    </>
  )
}

export default App
