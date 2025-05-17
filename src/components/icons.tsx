import { IconDefinition, IconSvgProps } from "@/types";

export const allIcons: Record<string, IconDefinition> = {
  command:
    "M2.5 6.5a4 4 0 1 1 8 0v1h3v-1a4 4 0 1 1 4 4h-1v3h1a4 4 0 1 1-4 4v-1h-3v1a4 4 0 1 1-4-4h1v-3h-1a4 4 0 0 1-4-4m5 1v-1a1 1 0 1 0-1 1zm3 3v3h3v-3zm-3 6h-1a1 1 0 1 0 1 1zm9 0v1a1 1 0 1 0 1-1zm0-9h1a1 1 0 1 0-1-1z",
  default:
    "M18.296 3.045a1 1 0 0 1 .687.77l1.341 7.155c.13.687.171 1.367.136 2.03H21a1 1 0 1 1 0 2h-.894a8.6 8.6 0 0 1-.551 1.363l1.07.856a1 1 0 1 1-1.25 1.562l-.936-.749A8.43 8.43 0 0 1 12 21a8.43 8.43 0 0 1-6.44-2.968l-.935.749a1 1 0 1 1-1.25-1.562l1.07-.856A8.4 8.4 0 0 1 3.895 15H3a1 1 0 1 1 0-2h.54a8.5 8.5 0 0 1 .136-2.03l1.341-7.154a1 1 0 0 1 1.69-.523l2.414 2.414A1 1 0 0 0 9.828 6h4.344a1 1 0 0 0 .707-.293l2.414-2.414a1 1 0 0 1 1.003-.248m-5.743 11.56l-.553.277l-.553-.276a1 1 0 1 0-.894 1.788l.553.277a2 2 0 0 0 1.788 0l.553-.277a1 1 0 1 0-.894-1.788ZM9.5 10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3",
  github:
    "M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z",
  ai: "M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2",
  ai_quill_pen: "M20.262 2.434a1 1 0 0 1 .944.454c.991 1.49.747 3.71-.467 5.007a1 1 0 0 1-.03.37a16 16 0 0 1-.75 2.135c-.551 1.263-1.328 2.54-2.423 3.636c-2.05 2.05-4.742 2.991-6.844 3.43a19 19 0 0 1-1.491.25l-.52.06l-.466.041q-.219.016-.406.027l-.101.83l-.064.593l-.027.29L7.5 21c-.047.54-.448 1-1 1a1 1 0 0 1-1-1c0-.156.009-.35.023-.57l.037-.467l.048-.505l.085-.77l.028-.248c.205-1.732.446-3.427.987-5.09c.625-1.92 1.75-4.379 3.756-6.386c1.574-1.573 3.433-2.61 5.107-3.29l.452-.176l.44-.16q.108-.038.215-.073l.42-.136l.402-.12l.568-.155l.519-.126l.315-.069l.546-.105l.577-.091zM5 1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 5 1",
  ai_refresh: "M3 9.5A1.5 1.5 0 0 1 4.5 11a5.5 5.5 0 0 0 5.279 5.496L10 16.5h2.382a1.5 1.5 0 0 1 2.065-2.164l.114.103l2.525 2.526a1.495 1.495 0 0 1 .07 1.99l-.097.108l-2.498 2.498a1.5 1.5 0 0 1-2.272-1.947l.093-.114H10A8.5 8.5 0 0 1 1.5 11A1.5 1.5 0 0 1 3 9.5M19 7a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 7M7.44 2.44a1.5 1.5 0 0 1 2.27 1.946l-.092.114H12a8.46 8.46 0 0 1 4.787 1.475a3 3 0 0 0-.551.86l-.075.196l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-.244.096a5.5 5.5 0 0 0-2.483-.749L12 7.5H9.618a1.5 1.5 0 0 1-2.065 2.164L7.44 9.56l-2.5-2.5a1.5 1.5 0 0 1-.103-2.008l.103-.114z",
  ai_translate: "M9 2.5A1.5 1.5 0 0 1 10.5 4v.5h2a1.5 1.5 0 0 1 .928 2.678c-.237 1.942-1.053 3.802-2.329 5.442q.557.446 1.197.846l1.836-4.082a1.5 1.5 0 0 1 2.736 0l4.5 10a1.5 1.5 0 0 1-2.736 1.232L17.68 18.5h-4.36l-.952 2.116a1.5 1.5 0 0 1-2.736-1.232l1.423-3.162a16 16 0 0 1-2.057-1.445a16.6 16.6 0 0 1-4.441 2.616a1.5 1.5 0 1 1-1.114-2.786a13.6 13.6 0 0 0 3.459-1.986a12.2 12.2 0 0 1-1.512-2.515a1.5 1.5 0 1 1 2.745-1.212A9 9 0 0 0 9 10.414c.656-.935 1.101-1.925 1.327-2.914H4a1.5 1.5 0 1 1 0-3h3.5V4A1.5 1.5 0 0 1 9 2.5m6.5 11.155l-.83 1.845h1.66zM19 1a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.87-1.87l-.377-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 19 1",
  ai_content: "M2.5 5A1.5 1.5 0 0 1 4 3.5h16a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 5M4 10.5a1.5 1.5 0 0 0 0 3h6a1.5 1.5 0 0 0 0-3zM2.5 19A1.5 1.5 0 0 1 4 17.5h1a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 19m10 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.5-1.5M9 17.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 0 0-3zm8.5 1.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.5-1.5m.446-10.323a1 1 0 0 0-1.892 0l-.13.378a3 3 0 0 1-1.869 1.87l-.378.129a1 1 0 0 0 0 1.892l.378.13a3 3 0 0 1 1.87 1.869l.129.378a1 1 0 0 0 1.892 0l.13-.378a3 3 0 0 1 1.869-1.87l.378-.129a1 1 0 0 0 0-1.892l-.378-.13a3 3 0 0 1-1.87-1.869z",
  angel_emoji: "M12 2c2.536 0 4.862.228 6.58.61c.852.189 1.61.428 2.178.726c.283.15.569.338.795.584c.23.25.447.616.447 1.08s-.216.83-.447 1.08a2.9 2.9 0 0 1-.795.584a5 5 0 0 1-.23.112A9.95 9.95 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-1.915.538-3.703 1.471-5.224a5 5 0 0 1-.229-.112a2.9 2.9 0 0 1-.795-.584C2.217 5.83 2 5.464 2 5s.216-.83.447-1.08c.226-.246.512-.435.795-.584c.569-.298 1.326-.537 2.177-.726C7.138 2.228 9.464 2 12 2m1.984 13.25c-.53.468-1.223.75-1.984.75a3 3 0 0 1-1.984-.75a1 1 0 1 0-1.324 1.5A5 5 0 0 0 12 18a5 5 0 0 0 3.308-1.25a1 1 0 0 0-1.324-1.5M8.5 10c-1.087 0-1.958.68-2.394 1.552a1 1 0 0 0 1.73.997l.058-.101c.162-.324.41-.448.606-.448c.17 0 .382.095.541.336l.065.112a1 1 0 1 0 1.788-.896C10.457 10.681 9.587 10 8.5 10m7 0c-1.087 0-1.957.68-2.394 1.552a1 1 0 0 0 1.73.997l.058-.101c.162-.324.41-.448.606-.448c.17 0 .382.095.541.336l.065.112a1 1 0 1 0 1.788-.896C17.458 10.681 16.587 10 15.5 10M12 4c-2.435 0-4.609.22-6.147.562l-.432.102l-.233.064l-.188.06c-.416.149-.416.275 0 .423l.188.061l.233.064l.432.102C7.391 5.78 9.565 6 12 6s4.609-.22 6.147-.562l.432-.102l.233-.064l.188-.06c.416-.149.416-.275 0-.423l-.188-.061l-.233-.064l-.432-.102C16.609 4.22 14.435 4 12 4",
  send: "M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z",
  bold: "M13 2.5a5.5 5.5 0 0 1 4.213 9.036a5.5 5.5 0 0 1-2.992 9.96L14 21.5H6.1a1.6 1.6 0 0 1-1.593-1.454L4.5 19.9V4.1a1.6 1.6 0 0 1 1.454-1.593L6.1 2.5zm1 11H7.5v5H14a2.5 2.5 0 0 0 0-5m-1-8H7.5v5H13a2.5 2.5 0 0 0 0-5",
  underline:
    "M18 18.5a1.5 1.5 0 0 1 .144 2.993L18 21.5H6a1.5 1.5 0 0 1-.144-2.993L6 18.5zm-1-16a1.5 1.5 0 0 1 1.493 1.356L18.5 4v7a6.5 6.5 0 0 1-12.996.233L5.5 11V4a1.5 1.5 0 0 1 2.993-.144L8.5 4v7a3.5 3.5 0 0 0 6.995.192L15.5 11V4A1.5 1.5 0 0 1 17 2.5",
  strike:
    "M19 11.5a1.5 1.5 0 0 1 .144 2.993L19 14.5h-1.272q.086.198.155.405c1.06 3.18-1.238 6.461-4.55 6.591l-.203.004h-1.702a6.24 6.24 0 0 1-5.462-3.224l-.117-.224l-.178-.355a1.5 1.5 0 0 1-.157-.902a1.499 1.499 0 0 1 2.725-.64l.062.098l.231.458a3.24 3.24 0 0 0 2.692 1.783l.204.006h1.701a2.01 2.01 0 0 0 1.054-3.723l-.154-.086l-.383-.191H5a1.5 1.5 0 0 1-.144-2.993L5 11.5zm-6.428-9a6.24 6.24 0 0 1 5.462 3.224l.117.224l.176.352a1.501 1.501 0 0 1-2.582 1.522l-.053-.087l-.224-.446a3.24 3.24 0 0 0-2.692-1.783l-.204-.006h-1.701a2.01 2.01 0 0 0-1.054 3.723l.154.086l1.383.691H6.522a5 5 0 0 1-.405-.905c-1.06-3.18 1.238-6.461 4.55-6.591l.204-.004z",
  code: "M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z",
  italic:
    "M16 2.5h-6a1.5 1.5 0 0 0 0 3h1.3l-1.624 13H8a1.5 1.5 0 0 0 0 3h6a1.5 1.5 0 0 0 0-3h-1.3l1.624-13H16a1.5 1.5 0 0 0 0-3",
  search:
    "M5.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M10 2.5a7.5 7.5 0 1 0 4.136 13.757l4.803 4.804a1.5 1.5 0 0 0 2.122-2.122l-4.804-4.803A7.5 7.5 0 0 0 10 2.5",
  align_center:
    "M17 17.5a1.5 1.5 0 0 1 .144 2.993L17 20.5H7a1.5 1.5 0 0 1-.144-2.993L7 17.5zm3-5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm-3-5a1.5 1.5 0 0 1 .144 2.993L17 10.5H7a1.5 1.5 0 0 1-.144-2.993L7 7.5zm3-5a1.5 1.5 0 0 1 .144 2.993L20 5.5H4a1.5 1.5 0 0 1-.144-2.993L4 2.5z",
  align_justify:
    "M4 2.5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 0 0 0-3zm0 5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 0 0 0-3zM2.5 14A1.5 1.5 0 0 1 4 12.5h16a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 14M4 17.5a1.5 1.5 0 0 0 0 3h16a1.5 1.5 0 0 0 0-3z",
  align_left:
    "M14 17.5a1.5 1.5 0 0 1 .144 2.993L14 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm6-5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm-6-5a1.5 1.5 0 0 1 .144 2.993L14 10.5H4a1.5 1.5 0 0 1-.144-2.993L4 7.5zm6-5a1.5 1.5 0 0 1 .144 2.993L20 5.5H4a1.5 1.5 0 0 1-.144-2.993L4 2.5z",
  align_right:
    "M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H10a1.5 1.5 0 0 1-.144-2.993L10 17.5zm0-5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-5a1.5 1.5 0 0 1 .144 2.993L20 10.5H10a1.5 1.5 0 0 1-.144-2.993L10 7.5zm0-5a1.5 1.5 0 0 1 .144 2.993L20 5.5H4a1.5 1.5 0 0 1-.144-2.993L4 2.5z",
  sun: "M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1",
  moon: "M13.574 3.138a1.01 1.01 0 0 0-1.097 1.408a6 6 0 0 1-7.931 7.931a1.01 1.01 0 0 0-1.409 1.097A9 9 0 0 0 21 12a9 9 0 0 0-7.426-8.862",
  heading1:
    "M13 2.5a1.5 1.5 0 0 1 1.493 1.356L14.5 4v16a1.5 1.5 0 0 1-2.993.144L11.5 20v-6.5h-6V20a1.5 1.5 0 0 1-2.993.144L2.5 20V4a1.5 1.5 0 0 1 2.993-.144L5.5 4v6.5h6V4A1.5 1.5 0 0 1 13 2.5m6 11.019V20a1 1 0 1 1-2 0v-4.634a1 1 0 0 1-1.055-1.698l1.485-.99a1.01 1.01 0 0 1 1.57.84Z",
  heading2:
    "M13 2.5a1.5 1.5 0 0 1 1.493 1.356L14.5 4v16a1.5 1.5 0 0 1-2.993.144L11.5 20v-6.5h-6V20a1.5 1.5 0 0 1-2.993.144L2.5 20V4a1.5 1.5 0 0 1 2.993-.144L5.5 4v6.5h6V4A1.5 1.5 0 0 1 13 2.5m4.657 10.18a2.7 2.7 0 0 1 1.873.219c1.166.582 1.757 1.92 1.443 3.177a2.8 2.8 0 0 1-.537 1.08l-.133.153L18.724 19h1.63a1 1 0 0 1 .117 1.993l-.117.007H16.65a1.01 1.01 0 0 1-1.01-1.01c0-.292.023-.569.191-.807l.081-.1l2.93-3.138c.472-.507.05-1.513-.699-1.325c-.313.078-.466.335-.496.626l-.006.111a1 1 0 1 1-2 0c0-1.246.782-2.369 2.017-2.678Z",
  heading3:
    "M13 2.5a1.5 1.5 0 0 1 1.493 1.356L14.5 4v16a1.5 1.5 0 0 1-2.993.144L11.5 20v-6.5h-6V20a1.5 1.5 0 0 1-2.993.144L2.5 20V4a1.5 1.5 0 0 1 2.993-.144L5.5 4v6.5h6V4A1.5 1.5 0 0 1 13 2.5m5.372 10a2.633 2.633 0 0 1 2.07 4.25a2.633 2.633 0 0 1-2.07 4.25c-1.052 0-2.04-.35-2.485-1.398c-.24-.569-.229-1.25.436-1.533a1 1 0 0 1 1.26.426l.052.104c.138.326.279.387.542.398l.194.003a.633.633 0 0 0 .629-.633c0-.373-.285-.578-.614-.612l-.1-.005a1 1 0 0 1-.117-1.993l.117-.007c.37 0 .714-.207.714-.617a.633.633 0 0 0-.628-.633l-.195.003c-.234.01-.371.06-.496.299l-.046.099a1 1 0 0 1-1.311.53c-.666-.283-.678-.964-.436-1.533c.444-1.048 1.432-1.398 2.484-1.398",
  todo_list:
    "M7.06 16.836a1.25 1.25 0 0 1 1.86 1.666l-.091.102l-2.298 2.298a1.5 1.5 0 0 1-2.008.103l-.114-.103l-1.237-1.238a1.25 1.25 0 0 1 1.666-1.859l.102.091l.53.53zM20 17.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 1 1 0-3zM8.83 9.836a1.25 1.25 0 0 1 0 1.768l-2.3 2.298a1.5 1.5 0 0 1-2.122 0l-1.237-1.238a1.25 1.25 0 1 1 1.768-1.768l.53.53l1.59-1.59a1.25 1.25 0 0 1 1.769 0ZM20 10.5a1.5 1.5 0 0 1 .145 2.993L20 13.5h-8a1.5 1.5 0 0 1-.144-2.993L12 10.5zM7.06 2.836a1.25 1.25 0 0 1 1.86 1.666l-.091.101L6.53 6.902a1.5 1.5 0 0 1-2.008.103l-.114-.103l-1.237-1.238a1.25 1.25 0 0 1 1.666-1.859l.102.091l.53.53zM20 3.5a1.5 1.5 0 0 1 .145 2.993L20 6.5h-8a1.5 1.5 0 0 1-.144-2.993L12 3.5z",
  bullet_list:
    "M20 17.5a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3zm-15.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m15.5-7a1.5 1.5 0 0 1 .144 2.993L20 13.5H9a1.5 1.5 0 0 1-.144-2.993L9 10.5zm-15.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m15.5 0a1.5 1.5 0 0 1 .144 2.993L20 6.5H9a1.5 1.5 0 0 1-.144-2.993L9 3.5z",
  number_list:
    "M5.436 16.72a1.466 1.466 0 0 1 1.22 2.275a1.466 1.466 0 0 1-1.22 2.275c-.587 0-1.134-.21-1.38-.79c-.153-.361-.112-.79.297-.963a.65.65 0 0 1 .852.344a.18.18 0 0 0 .165.11c.114-.003.23-.026.23-.168c0-.1-.073-.143-.156-.155l-.051-.003a.65.65 0 0 1-.112-1.29l.112-.01c.102 0 .207-.037.207-.158c0-.141-.116-.165-.23-.168a.18.18 0 0 0-.164.11a.65.65 0 0 1-.853.345c-.409-.174-.45-.603-.297-.963c.246-.58.793-.79 1.38-.79ZM20 17.5a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3zM6.08 9.945a1.552 1.552 0 0 1 .43 2.442l-.554.593h.47a.65.65 0 1 1 0 1.3H4.573a.655.655 0 0 1-.655-.654c0-.207.029-.399.177-.557L5.559 11.5c.142-.152.03-.473-.203-.415c-.087.022-.123.089-.134.165l-.004.059a.65.65 0 1 1-1.3 0c0-.692.439-1.314 1.123-1.485c.35-.088.718-.04 1.04.121ZM20 10.5a1.5 1.5 0 0 1 .144 2.993L20 13.5h-8a1.5 1.5 0 0 1-.144-2.993L9 10.5zM6.15 3.39v3.24a.65.65 0 0 1-1.3 0V4.523a.65.65 0 0 1-.46-1.184l.742-.494a.655.655 0 0 1 1.018.544ZM20 3.5a1.5 1.5 0 0 1 .144 2.993L20 6.5H9a1.5 1.5 0 0 1-.144-2.993L9 3.5z",
  trash:
    "M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zM9 10a1 1 0 0 0-.993.883L8 11v6a1 1 0 0 0 1.993.117L10 17v-6a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m-.72-6H9.72l-.333 1h5.226z",
  arrow_down:
    "M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z",
  add: "M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z",
  text: "M4.5 5A1.5 1.5 0 0 1 6 3.5h12A1.5 1.5 0 0 1 19.5 5v2a1.5 1.5 0 0 1-3 0v-.5h-3v12h.5a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1 0-3h.5v-12h-3V7a1.5 1.5 0 1 1-3 0z",
  quote:
    "M8.4 6.2a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 4 14.558a7.6 7.6 0 0 1 .508-3.614C5.105 9.438 6.272 7.796 8.4 6.2m9 0a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 13 14.558a7.6 7.6 0 0 1 .508-3.614c.598-1.506 1.764-3.148 3.892-4.744",
  check:
    "M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0",
  copy: "M9 2a2 2 0 0 0-2 2v2h2V4h11v11h-2v2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z",
  link: "m17.303 9.524l3.182 3.182a5.5 5.5 0 1 1-7.778 7.778l-1.06-1.06a1.5 1.5 0 1 1 2.12-2.122l1.062 1.061a2.5 2.5 0 0 0 3.535-3.536l-3.182-3.182a2.5 2.5 0 0 0-2.681-.56q-.242.096-.454.196l-.464.217c-.62.28-1.097.4-1.704-.206c-.872-.872-.646-1.677.417-2.41a5.5 5.5 0 0 1 7.007.642m-6.01-6.01l1.06 1.06a1.5 1.5 0 0 1-2.12 2.122l-1.061-1.06A2.5 2.5 0 1 0 5.636 9.17l3.182 3.182a2.5 2.5 0 0 0 2.681.56q.242-.096.454-.196l.464-.217c.62-.28 1.098-.4 1.704.206c.872.872.646 1.677-.417 2.41a5.5 5.5 0 0 1-7.007-.642l-3.182-3.182a5.5 5.5 0 1 1 7.778-7.778Z",
  insert: "M18 3.5A1.5 1.5 0 0 1 19.5 5v7a3.5 3.5 0 0 1-3.5 3.5H8.621l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12l-4.5-4.5a1.5 1.5 0 0 1 0-2.12l4.5-4.5a1.5 1.5 0 0 1 2.122 2.12L8.62 12.5H16a.5.5 0 0 0 .5-.5V5A1.5 1.5 0 0 1 18 3.5",
  undo: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
      >
        <path d="M9 14L4 9l5-5"></path>
        <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
      </g>
    </svg>
  ),
  redo: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
      >
        <path d="m15 14l5-5l-5-5"></path>
        <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
      </g>
    </svg>
  ),
  download:
    "M20 14.5a1.5 1.5 0 0 1 1.5 1.5v4a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 20v-4a1.5 1.5 0 0 1 3 0v3.5h13V16a1.5 1.5 0 0 1 1.5-1.5m-8-13A1.5 1.5 0 0 1 13.5 3v9.036l1.682-1.682a1.5 1.5 0 0 1 2.121 2.12l-4.066 4.067a1.75 1.75 0 0 1-2.474 0l-4.066-4.066a1.5 1.5 0 0 1 2.121-2.121l1.682 1.682V3A1.5 1.5 0 0 1 12 1.5",
  markdown:
    "M20 5a2 2 0 0 1 1.995 1.85L22 7v10a2 2 0 0 1-1.85 1.995L20 19H4a2 2 0 0 1-1.995-1.85L2 17V7a2 2 0 0 1 1.85-1.995L4 5zm0 2H4v10h16zM6.833 9a1 1 0 0 1 .81.413l.064.101l.793 1.427l.793-1.427a1 1 0 0 1 .754-.507l.12-.007H11a1 1 0 0 1 .993.883L12 10v4a1 1 0 0 1-1.993.117L10 14v-1.64l-.626 1.126a1 1 0 0 1-1.684.1l-.064-.1L7 12.359V14a1 1 0 0 1-1.993.117L5 14v-4a1 1 0 0 1 .883-.993L6 9zM16 9a1 1 0 0 1 1 1v1.634a1 1 0 0 1 1.207 1.573l-1.5 1.5a1 1 0 0 1-1.414 0l-1.5-1.5A1 1 0 0 1 15 11.634V10a1 1 0 0 1 1-1",
  loading: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <circle cx={18} cy={12} r={0} fill="currentColor">
        <animate
          attributeName="r"
          begin={0.67}
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx={12} cy={12} r={0} fill="currentColor">
        <animate
          attributeName="r"
          begin={0.33}
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx={6} cy={12} r={0} fill="currentColor">
        <animate
          attributeName="r"
          begin={0}
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
    </svg>
  ),

  'line-md:moon-filled-to-sunny-filled-loop-transition': <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><animate fill="freeze" attributeName="d" begin="1.4s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0" /></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g><g fill="currentColor"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" /></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0" /></path></g><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><set fill="freeze" attributeName="opacity" begin="0.6s" to="0" /></path><mask id="lineMdMoonFilledToSunnyFilledLoopTransition0"><circle cx="12" cy="12" r="12" fill="#fff" /><circle cx="18" cy="6" r="12" fill="#fff"><animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" /></circle><circle cx="18" cy="6" r="10"><animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" /></circle></mask><circle cx="12" cy="12" r="10" mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)" opacity="0" fill="currentColor"><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" /><set fill="freeze" attributeName="opacity" begin="0.6s" to="1" /></circle></svg>,
  "line-md:sunny-filled-loop-to-moon-filled-loop-transition": <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-opacity="0" d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z" fill="currentColor"><animate id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0" fill="freeze" attributeName="fill-opacity" begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s" dur="0.4s" values="1;0" /></path><path fill-opacity="0" d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z" fill="currentColor"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s" dur="0.4s" values="1;0" /></path><path fill-opacity="0" d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z" fill="currentColor"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s" dur="0.4s" values="1;0" /></path><path fill-opacity="0" d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z" fill="currentColor"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s" dur="0.4s" values="1;0" /></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><g><path stroke-dasharray="2" stroke-dashoffset="4" d="M12 21v1M21 12h1M12 3v-1M3 12h-1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" /></path><path stroke-dasharray="2" stroke-dashoffset="4" d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2" /></path><set fill="freeze" attributeName="opacity" begin="0.5s" to="0" /></g><path fill="currentColor" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" opacity="0"><set fill="freeze" attributeName="opacity" begin="0.5s" to="1" /></path></g><mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1"><circle cx="12" cy="12" r="12" fill="#fff" /><circle cx="22" cy="2" r="3" fill="#fff"><animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" /><animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" /><animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" /></circle><circle cx="22" cy="2" r="1"><animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" /><animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" /><animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" /></circle></mask><circle cx="12" cy="12" r="6" mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)" fill="currentColor"><animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" /><set fill="freeze" attributeName="opacity" begin="0.5s" to="0" /></circle></svg>,
  'line-md:moon-filled-loop': <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor" fill-opacity="0"><path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="lineMdMoonRisingFilledLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonRisingFilledLoop0.begin+6s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.2s" dur="0.4s" values="1;0" /></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.2s" dur="0.4s" values="1;0" /></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+0.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.8s" dur="0.4s" values="1;0" /></path><path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.6s" dur="0.4s" values="1;0" /></path></g><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)" stroke-width="1"><animateMotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22" /></path></svg>,
  "line-md:sunny-filled-loop": <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="32" r="6" fill="currentColor"><animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12" /></circle><g><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0" /></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></g></svg>


};

export const Icon = ({ size, icon, ...props }: IconSvgProps) => {
  const ic = allIcons[icon || "default"];
  const i = ic ? ic : allIcons["default"];

  if (typeof i === "string")
    return (
      <svg
        height={size || "1em"}
        viewBox="0 0 24 24"
        width={size || "1em"}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d={i} fill="currentColor" />
      </svg>
    );
  else if (typeof i === "function") return i({ size, icon, ...props });

  return i;
};

export const IconPreview = () => {
  return (
    <div className="flex flex-wrap gap-4 text-2xl">
      {Object.entries(allIcons).map(([a, _], i) => (
        <div key={i} className="bg-defult-400 flex flex-col rounded-md border-2 p-4">
          {" "}
          <Icon className="text-7xl" icon={a} />
          <div>{a}</div>
        </div>
      ))}
    </div>
  );
};
