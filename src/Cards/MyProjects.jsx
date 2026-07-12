import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

function MyProjects(props) {
  const hasImage = Boolean(props.src);

  return (
    <article className="w-[20rem] lg:w-[19rem] min-h-[21rem] rounded-lg overflow-hidden bg-[#111418] border border-[#454c52] text-left flex flex-col">
      {hasImage ? (
        <img src={props.src} alt={`${props.name} project preview`} className="h-36 w-full object-cover" />
      ) : (
        <div className="h-36 bg-[#23292e] flex items-center justify-center text-[#F7B900] text-5xl">
          {props.icon}
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          {props.category && <p className="text-[#F7B900] text-xs font-semibold uppercase tracking-wide">{props.category}</p>}
          <h2 className="text-white text-xl font-semibold mt-1">{props.name}</h2>
        </div>
        <p className="text-[#b6b8ba] text-sm leading-6 flex-1">{props.content}</p>
        {props.tech && <p className="text-[#909294] text-xs leading-5">{props.tech}</p>}
        {props.href && (
          <a href={props.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#F7B900] font-semibold text-sm">
            View Project <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </div>
    </article>
  )
}

export default MyProjects
