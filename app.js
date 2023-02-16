//alert('테스트');
//진행(progress)바, 이전(prev)버튼, 다음(next)버튼, 동그라미 1,2,3,4
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
//1,2,3,4 단계 표시
let currentActive =1;
//다음 버튼 클릭시 
next.addEventListener('click', () => {
  currentActive++; //단계 +1
  // if(currentActive > circles.length) {
  //     currentActive = 4;
  // }
  update()
});
// 이전 버튼 클릭시
prev.addEventListener('click', () => {
  currentActive--; 
  // if(currentActive < 1) {
  //     currentActive - 1;
  // }
  update()
});


function update() {
  circles.forEach((circle, idx) => {
      if(idx < currentActive) {
          circle.classList.add('active')
      } else {
          circle.classList.remove('active')
      }
  });
  //바에 색 넣기, 길이만큼 색을 넣게함
  const actives = document.querySelectorAll('.active')
  //첫번째 active는 이미 완성되었고 총 4개중 남은 active 3개로 계산 -1
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  if(currentActive === 1) {
      prev.disabled = true; //이전버튼사용중지
  } else if(currentActive === circles.length) {
      next.disabled = true;
  } else {
      prev.disabled = false;
      next.disabled = false;
  }

  
}