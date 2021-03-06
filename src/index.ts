import './polyfill'

import bg from "./services/manager/bg";
import screen from "./services/manager/screen";
import audio from './services/audio';
import env from "./utils/env";

import ad from './services/ad';
import app from './services/app';
import rank from './services/rank';
import other from './services/other';

import utils from './services/utils';
import navigator from "./services/navigator/stack";
import popup from "./services/display/popupmanager";
import toast from "./services/display/toastmanager";

import Activity from "./services/display/activity";
import PopupView from "./services/display/popupview";
import ToastView from "./services/display/toastview";

import { init, init3D, start, exit } from './services/init';
import {
    showLoading,
    hideLoading,
    showModal,
    showToast,
    hideToast,
    vibrateLong,
    vibrateShort,
} from './services/comp';

import runtime from "./runtime";

const Tape = {

    init,
    init3D,
    start,
    exit,

    // interactive
    showLoading,
    hideLoading,
    showModal,
    showToast,
    hideToast,
    vibrateShort,
    vibrateLong,

    bg,
    screen,
    audio,
    env,

    ad,
    app,
    rank,
    other,

    utils,

    navigator,
    popup,
    toast,

    Activity,
    PopupView,
    ToastView,
}

if (typeof window !== "undefined") {
    (window as any).Tape = Tape;
    (window as any).TapeRuntime = runtime;
}

export = {
    Tape,
    runtime
};
