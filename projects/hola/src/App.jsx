import './App.css';
import { FollowCard } from './FollowCard';


export function App() {
    return (
      <>
      <div className='follow'>
        <FollowCard userName="ringoroadagina" name="landogomez"/>
        <FollowCard userName="vastidefreitas" name="V"/>
        <FollowCard userName="Ravens" name="Baltimore Ravens"/>
      </div>
      </>
    )
}