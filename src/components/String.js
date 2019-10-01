import React from 'react';
import Fret from './Fret';

export default function String(props) {
  const string = props.string;
  const frets = [...Array(25).keys()];
  return (
    <div key={`str${string}`} id={`str${string}`} className="string" title={`${props.openNote} String`}>
      {
        frets.map(fret => <Fret string={string} fret={fret} selectedFrets={props.selectedFrets}
          selectedScale={props.selectedScale} rootNote={props.rootNote} handleClick={props.handleClick} openNote={props.openNote} key={`string-${string}_fret-${fret}`} sharpsOrFlats={props.sharpsOrFlats} tuning={props.tuning} />)
      }
      <br />
    </div>
  )
}
