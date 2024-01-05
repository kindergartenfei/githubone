//-------------------------------------------------------------------------------------------------------
//转动的摩天轮---------------------------------------------------------------------------------------------

motianlun()
function motianlun() {
    var img_3 = document.getElementsByClassName('img_3')[0];
    setTimeout(function () {
        img_3.children[0].setAttribute('src', '../imgs/z18-a.png')
        setTimeout(function () {
            img_3.children[0].setAttribute('src', '../imgs/z18-b.png')
            setTimeout(function () {
                img_3.children[0].setAttribute('src', '../imgs/z18-c.png')
                motianlun()
            }, 200)
        }, 200)
    }, 200)
}

//--------------------------------------------------------------------------------------------------------
//初始小鸽子的入场------------------------------------------------------------------------------------------
ruchang()
function ruchang() {
    var z01 = document.getElementsByClassName('qw2_road_1')[0];
    var gz = document.getElementsByClassName('gz')[0];
    var z01_bottom = -1;
    var gz_bottom = -1;
    var dh = setInterval(function () {
        z01_bottom += 0.01;
        gz_bottom += 0.01;
        z01.style.bottom = z01_bottom + 'rem';
        gz.style.bottom = gz_bottom + 'rem';
        if (z01_bottom >= 0) {
            clearInterval(dh);
        }
    }, 10)
}

//------------------------------------------------------------------------------------------------------
//云朵的渐变入场-----------------------------------------------------------------------------------------
yunduo()
function yunduo() {
    var qw2_yun_1 = document.getElementsByClassName('qw2_yun_1')[0];
    var qw2_yun_2 = document.getElementsByClassName('qw2_yun_2')[0];
    var qw2_yun_3 = document.getElementsByClassName('qw2_yun_3')[0];
    var qw2_shan = document.getElementsByClassName('qw2_shan')[0];
    var qw2_top_ = document.getElementsByClassName('qw2_top_')[0];

    var opacity = 0;
    var mmm = setInterval(function () {
        opacity += 0.03;
        qw2_yun_1.style.opacity = opacity;
        qw2_yun_2.style.opacity = opacity;
        qw2_yun_3.style.opacity = opacity;
        qw2_shan.style.opacity = opacity;
        qw2_top_.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(mmm);
        }
    }, 50)
    //箭头入场
    setTimeout(function () {
        var qw2_text = document.getElementsByClassName('qw2_text')[0];
        var z = 0;
        console.log(111111111111);
        var x = setInterval(function () {
            z += 0.03;
            qw2_text.style.opacity = z;

            if (z >= 1) {
                clearInterval(x);
            }
        }, 50)
    }, 1666)
}







//-------------------------------------------------------------------------------------------------------
//初始界面箭头的跳动---------------------------------------------------------------------------------------
var jiantou = document.getElementsByClassName('jiantou');
var jiantou0 = document.getElementsByClassName('jiantou')[0];
var jiantou1 = document.getElementsByClassName('jiantou')[1];
var jiantou2 = document.getElementsByClassName('jiantou')[2];
var jiantou3 = document.getElementsByClassName('jiantou')[3];
tiaodong()
for (var j = 0; j < jiantou.length; j++) {
    jiantou[j].style.display = 'none'
}
jiantou3.style.display = 'block';
function tiaodong() {

    setTimeout(function () {
        for (var j = 0; j < jiantou.length; j++) {
            jiantou[j].style.display = 'none'
        }
        jiantou3.style.display = 'block';
        setTimeout(function () {
            for (var j = 0; j < jiantou.length; j++) {
                jiantou[j].style.display = 'none'
            }
            jiantou2.style.display = 'block';
            jiantou3.style.display = 'block';
            jiantou3.style.opacity = '0.4';
            jiantou0.style.opacity = '1';
            jiantou1.style.opacity = '1';
            setTimeout(function () {
                for (var j = 0; j < jiantou.length; j++) {
                    jiantou[j].style.display = 'none'
                }
                jiantou1.style.display = 'block';
                jiantou2.style.display = 'block';
                jiantou2.style.opacity = '0.4';
                jiantou0.style.opacity = '1';
                jiantou3.style.opacity = '1';
                setTimeout(function () {
                    for (var j = 0; j < jiantou.length; j++) {
                        jiantou[j].style.display = 'none'
                    }
                    jiantou0.style.display = 'block';
                    jiantou1.style.display = 'block';
                    jiantou1.style.opacity = '0.4';
                    jiantou2.style.opacity = '1';
                    jiantou3.style.opacity = '1';
                    tiaodong()
                }, 500)
            }, 500)
        }, 500)
    }, 500)
}








