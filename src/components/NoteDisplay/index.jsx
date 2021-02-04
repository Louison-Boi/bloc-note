import React from "react"
import Showdown from 'showdown';

const NoteDisplay = ({dataTitle, dataNote}) => {


  const converter = new Showdown.Converter();
  const title = dataTitle
  const note = dataNote
  
  const titleHtml = converter.makeHtml(title)
  const noteHtml = converter.makeHtml(note)

return(
  <div className ="card">
    <div className="card-body" dangerouslySetInnerHTML= {{__html: titleHtml}}> 
    </div>
    <div className="card-body" dangerouslySetInnerHTML= {{__html: noteHtml}}>
    </div>
  </div>
)



}

export default NoteDisplay