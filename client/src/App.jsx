import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
//page imports
import Home from './Pages/Home';
const ContactUsPage = lazy(() => import('./Pages/ContactUsPage'));
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
