// Importiere notwendige Funktionen von React
import React, { useState } from 'react';

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

  // Rendern der Komponente
  return (
    <div>
      <h1>Aufgabenliste</h1>
      {/* Iteriere über die Aufgabenliste und erstelle für jede Aufgabe ein checkbox-input und ein span-Element */}
      {aufgaben.map((aufgabe, index) => (
        <div key={index}>
          {/* Wenn die Checkbox angeklickt wird, ändert sich der "erledigt"-Status der Aufgabe */}
          <input
            type="checkbox"
            checked={aufgabe.done}
            onChange={() => toggleDone(index)}
          />
          {/* Der Aufgabentext wird angezeigt */}
          <span>{aufgabe.text}</span>
        </div>
      ))}
      {/* Eingabefeld für eine neue Aufgabe */}
      <input
        value={neueAufgabe}
        onChange={(e) => setNeueAufgabe(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen..."
      />
      {/* Button zum Hinzufügen der neuen Aufgabe */}
      <button onClick={addAufgabe}>Hinzufügen</button>
    </div>
  );
}

// Exportiere die Aufgaben-Komponente, damit sie in anderen Teilen der Anwendung verwendet werden kann.
export default Aufgaben;
