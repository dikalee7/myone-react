
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/MyoneLayout';
import Main from './domains/main/views/Main'
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
