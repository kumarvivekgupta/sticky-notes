import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import SingleNote from "./SingleNote";

export default function NotesGridContainer() {
  const { notes, filteredNotes, searchValue, handleAddNote } =
    useContext(NotesContext);

  return (
    <>
      <section
        className={`notesGridContainer grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  overflow-y-scroll w-full ${
          filteredNotes.length > 4 ? "place-items-center items-center" : ""
        } gap-4 p-2 `}
      >
        {searchValue.length === 0 ? (
          <>
          <button
              onClick={handleAddNote}
              className="w-60 h-52 rounded bg-blue-500 hover:bg-blue-900"
            >
              <i className="bi bi-plus text-white text-4xl" />
            </button>
            {notes.map((note) => (
              <SingleNote key={note.id} id={note.id} noteData={note} />
            ))}
            
          </>
        ) : (
          <>
            {filteredNotes.length >= 1 ? (filteredNotes.map((note) => (
              <SingleNote key={note.id} id={note.id} noteData={note} />
            ))) : <h1 className="text-2xl text-white font-bold"><i className="bi bi-emoji-frown-fill"/> No search results with that term.</h1>}
          </>
        )}
      </section>
    </>
  );
}
