import classNames from 'classNames';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { NavLink, useParams } from 'react-router-dom';

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}


export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return (
    <>
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      {isLessonAvailable ? (
        <NavLink to={`/event/lesson/${slug}`} className="group">
          <div id="infoLink" className={classNames('rounded-md border border-gray-500 cursor-pointer p-4 mb-8 mt-2 group-hover:border-green-500', {
            'bg-green-500': isActiveLesson,
            'active': isActiveLesson
          })}>
            <header className="flex items-center justify-between">
              <span className={classNames('flex items-center gap-2 text-sm font-medium', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson,
              })}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>

              <span className={classNames('text-xs rounded py-[.125rem] px-2 text-white border', {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              })}>
                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong className={classNames('text-left mt-5 block', {
              'text-white': isActiveLesson,
              'text-gray-200': !isActiveLesson,
            })}>
              {props.title}
            </strong>
          </div>
        </NavLink>
      ) : (
        <div className="cursor-not-allowed rounded-md border border-gray-500 mb-6 mt-2 hover:not:border-green-500 focus:outline-none opacity-30">
          <a href="#" className="pointer-events-none">
            <div className="p-4">
              <header className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                  <Lock size={20} />
                  Em breve
                </span>

                <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
             'border-white': isActiveLesson,
             'border-green-300': !isActiveLesson
                 })}>
                  {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                </span>
              </header>

              <strong className={classNames('mt-5 block', {
            'text-white': isActiveLesson,
             'text-gray-200': !isActiveLesson
             })}>
                {props.title}
              </strong>
            </div>
          </a>
        </div>

      )}
    </>
  )
}
