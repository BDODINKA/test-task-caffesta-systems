import { FC } from 'react'

export const Button: FC<{ title: string; onClick: () => void }> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>
}
