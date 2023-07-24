import Acordion from "../componentes/Acordion";
import { GiLaurelCrown } from "react-icons/gi";

function Inicio() {
  return (
    <div>
      <h1><tr><th><GiLaurelCrown className="crown"/></th><th>BIENVENIDOS A LOS JUEGOS DEL AÑO</th><th><GiLaurelCrown className="crown"/></th></tr></h1>
      <br/>
        <Acordion
          nombre1="StarField"
          empresa1="Bethesda"
          img1="starfield.jpg"
          info1="Starfield es el primer universo nuevo en 25 años de Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4. En este juego de rol de próxima generación ambientado entre las estrellas, podrás hacerte el personaje que desees y explorar con una libertad sin precedentes mientras te embarcas en un viaje épico para desentrañar el mayor misterio de la humanidad. Corre el año 2330. La humanidad se ha aventurado más allá de nuestro sistema solar para asentarse en planetas nuevos y vivir como un pueblo espacial. Tras dejar atrás tus humildes inicios en la minería espacial, te unirás a Constelación, el último grupo de exploradores espaciales en busca de raros artefactos por toda la galaxia, y viajarás por la vasta extensión de los Sistemas Colonizados en el juego más grande y ambicioso de Bethesda Game Studios."
          nombre2="God Of War Ragnarok"
          empresa2="Santa Monica Studio"
          img2="god_of_war.jpg"
          info2="Desde Santa Monica Studio llega la secuela del aclamado por la 
          crítica God of War (2018). Fimbulvetr ya está en camino. Kratos y Atreus deben viajar a 
          cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas 
          se preparan para una batalla profetizada que terminará con el mundo. En el camino explorarán 
          paisajes increíbles y míticos, y se enfrentarán a aterradores enemigos en la forma de dioses 
          nórdicos y monstruos. La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben 
          elegir entre su propia seguridad y la seguridad de los reinos."
          nombre3="Elden Ring"
          empresa3="Fromsoftware"
          img3="elden_ring.png"
          info3="Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de 
          Elden y convertirte en un Señor de Elden en las Tierras Intermedias. Un extenso mundo lleno de emoción
          Un extenso mundo donde los campos abiertos, con una amplia variedad de situaciones, 
          y las enormes mazmorras, con diseños complejos y tridimensionales, se conectan con total fluidez. 
          Al explorar, te acompaña el entusiasmo por descubrir amenazas desconocidas y abrumadoras, 
          lo que produce una gran sensación de logro."
        />
    </div>

  );
}

export default Inicio;
