import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './Globalstyles';
import Home from './Home';
import Header from './components/Header';
import Courses from './Courses';


function App() {
  const theme = {
    colors: {},
    fonts: {},
    screens: {}
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyle/>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/courses' element={<Courses/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
