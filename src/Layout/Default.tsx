import { Outlet } from 'react-router-dom'

export function Default() {
  return (
    <div className="bg-background w-full relative">
      <Outlet />
    </div>
  )
}