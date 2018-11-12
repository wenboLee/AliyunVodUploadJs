var  AliyunUpload = require("../lib/index")
var assert = require('chai').assert

describe('Basic', () => {
    it('AliyunUpload Loaded', () => {
        assert.typeOf(AliyunUpload,'Object')
    })
})