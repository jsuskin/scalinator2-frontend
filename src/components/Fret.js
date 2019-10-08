import React from 'react';
import Dot from './Dot';
import { notes } from '../constants';

let thisFret = '';

export default class Fret extends React.Component {
  render() {
    const string = this.props.string;
    const fret = this.props.fret;
    const openNoteIndex = notes.indexOf(this.props.openNote);
    const note = openNoteIndex + fret > 23 ? notes[openNoteIndex + fret - 24] :
      openNoteIndex + fret > 11 ? notes[openNoteIndex + fret - 12] :
      notes[openNoteIndex + fret];
    const selectedFrets = this.props.selectedFrets;
    const scaleNotesFromRoot = this.props.rootNote === 'A' ? notes : [...notes.slice(notes.indexOf(this.props.rootNote)), ...notes.slice(0, notes.indexOf(this.props.rootNote))]
    const scaleNotes = this.props.selectedScale.map(idx => scaleNotesFromRoot[idx]);
    const lastString = this.props.tuning.length - 1;
    thisFret = `str${string}fr${fret}${note}`;
    this.props.addToAllFrets(thisFret)

    return (
      <div
        id={ `str${string}fr${fret}${note}` }
        className="fret"
        onClick={this.props.handleClick}
        title={ `${this.props.openNote} String ${
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
            selectedFrets.includes(`str${string}fr${fret}${note}`) || scaleNotes.includes(note) ? <Dot note={this.props.sharpsOrFlats === 'fret numbers' ? fret : note.length === 1 ? note : this.props.sharpsOrFlats === 'sharps' ? note.slice(0,2) : note.slice(3,5)} /> :
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
}