//第一段文字
var textone = document.getElementsByClassName('qw2_top_')[0];
//第一段文字
var texttwo = document.getElementsByClassName('texttwo')[0];
//第一段文字
var textthree = document.getElementsByClassName('textthree')[0];
//第四段文字
var textfour = document.getElementsByClassName('textfour')[0];
//第五段文字
var textfive = document.getElementsByClassName('textfive')[0];
//鸽子
var gz = document.getElementsByClassName('gz')[0];
//鸽子img
var gzimg = document.getElementsByClassName('gzimg')[0];

var qw1 = document.getElementsByClassName('qw1')[0];

var qw2 = document.getElementsByClassName('qw2')[0];

var pigeon = document.getElementsByClassName('pigeon')[0];

var road_21 = document.getElementsByClassName('road_21')[0];

var flying = document.getElementsByClassName('flying')[0];
//升天后的布局
var qw3 = document.getElementsByClassName('qw3')[0];
//鸽子运动的音频
var gz_motion = document.getElementsByClassName('gz_motion')[0];
//楼梯升起的音效
var lt_rise = document.getElementsByClassName('lt_rise')[0];
//鸽子升天的音效
var lt_ascension = document.getElementsByClassName('lt_ascension')[0];
//鸽子升天后的背景音乐
var background = document.getElementsByClassName('background')[0];
//第一个停泊迪点
var road_7 = document.getElementsByClassName('road_7')[0];
//第二个停泊迪点
var road_12 = document.getElementsByClassName('road_12')[0];
//第三个停泊迪点
var road_17 = document.getElementsByClassName('road_17')[0];
//三个星球
var star_1 = document.getElementsByClassName('star_1')[0];
var star_2 = document.getElementsByClassName('star_2')[0];
var star_3 = document.getElementsByClassName('star_3')[0];


star_1.classList.add('star_beat');
star_2.classList.add('star_beat');
star_3.classList.add('star_beat');


//------------------------------------------------------------------------------------------------------
//第一段楼梯的入场效果------------------------------------------------------------------------------------
function luotione() {
    setTimeout(function () {
        lt_rise.play();
    }, 1200)
    var road_1 = document.getElementsByClassName('road_1')[0];
    var road_2 = document.getElementsByClassName('road_2')[0];
    var road_3 = document.getElementsByClassName('road_3')[0];
    var road_4 = document.getElementsByClassName('road_4')[0];
    var road_5 = document.getElementsByClassName('road_5')[0];
    var road_6 = document.getElementsByClassName('road_6')[0];
    var road_7 = document.getElementsByClassName('road_7')[0];

    zzzz(road_1, 100);
    zzzz(road_2, 300);
    zzzz(road_3, 500);
    zzzz(road_4, 700);
    zzzz(road_5, 900);
    zzzz(road_6, 1100);
    zzzz(road_7, 1300);


    function zzzz(x, y) {
        setTimeout(function () {
            x.style.display = 'block';
            x.classList.add('luotiydon');
        }, y)
    }
}
//第二段楼梯升起
function luotitwo() {
    setTimeout(function () {
        lt_rise.play();
    }, 1200)
    var road_8 = document.getElementsByClassName('road_8')[0];
    var road_9 = document.getElementsByClassName('road_9')[0];
    var road_10 = document.getElementsByClassName('road_10')[0];
    var road_11 = document.getElementsByClassName('road_11')[0];
    var road_12 = document.getElementsByClassName('road_12')[0];
    zzzz(road_8, 100);
    zzzz(road_9, 300);
    zzzz(road_10, 500);
    zzzz(road_11, 700);
    zzzz(road_12, 900);

    function zzzz(x, y) {
        setTimeout(function () {
            x.style.display = 'block';
            x.classList.add('luotiydon');
        }, y)
    }
}
//第三段楼梯升起
function luotithree() {
    setTimeout(function () {
        lt_rise.play();
    }, 1200)
    var road_13 = document.getElementsByClassName('road_13')[0];
    var road_14 = document.getElementsByClassName('road_14')[0];
    var road_15 = document.getElementsByClassName('road_15')[0];
    var road_16 = document.getElementsByClassName('road_16')[0];
    var road_17 = document.getElementsByClassName('road_17')[0];
    zzzz(road_13, 100);
    zzzz(road_14, 300);
    zzzz(road_15, 500);
    zzzz(road_16, 700);
    zzzz(road_17, 900);
    function zzzz(x, y) {
        setTimeout(function () {
            x.style.display = 'block';
            x.classList.add('luotiydon');
        }, y)
    }
}
//第四段楼梯升起
function luotifour() {
    setTimeout(function () {
        lt_rise.play();
    }, 1200)
    var road_18 = document.getElementsByClassName('road_18')[0];
    var road_19 = document.getElementsByClassName('road_19')[0];
    var road_20 = document.getElementsByClassName('road_20')[0];
    var road_21 = document.getElementsByClassName('road_21')[0];
    zzzz(road_18, 300);
    zzzz(road_19, 500);
    zzzz(road_20, 700);
    zzzz(road_21, 900);
    function zzzz(x, y) {
        setTimeout(function () {
            x.style.display = 'block';
            x.classList.add('luotiydon');
        }, y)
    }
}



