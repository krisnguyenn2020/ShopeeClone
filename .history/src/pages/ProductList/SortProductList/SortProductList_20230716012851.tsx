import React from 'react'

export default function SortProductList() {
  return (
    <div>
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <div key={index}>product</div>
        ))}
    </div>
  )
}
