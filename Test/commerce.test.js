var supertest = require('supertest');
var should = require('should');
var expect = require('expect.js');

var server = supertest.agent('http://localhost:2727');

describe('unit test', function (){
    it('creacion de comercio', function(done){
        var commerce = {
            code: '101-01234-4',
            name: 'Parque Independencia',
            description: 'comercio de prueba de unit test',
            latitude: 18.4712716,
            longitude: -69.8934642
        };

        server
            .post('/commerce/create')
            .send(commerce)
            .expect('Content-type', /json/)
            .expect(200)
            .end(function(err, res){
                res.status.should.equal(200);
                (err == null).should.be.true;
                done();
            });
    });
    
    it('peticion de comercios creados', function(done){
        server
            .get('/commerce/commerces')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function(err, res){
                res.status.should.equal(200);
                (err == null).should.be.true;
                done();
            });
    });
    
    it('edicion de comercio', function(done){
        var commerceId = 8;
        
        server
            .put('/commerce/' + commerceId)
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                code: '101-01234-4',
                name: 'Parque Independencia',
                description: 'Esto no es un comercio',
                latitude: 18.4712716,
                longitude: -69.8934642
            })
            .expect(200)
            .end(function(err, res){
                (err == null).should.be.true;
                done();
            });
    });
    
//    it('eliminación de comercio', function(done){
//        var commerceId = 20;       
//        
//        server
//            .delete('/commerce/remove/' + commerceId)
//            .expect(200)
//            .end(function(err, res){
//                res.status.should.equal(200);
//                (err == null).should.be.true;
//                done();
//            });
//    });
    
    it('error en url', function(done){
        server
            .get('/address')
            .expect(404)
            .end(function(err, res){
                res.status.should.equal(404);
                done();
            })
    });
});