var Chainss = require('../src/chainss');
var expect  = require('chai').expect;
describe('ChainSS', function(){

    it('should return a complete css rule', function(){
        var chainss = new Chainss('span.test');
        var chainss = chainss.lineHeight('1.4em');
        var css = chainss.getCSS();
        expect(css).to.equal('span.test {\n    line-height : "1.4em";\n}\n');
    });
    
    it('should be chainable', function(){
        var chainss = new Chainss('span.test');
        var chainss = chainss.lineHeight('1.4em').fontSize('25px');
        var css = chainss.getCSS();
        expect(css).to.equal('span.test {\n    line-height : "1.4em";\n    font-size : "25px";\n}\n');
    });

});
