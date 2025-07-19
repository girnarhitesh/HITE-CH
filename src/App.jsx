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
import Residential from './assets/Commponets/Projects/Residential/Residential';
import Commercial from './assets/Commponets/Projects/Commercial/Commercial';
import Industrial from './assets/Commponets/Projects/Industrial/Industrial';
import Institutional from './assets/Commponets/Projects/Institutional/institutional';
import Services from './assets/Commponets/Services/Services';
import Footer from './assets/Commponets/Footer/Footer';

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
        <Route path='/residential' element={<Residential/>}/>
        <Route path='/commercial' element={<Commercial/>}/>
        <Route path='industrial' element={<Industrial/>}/>
        <Route path='/institutional' element={<Institutional/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;