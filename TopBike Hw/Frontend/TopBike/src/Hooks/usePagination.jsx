import { useState } from 'react';

function usePagination(incomeData, incomeDataPerPage = 2, incomeCurrentPage = 1) {

  const [data, setData] = useState(incomeData)
  const [currentPage, setCurrentPage] = useState(incomeCurrentPage)
  const [dataPerPage, setDataPerPage] = useState(incomeDataPerPage)

  const lastPageIndex = Math.ceil(data.length / dataPerPage)

  let pageNumbers = []
  for (let i = 1; i <= lastPageIndex; i++) {
    pageNumbers.push(i)
  }

  const lastElementIndex = currentPage * dataPerPage
  const firstElementIndex = lastElementIndex - dataPerPage

  const PageDatas = data.slice(firstElementIndex, lastElementIndex)

  return [PageDatas, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex]
}

export default usePagination