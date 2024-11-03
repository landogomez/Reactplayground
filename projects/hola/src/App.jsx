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
            userName={userName}
            initialFollowing={initialFollowing}
            formatUserName={format}
            >
              {name}
            </FollowCard>
          )

          )
        }
        
        <FollowCard //Pasar props directamente
            formatUserName={format} 
            userName="vastidefreitas" 
             >
              V
          </FollowCard>
        <FollowCard formatUserName={format}  userName="Ravens" initialFollowing={true}
        />
      </div>
      </>
    )
}