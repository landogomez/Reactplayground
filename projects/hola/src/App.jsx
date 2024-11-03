import './App.css';
import { FollowCard } from './FollowCard';


export function App() {

    const format = (userName) => `@${userName}`

    const landogomez = {isFollowing: false, userName: 'landogomez', formatUserName: format} //Pasar objeto como props
    // Aunque muchas veces es mejor ser declarativo y pasar las props directamente

    return (
      <>
      <div className='follow'>
        <FollowCard {...landogomez}>
          landogomez {/*Children*/}  {/*Children, esta envuelto entre etiquetas Prop especial (children)*/}
        </FollowCard>
        
        <FollowCard //Pasar props directamente
            formatUserName={format} 
            userName="vastidefreitas" 
            isFollowing >
              V
          </FollowCard>
        <FollowCard formatUserName={format}  userName="Ravens" isFollowing={false}
        />
      </div>
      </>
    )
}