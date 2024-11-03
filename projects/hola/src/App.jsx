import './App.css';
import { FollowCard } from './FollowCard';


export function App() {

    const format = (userName) => `@${userName}`

    const landogomez = { initialFollowing: true ,userName: 'landogomez', formatUserName: format} //Pasar objeto como props
    // Aunque muchas veces es mejor ser declarativo y pasar las props directamente

    const users = [
        { userName: 'vastidefreitas', initialFollowing: false, name: 'Vasti', formatUserName: format },
        { userName: 'Ravens', initialFollowing: true, name: 'Ravens', formatUserName: format }
    ]
    return (
      <>
        <div className='follow'>
          <FollowCard {...landogomez}>
            landogomez {/*Children*/}  {/*Children, esta envuelto entre etiquetas Prop especial (children)*/}
          </FollowCard>

          {
            users.map(({userName, initialFollowing, name, formatUserName}) => (
              <FollowCard
              key={userName} /*Key es un prop especial que se usa para identificar elementos de una lista*/
              userName={userName}
              initialFollowing={initialFollowing}
              formatUserName={format}
              >
                {name}
              </FollowCard>
            )

            )
          }
        </div>
      </>
    )
}