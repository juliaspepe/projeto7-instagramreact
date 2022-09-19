export default function Story(props){
   return(
    <div class="story">
    <div class="imagem">
        <img src={props.imagem}/>
    </div>
    <div class="usuario">
        {props.texto}
    </div>
</div>)
} 