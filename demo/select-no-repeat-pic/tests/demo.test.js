chai.Should();
// http://chaijs.com/api/bdd/
describe('取2张与之前不重复的', function() {
    it('取100次，应该每次都不同', function() {
        var res = [];
        for(var i = 0; i < 100; i++){
            (function(){
                var getSelectPics = picTool.getTwoNoRepeatPic();
                getSelectPics.sort(function(a, b){
                    return a < b;
                });
                res.push(getSelectPics.join(','));
            })();
        }
        res = _.uniq(res);// 去重
        // console.log(res);
        res.length.should.equal(100);
    });
});
