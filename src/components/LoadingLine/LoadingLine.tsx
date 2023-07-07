import { FC, useState } from 'react'

import { ItemsType } from '../../types/ItemsType'

import { LoadingItem } from './LoadingItem/LoadingItem'

export const LoadingLine: FC<{ items: ItemsType; onDoubleClick: (id: string) => void }> = ({
  items,
  onDoubleClick,
}) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  const onSelectedItem = (id: string) => {
    setSelectedItemId(prevId => (prevId === id ? null : id))
  }

  return (
    <div style={{ display: 'flex' }}>
      {items.map((el, i) => (
        <LoadingItem
          key={i}
          items={el.value}
          onDoubleClick={() => onDoubleClick(el.id)}
          onClick={() => onSelectedItem(el.id)}
          selected={selectedItemId === el.id}
        />
      ))}
    </div>
  )
}
