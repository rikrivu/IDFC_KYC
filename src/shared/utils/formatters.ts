// Method to convert strings to TitleCase ie. 'close ' or 'CLOSE' ---> 'Close'
export const toTitleCase = (input: string): string => {
    return input.replace(
        /([^\W_]+[^\s-]*) */g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}