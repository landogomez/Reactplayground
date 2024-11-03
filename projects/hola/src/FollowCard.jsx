export function FollowCard({ children ,formatUserName ,userName = 'unknown'/*Valor por defecto*/ ,  isFollowing }){

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'tw-follow-card-btn following' : 'tw-follow-card-btn'

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
            <button className={buttonClass}> 
                {text}  
            </button>
        </aside>
    </article>
    )
}