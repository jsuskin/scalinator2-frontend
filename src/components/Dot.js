import React from 'react';

export default function Dot(props) {
  return (
    <>
      <div className="dot"></div>
      <div className={`note ${props.note.length > 1 ? `two-char-note` : `one-char-note`}`}>{props.note}</div>
    </>
  )
}
