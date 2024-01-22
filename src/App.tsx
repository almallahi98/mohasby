import './App.css';
import mohasby from './res/mohasby.png';
import { FaWhatsapp } from "react-icons/fa";


function App() {
  const buttonData = 'الاشتراك في الخدمة';
  // const buttonDataHint='والدعم الفني';
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
            >
              <div className='flex  items-center'>
                <div>
                <p className='text-xl'>{buttonData}</p>
                {/* <p className='text-lg'>{buttonDataHint}</p> */}
                </div>
              <div className='flex items-center ml-3'>
              <FaWhatsapp height={'100%'} width={'100%'} />
              </div>
              </div>
            </button>
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
