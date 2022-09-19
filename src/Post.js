import React from "react"

export default function Post(props) {
    const [selecionado, setSelecionado] = React.useState(true)
    const [selecao, setSelecao] = React.useState("bookmark-outline")
    const [escolhido, setEscolhido] = React.useState(true)
    const [curtido, setCurtido] = React.useState("")
    const [coracao, setCoracao] = React.useState("heart-outline")
    const [qtdCurtidas, setQtsCurtidas] = React.useState(props.numerodecurtidas)


    function selecionar(){
        if(selecionado === true){
            setSelecao("bookmark")
            setSelecionado(!selecionado)
        }else{
            setSelecao("bookmark-outline")
            setSelecionado(!selecionado)
        }
    }

    function curtir(){
        if(escolhido === true){
            setCoracao("heart")
            setEscolhido(!escolhido)
            setCurtido("coracao")
            setQtsCurtidas(Number(props.numerodecurtidas)+ 1)
        }else{
            setCoracao("heart-outline")
            setEscolhido(!escolhido)
            setCurtido("")
            setQtsCurtidas(props.numerodecurtidas)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemusuario} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={curtir} src={props.imagemconteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div class={curtido}>
                        <ion-icon onClick={curtir} name={coracao}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={selecionar} name={selecao}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemquemcurtiu} />
                    <div class="texto">
                    Curtido por <strong> {props.usuarioquecurtiu} </strong> e <strong> outras {qtdCurtidas} pessoas </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
