var Alexa = require('alexa-sdk')

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.registerHandlers(stateHandlers)
  alexa.execute()
}
var stateHandlers = {
  'LaunchRequest': function () {
    this.emit(':ask', 'Hello, Avatar! What would you like to ask of Uncle Iroh?')
  },
  'SingIntent': function () {
    var song = 'Leaves from the vine, <break time="1000ms"/>' +
                'Falling so slow, ' +
                'Like fragile, tiny shells, <break time="1000ms"/>' +
                'Drifting in the foam. <break time="500ms"/>' +
                'Little soldier boy, <break time="1000ms"/>' +
                'Come marching home, <break time="500ms"/>' +
                'Brave soldier boy. <break time="1000ms"/>' +
                'Comes marching home.'
    this.emit(':tell', song)
  },
  'QuoteIntent': function () {
    // Get a random quote
    var quoteIndex = Math.floor(Math.random() * QUOTES.length)

    this.emit(':tell', QUOTES[quoteIndex])
  },

  'WouldYouLikeTeaIntent': function () {
    this.emit(':tell', 'Yes, I\'d love some tea!<break time="1000ms"/> Euch! this tea is nothing more than hot leaf juice!')
  },

  'FavoriteTeaIntent': function () {
    var TEA_QUOTES = [
      'My favorite tea is from the rare white dragon bush. Its leaves make a tea so delicious it’s *heartbreaking!* That, or it’s the white jade bush, which is poisonous.',
      'My favorite tea is the kind made with love.' // he didn't actually say this but whatever.
    ]

    this.emit(':tell', TEA_QUOTES[Math.floor(Math.random() * TEA_QUOTES.length)])
  },

  'SickOfTeaIntent': function () {
    this.emit(':tell', 'Sick of tea? That\'s like being sick of breathing!')
  },

  'EndSession': function () {
    this.emit(':tell', 'Take care, Avatar!')
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':tell', 'You can say, "I need advice", or "sing to me", or "".')
  },
  'AMAZON.NoIntent': function () {
    this.emit('EndSession', 'Goodbye everyone. Today, destiny is our friend. I know it.');
  },
  'Unhandled': function() {
    var message = 'Sorry, I didn\'t get that. Please restate.';
    this.emit(':ask', message, message);
  }
}

var QUOTES = [
  'Pride is not the opposite of hsame, but it\'s source. True himility is the only antidote to shame.',
  'Life happens wherever you are, whether you make it or not.',
  'It is usually best to admit mistakes when they occur, and to seek to restore honor. <break time="500ms"/>But not this time! Run!',
  'While it is always best to believe in one\'s self, a little help from others can be a great blessing.',
  'A man needs his rest.',
  'There’s nothing wrong with a life of peace and prosperity. I suggest you think about what it is that you want from your life, and why.',
  'At my age, there is really only one big surprise left, and I’d just as soon leave it a mystery.',
  'Are you so busy fighting you cannot see your own ship has set sail?',
  'There is nothing wrong with letting people who love you, help you. Not that I love you. I just met you.',
  'It is usually best to admit mistakes when they occur, and to seek to restore honor.',
  'Sometimes the best way to solve your own problems is to help someone else.',
  'Many things that seem threatening in the dark become welcoming when we shine light on them.'
]