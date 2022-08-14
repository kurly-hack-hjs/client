import { Button, Input, Select } from '@components'
import { Option } from '@types'
import { useState } from 'react'
import style from './index.module.scss'

type UserInput = {
  userName: string
  password: string
  confirmCode: string
  center: Option | undefined
}

const defaultValue: UserInput = {
  userName: '',
  password: '',
  confirmCode: '',
  center: undefined,
}

const LoginForm = () => {
  const [userInput, setUserInput] = useState<UserInput>(defaultValue)
  const { userName, password, confirmCode, center } = userInput
  const onChangeInput = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [key]: e.target.value })
  }
  const onChangeSelect = (value: Option) => {
    setUserInput({ ...defaultValue, center: value })
  }

  return (
    <div className={style.container}>
      <form className={style.form_login}>
        <Select onChange={onChangeSelect} value={center} placeholder={'물류센터를 선택해주세요'} />
        <Input type="text" value={userName} onChange={onChangeInput('userName')} placeholder="Username" />
        <Input type="password" value={password} onChange={onChangeInput('password')} placeholder="Password" />
        <Input type="text" value={confirmCode} onChange={onChangeInput('confirmCode')} placeholder="직원확인코드" />
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
