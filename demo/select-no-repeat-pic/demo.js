(function(gloable) {
    // 所以的图片Id
    var picIds = [];
    var PIC_NUM = 30;
    for (var i = 0; i < PIC_NUM; i++) {
        picIds.push(i);
    }

    // 之前选过的图片
    var prevSelectPics = [];

    // for (var i = 0; i < 100; i++) {
    //     getTwoNoRepeatPic();
    // }

    // 取2张与之前不重复的
    function getTwoNoRepeatPic() {
        var i = 0;
        var selectPics = selectPic(2);
        // 如果重复，再选
        while (isRepeat(selectPics) && i < 100) {
            i++;
            selectPics = selectPic(2);
        }
        if(i >= 100){
            alert('图片太少，找不到不重复的！')
        }
        prevSelectPics.push(selectPics.join(','));
        return selectPics;
    }

    // 是否与之前选的有重复
    function isRepeat(arr) {
        var res = false;
        var idStr = arr.join(',');
        var idReverseStr = arr.reverse().join(',');
        if (prevSelectPics.indexOf(idStr) > -1 || prevSelectPics.indexOf(idReverseStr) > -1) {
            res = true;
        }
        return res;
    }


    // 随机取N张图片
    function selectPic(num) {
        var res;
        if (num === 1) {
            res = picIds[Math.floor(Math.random() * PIC_NUM)];
        } else {
            res = [];
            for (var i = 0; i < num; i++) {
                res.push(selectPic(1));
            }
        }
        return res;
    }

    gloable.picTool = {
        getTwoNoRepeatPic: getTwoNoRepeatPic,
        _isRepeat: isRepeat,
        _selectPic: selectPic,
    }


})(this);
