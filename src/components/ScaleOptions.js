import React from 'react';
import TuningOptions from './TuningOptions';
import { notes, scales } from '../constants'

export default function ScaleOptions(props) {
  return (
    <div id="scale-options">
      <select onChange={props.handleSelectRoot} value={props.rootNote}>
        {notes.map(note => <option value={note} key={note}>{note}</option>)}
      </select>
      <select onChange={props.handleScaleSelect} value={Object.keys(scales).find(scale => JSON.stringify(props.selectedScale) === JSON.stringify(scales[scale]))}>
        {Object.keys(scales).map(scale => {
          return <option value={scale} key={scale}>{scale}</option>
        })}
      </select>
      <div id="sharps-or-flats-radio-buttons">
        {["Sharps", "Flats", "Fret Numbers"].map(opt => <div key={opt.toLowerCase()}><p>{opt}</p><input type="radio" name={opt.toLowerCase()} value={opt.toLowerCase()} checked={props.sharpsOrFlats === opt.toLowerCase()} onChange={props.handleSharpsOrFlats} /></div>)}
      </div>
      <button onClick={props.handleClearFretboard}>Clear Fretboard</button>
      <button onClick={props.handleFillOctaves}>Fill Octaves</button>
      <br />
      <br />
      <br />
      <TuningOptions
        tuning={props.tuning}
        handleTuneString={props.handleTuneString}
        handleTuneUp={props.handleTuneUp}
        handleTuneDown={props.handleTuneDown}
        handleAddString={props.handleAddString}
        handleRmvString={props.handleRmvString}
      />
    </div>
  )
}
