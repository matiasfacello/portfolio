import Navbar from './ui/navbar';

function Hero() {
  return (
  <section id="home" className='min-h-screen container m-auto'>
    <Navbar />
    <div className='flex flex-col p-16 items-start justify-center min-h-screen'>
      <p className='text-4xl my-1'>Matias Facello</p>
      <p className='text-2xl'>Fullstack Web Developer</p>
      <p className='text-2xl'>Front-End Web Developer</p>
    </div>
  </section>
  );
}

export default Hero;