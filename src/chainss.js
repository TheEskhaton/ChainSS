var props = require('./props.js');

String.prototype.insertAt=function(index, string) { 
  return this.substr(0, index) + string + this.substr(index);
}

/*
 * Constructor 
 */

var Chainss = function(selector){
    this.selector = selector;
    for(key in props.props){
        var funcName = props.props[key];
        this[funcName] = this.makeFunc(funcName); 
    }
    this.computed = [];
};

/*
 * Constants Definitions
 */

Chainss.TABSPACE = '    ';
Chainss.NEWLINE = '\n';


var isUpper = function(c){return c == c.toUpperCase()};

/*
 * Turns javascript friendly function name to a css property name
 */
var makePropName = function(funcName){
    var output = funcName;
    for(var i = 0;i < funcName.length;i++){
        var chr = funcName.charAt(i);
        if(isUpper(chr)){
            output = output.insertAt(i, '-');
        }
    }
    return output.toLowerCase();
}

/*
 * Creates a function that is used to set the css property values by chaining the calls
 */

Chainss.prototype.makeFunc = function(name){
    var theFunc = function(value){
        this.computed.push(makePropName(name) + ' :' + ' "'+value+'";'); 
        return this;
    }
    return theFunc;
}

/*
 * Builds the actual css for the given selector string
 */
Chainss.prototype.getCSS = function(){
    var output = this.selector + ' {'+Chainss.NEWLINE;
    this.computed.forEach(function(prop){
        output +=Chainss.TABSPACE+ prop +Chainss.NEWLINE;
    });
    output += '}'+Chainss.NEWLINE;
    return output;
}
module.exports = Chainss;
