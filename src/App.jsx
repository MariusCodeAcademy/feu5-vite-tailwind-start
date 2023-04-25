import CTA from './components/CTA';
import Login from './components/Login';

function App() {
  return (
    <div className='container mx-auto max-w-5xl text-center'>
      <h1 className='lg:text-5xl md:text-4xl sm:text-2xl text-xl text-center mt-10 underline'>
        Hello world!
      </h1>
      <CTA />
      <Login />
    </div>
  );
}

export default App;
