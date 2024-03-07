import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

export default function CoinDetails() {
    const { cryptoId } = useParams();
    const [crypto, setCrypto] = useState(null);

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${cryptoId}`)
            .then(response => response.json())
            .then(data => setCrypto(data));
    }, []);

    if (!crypto) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{crypto?.data?.name} - ${crypto?.data?.symbol}</h1>
            <h2>USD {parseFloat(crypto?.data.priceUsd).toFixed(2)}</h2>
        </div>
    );
}