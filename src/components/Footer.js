import React from 'react';

const Footer = () => {
  return(
    <section id="footer" className='flex w-full py-2 bg-[#d66382] text-zinc-100'>
      <p className='w-[80%] text-center text-xs mx-auto'>&copy; {' '}
      {new Date().getFullYear()} | Designed &amp; build from scratch by Olga - Pink Jagnie</p>
    </section>
  )
};

export default Footer;