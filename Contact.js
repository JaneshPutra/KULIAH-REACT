import map from '../images/MapPin.png';
import phone from '../images/phone2.png';
import sms from '../images/sms.png';
import calendar from '../images/kalender.png';

function Contact() {
    return (
        <div class="mt-[130px] lg:space-y-[112px] space-y-10 mb-[112px]">
            <div class="max-w-[1176px] mx-auto gap-5 flex lg:flex-nowrap flex-wrap even:flex-row-reverse p-4 lg:p-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63311.35168545719!2d112.745487!3d-7.358439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4c610b529f9%3A0x3348c20628a3479e!2sPanti%20Asuhan%20Yatim%20Dan%20Piatu%20Auliyaa&#39;%20Putri!5e0!3m2!1sen!2sid!4v1733182893299!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <div class="lg:w-1/2 w-full">
                    <h2 class=" font-semibold text-[40px] font-fairplay">Asrama Putri</h2>
                    <ul class="mt-3 space-y-[14px] font-inter">
                        <li class="flex items-center gap-2">
                            <img class="" src={map}
                                alt="" />
                            <h2 class="text-lg text-[#64748B]">Waru, Jl. Ngingas Selatan No.9, Ngingas, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256</h2>
                        </li>
                        <li class="flex items-center gap-2">
                            <img src={phone} alt="" />
                            <h2 class="text-lg text-[#64748B]">62318662863</h2>
                        </li>
                        <li class="flex items-center gap-2">
                            <img src={sms}
                                alt="" />
                            <h2 class="text-lg text-[#64748B]">yatimaulia@gmail.com</h2>
                        </li>
                        <li class="flex items-center gap-2">
                            <img src={calendar}
                                alt="" />
                            <h2 class="text-lg text-[#64748B]">09.00 - 19.00</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-[1176px] mx-auto gap-5 flex lg:flex-nowrap flex-wrap even:flex-row-reverse p-4 lg:p-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126622.70337091439!2d112.745487!3d-7.358439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4c610b529f9%3A0x3348c20628a3479e!2sPanti%20Asuhan%20Yatim%20Dan%20Piatu%20Auliyaa&#39;%20Putri!5e0!3m2!1sen!2sid!4v1733183239719!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <div class="lg:w-1/2 w-full">
                    <h2 class=" font-semibold text-[40px] font-fairplay">Asrama Putra</h2>
                    <ul class="mt-3 space-y-[14px] font-inter">
                        <li class="flex items-center gap-2">
                            <img class="" src={map}
                                alt="" />
                            <h2 class="text-lg text-[#64748B]">Waru, Jl. Ngingas Selatan No.9, Ngingas, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256</h2>
                        </li>
                        <li class="flex items-center gap-2">
                            <img src={phone} alt="" />
                            <h2 class="text-lg text-[#64748B]">62318662863</h2>
                        </li>
                        <li class="flex items-center gap-2">
                            <img src={sms}
                                alt="" />
                            <h2 class="text-lg text-[#64748B]">yatimaulia@gmail.com</h2>
                        </li>
                        <li class="flex items-center gap-2">
                            <img src={calendar}
                                alt="" />
                            <h2 class="text-lg text-[#64748B]">09.00 - 19.00</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact;