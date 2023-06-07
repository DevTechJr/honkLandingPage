import React from 'react'

const Footer = () => {
  return (
    <div className="w-full  text-slate-300 font-medium">
      <div className="flex text-xs w-1/2 flex-col justify-start align-start">
        <p className="text-left text-opacity-75 text-sm text-sky-300">
          © 2023 Los Feliz Engineering
        </p>
        <div className="my-2" />
        <div className="flex flex-inline w-full justify-between align-center text-opacity-75 ">
          <a href="https://honk.me/privacy">Privacy</a>
          <a href="https://honk.me/terms">Terms</a>
          <a href="https://honk.me/faq">FAQ</a>
          <a href="https://twitter.com/intent/user?screen_name=usehonk">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer