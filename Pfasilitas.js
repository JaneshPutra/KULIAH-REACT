import putra from '../images/foto1.jpg';
import putri from '../images/putri.jpg';
import tahfidz from '../images/3.jpg';
import sedekah from '../images/sedekah.jpg';

function Pfasilitas(){
    return(
        <div class="mt-20 max-w-[1416px] mx-auto">
            <h3
                class=" text-sm text-[#CA8A04] py-2 px-5 bg-[#FEFCE8] border-[1px] w-fit border-[#FACC15] rounded-full mb-6 mx-auto font-inter">
                Fasilitas Asrama AULIYAA'</h3>
            <h2 class=" md:text-5xl text-3xl font-semibold text-center w-4/5 mx-auto font-fairplay">Tempat Nyaman dan Menyenangkan untuk Membangun
                <span class="text-[#01D7EF]">Masa Depan</span>
            </h2>
            <p class="md:w-[65%] w-4/5 text-center text-[#64748B] mt-5 mx-auto font-inter">Galeri bisa berisi dokumentasi visual dari berbagai
                kegiatan keagamaan yang diadakan di pesantren, seperti shalat berjamaah, kajian kitab, atau
                kegiatan-kegiatan
                sosial dan keagamaan lainnya.</p>

            <div class=" mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-[30px] px-3">
                    <div class="p-3 border-[1px] border-[#E2E8F0] rounded-xl">
                        <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                            <img class=" w-12 h-12" src={putra} alt=""/>
                        </div>
                        <h2 class="mt-6 text-2xl font-bold font-fairplay">Asrama Putra</h2>
                        <p class="mt-3 text-sm text-[#475569] font-inter">Mengasah Potensi dan Kedisiplinan: Asrama Putra AULIYAA' sebagai Tempat Berkembangnya Pemuda Unggul</p>
                    </div>
                    <div class="p-3 border-[1px] border-[#E2E8F0] rounded-xl">
                        <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                            <img class=" w-12 h-12" src={putri} alt=""/>
                        </div>
                        <h2 class="mt-6 text-2xl font-bold font-fairplay">Asrama Putri</h2>
                        <p class="mt-3 text-sm text-[#475569] font-inter">Perkembangan sosial dan emosional: Asrama Putri AULIYAA’ memberikan perlindungan dan pendidikan yang unggul</p>
                    </div>
                    <div class="p-3 border-[1px] border-[#E2E8F0] rounded-xl">
                        <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                            <img class=" w-12 h-12" src={tahfidz} alt=""/>
                        </div>
                        <h2 class="mt-6 text-2xl font-bold font-fairplay">Asrama Tahfidz</h2>
                        <p class="mt-3 text-sm text-[#475569] font-inter">Lingkungan yang religius: Fasilitas dirancang untuk mendukung para santri dalam mempelajari dan menghafal Al-Qur'an</p>
                    </div>
                    <div class="p-3 border-[1px] border-[#E2E8F0] rounded-xl">
                        <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                            <img class=" w-12 h-12" src={sedekah} alt=""/>
                        </div>
                        <h2 class="mt-6 text-2xl font-bold font-fairplay">Sedekah</h2>
                        <p class="mt-3 text-sm text-[#475569] font-inter">Bersedekah untuk membahagiakan anak yatim dan dhuafa, bersedekah dapat mendatang keberkahan dan mensucikan diri</p>
                    </div>
            </div>
        </div>
    )
}
export default Pfasilitas;