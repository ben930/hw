/**
 * Created by Benjamin on 1/24/17.
 */
describe("hello world test", function(){
    var element = angular.element(document).find("h1");
    it("should show hello world", function(){
        expect(element).toBe(true);
    });
});