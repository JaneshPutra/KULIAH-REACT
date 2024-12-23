import img1 from '../images/img3.jpg';
import img2 from '../images/test1.jpg';
import img3 from '../images/img4.jpg';
import img4 from '../images/img5.jpg';

function Donasi() {
    return (
        <div class="mt-20 p-4">
        <h3
            class=" text-sm text-[#0EA5E9] py-2 bg-[#049CB6] bg-opacity-10 px-5 border-[1px] w-fit border-[#0EA5E9] rounded-full mb-7 mx-auto font-inter">
            DONASI UNTUK AULIYAA'</h3>
        <h2 class=" text-center font-semibold text-5xl font-fairplay">Mengubah <span class="text-[#6965ED]">Dunia</span> Dengan Satu
            Sumbangan</h2>
        <h2 class=" text-center text-[#64748B] mt-4 font-inter">Kebaikan dan sumbangan tidak pernah terbatas, semakin banyak kita
            memberikan, semakin banyak kita terhubung dengan <br/> kehidupan.</h2>

        <div class="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-6">

                <div class="p-4 border-[1px] border-[#E2E8F0] rounded-2xl">
                    <img class="h-[220px] w-full object-cover rounded-lg" src={img1} alt=""/>
                    <h3 class="mt-5 text-xl font-bold font-fairplay">Sedekah Edukasi Asrama Putra</h3>
                    <h2 class="text-[#5345E2] text-lg font-bold mt-1 font-inter">Rp. 800.900.000</h2>
                    <p class="text-xs text-[#64748B] mt-1 font-inter">Keikhlasan dalam sumbangan membawa kebahagiaan kepada penerima dan kepuasan kepa...</p>
                    <div class="mt-3 p-4 bg-[#F1F5F9] rounded-xl">
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="text-xs text-[#64748B] font-inter">Terkumpul :</h2>
                            <p class=" font-semibold font-inter">Rp. 10.000.000</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 border-[1px] border-[#E2E8F0] rounded-2xl">
                    <img class="h-[220px] w-full object-cover rounded-lg" src={img2} alt=""/>
                    <h3 class="mt-5 text-xl font-bold font-fairplay">Sedekah Edukasi Asrama Putra</h3>
                    <h2 class="text-[#5345E2] text-lg font-bold mt-1 font-inter">Rp. 800.900.000</h2>
                    <p class="text-xs text-[#64748B] mt-1 font-inter">Keikhlasan dalam sumbangan membawa kebahagiaan kepada penerima dan kepuasan kepa...</p>
                    <div class="mt-3 p-4 bg-[#F1F5F9] rounded-xl">
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="text-xs text-[#64748B] font-inter">Terkumpul :</h2>
                            <p class=" font-semibold font-inter">Rp. 10.000.000</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 border-[1px] border-[#E2E8F0] rounded-2xl">
                    <img class="h-[220px] w-full object-cover rounded-lg" src={img3} alt=""/>
                    <h3 class="mt-5 text-xl font-bold font-fairplay">Sedekah Edukasi Asrama Putra</h3>
                    <h2 class="text-[#5345E2] text-lg font-bold mt-1 font-inter">Rp. 800.900.000</h2>
                    <p class="text-xs text-[#64748B] mt-1 font-inter">Keikhlasan dalam sumbangan membawa kebahagiaan kepada penerima dan kepuasan kepa...</p>
                    <div class="mt-3 p-4 bg-[#F1F5F9] rounded-xl">
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="text-xs text-[#64748B] font-inter">Terkumpul :</h2>
                            <p class=" font-semibold font-inter">Rp. 10.000.000</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 border-[1px] border-[#E2E8F0] rounded-2xl">
                    <img class="h-[220px] w-full object-cover rounded-lg" src={img4} alt=""/>
                    <h3 class="mt-5 text-xl font-bold font-fairplay">Sedekah Edukasi Asrama Putra</h3>
                    <h2 class="text-[#5345E2] text-lg font-bold mt-1 font-inter">Rp. 800.900.000</h2>
                    <p class="text-xs text-[#64748B] mt-1 font-inter">Keikhlasan dalam sumbangan membawa kebahagiaan kepada penerima dan kepuasan kepa...</p>
                    <div class="mt-3 p-4 bg-[#F1F5F9] rounded-xl">
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="text-xs text-[#64748B] font-inter">Terkumpul :</h2>
                            <p class=" font-semibold font-inter">Rp. 10.000.000</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Donasi;