import React from 'react'
import './styles.css'

function DevItem({ dev }){ // Desetruturação: poderia ser 'const { dev} = propos'
  
  return (
    <li className="dev-item" key={dev._id}>
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Ver perfil no Github</a>
    </li>
  )
}

export default DevItem