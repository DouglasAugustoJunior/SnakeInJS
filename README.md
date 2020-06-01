#[Douglas Augusto](http://github.com/DouglasAugustoJunior)- Outros projetos. # 
 
 
![VERSÃO DO SW](https://img.shields.io/badge/Version-1.0-blue.svg)
 
![LINGUAGEM FINALIDADE](https://img.shields.io/badge/JavaScript-game-orange.svg)
 
O **Snake** é um projeto simples que utilizei para praticar meus conhecimentos em JS. **[Projeto Online](https://douglasaugustojunior.github.io/SnakeInJS/)**

![Imagem](https://github.com/DouglasAugustoJunior/SnakeInJS/blob/master/_images/Game.PNG?raw=true)


 
Desenvolvido em HTML5,CSS3 e JS, ele traz diversas situações interessantes para utilizar diversos recursos.
 
## Interação com o usuário
 
Movimentação dos blocos:
(Setas do teclado)
Cima: Up
Baixo: Down
Esquerda: Left
Direta: Right

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

 

 
##                                                                                                                                                                                                                                                                        Movimentação
 
Movimento da Snake:

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


 
## Front-End
 
 

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


 
 
Para mais informações acesse [meus repositórios](http://github.com/DouglasAugustoJunior).
