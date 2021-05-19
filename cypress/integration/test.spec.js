const url = 'https://www.google.co.th'
const searchData = 'cocoa'

describe('Test cypress', () => {
    it('Go to url', () => {
       cy.visit(url)
    })
    it('Type search data', () => {
        cy.xpath('//input[@title = "ค้นหา"]').type(searchData + '{enter}')
    })
    it('Click 10th result', () => {
        cy.xpath('//div[@class = "g"]//a/h3').eq(9).click()
    })
})