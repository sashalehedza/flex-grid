// Posts1.tsx
import React, { useState, useEffect } from 'react'
import PostsList from './PostsList'
import FilterControls from './FilterControls'
import Pagination from './Pagination'
import useDataFetching from '../../hooks/useDataFetching'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorFallbackComponent from '../../components/ErrorFallbackComponent'
import { Wrapper, Title } from './Posts.styles' // Assuming Checkbox is a styled component or imported from a library
import { POSTS_API_URL, POSTS_PER_PAGE } from '../../constants/constants'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Posts: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortOrder, setSortOrder] = useState<
    | 'id_asc'
    | 'id_desc'
    | 'userId_asc'
    | 'userId_desc'
    | 'title_asc'
    | 'title_desc'
  >('id_asc')

  const { data: posts, loading, error } = useDataFetching<Post>(POSTS_API_URL)

  useEffect(() => {
    let updatedPosts = posts

    if (selectedId !== null) {
      updatedPosts = updatedPosts.filter((post) => post.id === selectedId)
    }
    if (selectedUserId !== null) {
      updatedPosts = updatedPosts.filter(
        (post) => post.userId === selectedUserId
      )
    }

    // New: Filter posts based on selected user IDs
    if (selectedUserIds.length > 0) {
      updatedPosts = updatedPosts.filter((post) =>
        selectedUserIds.includes(post.userId)
      )
    }

    updatedPosts = updatedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.body.toLowerCase().includes(searchText.toLowerCase())
    )

    switch (sortOrder) {
      case 'id_asc':
        updatedPosts = updatedPosts.sort((a, b) => a.id - b.id)
        break
      case 'id_desc':
        updatedPosts = updatedPosts.sort((a, b) => b.id - a.id)
        break
      case 'userId_asc':
        updatedPosts = updatedPosts.sort((a, b) => a.userId - b.userId)
        break
      case 'userId_desc':
        updatedPosts = updatedPosts.sort((a, b) => b.userId - a.userId)
        break
      case 'title_asc':
        updatedPosts = updatedPosts.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
        break
      case 'title_desc':
        updatedPosts = updatedPosts.sort((a, b) =>
          b.title.localeCompare(a.title)
        )
        break
      default:
        break
    }

    setFilteredPosts(updatedPosts)
    setCurrentPage(1)
  }, [
    selectedId,
    selectedUserId,
    selectedUserIds,
    searchText,
    posts,
    sortOrder,
  ])

  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handleChangePage = (pageNumber: number) => setCurrentPage(pageNumber)

  const uniqueUserIds = Array.from(new Set(posts.map((post) => post.userId)))

  const handleSelectUser = (userId: number) => {
    setSelectedUserIds((prevUserIds) =>
      prevUserIds.includes(userId)
        ? prevUserIds.filter((id) => id !== userId)
        : [...prevUserIds, userId]
    )
  }

  const renderPostList = () => {
    if (loading) {
      return <LoadingSpinner />
    }

    if (error) {
      return (
        <ErrorFallbackComponent error='Error fetching posts. Please try again later.' />
      )
    }

    if (currentPosts.length === 0) {
      return <div>No matching posts.</div>
    }

    return (
      <>
        <PostsList currentPosts={currentPosts} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredPosts.length / POSTS_PER_PAGE)}
          onPageChange={handleChangePage}
          boundaryCount={1}
          siblingCount={1}
        />
      </>
    )
  }

  return (
    <Wrapper>
      <Title>Posts</Title>
      <FilterControls
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        selectedUserIds={selectedUserIds}
        handleSelectUser={handleSelectUser}
        searchText={searchText}
        setSearchText={setSearchText}
        posts={posts}
        uniqueUserIds={uniqueUserIds}
        sortOptions={[
          { value: 'id_asc', label: 'ID Ascending' },
          { value: 'id_desc', label: 'ID Descending' },
          { value: 'userId_asc', label: 'UserID Ascending' },
          { value: 'userId_desc', label: 'UserID Descending' },
          { value: 'title_asc', label: 'Title Ascending' },
          { value: 'title_desc', label: 'Title Descending' },
        ]}
        selectedSort={sortOrder}
        setSortOrder={setSortOrder}
      />
      {renderPostList()}
    </Wrapper>
  )
}

export default Posts
