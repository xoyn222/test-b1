import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./store/theme";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Gallery from './pages/Gallery';
import Header from "./components/Header";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
