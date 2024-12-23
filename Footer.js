import logo from '../images/logoputih.png';
import map from '../images/map.png';
import email from '../images/email.png';
import phone from '../images/phone.png';
import arrow from '../images/arrow.png';

function Footer() {
    return (
        <div class=" relative z-10">
            <div class="bg-[#0F172A] pt-16 pb-32 px-8">
                <div class="grid grid-cols-6 gap-2">
                    <div class=" col-span-6 md:col-span-3">
                        <a href="{{ route('landing.index') }}"><img src={logo}
                            alt="" /></a>
                        <div class="flex items-center mt-3 gap-4 w-[90%]">
                            <img class="w-6" src={map} alt="" />
                            <h2 class="text-[#E2E8F0] font-inter">Jl. Cendrawasih Bunderan 29, Rewin Waru - Sidoarjo</h2>
                        </div>
                        <div class="flex items-center mt-3 gap-4 w-[90%]">
                            <img class="w-6 " src={email} alt="" />
                            <h2 class="text-[#E2E8F0] font-inter">yatimauliyaa@gmail.com</h2>
                        </div>
                        <div class="flex items-center mt-3 gap-4 w-[90%]">
                            <img class="w-6 " src={phone} alt="" />
                            <h2 class="text-[#E2E8F0] font-inter">+62(31)8662863</h2>
                        </div>
                    </div>

                    <div class=" col-span-6 md:col-span-3 mt-4 md:mt-0">
                        <h2 class=" text-3xl font font-semibold text-white font-fairplay">Halaman Lain</h2>
                        <ul class="mt-4">
                            <li class="flex gap-1 mt-2">
                                <img src={arrow} alt="/" />
                                <a class="text-[#E2E8F0] hover:text-slate-500 font-inter" href="/">Beranda</a>
                            </li>
                            <li class="flex gap-1 mt-2">
                                <img src={arrow} alt="/galeri" />
                                <a class="text-[#E2E8F0] hover:text-slate-500 font-inter" href="/gallery">Galeri</a>
                            </li>
                            <li class="flex gap-1 mt-2">
                                <img src={arrow} alt="/profil" />
                                <a class="text-[#E2E8F0] hover:text-slate-500 font-inter" href="/profil">Profil</a>
                            </li>
                            <li class="flex gap-1 mt-2">
                                <img src={arrow} alt="/contact" />
                                <a class="text-[#E2E8F0] hover:text-slate-500 font-inter" href="/contact">Hubungi Kami</a>
                            </li>
                            <li class="flex gap-1 mt-2">
                                <img src={arrow} alt="/donasi" />
                                <a class="text-[#E2E8F0] hover:text-slate-500 font-inter" href="/donasi">Donasi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap justify-between bg-[#020617] py-5 px-8 items-center">
                <h2 class="text-[#64748B] font-inter">Copyright © 2023 Aksamedia Inc. All right reserved. </h2>
                <ul class="flex justify-center items-center gap-4 mt-4 md:mt-0">
                </ul>
            </div>
        </div>
    )
}
export default Footer;