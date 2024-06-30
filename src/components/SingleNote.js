import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import Modal from "./Modal";
import ExpandedNote from "./ExpandedNote";

export default function SingleNote({ id, noteData }) {
  const { handleChangeNoteData, handleDeleteNote, handlePinUnpin } = useContext(NotesContext);

  const [showModal, setShowModal] = useState(false);

  const handleClickModalBtn = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleClickModalBtn={handleClickModalBtn}
      >
        <ExpandedNote
          id={id}
          noteData={noteData}
          handleClickModalBtn={handleClickModalBtn}
        />
      </Modal>

      <figure className={`relative singleNote w-60 h-56  bg-blue-500`}>

        <div onClick={(e) => handlePinUnpin(e, id)} title="Unpin"
          className={`absolute cursor-pointer top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-lg ${noteData.pinned ? 'animate-pin' : 'animate-unpin'}`}
        >
         
          <i className="top-0 left-0 transform translate-x-1/2 translate-y-10p h-2 absolute bi bi-pin-fill text-white" />

        </div>


        <header
          className={`flex flex-col px-2 py-1 bg-blue-800 text-white`}
        >
          <div className="flex items-center justify-between">
            <div></div>

            <input
              type="text"
              name="title"
              placeholder="Add a title..."
              value={noteData.title}
              onChange={(e) => handleChangeNoteData(e, id)}
              className="w-40 px-1 text-center text-white font-bold bg-transparent rounded"
            />

            <button onClick={handleClickModalBtn} title="Expand">
              <i className="bi bi-arrows-fullscreen" />
            </button>
          </div>
        </header>

        <section className="flex flex-col p-2">
          <textarea
            placeholder="Type something..."
            onChange={(e) => handleChangeNoteData(e, id)}
            name="body"
            value={noteData.body}
            className="singleNote__textArea ease-in-out duration-150 w-full h-32 p-1 text-sm text-white bg-transparent outline-none outline-0 rounded focus:outline-2 outline-slate-300 bg-slate-600"
          >
            {noteData.body}
          </textarea>
        </section>

        <div className="flex justify-between items-center px-2 py-1">
          <div className="flex gap-5">
            <button title="Delete note" onClick={() => handleDeleteNote(id)}>
              <i className="bi bi-trash text-white" />
            </button>
            {noteData.pinned ?
             '' :
             <>
              <button title="Pin" onClick={(e) => handlePinUnpin(e, id)}>
                <i className="bi bi-pin-angle text-white" />
              </button>
             </>

            }
           


          </div>

          <p
            title="Creation date"
            className="self-end pt-1 text-sm text-white font-bold"
          >
            <span className="mr-2">{noteData.createdAt}</span>
            <i className="bi bi-calendar-fill" />
          </p>
        </div>
      </figure>
    </>
  );
}
