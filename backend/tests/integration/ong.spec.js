const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })
    
    it('should be able to create a new ONg', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"APAI3",
                email: "contato@apai.com.br",
                whatsapp:"47999999999",
                city:"Blumanau",
                uf:"SC"
            })
    })
})