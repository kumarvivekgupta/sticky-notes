import HomeApp from "./components/HomeApp";
import NotesApp from "./components/NotesApp";
import OuterLayout from "./components/OuterLayout";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<OuterLayout />}>
        <Route path='' element={<HomeApp />} />
        <Route path='notes' element={<NotesApp />} />
        
      </Route>
    )
  )

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