//-------------------------------------------------------------------------------------------------------
//滑动跳转------------------------------------------------------------------------------------------------
huadong()
function huadong() {
    var qw2 = document.getElementsByClassName('qw2')[0];
    var mmm = 1;
    if (mmm == 1) {
        setTimeout(function () {
            qw2.ontouchend = function () {
                var qw1 = document.getElementsByClassName('qw1')[0];
                var qw2 = document.getElementsByClassName('qw2')[0];
                qw1.style.display = 'block';
                qw2.style.display = 'none';
                var img_1 = document.getElementsByClassName('img_1')[0];
                var img_2 = document.getElementsByClassName('img_2')[0];
                var img_3 = document.getElementsByClassName('img_3')[0];
                var img_4 = document.getElementsByClassName('road_22')[0];
                var img_1_top = 5.81;
                var img_2_top = 5.75;
                var img_3_top = 8.36;
                var img_4_top = 10.85;

                //------------------------------------------------------------------------------------------
                //三个大楼升起-------------------------------------------------------------------------------
                var xxx = setInterval(function () {
                    img_1_top -= 0.01;
                    img_2_top -= 0.01;
                    img_3_top -= 0.01;
                    img_4_top -= 0.01;
                    img_1.style.top = img_1_top + 'rem';
                    img_2.style.top = img_2_top + 'rem';
                    img_3.style.top = img_3_top + 'rem';
                    img_4.style.top = img_4_top + 'rem';
                    if (img_1_top <= 3.81) {
                        clearInterval(xxx);
                        //-------------------------------------------------------------------------------------
                        //大楼升起完成后-
                        //开始进行阶梯慢慢升起
                        luotione();
                        //创建 引导点击的圆圈------------------------------------------------------------------
                        setTimeout(function () {
                            var qw1 = document.getElementsByClassName('qw1')[0];
                            var dianji = document.createElement('div');
                            dianji.classList.add('scale1');
                            qw1.appendChild(dianji);
                        }, 5000)
                        //创建 语音气泡-----------------------------------------------------------------------
                        setTimeout(function () {
                            var qw1 = document.getElementsByClassName('qw1')[0];
                            var qipao = document.createElement('div');
                            qipao.innerText = '我是20年网龄的信粉';
                            qipao.className = 'qipao'
                            qw1.appendChild(qipao);
                            var a = document.getElementsByClassName('qw2_top_')[0];
                            var b = document.getElementsByClassName('texttwo')[0];
                            a.style.display = 'none'
                            b.style.display = 'block'
                        }, 5000)
                        //小鸡进行第一段路的过程
                        xiaojiyundongone();
                    }
                }, 1)

            }
        }, 3332)

    }
}



