export function FollowCard({ children ,formatUserName ,userName = 'unknown'/*Valor por defecto*/ ,  isFollowing }) {
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
            <button> 
                Seguir  {/*Children, esta envuelto entre aside y a su vez en button Prop especial (children)*/} 
            </button>
        </aside>
    </article>
    )
}