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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.gamebegin = new GameBegin();
        _this.gameplay = new GamePlay();
        // 默认显示开始场景
        _this.addChild(_this.gamebegin);
        return _this;
    }
    SceneManager.Shared = function () {
        if (this.shared == null) {
            this.shared = new SceneManager();
        }
        return this.shared;
    };
    SceneManager.prototype.change = function (scene) {
        this.removeChildren();
        // 点击开始按钮scene是'forward'
        if (scene == 'forward') {
            this.addChild(this.gameplay);
        }
        else if (scene == 'back') {
            this.addChild(this.gamebegin);
        }
    };
    return SceneManager;
}(egret.DisplayObjectContainer));
__reflect(SceneManager.prototype, "SceneManager");