//---------------------------------------------------------------------------------------------------------
//鸽子运动的效果--------------------------------------------------------------------------------------------
function xiaojiyundongone() {
    setTimeout(function () {
        var gq = document.getElementsByClassName('scale1')[0];
        var qipao = document.getElementsByClassName('qipao')[0]
        gq.addEventListener('click', function () {
            gq.remove();
            qipao.remove();
            gz.classList.add('gzone');
            gz_motion.play();//播放走路的音效
            gz.style.bottom = '4rem';
            gz.style.left = '1.54rem';
            var sqi = 0;
            var num = 0;
            var gzimg = document.getElementsByClassName('gzimg')[0];
            var aaa = setInterval(function () {
                num++;
                sqi += 200;
                if (num > 5) {
                    num = 1;
                }
                gzimg.setAttribute('src', `../imgs/gzz/gz${num}.png`)
                if (sqi >= 2800) {
                    clearInterval(aaa)
                    //向右转
                    qww()
                    function qww() {
                        var num = 0;
                        var sqi = 3000;
                        var aaa = setInterval(function () {
                            num++;
                            sqi += 200;
                            if (num > 5) {
                                num = 1;
                            }
                            gzimg.setAttribute('src', `../imgs/gzy/gz${num}.png`)
                            if (sqi >= 4500) {
                                clearInterval(aaa)

                                //向左转
                                qww()
                                function qww() {
                                    var num = 0;
                                    var sqi = 4500;
                                    var aaa = setInterval(function () {
                                        num++;
                                        sqi += 200;
                                        if (num > 5) {
                                            num = 1;
                                        }
                                        gzimg.setAttribute('src', `../imgs/gzz/gz${num}.png`)
                                        if (sqi >= 7900) {
                                            clearInterval(aaa)

                                            //向右转
                                            qww()
                                            function qww() {
                                                var sqi = 7900;
                                                var num = 0;
                                                var aaa = setInterval(function () {
                                                    num++;
                                                    sqi += 200;
                                                    if (num > 5) {
                                                        num = 1;
                                                    }
                                                    gzimg.setAttribute('src', `../imgs/gzy/gz${num}.png`)
                                                    if (sqi >= 10000) {
                                                        gz_motion.pause()//关闭音频
                                                        clearInterval(aaa);
                                                        //第一座电话楼升起---------------------------------------------------------------------------------------------------
                                                        var dianhualou = document.getElementsByClassName('three_img2')[0];
                                                        dianhualou.style.display = 'block';
                                                        dianhualou.classList.add('dalou')
                                                        texttwo.style.display = 'none';
                                                        textthree.style.display = 'block';

                                                        //第二段楼梯的升起
                                                        luotitwo()
                                                        //创建 引导点击的圆圈------------------------------------------------------------------
                                                        setTimeout(function () {
                                                            var qw1 = document.getElementsByClassName('qw1')[0];
                                                            var dianji = document.createElement('div');
                                                            dianji.classList.add('scale2');
                                                            qw1.appendChild(dianji);
                                                            //点击进行第二段走动
                                                            var gq = document.getElementsByClassName('scale2')[0];
                                                            gq.addEventListener('click', yigongtwo)
                                                        }, 5000)
                                                    }
                                                }, 200)
                                            }
                                        }
                                    }, 200)
                                }
                            }
                        }, 200)
                    }
                }
            }, 200)
        })
    }, 5000)
}

