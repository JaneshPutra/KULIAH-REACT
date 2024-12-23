import bca from '../images/bca.png';
import bri from '../images/bri.png';
import mandiri from '../images/mandiri.png';

function Donation() {
    return (
        <div class=" py-16 px-6 max-w-[1400px] mx-auto">
            <h3
                class=" text-sm text-[#0EA5E9] py-2 bg-[#049CB6] bg-opacity-10 px-5 border-[1px] w-fit border-[#0EA5E9] rounded-full mb-7 mx-auto font-inter">
                DONASI UNTUK AULIYAA'</h3>
            <div class="lg:w-4/5 mx-auto">
                <h2 class=" text-[56px] font-bold text-center font-fairplay">Zakatmu Bahagiakan <span class=" text-[#6965ED]">Mereka</span></h2>
                <h2 class=" text-lg text-center text-[#475569] font-inter mt-2">Kami menghargai setiap kontribusi yang diberikan oleh para
                    donatur. Setiap donasi uang yang diterima akan digunakan untuk mendukung program-program pendidikan dan
                    kesejahteraan para santri</h2>
            </div>

            <div class="space-y-16 mt-28 font-inter">
                <div class="p-4 shadow-md flex justify-between items-center">
                    <img class=" lg:w-[253px] w-[70px]" src={bca} alt="" />
                    <h2 class=" lg:text-3xl  text-base text-[#334155]">081334389705</h2>
                    <h2 class=" lg:text-3xl text-base text-[#334155]">Yayasan Yatim Auliyaa</h2>
                </div>
                <div class="p-4 shadow-md flex justify-between items-center">
                    <img class=" lg:w-[253px] w-[70px]" src={bri} alt="" />
                    <h2 class=" lg:text-3xl  text-base text-[#334155]">081334389705</h2>
                    <h2 class=" lg:text-3xl text-base text-[#334155]">Yayasan Yatim Auliyaa</h2>
                </div>
                <div class="p-4 shadow-md flex justify-between items-center">
                    <img class=" lg:w-[253px] w-[70px]" src={mandiri} alt="" />
                    <h2 class=" lg:text-3xl  text-base text-[#334155]">081334389705</h2>
                    <h2 class=" lg:text-3xl text-base text-[#334155]">Yayasan Yatim Auliyaa</h2>
                </div>
            </div>
        </div>
    )
}
export default Donation;