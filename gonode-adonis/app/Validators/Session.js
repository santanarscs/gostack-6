'use strict'

class Session {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      email: 'requred|email',
      password: 'required'
    }
  }
}

module.exports = Session
