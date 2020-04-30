//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);


describe('/Hope route', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
          .get('/hope')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});