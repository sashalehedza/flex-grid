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
      <label>
        Filter by ID:
        <Select
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
      <label>
        Filter by User ID:
        <Select
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

      <label>
        Select User ID:
        <div>
          {uniqueUserIds.map((userId) => (
            <div key={userId}>
              <input
                type='radio'
                id={`user-${userId}`}
                value={userId}
                checked={selectedUserId === userId}
                onChange={() => setSelectedUserId(userId)}
              />
              <label htmlFor={`user-${userId}`}>{userId}</label>
            </div>
          ))}
        </div>
      </label>

      <label>
        Select User IDs:
        <div>
          {uniqueUserIds.map((userId) => (
            <div key={userId}>
              <Checkbox
                type='radio'
                id={`user-${userId}`}
                checked={selectedUserIds.includes(userId)}
                onChange={() => handleSelectUser(userId)}
              />
              <label htmlFor={`user-${userId}`}>{userId}</label>
            </div>
          ))}
        </div>
      </label>

      <label>
        Search by Title/Body:
        <Input
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <label>
        Sort by:
        <Select
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
      <label>
        Sort by:
        <div>
          {sortOptions.map((option) => (
            <div key={option.value}>
              <input
                type='radio'
                id={`sort-${option.value}`}
                value={option.value}
                checked={selectedSort === option.value}
                onChange={() => setSortOrder(option.value as SortOption)}
              />
              <label htmlFor={`sort-${option.value}`}>{option.label}</label>
            </div>
          ))}
        </div>
      </label>
    </FormControl>
  )
}

export default FilterControls
