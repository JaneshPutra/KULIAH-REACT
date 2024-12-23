import logo from '../images/logonav.png'
import plus from '../images/PLUS.png'
import cross from '../images/cross.png'

function Navbar() {
    return (
        <nav class=" flex justify-between px-12 py-3 items-center bg-white shadow-sm">


            <div>
                <a href="/"><img src={logo} alt=""/></a>
            </div>

            <ul class="lg:gap-9 lg:flex items-center hidden">
                <li class="p-2"><a
                    class=" hover:font-semibold lg:hover:text-[#30248E] text-sm lg:text-slate-500 hover:opacity-100 font-inter"
                    href="/">Beranda</a></li>
                <li class="p-2"><a
                    class=" hover:font-semibold lg:hover:text-[#30248E] text-sm lg:text-slate-500 hover:opacity-100 font-inter"
                    href="/gallery">Galeri</a></li>
                <li class="p-2"><a
                    class=" hover:font-semibold lg:hover:text-[#30248E] text-sm lg:text-slate-500 hover:opacity-100 font-inter"
                    href="/profil">Profil</a></li>
                <li class="p-2"><a
                    class=" hover:font-semibold lg:hover:text-[#30248E] text-sm lg:text-slate-500 hover:opacity-100 font-inter"
                    href="/artikel">Artikel</a></li>
                <li class="p-2"><a
                    class=" hover:font-semibold lg:hover:text-[#30248E] text-sm lg:text-slate-500 hover:opacity-100 font-inter"
                    href="/contact">Hubungi Kami</a></li>
                <li class=""><a class="" href="/donasi"><button
                    class="text-sm px-[18px] rounded-lg py-3  bg-[#5345E2] text-white hover:bg-blue-800 font-inter">Donasi
                    Sekarang <i class="far fa-arrow-right ml-1"></i></button></a></li>

            </ul>

            <ul id="dropdownList" class="absolute bg-white shadow-lg w-full left-0 px-8 top-0 pt-10 z-50 pb-7 hidden">
                <li class="flex justify-end">
                    <button id="closeBtn"><img class="w-4 h-4" src={cross} alt=""/></button>
                </li>
                <li class="flex justify-center mt-5">
                    <a class="mx-auto" href="/"><img src={logo} alt=""/></a>
                </li>
                <li class="mt-8 flex items-center gap-2">
                    <img class="w-4 h-4" src={plus} alt=""/>
                        <a class="font-inter font-semibold text-slate-500 hover:text-slate-600" href="{{ route('landing.index') }}">Beranda</a>
                </li>
                <li class="mt-4 flex items-center gap-2">
                    <img class="w-4 h-4" src={plus} alt=""/>
                        <a class="font-inter font-semibold text-slate-500 hover:text-slate-600" href="{{ route('gallery.photo') }}">Galeri</a>

                </li>
                <li class="mt-4 flex items-center gap-2">
                    <img class="w-4 h-4" src={plus} alt=""/>
                        <a class="font-inter font-semibold text-slate-500 hover:text-slate-600" href="{{ route('about.index') }}">Profil</a>

                </li>
                <li class="mt-4 flex items-center gap-2">
                    <img class="w-4 h-4" src={plus} alt=""/>
                        <a class="font-inter font-semibold text-slate-500 hover:text-slate-600" href="{{ route('article.index') }}">Artikel</a>
                </li>
                <li class="mt-4 flex items-center gap-2">
                    <img class="w-4 h-4" src={plus} alt=""/>
                        <a class="font-inter font-semibold text-slate-500 hover:text-slate-600" href="{{ route('contact.index') }}">Hubungi Kami</a>
                </li>
                <li class="mt-4 flex items-center gap-2">
                    <img class="w-4 h-4" src={plus} alt=""/>
                        <a class="font-inter font-semibold text-slate-500 hover:text-slate-600" href="{{ route('donation.index') }}">Donasi Sekarang</a>
                </li>
            </ul>
            <div id="dropdownBtn" class="relative lg:hidden">
                <input type="checkbox" class="absolute opacity-0 w-5 h-5"/>
                    <span class=" text-xl"><i class="fal fa-bars"></i></span>
            </div>
        </nav>

    )
}
export default Navbar;