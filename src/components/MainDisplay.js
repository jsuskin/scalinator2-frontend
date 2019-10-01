import React, { Component } from 'react';
import String from './String';
import ScaleOptions from './ScaleOptions';
import { notes, scales, tunings } from '../constants';

export default class MainDisplay extends Component {
  state = {
    sharpsOrFlats: 'sharps',
    stringNoteDisplay: 'sharps',
    selectedFrets: [],
    selectedScale: [],
    rootNote: 'C',
    tuning: tunings["Standard 6-String"]
  }

  handleClick = e => {
    if(this.state.selectedFrets.includes(e.currentTarget.id)) {
      const selectedFrets = [...this.state.selectedFrets];
      selectedFrets.splice(this.state.selectedFrets.indexOf(e.currentTarget.id), 1);
      this.setState({ selectedFrets: [...selectedFrets] });
    } else {
      this.setState({
        selectedFrets: [...this.state.selectedFrets, e.currentTarget.id],
        selectedScale: [...this.state.selectedScale, e.currentTarget.id]
      });
    }
  }

  handleSharpsOrFlats = e => {
    this.setState({
      sharpsOrFlats: e.target.value,
      stringNoteDisplay: e.target.value === 'fret numbers' ? this.state.stringNoteDisplay : e.target.value
    });
  }

  handleScaleSelect = e => this.setState({
    selectedScale: scales[e.target.value]
  });

  handleSelectRoot = e => this.setState({ rootNote: e.target.value });

  handleClearFretboard = () => {
    this.setState({
      selectedFrets: [],
      selectedScale: []
    });
  }

  handleFillOctaves = () => {
    this.setState({
      selectedScale: this.state.selectedFrets.map(fret => this.state.rootNote === 'A' ? notes.indexOf(fret.split(/\d+/g)[2]) : [...notes.slice(notes.indexOf(this.state.rootNote)), ...notes.slice(0, notes.indexOf(this.state.rootNote))].indexOf(fret.split(/\d+/g)[2]))
    })
  }

  handleTuneString = e => {
    const selectIdx = e.target.id.split('-')[2];
    const newNote = e.target.value;
    const noteIdx = notes.indexOf(newNote);
    const newTuning = [...this.state.tuning];
    newTuning[selectIdx] = noteIdx;
    this.setState({
      tuning: [...newTuning]
    });
  }

  handleTuneUp = () => {
    this.setState({
      tuning: this.state.tuning.map(string => string === 11 ? 0 : ++string)
    })
  }

  handleTuneDown = () => {
    this.setState({
      tuning: this.state.tuning.map(string => string === 0 ? 11 : --string)
    })
  }

  handleAddRmvString = (sign) => {
    this.setState({
      tuning: tunings[`Standard ${this.state.tuning.length + sign}-String`]
    })
  }

  handleAddString = () => this.handleAddRmvString(1);

  handleRmvString = () => this.handleAddRmvString(-1);

  render() {
    const strings = [...Array(this.state.tuning.length).keys()];
    const tuning = notes => notes.map(note => this.props.notes[note]).reverse();
    const currentTuning = tuning(this.state.tuning);
    const selectedFrets = this.state.selectedFrets;
    const unique = (value, index, self) => self.indexOf(value) === index;
    const selectedNotes = selectedFrets.map(fret => fret.split(/\d+/g)[2]).filter((m,n) => m !== n).filter(unique).sort();

    return (
      <div className="main-display">
        <div className="scale-container">
          <ScaleOptions
            rootNote={this.state.rootNote}
            tuning={this.state.tuning}
            sharpsOrFlats={this.state.sharpsOrFlats}
            selectedScale={this.state.selectedScale}
            handleSelectRoot={this.handleSelectRoot}
            handleSharpsOrFlats={this.handleSharpsOrFlats}
            handleClearFretboard={this.handleClearFretboard}
            handleScaleSelect={this.handleScaleSelect}
            handleFillOctaves={this.handleFillOctaves}
            handleTuneString={this.handleTuneString}
            handleTuneUp={this.handleTuneUp}
            handleTuneDown={this.handleTuneDown}
            handleAddString={this.handleAddString}
            handleRmvString={this.handleRmvString}
          />
          <br />
          <div className="scale-border">
            {
              strings.map(string => {
                return <div className="string-holder" key={`string-holder-${string}`}>
                  <div className="string-note-holder">
                    <p className="string-note">
                      {
                        currentTuning[string].length > 1 ? this.state.stringNoteDisplay === 'sharps' ? currentTuning[string].slice(0,2) : currentTuning[string].slice(3) : currentTuning[string]
                      }
                    </p>
                  </div>
                  <String
                    selectedFrets={this.state.selectedFrets}
                    selectedScale={this.state.selectedScale}
                    rootNote={this.state.rootNote}
                    handleClick={this.handleClick}
                    string={string}
                    openNote={currentTuning[string]}
                    key={`string-holder-${string}`}
                    sharpsOrFlats={this.state.sharpsOrFlats}
                    tuning={this.state.tuning}
                  />
                </div>
              })
            }
          </div>
        </div>
        <div id="selected-notes-display">
          {
            selectedNotes.map(note => <p className="displayed-note" key={note}>{note}</p>)
          }
        </div>
      </div>
    )
  }
}