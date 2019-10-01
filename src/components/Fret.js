import React from 'react';
import Dot from './Dot';
import { notes } from '../constants';

export default function Fret(props) {
  const string = props.string;
  const fret = props.fret;
  const openNoteIndex = notes.indexOf(props.openNote);
  const note = openNoteIndex + fret > 23 ? notes[openNoteIndex + fret - 24] :
    openNoteIndex + fret > 11 ? notes[openNoteIndex + fret - 12] :
    notes[openNoteIndex + fret];
  const selectedFrets = props.selectedFrets;
  const scaleNotesFromRoot = props.rootNote === 'A' ? notes : [...notes.slice(notes.indexOf(props.rootNote)), ...notes.slice(0, notes.indexOf(props.rootNote))]
  const scaleNotes = props.selectedScale.map(idx => scaleNotesFromRoot[idx]);
  const lastString = props.tuning.length - 1;

  return (
    <div
      id={ `str${string}fr${fret}${note}` }
      className="fret"
      onClick={props.handleClick}
      title={ `${props.openNote} String ${
        fret === 0 ? 'Open' :
        `${fret}${
          fret === 1 || fret === 21 ? 'st' :
          fret === 2 || fret === 22 ? 'nd' :
          fret === 3 || fret === 23 ? 'rd' :
          'th'
        }`
      } Fret --- ${note}` }
    >
      {
        fret === 0 && string !== lastString ? <div className="nut"></div> : null
      }
      <div className="fret-string"></div>
      <div className="dot-holder">
        {
          selectedFrets.includes(`str${string}fr${fret}${note}`) || scaleNotes.includes(note) ? <Dot note={props.sharpsOrFlats === 'fret numbers' ? fret : note.length === 1 ? note : props.sharpsOrFlats === 'sharps' ? note.slice(0,2) : note.slice(3,5)} /> :
          null
        }
      </div>
      {
        string === lastString ? null :
        <div className="fret-notch"></div>
      }
    </div>
  )
}
