import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
//page imports
import Home from './Pages/Home';
const IndustriesSection = lazy(() => import('./Pages/IndustriesPage'));
const ContactUsPage = lazy(() => import('./Pages/ContactUsPage'));
const App = () => {
  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/industries" element={<IndustriesSection />} />
      </Routes>
    </Suspense>
  );
};

export default App;
