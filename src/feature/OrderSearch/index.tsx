import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { searchKeywordAtom } from '@recoil/orders'
import { ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

const OrderSearch = () => {
  const [value, setValue] = useState<string>('')
  const setKeyword = useSetRecoilState(searchKeywordAtom)
  const onSearch = () => {
    setKeyword(value)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '170px',
        height: '40px',
        borderRadius: 30,
        boxSizing: 'border-box',
        backgroundColor: '#F4F4F4',
        m: '16px 0 32px',
      }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ placeholder: '주문번호 입력' }}
        onChange={onChange}
        value={value}
      />
      <IconButton
        type="button"
        sx={{ p: '10px', width: 48, height: 48, color: '#787878' }}
        aria-label="search"
        onClick={onSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export { OrderSearch }
