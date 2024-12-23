import putra from '../images/foto1.jpg';
import putri from '../images/putri.jpg';
import tahfidz from '../images/3.jpg';
import sedekah from '../images/sedekah.jpg';


function Fasilitas() {
    return (
    
        <div class="flex flex-wrap items-center px-6 ">
            <div class="lg:w-1/2 w-full" data-aos="fade-right" data-aos-duration="1000">
                <h3
                    class=" text-sm text-[#CA8A04] py-2 px-5 bg-[#FEFCE8] border-[1px] w-fit border-[#FACC15] rounded-full mb-7 font-inter">
                    Fasilitas Asrama AULIYAA'</h3>
                <h2 class=" lg:text-[50px] text-[35px] font-bold font-fairplay">Tempat Nyaman dan Menyenangkan untuk Membangun <span
                    class="text-[#01D7EF]">Masa Depan</span></h2>
                <h2 class="text-[#64748B] md:w-[75%] mt-2 lg:mb-4 mb-10 w-full font-serif">Panti Asuhan Yatim Piatu AULIYAA' merupakan
                    tempat yang hangat dan peduli, memberikan perlindungan, pendidikan, dan kasih sayang kepada anak-anak yatim
                    piatu.</h2>
                <a class="mx-auto " href="/profil">
                    <button class="text-sm px-5 rounded-lg py-3  bg-[#5345E2] text-[#F8FAFC] hover:bg-blue-800 font-inter">Fasilitas Kami
                        <i class="far fa-arrow-right ml-1"></i></button></a>
            </div>

            <div class="lg:w-1/2 w-full flex flex-wrap justify-around lg:mt-0 mt-3" data-aos="fade-left" data-aos-duration="1000">

                <div
                    class="p-3 border-[1px] border-[#E2E8F0] md:w-[40%] lg:w-[47%] lg:h-fit w-[80%] rounded-xl mt-5 md:mt-10">
                    <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                        <img class=" w-12 h-12" src={putra} alt="" />
                    </div>
                    <h2 class="mt-6 text-2xl font-bold font-fairplay">Asrama Putra</h2>
                    <p class="mt-3 text-sm text-[#475569] font-inter">Mengasah Potensi dan Kedisiplinan: Asrama Putra AULIYAA' sebagai Tempat Berkembangnya Pemuda Unggul</p>
                </div>

                <div
                    class="p-3 border-[1px] border-[#E2E8F0] md:w-[40%] lg:w-[47%] lg:h-fit w-[80%] rounded-xl lg:mt-16 mt-5 md:mt-10">
                    <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                        <img class=" w-12 h-12" src={putri} alt="" />
                    </div>
                    <h2 class="mt-6 text-2xl font-bold font-fairplay">Asrama Putri</h2>
                    <p class="mt-3 text-sm text-[#475569] font-inter">Perkembangan sosial dan emosional: Asrama Putri AULIYAA’ memberikan perlindungan dan pendidikan yang unggul</p>
                </div>

                <div
                    class="p-3 border-[1px] border-[#E2E8F0] w-[80%] md:w-[40%] lg:w-[47%] lg:h-fit rounded-xl lg:-mt-1 mt-5 md:mt-10">
                    <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                        <img class=" w-12 h-12" src={tahfidz} alt="" />
                    </div>
                    <h2 class="mt-6 text-2xl font-bold font-fairplay">Asrama Tahfidz</h2>
                    <p class="mt-3 text-sm text-[#475569] font-inter">Lingkungan yang religius: Fasilitas dirancang untuk mendukung para santri dalam mempelajari dan menghafal Al-Qur'an</p>
                </div>

                <div
                    class="p-3 border-[1px] border-[#E2E8F0] md:w-[40%] lg:w-[47%] lg:h-fit w-[80%] rounded-xl mt-5 md:mt-10 lg:mt-5">
                    <div class="p-4 bg-[#EAEBFD] w-fit rounded-xl">
                        <img class=" w-12 h-12" src={sedekah} alt="" />
                    </div>
                    <h2 class="mt-6 text-2xl font-bold font-fairplay">Sedekah</h2>
                    <p class="mt-3 text-sm text-[#475569] font-inter">Bersedekah untuk membahagiakan anak yatim dan dhuafa, bersedekah dapat mendatang keberkahan dan mensucikan diri</p>
                </div>
            </div>
        </div>

     


    )
}
export default Fasilitas;