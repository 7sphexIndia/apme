import { Navigate, Outlet } from 'react-router-dom'
import { getAdminToken } from '../lib/api'

export function RequireAdmin() {
  if (!getAdminToken()) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
