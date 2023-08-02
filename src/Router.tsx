import { Route, Routes } from "react-router-dom"

import { Default } from "./Layout/Default"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Post } from "./pages/Post"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        
        <Route 
          path="/post/:issueNumber" 
          element={<Post />}
          errorElement={<NotFound />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}