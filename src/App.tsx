import { lazy, Suspense } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'

import { Footer } from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Cfp = lazy(() => import('./pages/Cfp').then((m) => ({ default: m.Cfp })))
const Publication = lazy(() => import('./pages/Publication').then((m) => ({ default: m.Publication })))
const Committees = lazy(() => import('./pages/Committees').then((m) => ({ default: m.Committees })))
const Speakers = lazy(() => import('./pages/Speakers').then((m) => ({ default: m.Speakers })))
const Agenda = lazy(() => import('./pages/Agenda').then((m) => ({ default: m.Agenda })))
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })))
const Venue = lazy(() => import('./pages/Venue').then((m) => ({ default: m.Venue })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))

function AppLayout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
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
