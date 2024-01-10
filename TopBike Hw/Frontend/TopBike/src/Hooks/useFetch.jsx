import React, { useEffect } from 'react'

function useFetch(url, cb) {
useEffect(() => {
  fetch(url).then(res=>res.json()).then(data=>cb(data))
})
}

export default useFetch