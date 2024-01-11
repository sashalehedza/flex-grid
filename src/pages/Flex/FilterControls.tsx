// FilterControls.tsx
import React from 'react'
import { FormControl, Select, Input, Checkbox } from './Posts.styles'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

type SortOption =
  | 'id_asc'
  | 'id_desc'
  | 'userId_asc'
  | 'userId_desc'
  | 'title_asc'
  | 'title_desc'

interface FilterControlsProps {
  selectedId: number | null
  setSelectedId: (id: number | null) => void
  selectedUserId: number | null
  setSelectedUserId: (id: number | null) => void
  selectedUserIds: number[]
  handleSelectUser: (userId: number) => void
  searchText: string
  setSearchText: (text: string) => void
  posts: Post[]
  uniqueUserIds: number[]
  sortOptions: { value: string; label: string }[]
  selectedSort: SortOption
  setSortOrder: (value: SortOption) => void
}

const FilterControls: React.FC<FilterControlsProps> = ({
  selectedId,
  setSelectedId,
  selectedUserId,
  setSelectedUserId,
  selectedUserIds,
  handleSelectUser,
  searchText,
  setSearchText,
  posts,
  uniqueUserIds,
  sortOptions,
  selectedSort,
  setSortOrder,
}) => {
  return (
    <FormControl>
      <label htmlFor='filterById'>
        Filter by ID:
        <Select
          id='filterById'
          value={selectedId ?? ''}
          onChange={(e) =>
            setSelectedId(
              e.target.value === '' ? null : parseInt(e.target.value, 10)
            )
          }
        >
          <option value=''>All</option>
          {posts.map((post) => (
            <option key={post.id} value={post.id}>
              {post.id}
            </option>
          ))}
        </Select>
      </label>

      <fieldset>
        <legend>Select User ID:</legend>
        <div>
          {uniqueUserIds.map((userId) => (
            <label key={userId}>
              <input
                type='radio'
                id={`user-${userId}`}
                name='userRadio'
                value={userId}
                checked={selectedUserId === userId}
                onChange={() => setSelectedUserId(userId)}
              />
              {userId}
            </label>
          ))}
        </div>
      </fieldset>

      <label htmlFor='searchTitleBody'>
        Search by Title/Body:
        <Input
          id='searchTitleBody'
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>

      <label htmlFor='sortBy'>
        Sort by:
        <Select
          id='sortBy'
          value={selectedSort}
          onChange={(e) => setSortOrder(e.target.value as SortOption)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </label>

      {/* <label htmlFor='filterByUserId'>
        Filter by User ID:
        <Select
          id='filterByUserId'
          value={selectedUserId ?? ''}
          onChange={(e) =>
            setSelectedUserId(
              e.target.value === '' ? null : parseInt(e.target.value, 10)
            )
          }
        >
          <option value=''>All</option>
          {uniqueUserIds.map((userId) => (
            <option key={userId} value={userId}>
              {userId}
            </option>
          ))}
        </Select>
      </label>

      <fieldset>
        <legend>Select User IDs:</legend>
        <div>
          {uniqueUserIds.map((userId) => (
            <div key={userId}>
              <input
                type='radio'
                id={`user-${userId}`}
                name='selectedUserIds'
                checked={selectedUserIds.includes(userId)}
                onChange={() => handleSelectUser(userId)}
              />
              <label htmlFor={`user-${userId}`}>{userId}</label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Sort by:</legend>
        <div>
          {sortOptions.map((option) => (
            <div key={option.value}>
              <input
                type='radio'
                id={`sort-${option.value}`}
                name='sortOptions'
                value={option.value}
                checked={selectedSort === option.value}
                onChange={() => setSortOrder(option.value as SortOption)}
              />
              <label htmlFor={`sort-${option.value}`}>{option.label}</label>
            </div>
          ))}
        </div>
      </fieldset> */}
    </FormControl>
  )
}

export default FilterControls
