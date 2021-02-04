import React from "react"
import ReactDOM from "react-dom"
import MarkDownInput from "./components/MarkDownInput/index"
import NoteDisplay from "./components/NoteDisplay/index"
import "./index.scss"

const App = () => {

  const [title, setTitle] = React.useState("")
  const [textNote, setTextNote] = React.useState("")


  const changeTitle = (event) => {
    setTitle(event.target.value)
  }
    console.log(title)

  const changeTextNote = (event) => {
    setTextNote(event.target.value)
  }
  
    console.log(textNote)


  return( 
    <div>
      <h1> Hello</h1>
      <NoteDisplay  dataTitle = {title} dataNote={textNote}/>
      <MarkDownInput  titleEnter={changeTitle} textEnter={changeTextNote}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));