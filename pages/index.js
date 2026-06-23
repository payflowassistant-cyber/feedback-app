import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleClick = (choice) => {
    if (choice === 'Excellent') {
      router.push('https://g.page/r/CfUEqnx32dY5EBM/review');
    } else {
      router.push('/feedback');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>How was your experience?</h1>
      <button onClick={() => handleClick('Excellent')}>Excellent</button>
      <button onClick={() => handleClick('Good')}>Good</button>
      <button onClick={() => handleClick('Needs Improvement')}>Needs Improvement</button>
    </div>
  );
}
