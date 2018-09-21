import platform from "../utils/platform";
import { initScreen } from "./manager/screen";
import { initNavigator } from "./navigator/init";
import { wxPlatform } from "./platform/initialize_wx";
import { fbPlatform } from "./platform/initialize_fb";

export function init(width: number, height: number, ...options) {
    platform.printDebug(`init version:${platform.getVersion()}`);
    if (platform.isWechatApp()) {
        Laya.MiniAdpter.init(true);
    }
    initScreen(false, width, height, ...options);
}

export function init3D(width: number, height: number, ...options) {
    platform.printDebug(`init3D version:${platform.getVersion()}`);
    if (platform.isWechatApp()) {
        Laya.MiniAdpter.init(true);
    }
    initScreen(true, width, height, ...options);
}

export function start(options) {
    let newOptions = {
        mainPage: options.mainPage,
        commonRes: options.commonRes,
        fileVersion: options.fileVersion,
        onLoadProgress: (progress) => {
            if (platform.isFacebookApp()) {
                fbPlatform.setLoadingProgress(progress * 100);
            } else if (platform.isWechatApp()) {
                wxPlatform.setLoadingProgress(progress * 100);
            }
            options.onLoadProgress && options.onLoadProgress(progress);
        },
        onLoaded: () => {
            if (platform.isFacebookApp()) {
                fbPlatform.onLoaded();
            } else if (platform.isWechatApp()) {
                wxPlatform.onLoaded();
            }
            options.onLoaded && options.onLoaded();
        }
    }
    let onStart = () => {
        initNavigator(newOptions);
    }
    if (platform.isFacebookApp()) {
        fbPlatform.start(onStart);
    } else if (platform.isWechatApp()) {
        wxPlatform.start(onStart);
    } else {
        onStart && onStart();
    }
}

export function exit() {
    if (platform.isFacebookApp()) {
        fbPlatform.exit();
    } else if (platform.isWechatApp()) {
        wxPlatform.exit();
    }
}