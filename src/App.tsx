import './App.css';
import mohasby from './res/mohasby.png';

function App() {
  return (
    <div className="flex justify-center items-center align-middle h-full w-screen text-center text-2xl md:text-4xl">
      <div>
      <div className='flex justify-center'>
        <img
          className='h-auto md:w-1/3' 
          src={mohasby} alt='mohasby logo' />
        </div>
        <div className=' space-y-10'>
          <p>انتظروا محاسبي بحلته الجديدة</p>
          <div className='flex justify-center gap-2 px-2'>
            <button onClick={() => window.open('https://wa.me/966531342444', '_blank')}
              className='bg-[#1E3778] py-2 px-6 rounded text-[#ffffff]'
            >الاشتراك في الخدمة</button>

            <button onClick={() => window.open('https://portal.mohasby.com', '_blank')}
              className='bg-[#53c295] py-2 px-6 rounded text-[#ffffff]'
            >دخول العملاء</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
