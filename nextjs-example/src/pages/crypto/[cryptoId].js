export async function getServerSideProps({ params }) {
    const { cryptoId } = params;
    const res = await fetch(`https://api.coincap.io/v2/assets/${cryptoId}`);
    const data = await res.json();
    const crypto = data?.data;

    return {
        props: {
            crypto,
        }
    }
}

export default function CryptoDetils({ crypto }) {
    return (
        <>
            <h1>{crypto.name}</h1>
            <p>Rank: {crypto.rank}</p>
            <p>Price: {crypto.priceUsd}</p>
        </>
    );
}