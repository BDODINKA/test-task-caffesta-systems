import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ ...rest }) => {
  return <input {...rest} className={''} />
}
