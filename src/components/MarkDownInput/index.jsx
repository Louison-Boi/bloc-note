import React from "react"

const MarkDownInput = ({titleEnter, textEnter, saveText}) => {



  return (
    <div className="card">
      <div>
        <form>
          <input
          className="form__input"
          type= "text"
          onChange = {titleEnter} 
          >
          </input>
        </form>
      </div>
      <div>
        <form>
          <textarea
          className="area__input"
          type= "text"
          onChange = {textEnter}
          >
          </textarea>
        </form>
      </div>
      <div>
        <button onClick={saveText}> Save</button>
      </div>
    </div>

  )

}

export default MarkDownInput