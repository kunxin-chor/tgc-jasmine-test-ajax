describe("API Tests", function() {
    describe("Get PSI Readings", function() {
        it("should be able to load data", function(done) {

            getPSIReadings(function(data) {
                expect(data.length).not.toBe(0);
                expect(data.hasOwnProperty("north")).toBe(true);
                expect(data.hasOwnProperty("south")).toBe(true);
                expect(data.hasOwnProperty("east")).toBe(true);
                expect(data.hasOwnProperty("west")).toBe(true);
                expect(data.hasOwnProperty("central")).toBe(true);
                expect(data.hasOwnProperty("national")).toBe(true);
                done()
            })
        })
    })

})
