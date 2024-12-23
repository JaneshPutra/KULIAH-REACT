import Header from "../components/Header";
import Fasilitas from "../components/Fasilitas";
import Galerry from "../components/Galerry";
import Donasi from "../components/Donasi";
import MDOnasi from "../components/MDonasi";
function home(){
    return(
        <div>
        <Header/>
        <div className="mt-11">
            <Fasilitas/>
        </div>
        <Galerry/>
        <Donasi/>
        <MDOnasi/>
        </div>
    )
}
export default home;