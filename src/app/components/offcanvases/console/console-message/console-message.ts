export interface ConsoleMessage {
    color: "danger"|"warning"|"info"|"success";
    timestamp?: Date|number|string;
    message: string;
}
