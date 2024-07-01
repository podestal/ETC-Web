const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-12 mt-[-80px] relative'>
        <h2 className="text-9xl font-montserrat text-slate-200">Aprende</h2>
        <p className="w-[60%] text-center text-2xl font-poppins text-slate-400 leading-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi rem temporibus consectetur voluptatibus, voluptates omnis sint culpa eos, ad </p>
        <p className="px-6 py-2 bg-blue-700 rounded-3xl cursor-pointer hover:bg-blue-600 ">Conoce más</p>
        <div className='w-[420px] h-[400px] bg-sky-500 rounded-[100%] absolute top-[-10%] translate-x-[150%] blur-[120px] z-0'/>
        <div className='w-[420px] h-[200px] bg-blue-600 rounded-[100%] absolute top-[40%] translate-x-[-150%] blur-[140px] z-0'/>
    </div>
  )
}

export default Hero