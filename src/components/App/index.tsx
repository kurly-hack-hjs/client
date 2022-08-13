import { atom, useRecoilValue } from 'recoil'

const appNameAtom = atom({
  key: 'appNameAtom',
  default: 'app',
})

const App = () => {
  const appName = useRecoilValue(appNameAtom)
  return <div className="App">{appName}</div>
}

export { App }
