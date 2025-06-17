document.getElementById('pausar').addEventListener("change", function(){
    let imagens=document.querySelectorAll('.movimento'), i;
    if(this.checked){
        for(i=0;i<imagens.length;i++){
            imagens[i].src=imagens[i].src.replace('.gif', '.png');
        }
    }
    else{
        for(i=0;i<imagens.length;i++){
            imagens[i].src=imagens[i].src.replace('.png', '.gif');
        }
    }
});
