var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var Main = /** @class */ (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.page1 = new ui.Page1UI();
            return _this;
        }
        Main.prototype.onCreate = function () {
            var _this = this;
            this.addChild(this.page1);
            this.inEase = Laya.Ease.linearIn;
            this.inEaseDuration = 300;
            this.inEaseFromProps = {
                y: this.height
            };
            this.inEaseToProps = {
                y: 0
            };
            this.outEase = Laya.Ease.linearIn;
            this.outEaseDuration = 300;
            this.outEaseFromProps = {
                y: 0
            };
            this.outEaseToProps = {
                y: this.height
            };
            this.page1.btn.on(Laya.Event.CLICK, this, function () {
                _this.navigate("Page2");
            });
            this.page1.btnBack.on(Laya.Event.CLICK, this, function () {
                _this.back();
            });
        };
        Main.prototype.onPause = function () {
        };
        Main.prototype.onResume = function () {
        };
        Main.prototype.onDestroy = function () {
        };
        return Main;
    }(Tape.Activity));
    App.Main = Main;
    var Page2 = /** @class */ (function (_super) {
        __extends(Page2, _super);
        function Page2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.page2 = new ui.Page2UI();
            return _this;
        }
        Page2.prototype.onCreate = function () {
            var _this = this;
            console.log('Page2.onCreate');
            this.addChild(this.page2);
            this.page2.btn.on(Laya.Event.CLICK, this, function () {
                _this.navigate("Main", {}, function () {
                    _this.back();
                });
            });
        };
        Page2.prototype.onPause = function () {
        };
        Page2.prototype.onResume = function () {
        };
        Page2.prototype.onDestroy = function () {
        };
        Page2.prototype.onNextProgress = function (progress) {
        };
        return Page2;
    }(Tape.Activity));
    App.Page2 = Page2;
})(App || (App = {}));