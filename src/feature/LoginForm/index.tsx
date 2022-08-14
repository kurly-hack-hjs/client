import { Button, Input, Select } from '@components'
import { useState } from 'react'
import style from './index.module.scss'

type UserInput = {
  userName: string
  password: string
  confirmCode: string
}

const defaultValue = {
  userName: '',
  password: '',
  confirmCode: '',
}

const LoginForm = () => {
  const [userInput, setUserInput] = useState<UserInput>(defaultValue)
  const { userName, password, confirmCode } = userInput
  const onChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [key]: e.target.value })
  }

  return (
    <div className={style.container}>
      <form className={style.form_login}>
        <Select />
        <Input type="text" value={userName} onChange={onChange('userName')} placeholder="Username" />
        <Input type="password" value={password} onChange={onChange('password')} placeholder="Password" />
        <Input type="text" value={confirmCode} onChange={onChange('confirmCode')} placeholder="직원확인코드" />
        <Button block>로그인</Button>
      </form>
      <p className={style.notification}>
        * 현재 데이터센터+ 서비스는 신규가입이 불가능합니다.
        <br />
        신규 ID, PW 발급이 필요할 시 담당자에게 문의해주세요.
      </p>
    </div>
  )
}

export { LoginForm }
