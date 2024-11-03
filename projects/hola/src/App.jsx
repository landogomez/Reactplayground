import './App.css';
import { FollowCard } from './FollowCard';


export function App() {

    const format = (userName) => `@${userName}`

    const landogomez = { initialFollowing: true ,userName: 'landogomez', formatUserName: format} //Pasar objeto como props
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
             >
              V
          </FollowCard>
        <FollowCard formatUserName={format}  userName="Ravens" initialFollowing={true}
        />
      </div>
      </>
    )
}