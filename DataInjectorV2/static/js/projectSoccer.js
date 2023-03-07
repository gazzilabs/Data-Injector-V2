
    function formatJsonDataSoccer(_dataKeyPointsJson2) {
        var canvas = document.getElementById("back");
        var context = canvas.getContext("2d");
        var cw = canvas.width;
        var ch = canvas.height;
        context.clearRect(0, 0, cw, ch);

        var _listSkeletons = []



        for (i = 0; i < _dataKeyPointsJson2.result.length; i++) {
            _scoreList = []
            _listSkeletons = _dataKeyPointsJson2.result[i]
            _listKeyPoints = _dataKeyPointsJson2.result[i].bbox
            var _xPlusWidth = 0
            var _xPlusHeight = 0
            var _yPlusHeight = 0
            var _yPlusWidth = 0
            _xPlusWidth = _listKeyPoints[0] + _listKeyPoints[2]
            _xPlusHeight = _listKeyPoints[0] + _listKeyPoints[3]
            _yPlusHeight = _listKeyPoints[1] + _listKeyPoints[3]
            _yPlusWidth = _listKeyPoints[1] + _listKeyPoints[2]
            _bboxList = [];
            _bboxList.push({
                x: +_listKeyPoints[0],
                y: +_listKeyPoints[1]
            })
            _bboxList.push({
                x: +_xPlusWidth,
                y: +_listKeyPoints[1]
            })
            _bboxList.push({
                x: +_xPlusWidth,
                y: +_yPlusHeight
            })
            _bboxList.push({
                x: +_listKeyPoints[0],
                y: +_yPlusHeight
            })
            drawPolygon(_bboxList, i)



            var _pointSkeleton = []
            var _pointSkeleton1 = []
            var _pointSkeleton2 = []
            var _pointSkeleton3 = []
            var _pointSkeleton4 = []
            var _pointSkeleton5 = []

            //head
            _pointSkeleton.push({
                x: +_listSkeletons.keypoints[4][0],
                y: +_listSkeletons.keypoints[4][1]
            })
            _pointSkeleton.push({
                x: +_listSkeletons.keypoints[2][0],
                y: +_listSkeletons.keypoints[2][1]
            })
            _pointSkeleton.push({
                x: +_listSkeletons.keypoints[0][0],
                y: +_listSkeletons.keypoints[0][1]
            })
            _pointSkeleton.push({
                x: +_listSkeletons.keypoints[1][0],
                y: +_listSkeletons.keypoints[1][1]
            })
            _pointSkeleton.push({
                x: +_listSkeletons.keypoints[3][0],
                y: +_listSkeletons.keypoints[3][1]
            })
            drawSkeletonLine(_pointSkeleton, i)

            //
            _pointSkeleton1.push({
                x: +_listSkeletons.keypoints[10][0],
                y: +_listSkeletons.keypoints[10][1]
            })
            _pointSkeleton1.push({
                x: +_listSkeletons.keypoints[8][0],
                y: +_listSkeletons.keypoints[8][1]
            })
            _pointSkeleton1.push({
                x: +_listSkeletons.keypoints[6][0],
                y: +_listSkeletons.keypoints[6][1]
            })
            _pointSkeleton1.push({
                x: +_listSkeletons.keypoints[5][0],
                y: +_listSkeletons.keypoints[5][1]
            })
            _pointSkeleton1.push({
                x: +_listSkeletons.keypoints[7][0],
                y: +_listSkeletons.keypoints[7][1]
            })
            _pointSkeleton1.push({
                x: +_listSkeletons.keypoints[9][0],
                y: +_listSkeletons.keypoints[9][1]
            })
            drawSkeletonLine(_pointSkeleton1, i)

            _pointSkeleton2.push({
                x: +_listSkeletons.keypoints[6][0],
                y: +_listSkeletons.keypoints[6][1]
            })
            _pointSkeleton2.push({
                x: +_listSkeletons.keypoints[5][0],
                y: +_listSkeletons.keypoints[5][1]
            })
            _pointSkeleton2.push({
                x: +_listSkeletons.keypoints[11][0],
                y: +_listSkeletons.keypoints[11][1]
            })
            _pointSkeleton2.push({
                x: +_listSkeletons.keypoints[12][0],
                y: +_listSkeletons.keypoints[12][1]
            })
            _pointSkeleton2.push({
                x: +_listSkeletons.keypoints[6][0],
                y: +_listSkeletons.keypoints[6][1]
            })
            drawSkeletonLine(_pointSkeleton2, i)

            _pointSkeleton3.push({
                x: +_listSkeletons.keypoints[12][0],
                y: +_listSkeletons.keypoints[12][1]
            })
            _pointSkeleton3.push({
                x: +_listSkeletons.keypoints[14][0],
                y: +_listSkeletons.keypoints[14][1]
            })
            _pointSkeleton3.push({
                x: +_listSkeletons.keypoints[16][0],
                y: +_listSkeletons.keypoints[16][1]
            })
            drawSkeletonLine(_pointSkeleton3, i)

            _pointSkeleton4.push({
                x: +_listSkeletons.keypoints[11][0],
                y: +_listSkeletons.keypoints[11][1]
            })
            _pointSkeleton4.push({
                x: +_listSkeletons.keypoints[13][0],
                y: +_listSkeletons.keypoints[13][1]
            })
            _pointSkeleton4.push({
                x: +_listSkeletons.keypoints[15][0],
                y: +_listSkeletons.keypoints[15][1]
            })
            drawSkeletonLine(_pointSkeleton4, i)


            for (j = 0; j < _listSkeletons.keypoints.length; j++) {
                _pointSkeleton5.push({
                    x: +_listSkeletons.keypoints[j][0],
                    y: +_listSkeletons.keypoints[j][1]
                })
                _scoreList.push(_listSkeletons.keypoints[j][2])
            }
            drawSkeletonPoint(_pointSkeleton5, i)

            var strokeColor = "";
            strokeColor = switchLineColor(i);

            const szimg = document.getElementsByClassName("mfp-img")
            var scaleImg = szimg[0].height / szimg[0].naturalHeight;
            rects.push(new rect(i, _listKeyPoints[0] * scaleImg, _listKeyPoints[1] * scaleImg, _listKeyPoints[2] * scaleImg, _listKeyPoints[3] * scaleImg, "rgba(0,0,255,0)", strokeColor, 2, maxMinAvg(_scoreList)));


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
    }



function drawPolygon(obj, i) {
    if (_activeLabeling == 1) {
        document.getElementById('original').children[0].style.backgroundColor = '#515151';
    } else {
        document.getElementById('oroginal').children[0].style.backgroundColor = '#252526';
    }


    if (_lineDrawWidth == 6) {
        document.getElementById('plusdotsz').children[0].style.backgroundColor = '#515151';
    } else {
        document.getElementById('plusdotsz').children[0].style.backgroundColor = '#252526';
    }


    coordinates = obj;
    var canvas = document.getElementById("back");
    var context = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    context.lineWidth = _lineDrawWidth;
    const szimg = document.getElementsByClassName("mfp-img")
    var scaleImg = szimg[0].height / szimg[0].naturalHeight;
    //context.clearRect(0, 0, cw, ch);
    context.strokeStyle = switchLineColor(i);




    context.beginPath();
    context.moveTo(coordinates[0].x * scaleImg, coordinates[0].y * scaleImg);
    for (index = 1; index < coordinates.length; index++) {
        context.lineTo(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg);
    }
    context.closePath();
    context.stroke();
    // Additionaly I'm drawing a small circle around every point
    // you can delete this.
    for (index = 0; index < coordinates.length; index++) {
        context.beginPath();
        context.arc(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg, 5, 0, 2 * Math.PI);
        context.stroke();
    }
}


function drawSkeletonPoint(obj, i) {
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

    /*
    context.beginPath();
    context.moveTo(coordinates[0].x * scaleImg, coordinates[0].y * scaleImg);
    for (index = 1; index < coordinates.length; index++) {
        context.lineTo(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg);
    }
    context.closePath();
    context.stroke();
    */

    // Additionaly I'm drawing a small circle around every point
    // you can delete this.
    for (index = 0; index < coordinates.length; index++) {
        context.beginPath();
        context.arc(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg, 1.5, 0, 2 * Math.PI);
        context.stroke();
    }
}

function drawSkeletonLine(obj, i) {
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
    /*
    for (index = 0; index < coordinates.length; index++) {
        context.beginPath();
        context.arc(coordinates[index].x * scaleImg, coordinates[index].y * scaleImg, 3, 0, 2 * Math.PI);
        context.stroke();
    }
    */
}


