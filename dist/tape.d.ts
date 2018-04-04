declare module Tape {

    function initApp(routes, initName, options?: Object): void;

    ///////////////////////////////////////////////
    ////// Component
    ///////////////////////////////////////////////

    class Activity {

        static ROUTE(options?: Object): Object;

        public readonly props: Object;
        public readonly params: Object;
        public readonly routeName: String;
        gray: boolean;
        disabled: boolean;
        tag: any;
        top: number;
        bottom: number;
        left: number;
        right: number;
        centerX: number;
        centerY: number;
        anchorX: number;
        anchorY: number;
        scaleX: number;
        scaleY: number;
        height: number;
        readonly displayHeight: number;
        width: number;
        readonly displayWidth: number;
        layoutEnabled: boolean;

        constructor(props?: Object);

        protected addChild(clild: any);

        ///////////////////////
        /// LifeCycle
        ///////////////////////

        protected onCreate();

        protected onResume();

        protected onPause();

        protected onDestroy();

        protected onNextProgress(progress: number);

        ///////////////////////
        /// Music
        ///////////////////////

        protected playMusic(url: string, loops?: number, complete?: Function): number;

        protected stopMusic(chancelId?: number);

        ///////////////////////
        /// Navigator
        ///////////////////////

        protected navigate(name, params?, action?: Function): Boolean;

        protected deeplink(url, action?: Function): Boolean;

        protected finish(name?: String);

        protected pop(n?: number);

        protected popToTop();

        ///////////////////////
        /// Logger
        ///////////////////////

        protected log(message?: any, ...optionalParams: any[]): void;

        protected error(message?: any, ...optionalParams: any[]): void;

        protected info(message?: any, ...optionalParams: any[]): void;

        protected warn(message?: any, ...optionalParams: any[]): void;

        protected debug(message?: any, ...optionalParams: any[]): void;

    }

    ///////////////////////////////////////////////
    ////// Utils
    ///////////////////////////////////////////////

    class Logger {

        static log(message?: any, ...optionalParams: any[]): void;

        static error(message?: any, ...optionalParams: any[]): void;

        static info(message?: any, ...optionalParams: any[]): void;

        static warn(message?: any, ...optionalParams: any[]): void;

        static debug(message?: any, ...optionalParams: any[]): void;

    }

    class Toast {
        static show(type: string, view, duration?: number, widthRatio?: number, heightRatio?: number): void
    }

    ///////////////////////////////////////////////
    ////// Socket
    ///////////////////////////////////////////////

    class WebSocket {
        onConnecting: Function;
        onConnected: Function;
        onClosed: Function;
        onError: Function;
        onMessageReveived: Function;

        connect(socketUrl: String): void;
        disconnect(): void;
        isConnected(): Boolean;
        isConnecting(): Boolean;
        publishMessage(message: any): void;
    }

    class MQTTSocket {
        onConnecting: Function;
        onConnected: Function;
        onClosed: Function;
        onError: Function;
        onMessageReveived: Function;
        onMessageDelivered: Function;

        connect(host: string, port: number, clientId: string, username: string, password: string, options?: Object): void;
        disconnect(): void;
        isConnected(): Boolean;
        isConnecting(): Boolean;
        publishMessage(topic: string, message: any, qos?: number, retained?: boolean): void;
    }

}