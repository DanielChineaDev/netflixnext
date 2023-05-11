import { Image } from "react";
import Link from "next/link";
import NetflixLogo from "../../../public/images/netflix-logo.svg";

const SignUp = () => {
  return (
    <>
      <div className="brightness-50 absolute inset-0 bg-[url('/images/wallpaper.jpg')] bg-cover"></div>
      <div className="absolute h-16 w-full top-0 left-0 bg-gradient-to-b from-black/60"></div>

      <NetflixLogo className="scale-[1.2] my-6 mx-12" />

      <div className=" p-16 relative m-auto rounded-md bg-black/70 w-[450px] h-[500px]">
        <h2 className="text-white text-3xl font-bold">Registro</h2>
        <from>
          <div>
            <input
              type="email"
              className="mt-9 w-full bg-[#333] rounded h-12 px-5 p-2 text-sm"
              placeholder="Correo electrónico o número de teléfono"
            />
          </div>

          <div>
            <input
              type="password"
              className="mt-4 w-full bg-[#333] rounded h-12 px-5 p-2 text-sm"
              placeholder="Contraseña"
            />
          </div>
          <button className="bg-red-500 w-full rounded mt-10 h-12 font-bold text-sm text-white">
            Iniciar sesión
          </button>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                className="bg-slate-700 checked:accent-red-500 checked:border-blue-300"
              />

              <label htmlFor="rememberMe" className="text-white ml-2 text-sm">
                Recuérdame
              </label>
            </div>
            <div>
              <Link href="#" className="text-white text-sm">
                ¿Necesitas ayuda?
              </Link>
            </div>
          </div>
        </from>
        <div className="mt-10">
          <p className="text-[#737373] text-sm">New to Netflix?<Link href={'#'} className="ml-2">Sign in</Link></p>
          <p className="text-[#737373] text-xs mt-3">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link href={'#'}>Learn more.</Link></p>
        </div>
      </div>
      <footer className="flex-1 bottom-0 bg-black/60 w-screen h-52"></footer>
    </>
  );
};

export default SignUp;
