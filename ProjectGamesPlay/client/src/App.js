import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import * as gameServices from './services/requests'
import { Catalog } from './components/Catalog/Catalog';
import { CreateGame } from './components/CreateGame/CreateGame';
import { EditGame } from './components/EditGame/EditGame';
import { GameDetails } from './components/GameDetails/GameDetails';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
    const [games, setGames] = useState([])

    useEffect(() => {
        gameServices.getAll()
            .then(result => {
                setGames(result)
            })
    }, [])

    const onCreateGameSubmit = (data) => {
        gameServices.createGame(data)
    }

    return (
        <div>
            <Header />
            <main id='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
