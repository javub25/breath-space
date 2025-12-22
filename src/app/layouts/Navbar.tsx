import {Login} from "@/app/modules/auth/ui/Login.tsx";
import SiteLogo from "@/app/assets/svg/logo.svg";

export const Navbar = () => 
{
    return (
        <header className="bg-gray-950 text-white w-full">
            <nav className="flex md:flex-row flex-col justify-between items-center p-7">
                <ul className="flex items-center gap-4 md:mb-0 mb-6">
                    <li>
                        <h1 className="text-3xl font-bold">Breath Space</h1>
                    </li>
                    <li>
                        <img src={SiteLogo} alt="logo" className="w-10 h-10" />
                    </li>
                </ul>
                <Login />
            </nav>
        </header>
    );
}