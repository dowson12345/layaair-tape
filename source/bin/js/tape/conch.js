// =========================== //
// tape market.js
// =========================== //
var Tape;
(function (Tape) {
    Tape.isConchApp = function () {
        return window.hasOwnProperty('conch');
    };
    /**
     * ConchHandler
     */
    var ConchHandler = /** @class */ (function () {
        function ConchHandler() {
        }
        ConchHandler.exit = function () {
            if (Tape.isConchApp() && window["conch"].hasOwnProperty("exit")) {
                window["conch"].exit();
            }
        };
        /**
         * 初始化
         * @param width 宽度
         * @param height 高度
         * @param options 其他拓展
         */
        ConchHandler.init = function (width, height) {
            var options = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                options[_i - 2] = arguments[_i];
            }
            Laya.init.apply(Laya, [width, height].concat(options));
            Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
            if (Tape.Build.isDebug()) {
                Laya.Stat.show(0, 0);
            }
        };
        return ConchHandler;
    }());
    Tape.ConchHandler = ConchHandler;
})(Tape || (Tape = {}));