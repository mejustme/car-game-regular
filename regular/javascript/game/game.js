/**
 * Created by cqh on 16/7/14.
 * ------------------------------------------
 * 窗体控件实现文件
 * @version  1.0
 * @author   陈钦辉(hzchenqinhui@corp.netease.com)
 * @path  pro/game/game
 * ------------------------------------------
 */

NEJ.define(['regular!./game.html','pro/playerCar/playerCar'],function(tpl){
    var Game =  Regular.extend({
        name: 'game',
        template: tpl,
        data: {}
    });
    return Game;
});