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
var GameBegin = (function (_super) {
    __extends(GameBegin, _super);
    function GameBegin() {
        return _super.call(this) || this;
    }
    GameBegin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBegin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.forward_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
    };
    // 初始化操作
    GameBegin.prototype.init = function () {
        this.begin_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
        this.text.text = 'hello egret';
        // 自定义eui控件
        var Label = new eui.Label();
        Label.text = 'hello world';
        this.group.addChild(Label);
    };
    // 绑定函数
    GameBegin.prototype.tapHandler = function (e) {
        alert('Button click');
    };
    GameBegin.prototype.handler = function () {
        SceneManager.Shared().change('forward');
    };
    return GameBegin;
}(eui.Component));
__reflect(GameBegin.prototype, "GameBegin", ["eui.UIComponent", "egret.DisplayObject"]);
