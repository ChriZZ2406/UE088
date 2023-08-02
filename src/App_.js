// Importiere notwendige Funktionen und Komponenten von React, Material-UI und Emotion
import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';

// Styled Komponente für erledigte Aufgaben
const StrikeThroughText = styled(ListItemText)`
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

// Definiere die Aufgaben-Komponente
function Aufgaben() {
  
  // useState wird für die Verwaltung des Zustands in funktionalen Komponenten verwendet.
  // Hier wird der Zustand für die Aufgabenliste und die neue Aufgabe definiert.
  const [aufgaben, setAufgaben] = useState([
    { text: 'Hausaufgaben machen', done: false },
    { text: 'Einkaufen gehen', done: false },
    { text: 'Bericht schreiben', done: false },
    { text: 'Freunde treffen', done: false },
    { text: 'Ein Buch lesen', done: false },
  ]);

  const [neueAufgabe, setNeueAufgabe] = useState('');

  // Funktion zum Hinzufügen einer neuen Aufgabe
  const addAufgabe = () => {
    setAufgaben([...aufgaben, { text: neueAufgabe, done: false }]);
    setNeueAufgabe('');  // Setze das Eingabefeld zurück
  };

  // Funktion zum Wechseln des "erledigt"-Status einer Aufgabe
  const toggleDone = (index) => {
    const updatedAufgaben = aufgaben.map((aufgabe, aufgabeIndex) =>
      aufgabeIndex === index ? { ...aufgabe, done: !aufgabe.done } : aufgabe
    );
    setAufgaben(updatedAufgaben);
  };

  // Funktion zum Entfernen einer Aufgabe
  const removeAufgabe = (index) => {
    const updatedAufgaben = aufgaben.filter((aufgabe, aufgabeIndex) => aufgabeIndex !== index);
    setAufgaben(updatedAufgaben);
  };

  // Rendern der Komponente
  return (
    <Container>
      <h1>Aufgabenliste</h1>
      {/* Liste der Aufgaben */}
      <List>
        {aufgaben.map((aufgabe, index) => (
          <ListItem key={index}>
            <Checkbox
              checked={aufgabe.done}
              onChange={() => toggleDone(index)}
            />
            <StrikeThroughText
              primary={aufgabe.text}
              done={aufgabe.done}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => removeAufgabe(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {/* Eingabefeld für eine neue Aufgabe */}
      <TextField
        value={neueAufgabe}
        onChange={(e) => setNeueAufgabe(e.target.value)}
        label="Neue Aufgabe hinzufügen..."
      />
      {/* Button zum Hinzufügen der neuen Aufgabe */}
      <Button variant="contained" color="primary" onClick={addAufgabe}>Hinzufügen</Button>
    </Container>
  );
}

// Exportiere die Aufgaben-Komponente, damit sie in anderen Teilen der Anwendung verwendet werden kann.
export default Aufgaben;
