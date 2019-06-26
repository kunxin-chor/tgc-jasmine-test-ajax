describe("Should be able to load data", function(){
    it("should be able to load in data", function(done){
        getPM25Readings(function(data){
            expect(data.length).not.toBe(0)
            expect(data.hasOwnProperty("north")).toBe(true)
            expect(data.hasOwnProperty("south")).toBe(true)
            expect(data.hasOwnProperty("east")).toBe(true)
            expect(data.hasOwnProperty("national")).toBe(true)
            expect(data.hasOwnProperty("central")).toBe(true)
            done();
        })
    })
})