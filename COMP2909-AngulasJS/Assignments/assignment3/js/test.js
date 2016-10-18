describe('Assignment 3 tests ', function () {
    browser.get('http://127.0.0.1:1951/index.html#/home');

    describe('Test view links', function () {        
        it('Test all roww', function (done) {
            
            //I tried to get the values in runtime but I couldn't. I tried to store the values of the number and suit before the click to the view into variables
            //but i got an error saying that the element was not in DOM anymore and I gave up trying and let it commented bellow in the for.
            
            let expectedNumbers = ["2","10","5","Q"];
            let expectedSuits = ["Hearts","Spades","Spades","Hearts"];
            
            element.all(by.repeater('card in cards')).then(function(rows){
                //check if number of cards are correct
                expect(rows.length).toEqual(4);
                
                for(let i = 0; i < rows.length; i++){
                    //let number = rows[i].element(by.className('card-number')).getText();
                    //let suit = rows[i].element(by.className('card-suit')).getText();
                    
                    element.all(by.className('view')).get(i).click();
                    expect(element(by.binding('card.number')).getText()).toEqual(expectedNumbers[i]);
                    expect(element(by.binding('card.suit')).getText()).toEqual(expectedSuits[i]);
                    element.all(by.className('home')).click();
                }
                
                done();
            });
        });
    });
    
    describe('Test suit search', function(){
         //clear the search input
         beforeEach(function () {
            element(by.className("cards-suit-search")).clear();
         });
        
         it('Test suit: Hearts', function (done) {
            element(by.className("cards-suit-search")).sendKeys("Hearts");
             
            element.all(by.repeater('card in cards')).count().then(function(count) {
                expect(2).toEqual(count);
                done();
            });
         });
        
         it('Test suit: Spades', function (done) {
            element(by.className("cards-suit-search")).sendKeys("Spades");
             
            element.all(by.repeater('card in cards')).count().then(function(count) {
                expect(2).toEqual(count);
                done();
            });
         });
        
         it('Test suit: Clubs', function (done) {
            element(by.className("cards-suit-search")).sendKeys("Clubs");
             
            element.all(by.repeater('card in cards')).count().then(function(count) {
                expect(0).toEqual(count);
                done();
            });
         });
    });
});
