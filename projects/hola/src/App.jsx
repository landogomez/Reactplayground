import './App.css';
import { FollowCard } from './FollowCard';


export function App() {

    const format = (userName) => `@${userName}`
    return (
      <>
      <div className='follow'>
        <FollowCard 
            formatUserName={format} 
            userName="ringoroadagian" 
            name="landogomez" 
            isFollowing={false}
        />
        <FollowCard 
            formatUserName={format} 
            userName="vastidefreitas" 
            name="V" 
            isFollowing 
        />
        <FollowCard 
            formatUserName={format}  
            userName="Ravens" 
            name="Baltimore Ravens"
            isFollowing={false}
        />
      </div>
      </>
    )
}