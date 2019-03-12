const calculator = function () {
    var calcMedia = function (arr) {
        let media = 0;
        let arrfiltered = arr.filter(function (value, index, arr) { return value != ""; });
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        media = Math.round((arrfiltered.reduce(reducer) / arrfiltered.length));
        return media;
    }
    return {
        calcMedia: function (arr) {
            return calcMedia(arr);
        }
    }
}();