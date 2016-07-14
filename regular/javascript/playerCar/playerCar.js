/**
 * Created by cqh on 16/7/14.
 * ------------------------------------------
 * 窗体控件实现文件
 * @version  1.0
 * @author   陈钦辉(hzchenqinhui@corp.netease.com)
 * @path  pro/org/ui/editClass/classAttach
 * ------------------------------------------
 */

NEJ.define(['regular!./playerCar.html'],function(tpl){
    var PlayerCar =  Regular.extend({
        name: 'playerCar',
        template: tpl,
        init: function(){
            window.addEventListener("keydown", this.carHandle.bind(this), false);
            window.addEventListener("devicemotion", function(event) {
            var eventaccelerationIncludingGravity = event.accelerationIncludingGravity;
                if(eventaccelerationIncludingGravity.x < -1){
                    this.data.toRight = false;

                }else if(eventaccelerationIncludingGravity.x > 1){
                    this.data.toRight = true;
                }
                this.$update();

            }.bind(this), false);
        },
        data: {

        },
        carHandle: function(e){
            if (e.keyCode == 39) { //right
                this.data.toRight = true;

            }else if(e.keyCode == 37){ //left
                this.data.toRight = false;

            }
            this.$update();
        }
    });
    return PlayerCar;
});