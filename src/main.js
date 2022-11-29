const saleList = document.querySelectorAll('.sale');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON'){
        saleList.forEach((sale)=>{shoppingFilter(sale, event.target.dataset.info)});
    } else if(event.target.tagName == 'IMG'){
        saleList.forEach((sale)=>{shoppingFilter(sale, event.target.parentElement.dataset.info)});
    }
})


// 1. 필터 만들기
// 2. 버튼 누르면 필터 작동하도록 연동
// 3. 필터에 따라 보여주기
// 4. 데이터 동적으로 생성

function shoppingFilter(saleBox, condition){
    const srcName = saleBox.children[0].src;
    if(srcName.includes(condition)){
        console.log(saleBox);
    }
}