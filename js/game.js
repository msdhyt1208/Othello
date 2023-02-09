
const list = {
  nextstone:function(color){
    $("#list1").children("div").removeClass();
    $("#list1").children("div").addClass(color);
  },
  tarn:function(tarn){
    if(tarn % 2 == 1) color ="b";
    else              color ="w";
    $("#masu").removeClass();
    $("#masu").addClass("nextcolor"+color);
    
    return color;
  },
  kifu:function(row,colmun,tarn){
    $("#list2").append("<li><span>tarn "+tarn+" ⇒　["+(row+1)+"."+(colmun+1)+"] </span><div class="+color+"></div><span>  です。</span></li>");
    $("#list2").append
  }
}
  
  
  // 石について
const stone ={
  clear:function (){  // 石のおける候補をリセットする
    for(let row=0;row<8;row++){
       for(let colmun=0;colmun<8;colmun++){
        id = bord.idCenge(row,colmun);
        if($("#"+id).children().hasClass('r')){        
          $("#"+id).children().removeClass();
          $("#"+id).children().addClass("n");
        }
       } 
    }
  },
  next:function(color){ // 石のおける候補を赤くする
    stone.clear();
    for(let row=0;row<8;row++){
       for(let colmun=0;colmun<8;colmun++){
        if(revrers.allCheck(row,colmun,color)&&bord.bord[colmun][row]=="n"){;
          id = bord.idCenge(row,colmun);
          $("#"+id).children().removeClass();
          $("#"+id).children().addClass("r");
        }
      } 
    }
  },
  put:function(row,colmun,color,tarn){  // 黒か白の石を置く
    id = bord.idCenge(row,colmun);
    bord.input(row,colmun,color);
    $("#"+id).children().removeClass();
    $("#"+id).children().addClass(color);
    $("#"+id).children().text(tarn);
  }
}
// bordについて
const bord = {
  bord:[
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"],
    ["n","n","n","n","n","n","n","n","n"]
  ],
  idCenge:function(row,colmun){
    return row+colmun*10+11;
  },
  rowCenge:function(id){
    return id % 10 - 1;
  },
  colmunCenge:function(id){
    return Math.floor(id /10) - 1;
  },
  input:function(row,colmun,color){
    bord.bord[colmun][row] = color;
  },
  output:function(row,colmun){
    return bord.bord[colmun][row];
  },
  display:function(tarn){
    console.log(bord.bord[0]);
    console.log(bord.bord[1]);
    console.log(bord.bord[2]);
    console.log(bord.bord[3]);
    console.log(bord.bord[4]);
    console.log(bord.bord[5]);
    console.log(bord.bord[6]);
    console.log(bord.bord[7]);
    console.log(tarn)
    console.log("-------")
  }  
}
// 反転について
const revrers = {
  streat:function (row,colmun,rfu,cfu,color,name){
    pointer = revrers.check(row,colmun,rfu,cfu);
    console.log(name+":"+bord.output(row,colmun)+":"+name);
    revrers.reversal (row,colmun,pointer,rfu,cfu,color);
  },
  check:function(row,colmun,rfu,cfu,color,name){
    pointer = 1;
    if(colmun+cfu*1 < 0||row+rfu*1 < 0) pointer=0;
    else{
      // console.log(name+":"+bord.bord[colmun+cfu*1 ][row+rfu*1]+":"+bord.output(row,colmun));
      while(true){
        if      (colmun+cfu*pointer>7){pointer = 0;}
        else if (row+rfu*pointer>7){pointer = 0;}
        else if (row+rfu*pointer<0){pointer = 0;}
        else if (colmun+cfu*pointer<0){pointer = 0;}
        else if (bord.bord[colmun+cfu*pointer ][row+rfu*pointer] == bord.output(row,colmun)
                      &&  pointer ==1)pointer = 0;
        else if (bord.bord[colmun+cfu*pointer ][row+rfu*pointer] == bord.output(row,colmun))break;
        else if (bord.bord[colmun+cfu*pointer ][row+rfu*pointer] == "n") pointer = 0;
        else    pointer ++;
      }
    }
  
    if(pointer != 0)  pointer --;
    return pointer;
  },
  allReversivle:function(row,colmun,color){
    revrers.streat    (row,colmun,  -1, -1,   color,"lu");
    revrers.streat    (row,colmun,  -1,  0,   color,"l");
    revrers.streat    (row,colmun , -1,  1,   color,"ld");   // upCheak
    revrers.streat    (row,colmun,   0, -1,   color,"u");   // downCheak
    revrers.streat    (row,colmun,   0,  1,   color,"d");   // upCheak
    revrers.streat    (row,colmun ,  1, -1,   color,"ru");   // downCheak
    revrers.streat    (row,colmun,   1,  0,   color,"r");   // upCheak
    revrers.streat    (row,colmun ,  1,  1,   color,"rd");   // downCheak
  },
  allCheck:function(row,colmun,color){
    beforeColor = bord.output(row,colmun);
    bord.input(row,colmun,color);
    let point =0;
    point = point+revrers.check    (row,colmun,  -1, -1,   color,"lu");
    point = point+revrers.check    (row,colmun,  -1,  0,   color,"l");
    point = point+revrers.check    (row,colmun , -1,  1,   color,"ld");   // upCheak
    point = point+revrers.check    (row,colmun,   0, -1,   color,"u");   // downCheak
    point = point+revrers.check    (row,colmun,   0,  1,   color,"d");   // upCheak
    point = point+revrers.check    (row,colmun ,  1, -1,   color,"ru");   // downCheak
    point = point+revrers.check    (row,colmun,   1,  0,   color,"r");   // upCheak
    point = point+revrers.check    (row,colmun ,  1,  1,   color,"rd");   // downCheak
    bord.input(row,colmun,beforeColor);
    return point > 0;
  },
  rcheck:function(row,colmun,rfu,cfu,color,name){
    pointer = 1;
    if(colmun+cfu*1 < 0||row+rfu*1 < 0) pointer=0;
    else{
      // console.log(name+":"+bord.bord[colmun+cfu*1 ][row+rfu*1]+":"+bord.output(row,colmun));
      while(true){
        if      (colmun+cfu*pointer>7){pointer = 0;}
        else if (row+rfu*pointer>7){pointer = 0;}
        else if (row+rfu*pointer<0){pointer = 0;}
        else if (colmun+cfu*pointer<0){pointer = 0;}
        else if (bord.bord[colmun+cfu*pointer ][row+rfu*pointer] == bord.output(row,colmun)
                      &&  pointer ==1)pointer = 0;
        else if (bord.bord[colmun+cfu*pointer ][row+rfu*pointer] == bord.output(row,colmun))break;
        else if (bord.bord[colmun+cfu*pointer ][row+rfu*pointer] == "n") pointer = 0;
        else    pointer ++;
      }
    }
  
    if(pointer != 0)  pointer --;
    return pointer;
  },
  reversal:function(row,colmun,pointer,rfu,cfu,color){
    while(pointer >0){
      stone.put(row+rfu*pointer,colmun+cfu*pointer,color);
      pointer--;
    }
  }
}





