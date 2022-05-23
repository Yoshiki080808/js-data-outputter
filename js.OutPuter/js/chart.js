

// レーダーチャート用の点数オプション
// 点数：1~100
let score = ""; //例) y += '<option value="'+i+'">'+i+'</option>';
for(let i=1; i<=100; i++){
    score += '<option value="'+i+'">'+i+'</option>';
}
$(".scores").html(score);

// レーダーチャートインスタンスをグローバル関数にしておく（こうしないと更新出来ん）
let myRadarChart = [];

// レーダーチャートの中身の要素を変数に置き換えるためにグローバル変数にしておく
let companyEvaluations = ["独創力", "収益力", "人材", "トレンド", "ワクワク","マーケティング"];
let companyName = '企業A'
let companyPoints = [92, 72, 46, 74, 86, 97];

// 企業名のアップデート
$("#push0").on("click",function(){
    const update0 = document.getElementById('companyName').value;
    companyName = update0;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});

// 要素１のアップデート
$("#push1").on("click",function(){
    const update1 = document.getElementById('name1').value;
    companyEvaluations[0] = update1;
    const updatePoints1 = document.getElementById('scores1').value;
    companyPoints[0] = updatePoints1;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});

// 要素２のアップデート
$("#push2").on("click",function(){
    const update2 = document.getElementById('name2').value;
    companyEvaluations[1] = update2;
    const updatePoints2 = document.getElementById('scores2').value;
    companyPoints[1] = updatePoints2;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});

// 要素３のアップデート
$("#push3").on("click",function(){
    const update3 = document.getElementById('name3').value;
    companyEvaluations[2] = update3;
    const updatePoints3 = document.getElementById('scores3').value;
    companyPoints[2] = updatePoints3;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});

// 要素４のアップデート
$("#push4").on("click",function(){
    const update4 = document.getElementById('name4').value;
    companyEvaluations[3] = update4;
    const updatePoints4 = document.getElementById('scores4').value;
    companyPoints[3] = updatePoints4;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});

// 要素５のアップデート
$("#push5").on("click",function(){
    const update5 = document.getElementById('name5').value;
    companyEvaluations[4] = update5;
    const updatePoints5 = document.getElementById('scores5').value;
    companyPoints[4] = updatePoints5;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});

// 要素６のアップデート
$("#push6").on("click",function(){
    const update6 = document.getElementById('name6').value;
    companyEvaluations[5] = update6;
    const updatePoints6 = document.getElementById('scores6').value;
    companyPoints[5] = updatePoints6;
    if (myRadarChart){
        myRadarChart.destroy();
    }
    showmyRadarChart();
});


// レーダーチャートを表示
showmyRadarChart();

// レーダーチャートを関数化
function showmyRadarChart() {

    var ctx = document.getElementById("myRaderChart");
        myRadarChart = new Chart(ctx, {
            type: 'radar', 
            data: { 
                labels: companyEvaluations,
                datasets: [{
                    label: companyName,
                    data: companyPoints,
                    backgroundColor: 'rgba(255,201,59, 0.5)',
                    borderColor: '#FFB13A',
                    borderWidth: 1,
                    pointBackgroundColor: 'RGB(#F17914)'
                }
                // , {
                //     label: 'Bさん',
                //     data: [73, 95, 80, 87, 79],
                //     backgroundColor: 'RGBA(115,255,25, 0.5)',
                //     borderColor: '#28385E',
                //     borderWidth: 1,
                //     pointBackgroundColor: 'RGB(46,106,177)'
                // }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: '企業研究'
                },
                scale:{
                    ticks:{
                        suggestedMin: 0,
                        suggestedMax: 100,
                        stepSize: 10,
                        callback: function(value, index, values){
                            return  value +  '点'
                        }
                    }
                }
            }
        });
    }
// 棒グラフ
var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [
        {
          label: '睡眠',
          data: [62, 65, 93, 85, 51, 66, 47],
          backgroundColor: "rgba(255,201,59,0.7)"
        },{
          label: 'コーディング',
          data: [55, 45, 73, 75, 41, 45, 58],
          backgroundColor: "rgba(32,68,149,0.5)"
        },{
          label: 'アイデア発想',
          data: [33, 45, 62, 55, 31, 45, 38],
          backgroundColor: "rgba(100,150,236,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '支店別 来客数'
      },
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 10,
            callback: function(value, index, values){
              return  value +  '人'
            }
          }
        }]
      },
    }
  });

//   円グラフ
var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["HTML", "CSS", "JS", "その他"],
      datasets: [{
          backgroundColor: [
              "#FFC93B",
              "#9CDBDC",
              "#FFF4E1",
              "#E67A7A"
          ],
          data: [38, 31, 21, 10]
      }]
    },
    options: {
      title: {
        display: true,
        text: '血液型 割合'
      }
    }
  });