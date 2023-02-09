
const start ={
  start:function (){
    for(let colmun = 0;colmun<8;colmun++){
      for(let row = 0;row<8;row++){
        let masu = colmun * 10 + row + 11;
        let cell = colmun * 8 + row;
        $('#masu').append('<li>');
        $('li').eq(cell).attr('id',masu);
        $('li').eq(cell).wrapInner('<div></div>');
        $('li').eq(cell).children().attr('class','n');
      }
    }
    stone.put(3,3,"b");
    stone.put(3,4,"w");
    stone.put(4,3,"w");
    stone.put(4,4,"b");
  }
}