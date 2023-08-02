// Hier importieren wir notwendige Module und Funktionen
import React, { useState } from "react";  // useState wird benötigt, um den Status unserer App zu verwalten
import Checkbox from "@mui/material/Checkbox";  // Checkbox-UI von Material-UI
import IconButton from "@mui/material/IconButton";  // Icon Button-UI von Material-UI
import DeleteIcon from "@mui/icons-material/Delete";  // Lösch-Icon von Material-UI
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";  // Hinzufüge-Icon von Material-UI
import TextField from "@mui/material/TextField";  // Textfeld-UI von Material-UI
import Button from "@mui/material/Button";  // Button UI von Material-UI
import styled from "@emotion/styled";  // Für emotion-styled Komponenten
import { v4 as uuidv4 } from 'uuid';  // Für einzigartige IDs

// Hier definieren wir einige gestaltete Komponenten mit emotion-styled
const AufgabenWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 10px;
  text-align: center;
`;  // Der äußere Wrapper der Aufgaben

const Aufgabe = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1em 0;
`;  // Einzelne Aufgaben-Container

const AufgabeText = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;  // Text einer Aufgabe, wird durchgestrichen, wenn erledigt

// Hauptfunktion der Aufgaben-App
function AufgabenApp() {
  // useState wird verwendet, um den Zustand der Aufgaben zu verwalten
  const [aufgaben, setAufgaben] = useState([
    { id: uuidv4(), text: "Hausaufgaben machen", done: false },
    { id: uuidv4(), text: "Einkaufen gehen", done: false },
    { id: uuidv4(), text: "Bericht schreiben", done: false },
    { id: uuidv4(), text: "Freunde treffen", done: false },
    { id: uuidv4(), text: "Ein Buch lesen", done: false },
  ]);

  // useState wird verwendet, um den Zustand der neuen Aufgabe zu verwalten
  const [neueAufgabe, setNeueAufgabe] = useState("");

  // Funktion zum Hinzufügen einer neuen Aufgabe zur Liste
  const addAufgabe = () => {
    // Wenn das Textfeld leer ist, sollte nichts hinzugefügt werden
    if (neueAufgabe === "") return;
    setAufgaben([
      ...aufgaben,
      { id: uuidv4(), text: neueAufgabe, done: false },
    ]);
    // Setzt das Textfeld zurück auf leer, nachdem eine Aufgabe hinzugefügt wurde
    setNeueAufgabe("");
  };

  // Funktion zum Umschalten des "done"-Status einer Aufgabe
  const toggleDone = (id) => {
    const updatedAufgaben = aufgaben.map((aufgabe) =>
      // Wenn die ID der Aufgabe mit der übergebenen ID übereinstimmt, wechselt der Status
      aufgabe.id === id ? { ...aufgabe, done: !aufgabe.done } : aufgabe
    );
    // Aktualisiere den Zustand der Aufgaben
    setAufgaben(updatedAufgaben);
  };

  // Funktion zum Löschen einer Aufgabe aus der Liste
  const deleteAufgabe = (id) => {
    const updatedAufgaben = aufgaben.filter((aufgabe) => aufgabe.id !== id);
    // Aktualisiere den Zustand der Aufgaben
    setAufgaben(updatedAufgaben);
  };
// Funktion zum Löschen aller Aufgaben
  const deleteAllAufgaben = () => {
    setAufgaben([]);
  };

  // Was unsere Komponente zurückgibt, wird auf der Seite gerendert
  return (
    <AufgabenWrapper>
      {/* Überschrift */}
      <h1>My Genious Tasks</h1>

      {/* Alle Aufgaben werden durchlaufen und für jede Aufgabe wird eine Checkbox, ein Text und ein Lösch-Button erzeugt */}
      {aufgaben.map((aufgabe) => (
        <Aufgabe key={aufgabe.id}>
          {/* Checkbox für den Erledigt-Status */}
          <Checkbox
            checked={aufgabe.done}
            onChange={() => toggleDone(aufgabe.id)}
          />

          {/* Text der Aufgabe */}
          <AufgabeText done={aufgabe.done}>{aufgabe.text}</AufgabeText>
          <IconButton style={{ marginLeft: 'auto' }} onClick={() => deleteAufgabe(aufgabe.id)}></IconButton>

          {/* Lösch-Button */}
          <IconButton onClick={() => deleteAufgabe(aufgabe.id)}>
            <DeleteIcon />
          </IconButton>
        </Aufgabe>
      ))}

      {/* Texteingabefeld für neue Aufgaben */}
      <TextField
        variant="outlined"
        value={neueAufgabe}
        onChange={(e) => setNeueAufgabe(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen..."
      />

      {/* Button zum Hinzufügen einer neuen Aufgabe */}
      <IconButton onClick={addAufgabe}>
        <AddCircleOutlineIcon />
        </IconButton>
        <Button variant="contained" color="secondary" onClick={deleteAllAufgaben}>
        Alle Aufgaben löschen
      </Button>
    </AufgabenWrapper>
  );
}

// Exportieren der AufgabenApp-Komponente für die Verwendung in anderen Dateien
export default AufgabenApp;
