export function FollowCard({ userName, name, isFollowing }) {
    return (
        <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            <img alt="foto de avatar" src={`https://unavatar.io/x/${userName}`}
            className='tw-follow-card-img'/>
            <div className='tw-follow-card-info'>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>

        <aside>
            <button>
                Seguir
            </button>
        </aside>
    </article>
    )
}