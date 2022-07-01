let {chai, URL, expect} = require('./config');

describe('POST /auth/login: ', () => {
    const objRequest = {
        email: "juanandresperezpt@gmail.com",
        password: "123456"
    };
    it('Debería de responder con Status 200 OK', (done) => {
        chai.request(URL)
            .post('/auth/login')
            .send(objRequest)
            .end((error, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });
    it('Debería de retornar un mensaje de "Logueado con éxito"', (done) => {
        chai.request(URL)
            .post('/auth/login')
            .send(objRequest)
            .end((error, res) => {
                expect(res.body).to.have.property('message').to.be.equal("Logueado con éxito");
                expect(res).to.have.status(200);
                done();
            })
    });
    it('Debería de retornar Status 404 con credenciales inexistentes', (done) => {
        chai.request(URL)
            .post('/auth/login')
            .send({
                email: "rendes@aaja.com",
                password: "ajaja"
            })
            .end((error, res) => {
                expect(res.body).to.have.property('message').to.be.equal("Usuario no encontrado");
                expect(res).to.have.status(404);
                done();
            })
    });
});