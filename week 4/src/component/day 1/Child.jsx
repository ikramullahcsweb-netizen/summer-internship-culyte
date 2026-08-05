import { useState } from 'react';

export function Child({ name, role }) {
    const [likes, setLikes] = useState(0);

    return (
        <div style={{ background: '#1e1e1e', padding: '20px', margin: '10px', borderRadius: '8px', color: '#fff' }}>
            <h3>{name}</h3>
            <p><strong>Role:</strong> {role}</p>
            <p>Likes: {likes}</p>
            
            <button 
                onClick={() => setLikes(likes + 1)} 
                style={{ padding: '8px 16px', background: '#00adb5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Like Profile.
            </button>
        </div>
    );
}
