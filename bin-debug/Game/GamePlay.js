var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GamePlay = (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        return _super.call(this) || this;
    }
    GamePlay.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GamePlay.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
    };
    GamePlay.prototype.handler = function () {
        SceneManager.Shared().change('back');
    };
    return GamePlay;
}(eui.Component));
__reflect(GamePlay.prototype, "GamePlay", ["eui.UIComponent", "egret.DisplayObject"]);
