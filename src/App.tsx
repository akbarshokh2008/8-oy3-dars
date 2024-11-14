import { FC, useRef, useState, useEffect } from 'react';
import './App.css';
import Delete from './assets/img/delete.svg';

const App: FC = () => {
  const imgref = useRef<HTMLInputElement>(null);
  const nameref = useRef<HTMLInputElement>(null);
  const newref = useRef<HTMLInputElement>(null);
  const featref = useRef<HTMLInputElement>(null);
  const lavozimref = useRef<HTMLInputElement>(null);
  const ishref = useRef<HTMLSelectElement>(null);
  const joylashuvref = useRef<HTMLSelectElement>(null);
  const vaqtref = useRef<HTMLSelectElement>(null);
  const fullstackref = useRef<HTMLInputElement>(null);
  const midweightref = useRef<HTMLInputElement>(null);
  const pythonref = useRef<HTMLInputElement>(null);
  const reactref = useRef<HTMLInputElement>(null);
  const formref = useRef<HTMLFormElement>(null);

  interface FormData {
    img: string | undefined;
    name: string | undefined;
    new: boolean | undefined;
    feat: boolean | undefined;
    lavozim: string | undefined;
    ish: string | undefined;
    joylashuv: string | undefined;
    vaqt: string | undefined;
    fullstack: boolean | undefined;
    midweight: boolean | undefined;
    python: boolean | undefined;
    react: boolean | undefined;
    id: number;
  }

  // LocalStorage'dan ma'lumot olish
  const [users, setUsers] = useState<FormData[]>(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // LocalStorage'ni yangilash
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Form submit qilinganda
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formref.current?.checkValidity()) {
      const data: FormData = {
        img: imgref.current?.value,
        name: nameref.current?.value,
        new: newref.current?.checked,
        feat: featref.current?.checked,
        lavozim: lavozimref.current?.value,
        ish: ishref.current?.value,
        joylashuv: joylashuvref.current?.value,
        vaqt: vaqtref.current?.value,
        fullstack: fullstackref.current?.checked,
        midweight: midweightref.current?.checked,
        python: pythonref.current?.checked,
        react: reactref.current?.checked,
        id: Date.now(),
      };

      const updatedUsers = [...users, data];

      setUsers(updatedUsers);
      formref.current.reset();
    } else {
      alert("Formani to'ldiring!");
    }
  }

  function handleDelete(id: number) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div>
      <header className='bg-[#5CA5A5] header h-[155px]'></header>
      <main className=''>
        <form
          ref={formref}
          onSubmit={handleSubmit}
          className='p-6 mb-8 w-[430px] mx-auto shadow rounded-md bg-white font-sans font-bold flex flex-col'
        >
          <h2 className='text-2xl text-center pb-7'>
            Vakansiya ma'lumotlarini kiriting
          </h2>
          <div className='pb-7 w-[400px] flex flex-col gap-3'>
            <label htmlFor='image'>Logotip URL</label>
            <input
              ref={imgref}
              type='url'
              id='image'
              className='outline-none font-semibold p-2 border-2 rounded-md'
              placeholder='Logotip URL manzilini kiriting'
              required
            />
          </div>
          <div className='pb-7 flex flex-col gap-3'>
            <label htmlFor='kompony'>Kompaniya nomi</label>
            <input
              ref={nameref}
              type='text'
              id='kompony'
              placeholder='Manage'
              className='outline-none font-semibold p-2 border-2 rounded-md'
              required
            />
          </div>
          <div className='xususiyat flex gap-5 pb-7'>
            <div className='new flex gap-2'>
              <input
                type='checkbox'
                id='new'
                className='w-[18px]'
                ref={newref}
              />
              <label htmlFor='new'>Yangi</label>
            </div>
            <div className='featured flex gap-2'>
              <input
                type='checkbox'
                width={20}
                id='featured'
                className='w-[18px]'
                ref={featref}
              />
              <label htmlFor='featured'>Featured</label>
            </div>
          </div>
          <div className='pb-7 flex flex-col gap-3'>
            <label htmlFor='lavozim'>Lavozim</label>
            <input
              type='text'
              ref={lavozimref}
              placeholder='Fullstack Developer'
              className='outline-none font-semibold p-2 border-2 rounded-md'
              required
            />
          </div>
          <div className='select flex gap-8 pb-7'>
            <div className='time flex flex-col gap-2'>
              <label htmlFor='vaqt'>Vaqt</label>
              <select
                id='vaqt'
                className='w-[100px] outline-none border p-1 font-semibold border-black rounded-md'
                ref={vaqtref}
                required
              >
                <option value='' disabled selected>
                  Tanlang
                </option>
                <option value='Full Time'>Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Contract'>Contract</option>
              </select>
            </div>
            <div className='time flex flex-col gap-2'>
              <label htmlFor='ish'>Ish turi</label>
              <select
                id='ish'
                className='w-[100px] outline-none border p-1 font-semibold border-black rounded-md'
                ref={ishref}
                required
              >
                <option value='' disabled selected>
                  Tanlang
                </option>
                <option value='junior'>Junior</option>
                <option value='middle'>Middle</option>
                <option value='senior'>Senior</option>
              </select>
            </div>
            <div className='Joylashuv flex flex-col gap-2'>
              <label htmlFor='joylashuv'>Joylashuv</label>
              <select
                id='joylashuv'
                className='w-[100px] outline-none border p-1 font-semibold border-black rounded-md'
                ref={joylashuvref}
                required
              >
                <option value='' disabled selected>
                  Tanlang
                </option>
                <option value='Remote'>Remote</option>
                <option value='USA only'>Usa only</option>
                <option value='UK only'>UK only</option>
                <option value='Worlwide'>Worlwide</option>
              </select>
            </div>
          </div>
          <div className='kunikmalar pb-6'>
            <h3 className='pb-2'>Ko'nikmalar</h3>
            <div className='check grid grid-cols-2 gap-6 gap-y-3'>
              <div className='fullstack flex gap-2'>
                <input
                  type='checkbox'
                  width={20}
                  id='fullstack'
                  className='w-[18px]'
                  ref={fullstackref}
                />
                <label htmlFor='fullstack'>Fullstack</label>
              </div>
              <div className='midweight flex gap-2'>
                <input
                  type='checkbox'
                  width={20}
                  id='midweight'
                  className='w-[18px]'
                  ref={midweightref}
                />
                <label htmlFor='midweight'>Midweight</label>
              </div>
              <div className='python flex gap-2'>
                <input
                  type='checkbox'
                  width={20}
                  id='python'
                  className='w-[18px]'
                  ref={pythonref}
                />
                <label htmlFor='python'>Python</label>
              </div>
              <div className='react flex gap-2'>
                <input
                  type='checkbox'
                  width={20}
                  id='react'
                  className='w-[18px]'
                  ref={reactref}
                />
                <label htmlFor='react'>React</label>
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='submit w-full py-3 mt-4 bg-[#5CA5A5] text-white rounded-md font-bold'
          >
            Ma'lumotlarni saqlash
          </button>
        </form>
        <div className='wrapper flex flex-col my-container gap-8'>
          {users.map((value, index) => {
            return (
              <article
                key={index}
                className='card px-10 py-8 flex justify-between items-center  bg-white shadow-xl'
              >
                <div className='malumot flex gap-4'>
                  <img src={value.img} alt='' width={120} />
                  <div className='div'>
                    <div className='xolat font-bold flex gap-2'>
                      <h3 className='text-[#5CA5A5] text-2xl'>{value.name}</h3>
                      {value.new && (
                        <p className='p-1 text-white rounded-xl bg-[#5CA5A5]'>
                          NEW!
                        </p>
                      )}
                      {value.feat && (
                        <p className='p-1 text-white rounded-xl bg-[#2B3939]'>
                          FEATURED
                        </p>
                      )}
                    </div>
                    <h3 className='text-[#2B3939] text-3xl pt-3 pb-2'>
                      {value.lavozim}
                    </h3>
                    <div className='flex font-bold text-[#7C8F8F] gap-2'>
                      <p>2d ago</p>
                      <p> - </p>
                      <p> {value.vaqt} </p>
                      <p> - </p>
                      <p> {value.joylashuv} </p>
                    </div>
                  </div>
                </div>
                <div className='kunikmalar font-bold flex gap-4'>
                  {value.fullstack && (
                    <p className='px-3 py-2 text-xl text-[#5CA5A5] rounded-xl bg-[#EFF6F6]'>
                      Fullstack
                    </p>
                  )}
                  {value.python && (
                    <p className='px-3 py-2 text-xl text-[#5CA5A5] rounded-xl bg-[#EFF6F6]'>
                      Python
                    </p>
                  )}{' '}
                  {value.react && (
                    <p className='px-3 py-2 text-xl text-[#5CA5A5] rounded-xl bg-[#EFF6F6]'>
                      React
                    </p>
                  )}{' '}
                  {value.midweight && (
                    <p className='px-3 py-2 text-xl text-[#5CA5A5] rounded-xl bg-[#EFF6F6]'>
                      Midweight
                    </p>
                  )}
                  <button
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                  >
                    <img src={Delete} alt='delete qilish' width={40} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
