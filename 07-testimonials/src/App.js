import './App.css';
import Testimonial from './components/Testimonial';
import review from './data'
function App() {
  return (
    <div className='bg-slate-900 h-screen flex flex-col justify-center items-center' >
      <div>
        <h2 className='text-slate-300 text-3xl font-semibold capitalize'>our Testimonials</h2>
        <div className='w-[100px] rounded mx-auto h-1 bg-violet-600'></div>
      </div>
      <Testimonial review={review}/>
    </div>
  );
}

export default App;
