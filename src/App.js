import HomeApp from "./components/HomeApp";
import NotesApp from "./components/NotesApp";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeApp />} />
            <Route path="/notes" element={<NotesApp />} />
          </Routes>
        </BrowserRouter>


      </div>
    </>
  );
}

export default App;