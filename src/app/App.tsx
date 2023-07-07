import { ChangeEvent, FC, useState } from 'react'

import { Button } from '../components/Button/Button'
import { Input } from '../components/Input/Input'
import { LoadingLine } from '../components/LoadingLine/LoadingLine'
import { ItemsType } from '../types/ItemsType'
import { addItems } from '../utils/addItems'
import { concatItems } from '../utils/concatItems'

export const App: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Пожалуйста, введите число от 1 до 100')
  const [items, setItems] = useState<ItemsType>([])

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value
    const numberValue = parseInt(inputValue)

    setInputValue(e.currentTarget.value)

    if (inputValue === '') {
      setIsValid(false)
      setErrorMessage('Пожалуйста, введите число от 1 до 100')
    } else if (isNaN(numberValue) || numberValue < 1 || numberValue > 100) {
      setIsValid(false)
      setErrorMessage('Число не входит в диапазон от 1 до 100')
    } else {
      setIsValid(true)
      setErrorMessage('')
    }
  }

  const onSaveHandler = (): void => {
    if (isValid) {
      const newArray = addItems(items, inputValue)

      setItems(newArray)
      setInputValue('')
    }
  }

  const onConcatHandler = (): void => {
    const concatArr = concatItems(items)

    setItems(concatArr)
  }

  const deleteItemHandler = (id: string): void => {
    setItems(prevState => prevState.map(el => (el.id === id ? { ...el, value: [] } : el)))
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoadingLine items={items} onDoubleClick={deleteItemHandler} />
        <Input
          onChange={onChangeInputHandler}
          value={inputValue}
          style={{ width: '300px', margin: '20px' }}
        />
        {!isValid && errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
      <div style={{ margin: '20px' }}>
        <Button title={'Save'} onClick={onSaveHandler} />
        <Button title={'Concat'} onClick={onConcatHandler} />
      </div>
    </div>
  )
}
