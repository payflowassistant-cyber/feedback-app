export default function Home() {
  const handleClick = (choice) => {
    if (choice === 'Excellent') {
      window.location.href = 'https://g.page/r/YOUR_GOOGLE_REVIEW_LINK';
    } else {
      window.location.href = '/feedback';
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">How was your experience?</h1>
        <div className="space-y-4">
          <button
            onClick={() => handleClick('Excellent')}
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            🌟 Excellent
          </button>
          <button
            onClick={() => handleClick('Good')}
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            🙂 Good
          </button>
          <button
            onClick={() => handleClick('Needs Improvement')}
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            😟 Needs Improvement
          </button>
        </div>
      </div>
    </div>
  );
}
