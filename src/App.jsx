import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage'; // Importera HomePage från rätt fil
import localjobs from './components/Data';
import { JobList } from './components/Joblist';
import Header from './components/Header';
import fetchData from './components/API';
import { AuthContext } from './pages/AuthContext';

import './App.css';

function App() {
  const [apiJobs, setApiJobs] = useState([]); // State för jobb från API
  const [searchTerm, setSearchTerm] = useState('');
  //Nya kod från Router
  const authContext = useContext(AuthContext);

  const isAuthenticated = authContext && authContext.user !== null;

  useEffect(() => {
    const fetchDataAndSetJobs = async () => {
      try {
        const data = await fetchData(); // Hämta data från API
        console.log('Data from API', data);
        setApiJobs(data.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Kör fetchDataAndSetJobs endast en gång när komponenten monteras
    if (apiJobs.length === 0) {
      fetchDataAndSetJobs();
    }
  }, []);

  const filteredApiJobs = apiJobs ? apiJobs.filter(job =>
    job.employer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.headline.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];
  
  const filteredLocalJobs = localjobs.filter(job =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Kombinera API-jobb och lokala jobb
  const allJobs = [...filteredApiJobs, ...filteredLocalJobs];

  console.log("Filtered Jobs:", allJobs);

  return (
    <BrowserRouter>
      <div>
        <main>
          <div className='signin-button-container'>
            <Link to = '/signin'>
              <button className='signin-button'>Sign In</button>
            </Link>

          </div>
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path='/' element={
              apiJobs && apiJobs.length > 0 ? <JobList jobs={allJobs} /> : <p>Loading jobs...</p>
            } />
            <Route path='/' element = {<HomePage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='*' element={<Navigate to='/' />} /> {/* Redirect all other paths to homepage */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;















