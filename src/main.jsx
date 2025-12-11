import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import LoadingScreen from './LoadingScreen.jsx'
import PrivateGate from './PrivateGate.jsx'

const RootApp = () => {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (!hasAccess) {
    return <PrivateGate onUnlock={() => setHasAccess(true)} />
  }

  if (isLoading) {
    return (
      <>
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </>
    )
  }

  return (
    <>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)

export default RootApp
