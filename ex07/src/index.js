function main() {
    // Only change code below this line
    // Variable declarations
    var StUdLyCapVaR = 10;
    var properCamelCase = "A String";
    var TitleCaseOver = 9000;

    // Variable assigments
    var camalize = function camalize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    camalize(StUdLyCapVaR);
    camalize(properCamelCase);
    camalize(TitleCaseOver);
    // Only change code above this line
    
    return {
        StUdLyCapVaR,
        properCamelCase,
        TitleCaseOver
    };
}

console.log(main());

module.exports = main;