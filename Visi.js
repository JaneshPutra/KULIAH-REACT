import foto from '../images/visi.jpg';

function Visi() {
    return (
        <div
            style={{ maxWidth: '1290px' }}
            className="lg:p-10 p-2 max-w-5xl mt-16 mb-[112px] flex lg:flex-nowrap flex-wrap flex-row-reverse items-center gap-9 mx-auto rounded-2xl">
            <div class="bg-white p-6 relative rounded-2xl mx-auto lg:mx-0">
                <img class="md:w-[489px] md:h-[489px] w-[350px] h-[350px] object-cover rounded-lg block relative z-10 "
                    src={foto} alt="" />
                <h2
                    class="absolute bg-[#0B7C93] text-white font-semibold p-4 rounded-2xl z-20 bottom-0 md:-left-5 font-inter">
                    Kembangkan tahfidz bersama Ust. H. Dimas Sukiran S.Ag MM</h2>
            </div>

            <div class="lg:w-3/5 w-full mt-5 lg:mt-0 p-3 lg:p-0">
                <h3 class=" text-sm text-[#4ADE80] py-2 px-5 border-[1px] bg-[#F0FDF5] w-fit border-[#4ADE80] rounded-full mb-7 mx-auto md:mx-0 font-inter">
                    Visi dan Misi Yayasan AULIYAA’</h3>
                <h2 class=" lg:text-5xl text-4xl font-bold text-center md:text-start mt-6 lg:leading-[72px] leading-[50px] font-fairplay">
                    Mewujudkan Kebersamaan dan Membangun Kemandirian
                </h2>

                <h2 class="lg:text-lg w-full lg:w-4/5 mt-3 md:mt-6 text-center md:text-start font-inter">Mewujudkan Yayasan Amal Sholeh Sejahtera sebagai lembaga sosial, kemanusiaan dan keagamaan yang profesional serta amanah dalam membangun kemandirian umat.
                    <ul className="list-disc pl-5 mb-4">
                        <li>Mendidik anak yatim dan dhuafa dengan system pendidikan asrama yang berkualitas agar menjadi manusia yang berakhakul karimah, beraqidah kokoh kuat terhadap Allah SWT dan syariat-Nya.</li>
                        <li>Memberikan bimbingan keterampilan kepada umat maupun anak asuh agar mampu menunjang pencapaian prestasi akademik & non akademik.</li>
                        <li>Menyelenggarakan program-program untuk memberdayakan potensi umat maupun anak asuh agar memiliki keterampilan tinggi dan bermental entrepreneur.</li>
                    </ul>
                </h2>
            </div>
        </div>
    )
}

export default Visi;