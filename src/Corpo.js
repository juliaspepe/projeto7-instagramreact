import SideBar from "./SideBar";
import Story from "./Story";
import Post from "./Post";
import gag from "./img/9gag.svg";
import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import nathan from "./img/nathanwpylestrangeplanet.svg"
import wawawi from "./img/wawawicomics.svg"
import respondeai from "./img/respondeai.svg"
import filo from "./img/filomoderna.svg"
import memeria from "./img/memeriagourmet.svg"
import adorable from "./img/adorable_animals.svg"
import gato from "./img/gato-telefone.svg"
import dog from "./img/dog.svg"


export default function Corpo() {

    const infoStory = [
        { imagem: gag, texto: "9gag" },
        { imagem: meowed, texto: "meowed" },
        { imagem: barked, texto: "barked" },
        { imagem: nathan, texto: "nathanwpylestrangeplanet" },
        { imagem: wawawi, texto: "wawawicomics" },
        { imagem: respondeai, texto: "respondeai" },
        { imagem: filo, texto: "filomoderna" },
        { imagem: memeria, texto: "memeriagourmet" }
    ]

    const infoPost = [
        { imagemusuario: meowed, username: "meowed", imagemconteudo: gato, imagemquemcurtiu: respondeai, usuarioquecurtiu: "respondeai", numerodecurtidas:"10597"},
        { imagemusuario: barked, username: "barked", imagemconteudo: dog, imagemquemcurtiu: adorable, usuarioquecurtiu: "adorable-animals", numerodecurtidas:"6306"},
    ]


    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">

                    {infoStory.map((s) => <Story imagem={s.imagem} texto={s.texto} />)}

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    {infoPost.map((p) => <Post imagemusuario={p.imagemusuario} username={p.username} imagemconteudo={p.imagemconteudo} imagemquemcurtiu={p.imagemquemcurtiu} usuarioquecurtiu={p.usuarioquecurtiu} numerodecurtidas={p.numerodecurtidas}/>)}
                </div>
            </div>

            <SideBar />
        </div>
    )
}