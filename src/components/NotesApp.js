import { NotesProvider } from "../context/NotesContext";
import Layout from "./Layout";
import NotesGridContainer from "./NotesGridContainer";
import React, { useState } from 'react';


export default function NotesApp() {
  const [isPinned, setIsPinned] = useState(true);

  const togglePin = () => {
    setIsPinned(!isPinned);
  };


  return (
    <>
      <NotesProvider>
        <Layout>
          <NotesGridContainer />
        </Layout>

      </NotesProvider>

    </>
  );
}
