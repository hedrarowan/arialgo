const {expect} = require('chai')
const medianOfSortedAris = require('../theproblem.js')


describe('medianOfSortedAris', () => {
  it('test 1: nums1 = [1, 3], nums2 = [2]', () => {
    const answer1 = medianOfSortedAris([1,3], [2])
    expect(answer1).to.equal(2)
  })
  it('test 2: nums1 = [1, 2], nums2 = [3,4]', () => {
    const answer2 = medianOfSortedAris([1,2], [3,4])
    expect(answer2).to.equal(2.5)
  })
  it('test 3: nums1 = [0, 0], nums2 = [0,0]', () => {
    const answer3 = medianOfSortedAris([0,0], [0,0])
    expect(answer3).to.equal(0)
  })
  it('test 4: nums1 = [2], nums2 = []', () => {
    const answer4 = medianOfSortedAris([2], [])
    expect(answer4).to.equal(2)
  })
  it('test 5: nums1 = [1, -2], [3, -8]', () => {
    const answer5 = medianOfSortedAris([1, -2], [3, -7])
    expect(answer5).to.equal(-0.5)
  })
  it('test 6: nums1 = [3], [-2, -1]', () => {
    const answer7 = medianOfSortedAris([3], [-2, -1])
    expect(answer7).to.equal(-1)
  })

})
