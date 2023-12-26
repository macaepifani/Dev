import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){

    // const [username, setName] = useState('midu')

    return(
        <section className='App' >
        <TwitterFollowCard  username= "maca" initialIsFollowing={true}>
            Macarena Epifani   
        </TwitterFollowCard> 
        <TwitterFollowCard  username= "macaaa">
            Macarena Epifani
        </TwitterFollowCard>       
        <TwitterFollowCard username= "maaaca" >
            Macarena Epifani
        </TwitterFollowCard>
        {/* <button onClick={()=> setName('midudududu')}>
            Cambio nombre
        </button> */}
        </section>
        )
}