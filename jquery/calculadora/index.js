$(document).ready(function() {
  $(".calc-btn").on('click', function(){
    if($(this).attr('data-role')!='operator'){
      $(".display").text($(".display").text()+$(this).text());
    }
    else if($(".display").text()!=''){
        $(".display").text($(".display").text()+$(this).attr('name'));
    }
  });

  $(".clear-btn").on('click',function(){
    $(".display").text('');
  });

  $(".clear1-btn").on('click',function(){
    $(".display").text( $(".display").text().slice(0,-1));
  });

  $(".calculate-btn").on('click',function(){
    var expression = $(".display").text();
    try {
      $(".display").text(eval(expression));
    } catch (error) {
      $(".display").text("error");
      setTimeout(() => { $(".display").text(""); }, 2000);
      
    }
  });

});

