import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function Layout({ children }) {
  const { searchValue, searchValueOnChange } = useContext(NotesContext);
  return (
    <>
      <nav className="fixed flex flex-col items-center justify-center py-4 text-white bg-blue-500 w-full">
        <h1 className="text-2xl font-bold">Sticky Notes App</h1>
        <form className="my-1">
          <input
            onChange={(e) => searchValueOnChange(e)}
            type="text"
            value={searchValue}
            placeholder="Search by term..."
            className="p-1 text-center rounded focus:border-2 border-slate-400 text-black"
          />
        </form>
      </nav>
      <main className="flex flex-col items-center w-full h-screen pt-110">
        {children}
      </main>
    </>
  );
}
