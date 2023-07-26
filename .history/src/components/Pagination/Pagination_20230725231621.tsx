import classNames from 'classnames'
import React from 'react'
import { render } from 'react-dom'

interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}
const RANGE = 2
export default function Pagination({ page, setPage, pageSize }: Props) {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <button key={index} className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm`}>
            ...
          </button>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotBefore = true
        return (
          <button key={index} className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm`}>
            ...
          </button>
        )
      }
    }

    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page - RANGE && pageNumber < page + RANGE + 1) {
          }
          return (
            <button
              key={index}
              className={classNames('mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm', {
                'border-cyan-500': pageNumber === page,
                'border-transparent': pageNumber != page
              })}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        }
      })
  }
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm'>Prev</button>
      {renderPagination()}
      <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm'>Next</button>
    </div>
  )
}