//鸽子的第二段移动
function yigongtwo() {
    var gq = document.getElementsByClassName('scale2')[0];
    gq.remove()
    var gzimg = document.getElementsByClassName('gzimg')[0];
    gzimg.setAttribute('src', `../imgs/gzz/gz1.png`)
    gz.classList.add('gztwo');
    gz_motion.play();//播放走路的音效
    gz.style.bottom = '6rem';
    gz.style.left = '4rem';
    qww();
    function qww() {
        var num = 0;
        var sqi = 0;
        var ppp = setInterval(function () {
            sqi += 200
            num++;
            gzimg.setAttribute('src', `../imgs/gzz/gz${num}.png`)
            if (num == 5) {
                num = 0;
            }
            if (sqi >= 800) {
                clearInterval(ppp)
                qww();
                function qww() {
                    var num = 0;
                    var sqi = 1000;
                    var ppp = setInterval(function () {
                        sqi += 200
                        num++;
                        gzimg.setAttribute('src', `../imgs/gzy/gz${num}.png`)
                        if (num == 5) {
                            num = 0;
                        }
                        if (sqi >= 5000) {
                            gz_motion.pause()//关闭音频

                            clearInterval(ppp);


                            //第二个wifi楼升起
                            var wifi = document.getElementsByClassName('three_img1')[0];
                            wifi.style.display = 'block';
                            wifi.classList.add('dalou')
                            luotithree()
                            textthree.style.display = 'none';
                            textfour.style.display = 'block';
                            //创建引导光圈
                            setTimeout(function () {
                                var qw1 = document.getElementsByClassName('qw1')[0];
                                var dianji = document.createElement('div');
                                dianji.classList.add('scale3');
                                qw1.appendChild(dianji);


                                //回点
                                road_7.onclick = function () {
                                    if (road_7.getAttribute('kg') == 1) {
                                        console.log(324234342);
                                        gz.style.bottom = '4rem';
                                        gz.style.left = '1.54rem';
                                        textthree.style.display = 'block';
                                        textfour.style.display = 'none';
                                    }
                                }
                                road_12.onclick = function () {
                                    if (road_12.getAttribute('kg') == 1) {
                                        console.log(324234342);
                                        gz.style.bottom = '6rem';
                                        gz.style.left = '4rem';
                                        textthree.style.display = 'none';
                                        textfour.style.display = 'block';
                                    }
                                }

                                dianji.addEventListener('click', function () {
                                    road_7.setAttribute('kg', '0')
                                    road_12.setAttribute('kg', '0')
                                    // textthree.style.display = 'none';
                                    gz.classList.add('gzthree');
                                    gz_motion.play();//播放走路的音效
                                    gz.style.bottom = '3.5rem';
                                    gz.style.left = '5.5rem';
                                    yigongthree();
                                })
                            }, 5000)
                        }
                    }, 200)
                }
            }
        }, 200)
    }
}

//鸽子的第三段移动
function yigongthree() {
    var gq = document.getElementsByClassName('scale3')[0];
    gq.remove();
    gzimg.setAttribute('src', `../imgs/gzq/gz1.png`)
    qww();
    function qww() {
        var num = 0;
        var sqi = 0;
        var ppp = setInterval(function () {
            sqi += 200
            num++;
            gzimg.setAttribute('src', `../imgs/gzq/gz${num}.png`)
            if (num == 5) {
                num = 0;
            }
            if (sqi >= 1333) {
                clearInterval(ppp)
                qww();
                function qww() {
                    var num = 0;
                    var sqi = 1333;
                    var ppp = setInterval(function () {
                        sqi += 200
                        num++;
                        gzimg.setAttribute('src', `../imgs/gzh/gz${num}.png`)
                        if (num == 5) {
                            num = 0;
                        }
                        if (sqi >= 2666) {
                            clearInterval(ppp)
                            qww();
                            function qww() {
                                var num = 0;
                                var sqi = 2666;
                                var ppp = setInterval(function () {
                                    sqi += 200
                                    num++;
                                    gzimg.setAttribute('src', `../imgs/gzq/gz${num}.png`)
                                    if (num == 5) {
                                        num = 0;
                                    }
                                    if (sqi >= 5000) {
                                        gz_motion.pause()//关闭音效
                                        clearInterval(ppp)

                                        textfour.style.display = 'block';





                                        //第二个金币楼升起
                                        var species = document.getElementsByClassName('three_img3')[0];
                                        species.style.display = 'block';
                                        species.classList.add('dalou')
                                        textthree.style.display = 'none';
                                        textfour.style.display = 'none';
                                        textfive.style.display = 'block';
                                        //第四段楼梯升起
                                        luotifour()
                                        //创建 引导点击的圆圈------------------------------------------------------------------
                                        setTimeout(function () {
                                            var qw1 = document.getElementsByClassName('qw1')[0];
                                            var dianji = document.createElement('div');
                                            dianji.classList.add('scale4');
                                            qw1.appendChild(dianji);
                                            console.log('-------------------------');



                                            //回点
                                            road_7.setAttribute('kg', '1');
                                            road_12.setAttribute('kg', '1');
                                            road_7.onclick = function () {
                                                if (road_7.getAttribute('kg') == 1) {
                                                    console.log(324234342);
                                                    gz.style.bottom = '4rem';
                                                    gz.style.left = '1.54rem';
                                                    textthree.style.display = 'block';
                                                    textfour.style.display = 'none';
                                                    textfive.style.display = 'none';

                                                }
                                            }
                                            road_12.onclick = function () {
                                                if (road_12.getAttribute('kg') == 1) {
                                                    console.log(324234342);
                                                    gz.style.bottom = '6rem';
                                                    gz.style.left = '4rem';
                                                    textthree.style.display = 'none';
                                                    textfour.style.display = 'block';
                                                    textfive.style.display = 'none';
                                                }
                                            }
                                            road_17.onclick = function () {
                                                if (road_17.getAttribute('kg') == 1) {
                                                    console.log(324234342);
                                                    gz.style.bottom = '3.5rem';
                                                    gz.style.left = '5.5rem';
                                                    textthree.style.display = 'none';
                                                    textfour.style.display = 'none';
                                                    textfive.style.display = 'block';
                                                }
                                            }

                                            //点击进行第三段走动
                                            var gq = document.getElementsByClassName('scale4')[0];
                                            gq.addEventListener('click', function () {
                                                gq.remove();
                                                road_7.setAttribute('kg', '0');
                                                road_12.setAttribute('kg', '0');
                                                road_17.setAttribute('kg', '0');
                                                gz.style.bottom = '3rem';
                                                gz.style.left = '3.3rem';
                                                gzfour();
                                            })
                                        }, 5000)
                                    }
                                }, 200)
                            }
                        }
                    }, 200)
                }
            }
        }, 200)
    }
}

