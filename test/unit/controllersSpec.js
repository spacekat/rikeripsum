'use strict';

/* jasmine specs for controllers go here */

describe('Riker Ipsum controllers', function() {
  describe('IpsumCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/app/ipsum/words.txt').respond([
        "I suggest you drop it, Mr. Data.","Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody."
      ]);

      scope = $rootScope.$new();
      ctrl = $controller(IpsumCtrl, {$scope: scope});

      //
      //scope.getIpsum();

    }));

    it('should create an "ipsum" model with a bunch of quotes fetched from xhr', function() {
      expect(scope.ipsum).toBeUndefined();
      $httpBackend.flush();
      expect(scope.ipsum).toEqual([
        "I suggest you drop it, Mr. Data.","Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody."
      ]);

    });
  });
});
