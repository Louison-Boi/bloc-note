import React from "react"
import ReactDOM from "react-dom"
import MarkDownInput from "./components/MarkDownInput/index"
import NoteDisplay from "./components/NoteDisplay/index"
import NoteList from "./components/Menu/index"
import "./index.scss"

const App = () => {

  
  const [title, setTitle] = React.useState("")
  const [textNote, setTextNote] = React.useState("")


  const changeTitle = (event) => {
    if (event !== undefined) setTitle(event.target.value)
  }
    console.log(title)

  const changeTextNote = (event) => {
    if (event !== undefined) setTextNote(event.target.value)
  }

 

  const handleSave = ()=>{
    const note = JSON.stringify({Title: title, Note:textNote})
     localStorage.setItem('theSave', note)
     return(
      localStorage.getItem('theSave')
     )
     
  }

  const tableNote = JSON.parse(handleSave())

  const sideTitle = tableNote.Title
  const sideText = tableNote.Note

 console.log(sideText)


  return( 
    <div>
      <div id="sidebar" className="layout has-sidebar">
        <aside id="sidebar" className="sidebar break-point-md">
        <button> Créer une note </button>
        <h1> {sideTitle}</h1>
        <h3>{sideText}</h3>
        </aside>

      </div>
      <div className="card-text">
        <NoteDisplay  dataTitle = {title} dataNote={textNote}/>
      </div>
      <div >
        <MarkDownInput  titleEnter={changeTitle} textEnter={changeTextNote} saveText={handleSave}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));