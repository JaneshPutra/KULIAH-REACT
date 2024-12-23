import element1 from '../images/element1.png';
import element2 from '../images/element2.png';
import foto from '../images/slide3.jpg';


function About() {
    return (
        <div class="bg-[#ECFFFF] mx-auto rounded-2xl">
            <div class="md:p-10 p-5  mt-10 flex lg:flex-nowrap flex-wrap items-center gap-9">
                <div class="bg-white p-6 relative rounded-2xl mx-auto">
                    <img class="absolute bottom-0 right-0" src={element1}
                        alt="" />
                    <img class="absolute top-0 left-0" src={element2}
                        alt="" />
                    <img class="md:w-[489px] md:h-[489px] w-[350px] h-[350px] object-cover rounded-lg block relative z-10"
                        src={foto} alt="" />
                    <h2 class="absolute bg-[#0B7C93] text-white font-semibold p-4 rounded-2xl z-20 bottom-0 -left-5 font-inter">
                        Ust. H. Dimas Sukiran S.Ag MM bersama para santri putra.</h2>
                </div>
                <div class="lg:w-1/2 w-full mt-5 lg:mt-0">
                    <h3 class=" text-sm text-[#0EA5E9] py-2 px-5 border-[1px] w-fit border-[#0EA5E9] rounded-full mb-7 font-inter">
                        Tentang Asrama AULIYAA'</h3>
                    <h2 class=" text-5xl font-bold leading-[72px] font-fairplay">
                        Panti Asuhan Yatim Piatu AULIYAA'
                    </h2>

                    <h2 class="text-lg w-full lg:w-4/5 font-inter mt-3 text-[#64748B]">Yayasan dana sosial Yatim-Auliyaa, kami hadir sebagai bentuk rasa peduli terhadap anak-anak yatim yang terus berjuang dalam islam, serta wujud kecintaan kami kepada rasulullah dengan terus mejalankan sunnah beliau. sekarang terhitung lebih dari 70 Anak asuh yang tinggal di dalam asrama Auliyaa, semoga dengan ini semua, kita senantiasa selalu dalam lindungan dan Ridho-Nya. Amin... Kami berharap media ini bisa menjadi mitra panti asuhan dan juga jembatan kebaikan untuk para dermawan yang ingin memberikan donasi kepada panti asuhan terdekat di daerahnya. Akhir kata, semoga ikhtiar kita semua bisa menjadi amal baik kita kelak di akhirat, dan juga bisa ikut membantu Pemerintah dalam mengentaskan kemiskinan, terkhusus panti asuhan di Indonesia dan generasi muda Indonesia. aamiin yaa rabb...</h2>
                    <h2 class="mt-2 text-lg font-bold font-inter">Ust. H. Dimas Sukiran S.Ag MM</h2>
                </div>
            </div>
        </div>
    )
}
export default About;