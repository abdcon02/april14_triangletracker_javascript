describe('triangle', function() {
  it("will say it is a triangle for inputs: (3, 4, 5)", function() {
    expect(triangle(3, 4, 5)).to.equal("scalene");
  });

  it("will say it is not a triangle for inputs: (4, 5, 10)", function() {
    expect(triangle(4, 5, 10)).to.equal("impossible");
  });

  it("will say it is a triangle for inputs: (3, 4, 5)", function() {
    expect(triangle(3, 4, 5)).to.equal("scalene");
  });

  it("will say it is a triangle for inputs: (4, 4, 5)", function() {
    expect(triangle(4, 4, 5)).to.equal("isosceles");
  });

  it("will say it is a triangle for inputs: (3, 3, 3)", function() {
    expect(triangle(3, 3, 3)).to.equal("equilateral");
  });

});
