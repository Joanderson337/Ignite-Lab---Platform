import { Navigate, Route, Routes } from "react-router-dom";

import { useGetLessonsQuery } from "./graphql/generated";
import { Event } from './pages/Event/Event'
import { Subscribe } from "./pages/Event/Subscribe";

export function Router() {

  const { data } = useGetLessonsQuery();

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={data && <Navigate replace to={`/event/lesson/${data?.lessons[0]?.slug}`} />} />
      <Route path="/event/lesson" element={data && <Navigate replace to={`/event/lesson/${data?.lessons[0]?.slug}`} />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}