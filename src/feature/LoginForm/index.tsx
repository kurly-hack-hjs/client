import { Button, Input, Select } from '@components'
import { useLoginCallback } from '@hooks'
import logisticsAtom from '@recoil/logistics'
import { Option } from '@types'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import style from './index.module.scss'

type UserInput = {
  loginId: string
  password: string
  staffCode: string
  center: string
}

const defaultValue: UserInput = {
  loginId: '',
  password: '',
  staffCode: '',
  center: '',
}

const LoginForm = () => {
  const logistics = useRecoilValue(logisticsAtom)
  const options = logistics.map(({ name, code }) => ({ label: name, value: code }))
  const [userInput, setUserInput] = useState<UserInput>(defaultValue)
  const { loginId, password, staffCode, center } = userInput
  const onChangeInput = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [key]: e.target.value })
  }
  const onChangeSelect = (value: string) => {
    setUserInput({ ...defaultValue, center: value })
  }

  const loginCallback = useLoginCallback()

  return (
    <div className={style.container}>
      <form className={style.form_login}>
        <Select onChange={onChangeSelect} value={center} options={options} placeholder={'물류센터'} />
        <Input type="text" value={loginId} onChange={onChangeInput('loginId')} placeholder="Username" />
        <Input type="password" value={password} onChange={onChangeInput('password')} placeholder="Password" />
        <Input type="text" value={staffCode} onChange={onChangeInput('staffCode')} placeholder="직원확인코드" />
        <Button
          block
          onClick={e => {
            e.preventDefault()
            if (!center) return
            loginCallback({ loginId, password, staffCode, centerName: center })
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
