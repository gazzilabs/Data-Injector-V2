function formatJsonDataKidsSample(_dataKeyPointsJson2) {
    var canvas = document.getElementById("back");
    var context = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    context.clearRect(0, 0, cw, ch);

    var keyLocation = _dataKeyPointsJson2.labelingInfo[0].pose.location

    var _pointSkeleton0 = []
    _pointSkeleton0.push({
        x: +keyLocation.코.x,
        y: +keyLocation.코.y
    })
    _pointSkeleton0.push({
        x: +keyLocation['흉골'].x,
        y: +keyLocation['흉골'].y
    })
    drawKidLine0(_pointSkeleton0, 4)


    var _pointSkeleton1 = []
    _pointSkeleton1.push({
        x: +keyLocation.코.x,
        y: +keyLocation.코.y
    })
    _pointSkeleton1.push({
        x: +keyLocation['오른쪽 눈'].x,
        y: +keyLocation['오른쪽 눈'].y
    })
    drawKidLine0(_pointSkeleton1, 5)

    var _pointSkeleton2 = []
    _pointSkeleton2.push({
        x: +keyLocation.코.x,
        y: +keyLocation.코.y
    })
    _pointSkeleton2.push({
        x: +keyLocation['왼쪽 눈'].x,
        y: +keyLocation['왼쪽 눈'].y
    })
    drawKidLine0(_pointSkeleton2, 6)

    var _pointSkeleton3 = []
    _pointSkeleton3.push({
        x: +keyLocation['오른쪽 눈'].x,
        y: +keyLocation['오른쪽 눈'].y
    })
    _pointSkeleton3.push({
        x: +keyLocation['오른쪽 귀'].x,
        y: +keyLocation['오른쪽 귀'].y
    })
    drawKidLine0(_pointSkeleton3, 7)

    var _pointSkeleton4 = []
    _pointSkeleton4.push({
        x: +keyLocation['왼쪽 눈'].x,
        y: +keyLocation['왼쪽 눈'].y
    })
    _pointSkeleton4.push({
        x: +keyLocation['왼쪽 귀'].x,
        y: +keyLocation['왼쪽 귀'].y
    })
    drawKidLine0(_pointSkeleton4, 8)

    var _pointSkeleton5 = []
    _pointSkeleton5.push({
        x: +keyLocation['흉골'].x,
        y: +keyLocation['흉골'].y
    })
    _pointSkeleton5.push({
        x: +keyLocation['오른쪽 허벅지'].x,
        y: +keyLocation['오른쪽 허벅지'].y
    })
    _pointSkeleton5.push({
        x: +keyLocation['오른쪽 무릎'].x,
        y: +keyLocation['오른쪽 무릎'].y
    })
    _pointSkeleton5.push({
        x: +keyLocation['오른쪽 발목'].x,
        y: +keyLocation['오른쪽 발목'].y
    })
    drawKidLine0(_pointSkeleton5, 1)


    var _pointSkeleton6 = []
    _pointSkeleton6.push({
        x: +keyLocation['흉골'].x,
        y: +keyLocation['흉골'].y
    })
    _pointSkeleton6.push({
        x: +keyLocation['오른쪽 어깨'].x,
        y: +keyLocation['오른쪽 어깨'].y
    })
    _pointSkeleton6.push({
        x: +keyLocation['오른쪽 팔꿈치'].x,
        y: +keyLocation['오른쪽 팔꿈치'].y
    })
    _pointSkeleton6.push({
        x: +keyLocation['오른쪽 손'].x,
        y: +keyLocation['오른쪽 손'].y
    })
    drawKidLine0(_pointSkeleton6, 2)

    var _pointSkeleton7 = []
    _pointSkeleton7.push({
        x: +keyLocation['흉골'].x,
        y: +keyLocation['흉골'].y
    })
    _pointSkeleton7.push({
        x: +keyLocation['왼쪽 허벅지'].x,
        y: +keyLocation['왼쪽 허벅지'].y
    })
    _pointSkeleton7.push({
        x: +keyLocation['왼쪽 무릎'].x,
        y: +keyLocation['왼쪽 무릎'].y
    })
    _pointSkeleton7.push({
        x: +keyLocation['왼쪽 발목'].x,
        y: +keyLocation['왼쪽 발목'].y
    })
    drawKidLine0(_pointSkeleton7, 3)

    var _pointSkeleton8 = []
    _pointSkeleton8.push({
        x: +keyLocation['흉골'].x,
        y: +keyLocation['흉골'].y
    })
    _pointSkeleton8.push({
        x: +keyLocation['왼쪽 어깨'].x,
        y: +keyLocation['왼쪽 어깨'].y
    })
    _pointSkeleton8.push({
        x: +keyLocation['왼쪽 팔꿈치'].x,
        y: +keyLocation['왼쪽 팔꿈치'].y
    })
    _pointSkeleton8.push({
        x: +keyLocation['왼쪽 손'].x,
        y: +keyLocation['왼쪽 손'].y
    })
    drawKidLine0(_pointSkeleton8, 4)




    document.onkeyup = function (e) {
        //0
        if (e.which == 48) {
            confirmPop_up(0)
        } else if (e.which == 49) {
            confirmPop_up(1)
        } else if (e.which == 50) {
            confirmPop_up(2)
        } else if (e.which == 51) {
            confirmPop_up(3)
        } else if (e.which == 52) {
            confirmPop_up(4)
        } else if (e.which == 53) {
            confirmPop_up(5)
        }

    };


}


function drawKidLine0(obj, i) {
    coordinates = obj;
    var canvas = document.getElementById("back");
    var context = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    context.lineWidth = _lineDrawWidth;
    context.strokeStyle = switchLineColor(i);

    const szimg = document.getElementsByClassName("mfp-img")
    var scaleImg = szimg[0].height / szimg[0].naturalHeight;
    //context.clearRect(0, 0, cw, ch);


    context.beginPath();
    context.moveTo(coordinates[0].x * scaleImg, coordinates[0].y * scaleImg);
    for (index = 1; index < coordinates.length; index++) {
        context.lineTo(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg);
    }
    context.stroke();

    // Additionaly I'm drawing a small circle around every point
    // you can delete this.

    for (index = 0; index < coordinates.length; index++) {
        context.beginPath();
        context.arc(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg, 3, 0, 2 * Math.PI);
        context.stroke();
    }

}