// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400);
        var routes = {
            "Main": {
                activity: App.Main
            },
            "Page2": {
                activity: App.Page2
            }
        };
        var options = {
            uriProfix: "baidu://elm/",
            res: [
                { url: 'res/atlas/comp.atlas', type: Laya.Loader.ATLAS }
            ]
        };
        Topspeed.initApp(routes, "Page2", options);
    }
    return GameMain;
}());
new GameMain();