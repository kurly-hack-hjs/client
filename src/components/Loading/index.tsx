import { useRecoilValue } from 'recoil'
import isLoadingAtom from '@src/recoil/global'
import CircularProgress from '@mui/material/CircularProgress'
import style from './index.module.scss'

const Loading = () => {
  const isLoading = useRecoilValue(isLoadingAtom)
  return isLoading ? <CircularProgress className={style.loading} /> : null
}

export { Loading }
