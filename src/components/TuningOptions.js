import React from 'react';
import { notes } from '../constants'

export default function TuningOptions(props) {
  let i = 0;
  return (
    <div className="string-dropdowns">
      <div className="add-rmv-strings string-adjusters">
        <p id="add-string" className="add-rmv-string" onClick={props.handleAddString}>+</p>
        <p id="rmv-string" className="add-rmv-string" onClick={props.handleRmvString}>-</p>
      </div>
      <div className="adjust-tuning string-adjusters">
        <p id="tune-up" className="tune-up-down" onClick={props.handleTuneUp}>˄</p>
        <p id="tune-down" className="tune-up-down" onClick={props.handleTuneDown}>˅</p>
      </div>
      {
        props.tuning.map(idx => {
          return (
            <select value={notes[idx]} id={`string-dropdown-${i}`} key={`string-dropdown-${i++}`} onChange={props.handleTuneString}>
              {notes.map(note => <option key={note}>{note}</option>)}
            </select>
          )
        })
      }
    </div>
  )
}
