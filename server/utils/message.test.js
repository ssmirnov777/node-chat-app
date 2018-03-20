const expect = require('expect')

var {generateMessage} = require('./message')

describe ('Message generate test', () => {
  it ('should generate a message object', () => {
    const from = 'admin';
    const text = 'test'
    message = generateMessage (from, text);
    //expect (message.from).toBe(from);
    //expect (message.text).toBe(text);
    expect(message).toInclude ({ from, text });
    expect (message.createdAt).toBeA('number')
  })
});
