import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='bg-slate-900 min-h-screen p-10 space-y-5'>
      <h1 className='bg-slate-600 text-center uppercase py-1 text-2xl font-semibold rounded-lg'>random gifs</h1>
      <Random/>
      <Tag/>
    </div>
  );
}

export default App;
