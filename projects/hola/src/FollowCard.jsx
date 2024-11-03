import { useState } from "react"
// useState es un Hook que permite añadir estado a los componentes funcionales

export function FollowCard({ children ,formatUserName ,userName = 'unknown'/*Valor por defecto*/ }){
    const [isFollowing, setIsFollowing] = useState(false) //Estado inicial
    /* La linea de arriba es igual a esto (se le conoce como destructuring) = 
    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollwing = state[1]*/ 
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'tw-follow-card-btn following' : 'tw-follow-card-btn'

    const handleClick = () => {
        setIsFollowing(!isFollowing) //Cambia el estado
    }

    return (
        <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            <img alt="foto de avatar" src={`https://unavatar.io/x/${userName}`}
            className='tw-follow-card-img'/>
            <div className='tw-follow-card-info'>
                <strong>{children}</strong> 
                <span>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClass} onClick={handleClick}> 
                {text}  
            </button>
        </aside>
    </article>
    )
}