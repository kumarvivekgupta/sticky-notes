import { NotesProvider } from "../context/NotesContext";
import Layout from "./Layout";
import NotesGridContainer from "./NotesGridContainer";
import React from 'react';


export default function NotesApp() {


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
