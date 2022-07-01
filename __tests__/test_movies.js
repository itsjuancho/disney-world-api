let {chai, URL, expect, TOKEN_TEST} = require('./config');

describe('GET /movies', () => {
    it("Obtener películas (sin definir token en headers)", (done) => {
        chai.request(URL)
            .get('/movies')
            .end((error, req) => {
                expect(req).to.have.status(400);
                done();
            })
    });
    it("Obtener películas con token inválido", (done) => {
        chai.request(URL)
            .get('/movies')
            .set('auth-token', TOKEN_TEST+"1")
            .end((error, req) => {
                expect(req).to.have.status(401);
                done();
            });
    });
})