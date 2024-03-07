import Link from 'next/link';
import Image from 'next/image';

export async function getServerSideProps() {
  const res = await fetch('https://api.coincap.io/v2/assets');
  const data = await res.json();

  return {
    props: {
      cryptos: data?.data,
    }
  }
}

export default function Home({ cryptos}) {
    return (
        <>
            <h1>CryptoList</h1>
            
            <ul>
                {cryptos.map(crypto => (
                    <li key={crypto.id}>
                        <Link href={`/crypto/${crypto.id}`}>
                            {crypto.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