//小鸡第四段路程
function gzfour() {
    gz.classList.add('gzfour');
    gz_motion.play();//走路的音效
    gzimg.setAttribute('src', '../imgs/gzh/gz1.png')
    qww();
    function qww() {
        var num = 0;
        var sqi = 0;
        var ppp = setInterval(function () {
            sqi += 200
            num++;
            gzimg.setAttribute('src', `../imgs/gzh/gz${num}.png`)
            if (num == 5) {
                num = 0;
            }
            if (sqi >= 4000) {
                clearInterval(ppp)
                qww();
                function qww() {
                    var num = 0;
                    var sqi = 4000;
                    var ppp = setInterval(function () {
                        sqi += 200
                        num++;
                        gzimg.setAttribute('src', `../imgs/gzz/gz${num}.png`)
                        if (num == 5) {
                            num = 0;
                        }
                        if (sqi >= 5000) {
                            clearInterval(ppp)
                            gz_motion.pause()//关闭音效
                            console.log('走完了');
                            //小鸽子升天
                            ascension()

                        }
                    }, 200)
                }
            }
        }, 200)
    }
}

function ascension() {
    gzimg.setAttribute('src', '../imgs/gzh/gz1.png')
    qw1.classList.add('ascension');//建筑物下降
    textfive.style.display = 'none';//文字隐藏
    textfour.style.display = 'none';//文字隐藏
    textthree.style.display = 'none';//文字隐藏
    road_21.style.display = 'none';//原来的柱子隐藏
    flying.style.display = 'block';//柱子显示
    flying.classList.add('dfg');//柱子飞天
    flying.style.bottom = '-0.65rem';
    gz.classList.add('qq');//鸽子飞天
    gz.style.bottom = '4.16rem';
    pigeon.classList.add('dff');//背景升高
    qw1.style.bottom = '-10rem';
    pigeon.style.backgroundPosition = 'top';
    //中间的星球
    star_1.classList.add('star_center');
    //左边的星球
    star_3.classList.add('star_right');
    //右边的星球
    star_2.classList.add('star_left');

    setTimeout(function () {
        qw3.style.display = 'block';
    }, 2000)
    qw3.classList.add('flay');
    qw2.style.display = 'none';
    lt_ascension.play();
    setTimeout(function () {
        lt_ascension.pause();
        background.play();
    }, 5000)

}




