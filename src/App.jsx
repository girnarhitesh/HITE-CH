import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './assets/Commponets/AllHomepages/Navigation/Navigation';
import AllHomepage from './assets/Commponets/AllHomepages/AllHomepage';
import Client from './assets/Commponets/ Our Clients/Clients/Client';
import Architect from './assets/Commponets/ Our Clients/Architect/Architect';
import CSR from './assets/Commponets/About us/CSR/CSR';
import Awords from './assets/Commponets/About us/Awords/Awords';
import Managment from './assets/Commponets/About us/Our Management/Managment';
import Whoweare from './assets/Commponets/About us/wo we are/Whoweare';
import Standards from './assets/Commponets/About us/Our Standards/Standards';
import Machinery from './assets/Commponets/ Expertise/Machinery/Machinery';
import Formwork from './assets/Commponets/ Expertise/Formwork/Formwork';
import Tecnology from './assets/Commponets/ Expertise/Tecnology/Tecnology';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllHomepage />} />
        <Route path='/client' element={<Client />} />
        <Route path='/architects' element={<Architect />} />
        <Route path='csr' element={<CSR />} />
        <Route path='/awards' element={<Awords />} />
        <Route path='/management' element={<Managment />} />
        <Route path='/whoweare' element={<Whoweare />} />
        <Route path='/standards' element={<Standards />} />
        <Route path='/machinery' element={<Machinery />} />
        <Route path='/formwork' element={<Formwork/>}/>
        <Route path='/technology' element={<Tecnology/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
