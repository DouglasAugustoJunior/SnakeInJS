window.onload = function(){ // onload espera a janela carregar
    
    const vel=1,tambloco = 20; // velocidade e tamanho dos blocos
    
    var stage = document.getElementById('stage'), // pega elemento do HTML pelo id
        ctx = stage.getContext("2d"),// pega contexto
        vx,vy,px,py,qtdebloco,ax,ay,trail=[],pts=0,record,dificuldade=100;
    
    document.addEventListener("keydown",keyPush);
    setInterval(game, dificuldade); // chama a função game a cada 60ms
    setInterval(nivel,80);
    vx = vy = 0; // velocidade x e y
    px=py=0; // ponto iniciais
    ax=ay=15; // ponto inicial da maça
    tail = 5; // tamanho da snake
    qtdebloco = 30;
    record = localStorage.getItem("recordsnake");// atribui a variavel valor do localstorage record
    if (record == null){
        record = 0;
    }
    
    function game(){
        px+=vx; // soma uma posição na snake
        py+=vy; // soma uma posição na snake
        
        // movimentação
        if (px<0){// se a cobra chegar na lateral
            px = qtdebloco-1;
        }
        if (px>qtdebloco-1){
            px=0;
        }
        if(py<0){
            py=qtdebloco-1;
        }
        if(py>qtdebloco-1){
            py=0;
        }
        
        // pinta o contexto de preto
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,stage.width,stage.height);
        
        // pinta maça
        ctx.fillStyle = "red";
        ctx.fillRect(ax*tambloco,ay*tambloco,tambloco,tambloco); // ax*tambloco pega a posição e adiciona o tamanho padrão de um bloco
        
        // pinta snake
        ctx.fillStyle = "gray";
        for(var i = 0; i<trail.length;i++){
            ctx.fillRect(trail[i].x*tambloco,trail[i].y*tambloco,tambloco-1,tambloco-1); // pinta cada posição da cobra de acordo com o tamanho
            if (trail[i].x == px && trail[i].y == py){ // verifica se a cabeça atingiu outra parte do corpo da snake
                vx=vy=0; // para a cobra  
                tail = 5; // volta tamanho padrão da snake
                px=py=0; // posição inicial
                if (pts>record){
                    record = pts;
                    localStorage.setItem("recordsnake",record);// seta valor do score no localstorage record
                    alert("Novo record!");
                }
                pts=0; // zera os ptos
            }
        }
        
        trail.push({x:px,y:py})
        while(trail.length>tail){ // se o tamanho do rastro estiver maior que a cauda
            trail.shift();
        }
        
        //desenha score
        ctx.fillStyle = "#fff"; // cor da fonte
        ctx.font = "30px Arial"; // tamanho e tipo
        ctx.fillText("Score:"+pts,30,60); // texto alinhado no canto superior esquerdo
        ctx.fillText("Record:"+record,400 ,60); // texto alinhado no canto superior esquerdo
        if(ax==px && ay==py){
            tail++;
            pts+=1;
            ax = Math.floor(Math.random()*qtdebloco);
            ay = Math.floor(Math.random()*qtdebloco);
        }
    }
    
    function nivel(){
        dificuldade-=2; // incremente velocidade
    }
    
    function keyPush(event){
        switch(event.keyCode){
            case 37: // tecla left
                vx = -vel;
                vy=0;
                break;
            case 38: // tecla up
                vx = 0;
                vy=-vel;
                break;
            case 39: // tecla right
                vx = vel;
                vy=0;
                break;
            case 40: // tecla down
                vx = 0;
                vy=vel;
                break;
        }
    }
    
}