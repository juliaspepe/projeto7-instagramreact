import React from "react";
import catanaimg from "./img/catanacomics.svg"

export default function Usuario(props) {
    const [nome, setNome] = React.useState("Catana")
    const [imagem, setImagem] = React.useState(catanaimg)

    function inserirNome(){
       const novoNome = prompt('inserir nome')
        setNome(novoNome)
    }

    function inserirImagem(){
        const novaImagem = prompt('inserir url da imagem')
        setImagem(novaImagem)
    }

    return (
        <div class="usuario">
            <img onClick={inserirImagem} src={imagem} />
            <div class="texto">
                <strong>{props.username}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={inserirNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
} 