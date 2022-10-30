import React, { useCallback, useState, useEffect } from 'react';

import { Button } from '../../atoms';

import { Container } from './styles';

interface PaginateButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  text: string
  isActive?: boolean
}

const PaginateButton: React.FC<PaginateButtonProps> = ({
  text,
  isActive = false,
  ...rest
}) => {
  return (
    <Button
      padding="0"
      width="42px"
      height="42px"
      bgColor={isActive ? "primary" : "gray"}
      {...rest}
    >
      <p>{text}</p>
    </Button>
  )
}

interface PaginateProps {
  currentPage?: number
  perPage?: number
  total?: number
  maxPages?: number
  onPaginate?: (page: number) => void
}

const Paginate: React.FC<PaginateProps> = ({
  currentPage = 1,
  perPage = 16,
  total = 100,
  maxPages = 5,
  onPaginate = null
}) => {
  const [activePage, setActivePage] = useState<number>(1)

  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(() => maxPages)

  const pageCount = Math.ceil(total / perPage)
  const pageArray = Array(pageCount)
    .fill(null)
    .map((_, idx) => idx + 1)

  const getPages = useCallback(() => {
    if (end < total && (activePage >= end)) {
      setStart(state => state + 1)
      setEnd(state => state + 1)
    }

    if (start > 0 && activePage > start && ((activePage - 1) <= start)) {
      setStart(state => state - 1)
      setEnd(state => state - 1)
    }

    return pageArray.slice(start, end)
  }, [total, pageArray, activePage, start, end, setStart, setEnd])

  const getActivePage = useCallback((page: number): boolean => {
    return !!(activePage === page)
  }, [activePage])

  const handleSetActivePage = useCallback((page: number) => {
    setActivePage(page)

    onPaginate?.(page)
  }, [onPaginate])

  useEffect(() => {
    if (currentPage) {
      setActivePage(currentPage)
    }
  }, [currentPage])

  return (
    <Container>
      {getPages().map(page => (
        <PaginateButton
          key={page}
          text={String(page)}
          isActive={getActivePage(page)}
          onClick={() => handleSetActivePage(page)}
        />
      ))}

    </Container>
  )
}

export default Paginate;