import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/hello')
            .then(r => r.json())
            .then(d => setMessage(d.message))
            .catch(console.error);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>React + Symfony</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;