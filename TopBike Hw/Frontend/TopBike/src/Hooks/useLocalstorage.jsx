import { useEffect, useState } from 'react'

function useLocalstorage(storageName, initialValue=null) {

  const [data, setData] = useState(localStorage.getItem(`${storageName}`) ? JSON.parse(localStorage.getItem(`${storageName}`)) : initialValue)

  useEffect(() => {
    localStorage.setItem(`${storageName}`, JSON.stringify(data))
  }, [data])

  return [data, setData]
}

export default useLocalstorage