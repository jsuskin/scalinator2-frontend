export const notes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
export const scales = {
  none: [],
  'Major Scale': [0, 2, 4, 5, 7, 9, 11],
  'Harmonic Minor': [0, 2, 3, 5, 7, 8, 11],
  'Melodic Minor (Ascending)': [0, 2, 3, 5, 7, 9, 11],
  'Melodic Minor (Descending)': [0, 2, 3, 5, 7, 8, 10],
  'Diminished Half Whole': [0, 1, 3, 4, 6, 7, 9, 10],
  'Diminished Whole Half': [0, 2, 3, 5, 6, 8, 9, 11],
  'Chromatic Scale': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  'Whole Tone': [0, 2, 4, 6, 8, 10],
  'Octatonic (H-W)': [0, 1, 3, 4, 6, 7, 9, 10],
  'Octatonic (W-H)': [0, 2, 3, 5, 6, 8, 9, 11],
  Ionian: [0, 2, 4, 5, 7, 9, 11],
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Aeolian: [0, 2, 3, 5, 7, 8, 10],
  Locrian: [0, 1, 3, 5, 6, 8, 10],
  Superlocrian: [0, 1, 3, 4, 6, 8, 10],
  Ultralocrian: [0, 1, 3, 4, 6, 8, 9],
  Iwato: [0, 1, 5, 6, 10],
  'Mixo-Blues': [0, 3, 4, 5, 6, 7, 10],
  Altered: [0, 1, 3, 4, 6, 7, 8, 10],
  Augmented: [0, 3, 4, 6, 8, 11],
  Balinese: [0, 1, 3, 7, 8],
  Byzantine: [0, 1, 4, 5, 7, 8, 11],
  Chinese: [0, 4, 6, 7, 11],
  'Chinese Mongolian': [0, 2, 4, 7, 9]
};
export const tunings = {
  "Standard 4-String": [7, 0, 5, 10],
  "Standard 5-String": [2, 7, 0, 5, 10],
  "Standard 6-String": [7, 0, 5, 10, 2, 7],
  "Standard 7-String": [2, 7, 0, 5, 10, 2, 7],
  "Standard 8-String": [9, 2, 7, 0, 5, 10, 2, 7],
  "Standard 9-String": [4, 9, 2, 7, 0, 5, 10, 2, 7],
  "Standard 10-String": [11, 4, 9, 2, 7, 0, 5, 10, 2, 7],
  "Standard 11-String": [1, 3, 5, 6, 8, 10, 3, 8, 1, 5, 10],
  "Standard 12-String": [7, 7, 0, 0, 5, 5, 10, 10, 2, 2, 7, 7]
}