import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Agenda } from './pages/Agenda.tsx'
import { Cfp } from './pages/Cfp.tsx'
import { Committees } from './pages/Committees.tsx'
import { Contact } from './pages/Contact.tsx'
import { Gallery } from './pages/Gallery.tsx'
import { Home } from './pages/Home.tsx'
import { Publication } from './pages/Publication.tsx'
import { Speakers } from './pages/Speakers.tsx'
import { Venue } from './pages/Venue.tsx'

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  ) 
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cfp" element={<Cfp />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
