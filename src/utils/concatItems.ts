import { ItemsType, ItemType } from '../types/ItemsType'

export const concatItems = (items: ItemsType) => {
  const obj: Record<string, ItemType> = {}

  for (let i = 0; i < items.length; i++) {
    const id = items[i].id

    if (obj[id]) {
      obj[id].value = [...obj[id].value, ...items[i].value]
      obj[id].length = obj[id].value.length
    } else {
      obj[id] = items[i]
    }
  }

  return Object.values(obj)
}
