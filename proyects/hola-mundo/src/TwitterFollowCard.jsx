import {useState} from 'react'
export function TwitterFollowCard ({children, username, initialIsFollowing}){
    const [isFollowing, setFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button '
    const handleClick = () =>{
    setFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard-article'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' src={`https://unavatar.io/${username}`} alt="foto" />
                <div className='tw-followCard-div'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-span'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className= {buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}