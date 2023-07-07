import { FC, useEffect, useState } from 'react'

import { generateColor } from '../../../utils/generateColor'

export const LoadingItem: FC<{
  items: string[]
  onDoubleClick: () => void
  onClick: () => void
  selected: boolean
}> = ({ items, onDoubleClick, onClick, selected }) => {
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(generateColor())
  }, [items])

  if (!items.length) return null

  return (
    <div
      style={{
        display: 'flex',
        background: color,
        border: selected ? '2px solid blue' : '2px solid gray',
      }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {items.map((el, i) => (
        <div key={`${el}${i}s`} style={{ width: '10px', height: '10px' }}></div>
      ))}
    </div>
  )
}
