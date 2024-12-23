import element1 from '../images/element3.png';
import element2 from '../images/element4.png';
import element3 from '../images/element5.png';

function MDOnasi() {
    return (
        <div class=" max-w-[1496px] mx-auto rounded-2xl mt-24 bg-[#1D1768] py-16  relative mb-32 overflow-hidden">
            <div>
                <img class="absolute right-12 floating" src={element3}
                    alt="" />
                <img class="absolute left-32 bottom-20 w-6 h-6 floating2"
                    src={element3} alt="" />
                <img class="absolute left-32 top-0 floating3"
                    src={element1} alt="" />
                <img class="absolute right-72 bottom-32 w-6 h-6 floating4"
                    src={element1} alt="" />
                <img class="absolute top-28 left-7" src={element2}
                    alt="" />
                <img class="absolute w-7 h-7 right-40 bottom-28"
                    src={element2} alt="" />
            </div>
            <div class="flex flex-col items-center relative z-10">
                <h3
                    class=" text-sm text-[#0EA5E9] py-2 bg-[#ECFFFF] px-5 border-[1px] w-fit  border-[#0EA5E9] rounded-full mb-7 mx-auto font-inter">
                    MARI BERDONASI AULIYAA'</h3>
                <h2 class="w-4/5 md:text-5xl text-[30px] font-semibold text-center text-white md:leading-[72px] font-fairplay">Dermawan untuk
                    Masa Depan: Berdonasi
                    untuk Membangun <span class="text-[#FACC15]">Cerita Bahagia</span> di Panti Asuhan AULIYAA
                </h2>
                <h2 class="text-center text-[#B9BDF9] mt-1 font-inter">Kebaikan dan sumbangan tidak pernah terbatas, semakin banyak kita
                    memberikan, semakin banyak kita terhubung dengan kehidupan.</h2>
                <a href="/donasi">
                    <button class="py-2 rounded-full mt-10 px-20 bg-[#01D7EF] hover:bg-blue-700 text-white font-inter">Donasi
                        Sekarang</button>
                </a>
            </div>
        </div>
    )
}
export default MDOnasi;