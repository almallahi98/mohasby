import './App.css';
import mohasby from './res/mohasby.png';

function App() {
  return (
    <div className="flex justify-center items-center align-middle h-full w-screen text-center text-4xl">
      <div className='relative w-1/2 h-1/6'>
        <img
          className=''
          src={mohasby} alt='mohasby logo' />
        <div className='absolute bottom-20 right-0 left-0 space-y-10'>
          <p>انتظروا محاسبي بحله الجديدة</p>
          <div className='flex justify-center gap-2'>
            <button onClick={() => window.open('https://wa.me/00966531342444', '_blank')}
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
