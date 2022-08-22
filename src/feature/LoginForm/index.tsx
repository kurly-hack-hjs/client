import { Button, Input, Select } from '@components'
import { useLoginCallback } from '@hooks'
import logisticsAtom from '@recoil/logistics'
import { Option } from '@types'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import style from './index.module.scss'

type UserInput = {
  userName: string
  password: string
  code: string
  center: Option | undefined
}

const defaultValue: UserInput = {
  userName: '',
  password: '',
  code: '',
  center: undefined,
}

const LoginForm = () => {
  const logistics = useRecoilValue(logisticsAtom)
  const options = logistics.map(({ name, code }) => ({ label: name, value: code }))
  const [userInput, setUserInput] = useState<UserInput>(defaultValue)
  const { userName, password, code, center } = userInput
  const onChangeInput = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [key]: e.target.value })
  }
  const onChangeSelect = (value: Option) => {
    setUserInput({ ...defaultValue, center: value })
  }

  const loginCallback = useLoginCallback()

  return (
    <div className={style.container}>
      <form className={style.form_login}>
        <Select onChange={onChangeSelect} value={center} options={options} placeholder={'물류센터를 선택해주세요'} />
        <Input type="text" value={userName} onChange={onChangeInput('userName')} placeholder="Username" />
        <Input type="password" value={password} onChange={onChangeInput('password')} placeholder="Password" />
        <Input type="text" value={code} onChange={onChangeInput('code')} placeholder="직원확인코드" />
        <Button
          block
          onClick={e => {
            e.preventDefault()
            if (!center) return
            loginCallback({ userName, password, code, logistic_code: center.value })
          }}>
          로그인
        </Button>
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
