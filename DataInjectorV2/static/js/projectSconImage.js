

        //Format JSON Keypoint for Scon Image
        function formatJsonDataSconImage (_dataKeyPointsJson) {
            var canvas = document.getElementById("back");
            var context = canvas.getContext("2d");
            var cw = canvas.width;
            var ch = canvas.height;
            context.clearRect(0, 0, cw, ch);

            var _listSkeletons = []

            for (i = 0; i < _dataKeyPointsJson.result.length; i++) {
                _scoreList = []
                _listSkeletons = _dataKeyPointsJson.result[i]
                _listKeyPoints = _dataKeyPointsJson.result[i].bbox
                var _xPlusWidth = 0
                var _yPlusHeight = 0
                _xPlusWidth = _listKeyPoints[0] + _listKeyPoints[2]
                _yPlusHeight = _listKeyPoints[1] + _listKeyPoints[3]
                _bboxList = [];
                _bboxList.push({ x: + _listKeyPoints[0], y: + _listKeyPoints[1] })
                _bboxList.push({ x: + _xPlusWidth, y: + _listKeyPoints[1] })
                _bboxList.push({ x: + _xPlusWidth, y: + _yPlusHeight })
                _bboxList.push({ x: + _listKeyPoints[0], y: + _yPlusHeight })
                drawPolygon(_bboxList, i)



                var _pointSkeleton = []
                var _pointSkeleton1 = []
                var _pointSkeleton2 = []
                var _pointSkeleton3 = []
                var _pointSkeleton4 = []
                var _pointSkeleton5 = []
                var _pointSkeleton6 = []
                var _pointSkeleton7 = []
                var _pointSkeleton8 = []
                var _pointSkeleton9 = []
                var _pointSkeleton10 = []
                var _pointSkeleton11 = []
                var _pointSkeleton12 = []
                var _pointSkeleton13 = []
                var _pointSkeleton14 = []
                var _pointSkeleton15 = []
                var _pointSkeleton16 = []
                var _pointSkeleton17 = []
                var _pointSkeleton18 = []

                
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[0][0], y: + _listSkeletons.keypoints[0][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[1][0], y: + _listSkeletons.keypoints[1][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[2][0], y: + _listSkeletons.keypoints[2][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[3][0], y: + _listSkeletons.keypoints[3][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[4][0], y: + _listSkeletons.keypoints[4][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[5][0], y: + _listSkeletons.keypoints[5][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[6][0], y: + _listSkeletons.keypoints[6][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[7][0], y: + _listSkeletons.keypoints[7][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[8][0], y: + _listSkeletons.keypoints[8][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[9][0], y: + _listSkeletons.keypoints[9][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[10][0], y: + _listSkeletons.keypoints[10][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[11][0], y: + _listSkeletons.keypoints[11][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[12][0], y: + _listSkeletons.keypoints[12][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[13][0], y: + _listSkeletons.keypoints[13][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[14][0], y: + _listSkeletons.keypoints[14][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[15][0], y: + _listSkeletons.keypoints[15][1] })
                _pointSkeleton.push({ x: + _listSkeletons.keypoints[16][0], y: + _listSkeletons.keypoints[16][1] })
                drawSkeletonLine(_pointSkeleton, i)


                _pointSkeleton1.push({ x: + _listSkeletons.keypoints[17][0], y: + _listSkeletons.keypoints[17][1] })
                _pointSkeleton1.push({ x: + _listSkeletons.keypoints[18][0], y: + _listSkeletons.keypoints[18][1] })
                _pointSkeleton1.push({ x: + _listSkeletons.keypoints[19][0], y: + _listSkeletons.keypoints[19][1] })
                _pointSkeleton1.push({ x: + _listSkeletons.keypoints[20][0], y: + _listSkeletons.keypoints[20][1] })
                _pointSkeleton1.push({ x: + _listSkeletons.keypoints[21][0], y: + _listSkeletons.keypoints[21][1] })
                drawSkeletonLine(_pointSkeleton1, i)


                _pointSkeleton2.push({ x: + _listSkeletons.keypoints[22][0], y: + _listSkeletons.keypoints[22][1] })
                _pointSkeleton2.push({ x: + _listSkeletons.keypoints[23][0], y: + _listSkeletons.keypoints[23][1] })
                _pointSkeleton2.push({ x: + _listSkeletons.keypoints[24][0], y: + _listSkeletons.keypoints[24][1] })
                _pointSkeleton2.push({ x: + _listSkeletons.keypoints[25][0], y: + _listSkeletons.keypoints[25][1] })
                _pointSkeleton2.push({ x: + _listSkeletons.keypoints[26][0], y: + _listSkeletons.keypoints[26][1] })
                drawSkeletonLine(_pointSkeleton2, i)

                _pointSkeleton3.push({ x: + _listSkeletons.keypoints[27][0], y: + _listSkeletons.keypoints[27][1] })
                _pointSkeleton3.push({ x: + _listSkeletons.keypoints[28][0], y: + _listSkeletons.keypoints[28][1] })
                _pointSkeleton3.push({ x: + _listSkeletons.keypoints[29][0], y: + _listSkeletons.keypoints[29][1] })
                _pointSkeleton3.push({ x: + _listSkeletons.keypoints[30][0], y: + _listSkeletons.keypoints[30][1] })
                drawSkeletonLine(_pointSkeleton3, i)

                _pointSkeleton4.push({ x: + _listSkeletons.keypoints[31][0], y: + _listSkeletons.keypoints[31][1] })
                _pointSkeleton4.push({ x: + _listSkeletons.keypoints[32][0], y: + _listSkeletons.keypoints[32][1] })
                _pointSkeleton4.push({ x: + _listSkeletons.keypoints[33][0], y: + _listSkeletons.keypoints[33][1] })
                _pointSkeleton4.push({ x: + _listSkeletons.keypoints[34][0], y: + _listSkeletons.keypoints[34][1] })
                _pointSkeleton4.push({ x: + _listSkeletons.keypoints[35][0], y: + _listSkeletons.keypoints[35][1] })
                drawSkeletonLine(_pointSkeleton4, i)

                _pointSkeleton5.push({ x: + _listSkeletons.keypoints[36][0], y: + _listSkeletons.keypoints[36][1] })
                _pointSkeleton5.push({ x: + _listSkeletons.keypoints[37][0], y: + _listSkeletons.keypoints[37][1] })
                _pointSkeleton5.push({ x: + _listSkeletons.keypoints[38][0], y: + _listSkeletons.keypoints[38][1] })
                _pointSkeleton5.push({ x: + _listSkeletons.keypoints[39][0], y: + _listSkeletons.keypoints[39][1] })
                _pointSkeleton5.push({ x: + _listSkeletons.keypoints[40][0], y: + _listSkeletons.keypoints[40][1] })
                _pointSkeleton5.push({ x: + _listSkeletons.keypoints[41][0], y: + _listSkeletons.keypoints[41][1] })
                drawSkeletonLine(_pointSkeleton5, i)

                _pointSkeleton6.push({ x: + _listSkeletons.keypoints[42][0], y: + _listSkeletons.keypoints[42][1] })
                _pointSkeleton6.push({ x: + _listSkeletons.keypoints[43][0], y: + _listSkeletons.keypoints[43][1] })
                _pointSkeleton6.push({ x: + _listSkeletons.keypoints[44][0], y: + _listSkeletons.keypoints[44][1] })
                _pointSkeleton6.push({ x: + _listSkeletons.keypoints[45][0], y: + _listSkeletons.keypoints[45][1] })
                _pointSkeleton6.push({ x: + _listSkeletons.keypoints[46][0], y: + _listSkeletons.keypoints[46][1] })
                _pointSkeleton6.push({ x: + _listSkeletons.keypoints[47][0], y: + _listSkeletons.keypoints[47][1] })
                drawSkeletonLine(_pointSkeleton6, i)

                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[48][0], y: + _listSkeletons.keypoints[48][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[49][0], y: + _listSkeletons.keypoints[49][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[50][0], y: + _listSkeletons.keypoints[50][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[51][0], y: + _listSkeletons.keypoints[51][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[52][0], y: + _listSkeletons.keypoints[52][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[53][0], y: + _listSkeletons.keypoints[53][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[54][0], y: + _listSkeletons.keypoints[54][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[55][0], y: + _listSkeletons.keypoints[55][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[56][0], y: + _listSkeletons.keypoints[56][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[57][0], y: + _listSkeletons.keypoints[57][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[58][0], y: + _listSkeletons.keypoints[58][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[59][0], y: + _listSkeletons.keypoints[59][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[60][0], y: + _listSkeletons.keypoints[60][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[61][0], y: + _listSkeletons.keypoints[61][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[62][0], y: + _listSkeletons.keypoints[62][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[63][0], y: + _listSkeletons.keypoints[63][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[64][0], y: + _listSkeletons.keypoints[64][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[65][0], y: + _listSkeletons.keypoints[65][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[66][0], y: + _listSkeletons.keypoints[66][1] })
                _pointSkeleton7.push({ x: + _listSkeletons.keypoints[67][0], y: + _listSkeletons.keypoints[67][1] })
                drawSkeletonLine(_pointSkeleton7, i)

                _pointSkeleton8.push({ x: + _listSkeletons.keypoints[68][0], y: + _listSkeletons.keypoints[68][1] })
                _pointSkeleton8.push({ x: + _listSkeletons.keypoints[69][0], y: + _listSkeletons.keypoints[69][1] })
                _pointSkeleton8.push({ x: + _listSkeletons.keypoints[70][0], y: + _listSkeletons.keypoints[70][1] })
                _pointSkeleton8.push({ x: + _listSkeletons.keypoints[71][0], y: + _listSkeletons.keypoints[71][1] })
                _pointSkeleton8.push({ x: + _listSkeletons.keypoints[72][0], y: + _listSkeletons.keypoints[72][1] })
                drawSkeletonLine(_pointSkeleton8, i)

                _pointSkeleton9.push({ x: + _listSkeletons.keypoints[68][0], y: + _listSkeletons.keypoints[68][1] })
                _pointSkeleton9.push({ x: + _listSkeletons.keypoints[73][0], y: + _listSkeletons.keypoints[73][1] })
                _pointSkeleton9.push({ x: + _listSkeletons.keypoints[74][0], y: + _listSkeletons.keypoints[74][1] })
                _pointSkeleton9.push({ x: + _listSkeletons.keypoints[75][0], y: + _listSkeletons.keypoints[75][1] })
                _pointSkeleton9.push({ x: + _listSkeletons.keypoints[76][0], y: + _listSkeletons.keypoints[76][1] })
                drawSkeletonLine(_pointSkeleton9, i)

                _pointSkeleton10.push({ x: + _listSkeletons.keypoints[68][0], y: + _listSkeletons.keypoints[68][1] })
                _pointSkeleton10.push({ x: + _listSkeletons.keypoints[77][0], y: + _listSkeletons.keypoints[77][1] })
                _pointSkeleton10.push({ x: + _listSkeletons.keypoints[78][0], y: + _listSkeletons.keypoints[78][1] })
                _pointSkeleton10.push({ x: + _listSkeletons.keypoints[79][0], y: + _listSkeletons.keypoints[79][1] })
                _pointSkeleton10.push({ x: + _listSkeletons.keypoints[80][0], y: + _listSkeletons.keypoints[80][1] })
                drawSkeletonLine(_pointSkeleton10, i)

                _pointSkeleton11.push({ x: + _listSkeletons.keypoints[68][0], y: + _listSkeletons.keypoints[68][1] })
                _pointSkeleton11.push({ x: + _listSkeletons.keypoints[81][0], y: + _listSkeletons.keypoints[81][1] })
                _pointSkeleton11.push({ x: + _listSkeletons.keypoints[82][0], y: + _listSkeletons.keypoints[82][1] })
                _pointSkeleton11.push({ x: + _listSkeletons.keypoints[83][0], y: + _listSkeletons.keypoints[83][1] })
                _pointSkeleton11.push({ x: + _listSkeletons.keypoints[84][0], y: + _listSkeletons.keypoints[84][1] })
                drawSkeletonLine(_pointSkeleton11, i)

                _pointSkeleton12.push({ x: + _listSkeletons.keypoints[68][0], y: + _listSkeletons.keypoints[68][1] })
                _pointSkeleton12.push({ x: + _listSkeletons.keypoints[85][0], y: + _listSkeletons.keypoints[85][1] })
                _pointSkeleton12.push({ x: + _listSkeletons.keypoints[86][0], y: + _listSkeletons.keypoints[86][1] })
                _pointSkeleton12.push({ x: + _listSkeletons.keypoints[87][0], y: + _listSkeletons.keypoints[87][1] })
                _pointSkeleton12.push({ x: + _listSkeletons.keypoints[88][0], y: + _listSkeletons.keypoints[88][1] })
                drawSkeletonLine(_pointSkeleton12, i)

                _pointSkeleton13.push({ x: + _listSkeletons.keypoints[89][0], y: + _listSkeletons.keypoints[89][1] })
                _pointSkeleton13.push({ x: + _listSkeletons.keypoints[90][0], y: + _listSkeletons.keypoints[90][1] })
                _pointSkeleton13.push({ x: + _listSkeletons.keypoints[91][0], y: + _listSkeletons.keypoints[91][1] })
                _pointSkeleton13.push({ x: + _listSkeletons.keypoints[92][0], y: + _listSkeletons.keypoints[92][1] })
                _pointSkeleton13.push({ x: + _listSkeletons.keypoints[93][0], y: + _listSkeletons.keypoints[93][1] })
                drawSkeletonLine(_pointSkeleton13, i)

                _pointSkeleton14.push({ x: + _listSkeletons.keypoints[89][0], y: + _listSkeletons.keypoints[89][1] })
                _pointSkeleton14.push({ x: + _listSkeletons.keypoints[94][0], y: + _listSkeletons.keypoints[94][1] })
                _pointSkeleton14.push({ x: + _listSkeletons.keypoints[95][0], y: + _listSkeletons.keypoints[95][1] })
                _pointSkeleton14.push({ x: + _listSkeletons.keypoints[96][0], y: + _listSkeletons.keypoints[96][1] })
                _pointSkeleton14.push({ x: + _listSkeletons.keypoints[97][0], y: + _listSkeletons.keypoints[97][1] })
                drawSkeletonLine(_pointSkeleton14, i)

                _pointSkeleton15.push({ x: + _listSkeletons.keypoints[89][0], y: + _listSkeletons.keypoints[89][1] })
                _pointSkeleton15.push({ x: + _listSkeletons.keypoints[98][0], y: + _listSkeletons.keypoints[98][1] })
                _pointSkeleton15.push({ x: + _listSkeletons.keypoints[99][0], y: + _listSkeletons.keypoints[99][1] })
                _pointSkeleton15.push({ x: + _listSkeletons.keypoints[100][0], y: + _listSkeletons.keypoints[100][1] })
                _pointSkeleton15.push({ x: + _listSkeletons.keypoints[101][0], y: + _listSkeletons.keypoints[101][1] })
                drawSkeletonLine(_pointSkeleton15, i)

                _pointSkeleton16.push({ x: + _listSkeletons.keypoints[89][0], y: + _listSkeletons.keypoints[89][1] })
                _pointSkeleton16.push({ x: + _listSkeletons.keypoints[102][0], y: + _listSkeletons.keypoints[102][1] })
                _pointSkeleton16.push({ x: + _listSkeletons.keypoints[103][0], y: + _listSkeletons.keypoints[103][1] })
                _pointSkeleton16.push({ x: + _listSkeletons.keypoints[104][0], y: + _listSkeletons.keypoints[104][1] })
                _pointSkeleton16.push({ x: + _listSkeletons.keypoints[105][0], y: + _listSkeletons.keypoints[105][1] })
                drawSkeletonLine(_pointSkeleton16, i)

                _pointSkeleton17.push({ x: + _listSkeletons.keypoints[89][0], y: + _listSkeletons.keypoints[89][1] })
                _pointSkeleton17.push({ x: + _listSkeletons.keypoints[106][0], y: + _listSkeletons.keypoints[106][1] })
                _pointSkeleton17.push({ x: + _listSkeletons.keypoints[107][0], y: + _listSkeletons.keypoints[107][1] })
                _pointSkeleton17.push({ x: + _listSkeletons.keypoints[108][0], y: + _listSkeletons.keypoints[108][1] })
                _pointSkeleton17.push({ x: + _listSkeletons.keypoints[109][0], y: + _listSkeletons.keypoints[109][1] })
                drawSkeletonLine(_pointSkeleton17, i)


                for (j = 0; j < _listSkeletons.keypoints.length; j++) {
                    _pointSkeleton18.push({ x: + _listSkeletons.keypoints[j][0], y: + _listSkeletons.keypoints[j][1] })
                    _scoreList.push(_listSkeletons.keypoints[j][2])
                }
                drawSkeletonPoint(_pointSkeleton18, i)

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
            console.log(_activeLabeling)
            if (_activeLabeling == 1) {
                document.getElementById('original').children[0].style.backgroundColor = '#515151';
            }
            else {
                document.getElementById('oroginal').children[0].style.backgroundColor = '#252526';
            }
            if (_lineDrawWidth == 6) {
                document.getElementById('plusdotsz').children[0].style.backgroundColor = '#515151';
            } else {
                document.getElementById('plusdotsz').children[0].style.backgroundColor = '#252526';
            }

            coordinates = obj;
            console.log(coordinates)
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

