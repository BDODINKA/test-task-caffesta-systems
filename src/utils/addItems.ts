import { v4 as uuidv4 } from 'uuid'

import { ItemsType } from '../types/ItemsType'

import { checkMinMax } from './checkMinMax'
import { createArray } from './createArray'

export const addItems = (items: ItemsType, inputValue: string): ItemsType => {
  const newArray = [...items]
  let filledArr = createArray(+inputValue)
  let added = false
  const id = uuidv4()

  for (let i = 0; i < newArray.length; i++) {
    const item = newArray[i]

    if (item.value.length === 0 && item.length === filledArr.length) {
      newArray[i] = {
        id: id,
        value: filledArr,
        length: filledArr.length,
      }
      added = true
      break
    }
  }

  if (!added) {
    let foundMatch = false

    for (let i = 0; i < newArray.length; i++) {
      const item = newArray[i]

      if (item.value.length === 0 && item.length > filledArr.length) {
        const index = newArray.findIndex(item => !item.value || item.length > filledArr.length)

        newArray.splice(index, 1, {
          id: id,
          value: filledArr,
          length: filledArr.length,
        })

        added = true
        filledArr = []
        foundMatch = true
        break
      }
    }

    if (!foundMatch) {
      for (let i = 0; i < newArray.length; i++) {
        const item = newArray[i]

        if (item.value.length === 0) {
          const { min } = checkMinMax(filledArr.length, item.length)

          newArray.splice(i, 1, {
            id: id,
            value: filledArr.slice(0, min),
            length: min,
          })

          added = false
          filledArr = filledArr.slice(min)

          if (filledArr.length === 0) {
            added = true
            break
          }
        }
      }
    }
  }

  if (!added && filledArr.length > 0) {
    newArray.push({
      id: id,
      value: filledArr,
      length: filledArr.length,
    })
  }

  return newArray
}
