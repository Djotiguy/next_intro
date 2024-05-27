"use client";
import { HeaderNavigation } from "./header_nav";
import ProfilButton from "./profil-button";
import ResponsiveMenu from "./responsive-menu";
import ToggleTheme from "./toggle-theme";

export default function Header() {
  return (
    <>
      <header className="p-4 border-b">
        <div className="mx-auto w-full pb-5 text-2xl">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between gap-2">
            <ResponsiveMenu />
            <h1 className="font-bold text-transparant bg-clip-text bg-gradient-to-br from-red-400 text-2xl  to-blue-600">
              Title of Site
            </h1>
          </div>

          {/* Navigation */}
          <HeaderNavigation />

          {/* Button */}
          <div className="flex items-center">
            {/* Dark/light mode button */}
            <ToggleTheme />

            {/* Profil Button */}
            <ProfilButton />
          </div>
        </div>
        </div>
      </header>
    </>
  );
}
