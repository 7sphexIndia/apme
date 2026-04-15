import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminEnquiries } from './components/AdminEnquiries'
import { AdminGallery } from './components/AdminGallery'
import { AdminSpeakers } from './components/AdminSpeakers'
import { AdminLogin } from './components/AdminLogin'
import { AdminOverview } from './components/AdminOverview'
import { AdminShell } from './components/AdminShell'
import { RequireAdmin } from './components/RequireAdmin'

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<RequireAdmin />}>
        <Route element={<AdminShell />}>
          <Route index element={<AdminOverview />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="speakers" element={<AdminSpeakers />} />
          <Route path="enquiries" element={<AdminEnquiries />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
