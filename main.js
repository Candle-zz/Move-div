// 创建div
let div = document.createElement('div');
// div标签为demo
div.className = 'demo'
// 将div插入body中
document.body.appendChild(div);

// console.log(1)

// 定义dragging
var dragging = false

var lastX
var lastY

// 按下鼠标时x=true
div.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

// 在body中通过鼠标事件让div随鼠标移动而移动
document.onmousemove = function (e) {
    // console.log(e.clientX,e.clientY)
    if (dragging == true){
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0
        // 防止用户把div拖出页面
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultY < 0){
            resultY = 0
        }
        if (resultX < 0){
            resultX = 0
        }
        div.style.top = resultY + 'px'
        div.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}

// 松开鼠标时x=false
document.onmouseup = function () {
    dragging = false
}
