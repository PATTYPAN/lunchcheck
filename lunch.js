$(function(){
    // 画面表示時に価格の合計値を計算
    var sum_price = sum();
    var vip = 5000;
    var priceLists = [100, 50];
    var inputs = document.getElementsByClassName('NumInput');

    // addボタン押下時の処理
    $("#add").click(function(){
      var total_per = 0;
      for(i=0;i<inputs.length;i++)
      {
          total_per= total_per + parseInt(inputs[i].value) * priceLists[i];
      } 

      if($("#input-name").val() === ""){
        document.querySelector(".no_num").textContent = "名前を入力してください";
      }
      else if(total_per === 0)
      {
        document.querySelector(".no_num").textContent = "数量を入力してください";
      }else{ 
        document.querySelector(".no_num").textContent = "";

        var name = $("#input-name").val();
        var ham_num = $("#input-ham").val();
        var drink_num = $("#input-drink").val();
        var price = total_per;
        $('table').append('<tr class="rows"><td><input type="checkbox" class="item"></input>'
                          +'</td><td>'+name
                          +'</td><td class="ham_num">'+ham_num
                          +'</td><td class="drink_num">'+drink_num
                          +'</td><td class="price">'+price
                          +'</td></tr>');
        // 合計値を再計算
        var sum_price = sum();
      }
    });
  
    // deleteボタン押下時の処理
    $('#delete').click(function() {
      $('table tr').has('.item:checked').remove();
      var sum_price = sum();

    });

    // チェックボックスの全選択・解除
    // 1. 「全選択」する
    $('#select_all').click(function() {
      if ($('.item:checked').length !== $('.item').length) {
        $('.item').prop('checked', true);
      } else {
        $('.item').prop('checked', false);
      }
    });

    function sum(){
      // 表の金額を取得する
      var pricelist = $("table td[class=price]").map(function(index, val){
        var price = parseInt($(val).text());
        if(price >= 0) {
          return price;
        } else {
          return null;
        }
      });
      // 価格の合計を求める
      var total = 0;
      pricelist.each(function(index, val){
        total = total + val;
      });
      $(".sum_price").text("合計："+total+"円");
    }


});  
  
  
