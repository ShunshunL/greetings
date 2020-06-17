// IFFE 
(function(global, $) {
  const Greeting = function(firstName, lastName, language) {
    return new Greeting.init(firstName, lastName, language)
  }

  const supportedLangs = ['en', 'es']

  const greetings = {
    en: 'Hello',
    es: 'Hola'
  }

  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  }

  const logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  }

  // prototype holds methods to save memory space
  Greeting.prototype = {

    fullName : function() {
      return this.firstName + ' ' + this.lastName
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language"
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!'
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName()
    },

    greet: function(formal) {
      let msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }

      if (console) {
        console.log(msg)
      }
      // make it chainable
      return this
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName())
      }
      return this
    },

    setLang: function(lang) {
      this.language = lang 
      this.validate()
      return this
    }
  }

  Greeting.init = function(firstName, lastName, language) {
    this.firstName = firstName || ''
    this.lastName = lastName || ''
    this.language = language || 'en'
  }

  // point greeting.init to greeting.prototype
  Greeting.init.prototype = Greeting.prototype

  // exposing greeting function to global object
  global.Greeting = global.G = Greeting

}(window, $))