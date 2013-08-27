describe('Play Scenarios', function() {
  beforeEach(function() {
    browser().navigateTo("/#play");
  });
  it('should navigate to play view', function() {    
    expect(element('[ng-view] p:first').text())
      .toMatch(/This is the play view\./);
    element('#play_button').click();
  });
});
