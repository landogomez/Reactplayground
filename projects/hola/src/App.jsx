import './App.css';
import { FollowCard } from './FollowCard';


export function App() {

    const format = (userName) => `@${userName}`
    return (
      <>
      <div className='follow'>
        <FollowCard formatUserName={format} userName="ringoroadagian" isFollowing={false}>
          landogomez
        </FollowCard>
        
        <FollowCard 
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