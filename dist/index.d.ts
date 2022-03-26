interface ArgsProps {
    content: string;
    duration?: number | null;
    key?: string | number;
}
declare type JointContent = ConfigContent | ArgsProps;
declare type ConfigContent = string;
declare type ConfigDuration = number | (() => number);
interface MessageInstance {
    info(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>;
    success(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>;
    error(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>;
    warning(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>;
    loading(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>;
}
declare type MessageReturnType = {
    destory(): boolean;
};
export declare const message: MessageInstance;
export {};
