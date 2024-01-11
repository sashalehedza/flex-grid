import React from 'react'
import {
  CustomPaginationItem,
  CustomPaginationButton,
  CustomPaginationWrapper,
  CustomPaginationList,
} from './Pagination.styles'

const ELLIPSIS_SYMBOL = '...'

type PageNumber = number | string

interface PageItemProps {
  pageNumber: PageNumber
  currentPage: number
  onPageChange: (page: number) => void
  boundaryItem?: boolean
  totalPages: number
}

const PageItem: React.FC<PageItemProps> = ({
  pageNumber,
  currentPage,
  onPageChange,
  boundaryItem = false,
  totalPages,
}) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    if (pageNumber === '<' && currentPage > 1) {
      onPageChange(currentPage - 1)
    } else if (pageNumber === '>' && currentPage < totalPages) {
      onPageChange(currentPage + 1)
    } else {
      onPageChange(Number(pageNumber))
    }
  }

  return (
    <CustomPaginationItem>
      <CustomPaginationButton
        onClick={handleClick}
        disabled={
          boundaryItem ||
          pageNumber === ELLIPSIS_SYMBOL ||
          currentPage === pageNumber
        }
        className={pageNumber === currentPage ? 'active' : ''}
      >
        {pageNumber}
      </CustomPaginationButton>
    </CustomPaginationItem>
  )
}

// const addPageNumbers = (start: number, end: number): number[] =>
// Array.from({ length: end - start + 1 }, (_, i) => i + start)

// const insertDotsAndMissingNumbers = (arr: number[]): PageNumber[] => {
//   const pageNumbers: PageNumber[] = []

//   pageNumbers.push('<')

//   arr.forEach((pageNumber, i, array) => {
//     if (i < array.length - 1) {
//       if (array[i + 1] - pageNumber > 2) {
//         pageNumbers.push(pageNumber, ELLIPSIS_SYMBOL)
//       } else {
//         pageNumbers.push(pageNumber)
//       }
//     } else {
//       pageNumbers.push(pageNumber)
//     }
//   })

//   pageNumbers.push('>')

//   return pageNumbers
// }

// const insertDotsAndMissingNumbers = (arr: number[]): PageNumber[] => {
//   const pageNumbers: PageNumber[] = [
//     '<',
//     ...arr.flatMap((pageNumber, i, array) => {
//       if (i < array.length - 1) {
//         return array[i + 1] - pageNumber > 2
//           ? [pageNumber, ELLIPSIS_SYMBOL]
//           : [pageNumber]
//       } else {
//         return [pageNumber]
//       }
//     }),
//     '>',
//   ]

//   return pageNumbers
// }

// const insertDotsAndMissingNumbers = (arr: number[]): PageNumber[] => {
//   const pageNumbers: PageNumber[] = [
//     '<',
//     ...arr.flatMap((pageNumber, i, array) =>
//       i < array.length - 1
//         ? array[i + 1] - pageNumber > 2
//           ? [pageNumber, ELLIPSIS_SYMBOL]
//           : [pageNumber]
//         : [pageNumber]
//     ),
//     '>',
//   ]

//   return pageNumbers
// }

const insertDotsAndMissingNumbers = (arr: number[]): PageNumber[] => {
  const pageNumbers: PageNumber[] = [
    '<',
    ...arr
      .flatMap((pageNumber, i, array) => [
        pageNumber,
        array[i + 1] - pageNumber > 2 ? ELLIPSIS_SYMBOL : undefined,
      ])
      .filter((item): item is PageNumber => item !== undefined),
    '>',
  ]

  return pageNumbers
}

// const renderPageNumbers = (
//   currentPage: number,
//   totalPages: number,
//   boundaryCount: number,
//   siblingCount: number
// ): PageNumber[] => {
//   const activeBoundaryCount = 2 + siblingCount * 2 + boundaryCount

//   let pageNumbers: number[] = []

//   if (totalPages <= activeBoundaryCount) {
//     pageNumbers = addPageNumbers(1, totalPages)
//   } else if (currentPage <= activeBoundaryCount - 1) {
//     pageNumbers = addPageNumbers(1, activeBoundaryCount).concat(
//       addPageNumbers(totalPages - boundaryCount + 1, totalPages)
//     )
//   } else if (currentPage >= totalPages - activeBoundaryCount + 2) {
//     pageNumbers = addPageNumbers(1, boundaryCount).concat(
//       addPageNumbers(totalPages - activeBoundaryCount + 1, totalPages)
//     )
//   } else {
//     pageNumbers = addPageNumbers(1, boundaryCount)
//       .concat(
//         addPageNumbers(currentPage - siblingCount, currentPage + siblingCount)
//       )
//       .concat(addPageNumbers(totalPages - boundaryCount + 1, totalPages))
//   }

//   return insertDotsAndMissingNumbers(pageNumbers)
// }

const renderPageNumbers = (
  currentPage: number,
  totalPages: number,
  boundaryCount: number,
  siblingCount: number
): PageNumber[] => {
  const activeBoundaryCount = 2 + siblingCount * 2 + boundaryCount

  // const addPageNumbers = (start: number, end: number): number[] => {
  //   const result = []

  //   for (let i = start; i <= end; i++) {
  //     result.push(i)
  //   }

  //   return result
  // }

  const addPageNumbers = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start)

  let pageNumbers: number[] = []

  if (totalPages <= activeBoundaryCount) {
    pageNumbers = addPageNumbers(1, totalPages)
  } else if (currentPage <= activeBoundaryCount - 1) {
    pageNumbers = [
      ...addPageNumbers(1, activeBoundaryCount),
      ...addPageNumbers(totalPages - boundaryCount + 1, totalPages),
    ]
  } else if (currentPage >= totalPages - activeBoundaryCount + 2) {
    pageNumbers = [
      ...addPageNumbers(1, boundaryCount),
      ...addPageNumbers(totalPages - activeBoundaryCount + 1, totalPages),
    ]
  } else {
    pageNumbers = [
      ...addPageNumbers(1, boundaryCount),
      ...addPageNumbers(currentPage - siblingCount, currentPage + siblingCount),
      ...addPageNumbers(totalPages - boundaryCount + 1, totalPages),
    ]
  }

  return insertDotsAndMissingNumbers(pageNumbers)
}

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  activeBoundaryCount?: number
  boundaryCount?: number
  siblingCount?: number
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  boundaryCount = 1,
  siblingCount = 1,
}) => {
  return (
    <CustomPaginationWrapper>
      <CustomPaginationList>
        {renderPageNumbers(
          currentPage,
          totalPages,
          boundaryCount,
          siblingCount
        ).map((pageNumber, index) => (
          <PageItem
            key={index}
            pageNumber={pageNumber}
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={totalPages}
            boundaryItem={
              (pageNumber === '<' && currentPage === 1) ||
              (pageNumber === '>' && currentPage === totalPages)
            }
          />
        ))}
      </CustomPaginationList>
    </CustomPaginationWrapper>
  )
}

export default Pagination
