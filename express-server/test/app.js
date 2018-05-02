var request = require ('supertest');

var app = require('../app');

describe("app", function(){
    it("connects", function(done){
        request(app).get('/')
        .expect(200)
     //   .expect(/Api working/, done)
    })
})

//TODO: Why `(function (exports, require, module, __filename, __dirname) { import express from 'express';` ?