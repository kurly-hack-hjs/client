import { useRef, useState } from 'react'

export type FileInfo = {
  source: string
  name: string
  size: number
  file: File
}

const useFileUpload = () => {
  const [fileInfo, setFileInfo] = useState<FileInfo | undefined>(undefined)
  const inputEl = useRef<HTMLInputElement>(null)
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    const files = target.files as FileList
    const parsedFile = {
      source: URL.createObjectURL(files[0]),
      name: files[0].name,
      size: files[0].size,
      file: files[0],
    }
    setFileInfo(parsedFile)
  }
  const DummyElement = () => (
    <input ref={inputEl} type="file" accept="" style={{ display: 'none' }} multiple={false} onChange={onChange} />
  )

  const uploadFile = () => {
    inputEl.current?.click()
  }
  return { fileInfo, uploadFile, DummyElement }
}

export { useFileUpload }
