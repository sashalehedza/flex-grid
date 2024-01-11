// ErrorFallbackComponent.tsx
import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ErrorMessage = styled.div`
  font-size: 1.5rem;
  color: #ff5252; /* or any other color for error text */
  margin-bottom: 20px;
`

interface ErrorFallbackComponentProps {
  error: string // Make the error prop optional
}

const ErrorFallbackComponent: React.FC<ErrorFallbackComponentProps> = ({
  error,
}) => {
  return (
    <ErrorContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {/* You can add additional elements or instructions here */}
    </ErrorContainer>
  )
}

export default ErrorFallbackComponent
