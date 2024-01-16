import { useEffect, useState } from 'react'

function useLocalstorage(storageName, initialValue=null) {

  const [data, setData] = useState(localStorage.getItem(`${storageName}`) ? JSON.parse(localStorage.getItem(`${storageName}`)) : initialValue)

  useEffect(() => {
    localStorage.setItem(`${storageName}`, JSON.stringify(data))
  }, [data])

  function ManualUpdate() {
    localStorage.setItem(`${storageName}`, JSON.stringify(data))
  }

  return [data, setData, ManualUpdate]
}

export default useLocalstorage