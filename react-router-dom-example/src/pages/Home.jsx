import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [cryptos, setCryptos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        console.log('fetching cryptos');
        fetch('https://api.coincap.io/v2/assets')
            .then(response => response.json())
            .then(data => {
                const start = (currentPage - 1) * 10;
                const end = currentPage * 10;
                data.data = data.data.slice(start, end);
                setCryptos(data.data)
            });
    }, [currentPage]);

    return (
        <>
            <h1>CryptoList</h1>
            <ul>
                {cryptos.map(crypto => (
                    <li key={crypto.id}>
                        <Link to={`/crypto/${crypto.id}`}>
                            {crypto.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
        </>
    );
}