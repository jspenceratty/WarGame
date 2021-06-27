// unit test module
//
//start by setting a variable expect that calls chai.expect
var expect = chai.expect;

//put together a group of tests that test the 'WhoDoWeLike' function
describe('Test Who Do We Like Function',function(){
    describe('#whoDoWeLike', function(){
        //test known return for name of 'James'
        it('should return We like him. when we feed in the name James', function() {
            var x = whoDoWeLike('James');
            expect(x).to.equal('We like him.');
        });
    
        //test known return for name of 'Tyler'
        it('should return He\'s okay, we guess. when we feed in the name Tyler', function() {
            var x = whoDoWeLike('Tyler');
            expect(x).to.equal('He\'s okay, we guess.');
        });

        //test know return of error if the name isn't one of those
        it('should thrown an error when the name is not James or Tyler', function(){
            expect(function(){
                whoDoWeLike('Ralph');
            }).to.throw(Error);
        });
    });
});