// LoadingSpinner.tsx
import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 6px solid #3498db;
  border-top: 6px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`

const LoadingSpinner: React.FC = () => {
  return <SpinnerContainer />
}

export default LoadingSpinner
