import { useEffect, useState, createContext } from "react";
import { initialNotes } from "../utils/constants";
import { nanoid } from "nanoid";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const updateFilteredNotes = () => {
      const foundNotes = notes.filter(
        (note) =>
          note.body === searchValue ||
          note.body.includes(searchValue) ||
          note.title === searchValue ||
          note.title.includes(searchValue) ||
          note.createdAt === searchValue ||
          note.createdAt.includes(searchValue)
      );

      let pinnedElements = foundNotes.filter(item => item.pinned);
      let unpinnedElements = foundNotes.filter(item => !item.pinned);

        // Concatenate pinned elements at the beginning of the array
        let sortedElements = [...pinnedElements, ...unpinnedElements];



      setFilteredNotes(sortedElements);
    };

    updateFilteredNotes();

  }, [notes, searchValue]);

  useEffect(() => {
    const getSavedNotesFromLocalStorage = () => {
      const ls = localStorage;
      const savedNotes = ls.getItem("notes");
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes);

        let pinnedElements = parsedNotes.filter(item => item.pinned);
        let unpinnedElements = parsedNotes.filter(item => !item.pinned);

        pinnedElements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    unpinnedElements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Concatenate pinned elements at the beginning of the array
        let sortedElements = [...pinnedElements, ...unpinnedElements];
      //  sortedElements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        setNotes(sortedElements);
      }
    };

    getSavedNotesFromLocalStorage();

  }, []);

  useEffect(() => {
    const setNotesInLocalStorage = () => {
      const ls = localStorage;
      const stringifiedNotes = JSON.stringify(notes);
      ls.setItem("notes", stringifiedNotes);
    };

    setNotesInLocalStorage();

  }, [notes]);

  const searchValueOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddNote = () => {
    const d = new Date();

    const newNote = {
      id: nanoid(),
      title: `New note`,
      body: "",
     createdAt: d.toISOString().split("T")[0],
      pinned: true
    };

    const newNotes = [ newNote,...notes,];
    setNotes(newNotes);
  };

  const handleChangeNoteData = (e, noteId) => {
    const { target } = e;
    const { name, value } = target;

    const noteIndex = notes.findIndex((note) => note.id === noteId);
    let currentNote = Object.assign({}, notes[noteIndex]);
    currentNote[name] = value;

    const newNotes = [...notes];
    newNotes.splice(noteIndex, 1, currentNote);
    setNotes(newNotes);
  };

  const handlePinUnpin = (e, noteId) => {
    // const { target } = e;
    // const { name, value } = target;

    const noteIndex = notes.findIndex((note) => note.id === noteId);
    let currentNote = Object.assign({}, notes[noteIndex]);
    currentNote['pinned'] = !currentNote['pinned'];

    const newNotes = [...notes];
    newNotes.splice(noteIndex, 1, currentNote);

    let pinnedElements = newNotes.filter(item => item.pinned);
    let unpinnedElements = newNotes.filter(item => !item.pinned);

    pinnedElements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    unpinnedElements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Concatenate pinned elements at the beginning of the array
    let sortedElements = [...pinnedElements, ...unpinnedElements];
    

    setNotes(sortedElements);






  }

  const handleDeleteNote = (noteId) => {
    const index = notes.findIndex((note) => note.id === noteId);
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        filteredNotes,

        handleAddNote,
        handleChangeNoteData,
        handleDeleteNote,
        handlePinUnpin,

        searchValue,
        setSearchValue,
        searchValueOnChange,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
