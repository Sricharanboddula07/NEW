import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import VotingApp from './VotingApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VotingApp/>
  </StrictMode>,
)