var request = require ('supertest');

var app = require('../app');

describe("app", function(){
    it("connects", function(done){
        request(app).get('/')
        .expect(200)
     //   .expect(/Api working/, done)
    })
})