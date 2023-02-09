
start.start();
stone.next("b");
let color = "b";
let tarn = 1;
$(function(){
  $('#masu>li').on('click',
  function(){
    const id = Number($(this).attr('id'));
    const row     =  bord.rowCenge(id);
    const colmun  =  bord.colmunCenge(id);
    const idStone = $("#"+id).children();


    point = revrers.allCheck(row,colmun,color);
    // console.log(tarn+"⇒"+point);

    if(idStone.hasClass('r')){

      stone.put(row,colmun,color,tarn);         //石を置く             //石にターンを入れる
      revrers.allReversivle(row,colmun,color);  //石を裏返す
      bord.display(tarn);                       //consoleに表示する
      list.kifu(row,colmun,tarn);//置いたところを右のリストに追加する
      tarn++;
    }

    color = list.tarn(tarn);      //次の色を決める
    stone.next(color);            //次の候補の置けるところを指示する
    list.nextstone(color);        //右のリストをに次の色を表示する
  })
})
$(function(){
  $('#menubar').on('click',function(){
    if($("body").hasClass("menuon"))  {
      $("body").removeClass()  ;
      $("body").addClass("notmenu")  ;
    
    }
    else{
      $("body").removeClass()  ;
      $("body").addClass("menuon");
    }        
                      
  })
})

