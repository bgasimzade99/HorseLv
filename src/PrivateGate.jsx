import { useEffect, useState } from 'react'

const ACCESS_USER = 'BGDev'
const ACCESS_CODE = 'Babak099'
export const STORAGE_KEY = 'asnates_access'

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: '#000',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  padding: '24px',
  textAlign: 'center',
}

const panelStyle = {
  width: '100%',
  maxWidth: '340px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '6px',
  border: '1px solid #444',
  background: '#111',
  color: '#fff',
  outline: 'none',
}

const buttonStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '6px',
  border: 'none',
  background: '#fff',
  color: '#000',
  fontWeight: 700,
  cursor: 'pointer',
}

const PrivateGate = ({ onUnlock = () => {} }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, 'ok')
      onUnlock()
      setError('')
      return
    }
    setError('Incorrect password')
  }

  return (
    <div style={overlayStyle}>
      <form onSubmit={handleSubmit} style={panelStyle}>
        <div style={{ fontSize: '18px', fontWeight: 700 }}>🔒 Private Preview</div>
        <div style={{ fontSize: '14px', color: '#ccc' }}>Only internal access</div>
        <div style={{ fontSize: '12px', color: '#aaa' }}>Username: {ACCESS_USER}</div>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', fontSize: '14px' }}>
          <span>Enter password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            placeholder="Password"
            autoComplete="off"
            required
          />
        </label>
        {error ? (
          <div style={{ color: '#f87171', fontSize: '12px', textAlign: 'left' }}>{error}</div>
        ) : (
          <div style={{ fontSize: '12px', color: '#888', textAlign: 'left' }}>Password required to continue.</div>
        )}
        <button type="submit" style={buttonStyle}>
          Continue
        </button>
      </form>
    </div>
  )
}

export default PrivateGate

