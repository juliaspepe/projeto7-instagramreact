import Sugestao from "./Sugestao"
import badvibes from "./img/bad.vibes.memes.svg"
import chibirdart from "./img/chibirdart.svg"
import razoes from "./img/razoesparaacreditar.svg"
import adorable from "./img/adorable_animals.svg"
import smallcutecats from "./img/smallcutecats.svg"


export default function Sugestoes() {
    const infoSugestao = [
        { imagem: badvibes, nome:"bad.vibes.memes", razao:"Segue você", seguir:"Seguir" },
        { imagem: chibirdart, nome:"chibirdart", razao:"Segue você", seguir:"Seguir" },
        { imagem: razoes, nome:"razoesparaacreditar", razao:"Novo no Instagram", seguir:"Seguir" },
        { imagem: adorable, nome:"adorable_animals", razao:"Segue você", seguir:"Seguir" },
        { imagem: smallcutecats, nome:"smallcutecats", razao:"Segue você", seguir:"Seguir" },
    ]


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {infoSugestao.map((i) => <Sugestao imagem={i.imagem} nome={i.nome} razao={i.razao} seguir={i.seguir} />)}

        </div>
    )
} 