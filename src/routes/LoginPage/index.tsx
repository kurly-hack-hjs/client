import { useForm } from 'react-hook-form'
import styles from './loginPage.module.scss'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select className="">
            <option value="">물류센터를 선택해주세요</option>
          </select>
          <input type="text" placeholder="Username" {...register('name')} />
          <input type="password" placeholder="Password" {...register('password')} />
          <input type="text" placeholder="직원확인코드" {...register('code')} />
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </form>

        <p className={styles.notice}>
          * 현재 데이터센터+ 서비스는 신규가입이 불가능합니다.
          <br />
          신규 ID,PW 발급이 필요할 시 담당자에게 문의해주세요.
        </p>
      </div>
    </div>
  )
}

export default LoginPage
