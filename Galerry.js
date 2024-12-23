import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

function Galerry() {
    return (
        <div class="mt-20 max-w-[1416px] px-3 mx-auto">
            <h3
                class=" text-sm text-[#0EA5E9] py-2 bg-[#049CB6] bg-opacity-10 px-5 border-[1px] w-fit border-[#0EA5E9] rounded-full mb-7 mx-auto font-inter">
                GALERI AULIYAA'</h3>

            <h2 class=" text-[48px] font-semibold text-center font-fairplay">Dokumentasi <span class="text-[#EAB308]">Kegiatan</span> Kami
            </h2>
            <p class="md:w-[65%] w-[90%] text-center text-[#64748B] mt-2 mx-auto font-inter">Galeri bisa berisi dokumentasi visual dari berbagai
                kegiatan keagamaan yang diadakan di pesantren, seperti shalat berjamaah, kajian kitab, atau kegiatan-kegiatan
                sosial dan keagamaan lainnya.</p>

            <div class=" flex flex-wrap justify-center mt-[34px] gap-6 isotope-btn">
                <button class="py-3 px-6 focus:bg-[#5345E2] focus:text-white focus:border-[#5345E2] hover:bg-[#5345E2]
            hover:text-white text-[#9295F3] border-2 border-[#9295F3] rounded-xl active font-inter" data-filter="*"><span>Semua</span></button>

                <button
                    class="py-3 px-6 focus:bg-[#5345E2] focus:text-white focus:border-[#5345E2] hover:bg-[#5345E2]
                    hover:text-white text-[#9295F3] border-2 border-[#9295F3] rounded-xl font-inter"
                    data-filter="#/"><span>Asrama Putra</span>
                </button>
                <button
                    class="py-3 px-6 focus:bg-[#5345E2] focus:text-white focus:border-[#5345E2] hover:bg-[#5345E2]
                    hover:text-white text-[#9295F3] border-2 border-[#9295F3] rounded-xl font-inter"
                    data-filter="#/"><span>Asrama Putri</span>
                </button>
                <button
                    class="py-3 px-6 focus:bg-[#5345E2] focus:text-white focus:border-[#5345E2] hover:bg-[#5345E2]
                    hover:text-white text-[#9295F3] border-2 border-[#9295F3] rounded-xl font-inter"
                    data-filter="#/"><span>Tahfidz</span>
                </button>
                <button
                    class="py-3 px-6 focus:bg-[#5345E2] focus:text-white focus:border-[#5345E2] hover:bg-[#5345E2]
                    hover:text-white text-[#9295F3] border-2 border-[#9295F3] rounded-xl font-inter"
                    data-filter="#/"><span>Kegiatan</span>
                </button>
                <button
                    class="py-3 px-6 focus:bg-[#5345E2] focus:text-white focus:border-[#5345E2] hover:bg-[#5345E2]
                    hover:text-white text-[#9295F3] border-2 border-[#9295F3] rounded-xl font-inter"
                    data-filter="#/"><span>Lain-lain</span>
                </button>

            </div>


            <div className="mt-[34px]   flex flex-wrap -m-2">
                <div className="flex flex-wrap w-full lg:w-1/2">
                    <div className="w-1/2 p-2 ">
                        <img className="h-[200px] w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" src={img1} alt="Img1" />
                    </div>
                    <div className="w-1/2 p-2">
                        <img className="h-[200px] w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" src={img2} alt="Img2" />
                    </div>
                    <div className="w-full p-2 ">
                        <img className="h-[300px] w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" src={img3} alt="Img3" />
                    </div>
                </div>
                <div className="flex flex-wrap w-full lg:w-1/2">
                    <div className="w-full p-2">
                        <img className="h-[300px] w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" src={img4} alt="Img4" />
                    </div>
                    <div className="w-1/2 p-2">
                        <img className="h-[200px] w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" src={img5} alt="Img5" />
                    </div>
                    <div className="w-1/2 p-2">
                        <img className="h-[200px] w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" src={img2} alt="Img6" />
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Galerry;