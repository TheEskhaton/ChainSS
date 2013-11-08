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
    
    describe('SelectorList', function(){
        var list;
        beforeEach(function(){
            list = new Chainss.SelectorList();
        });
        describe('add', function(){
             it('should be chainable', function(){
                expect(list.add).to.be.a('function');
                expect(list.add('span.test').add).to.be.a('function');
             });
        });
        
        describe('style', function(){
            it('should change a particular selectors style', function(){
                list = list.add('span.test').add('.selected');
                list = list.style('span.test', { display : 'block', fontSize: '2em'});
                list.chainers.forEach(function(c){
                    if(c.selector == 'span.test'){
                        expect(c.computed).to.contain('display : "block";').and.to.contain('font-size : "2em";');
                    }
                });
            });
        });
        
        describe('getCss', function(){
            it('should return  computed css for all chainers with styles', function(){
                list = list.add('span.test').add('.selected');
                list = list.style('span.test', { display : 'block', fontSize: '2em'})
                            .style('.selected', { float: 'right'});
                var css = list.getCSS();
                expect(css).to.contain('span.test')
                    .and.to.contain('.selected')
                    .and.to.contain('display : "block"');
            });
        });

    });

});
