import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from '../Lesson/Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="relative w-full xl:w-[21.75rem] h-[calc(100vh-6.25rem)] 1xl:h-[calc(100vh-18.3125rem)] 3xl:h-[calc(100vh-28.8125rem)] 4xl:h-[calc(100vh-42.8125rem)]  0.5xl:mt-[4.6875rem] 1xl:mt-[4.6875rem] p-6 bg-gray-700 border-l border-gray-600 ">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div id="listLessons" className="flex flex-col">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug ?? "-"}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
