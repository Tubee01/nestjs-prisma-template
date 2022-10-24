import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  async getHello() {
    // some star wars quotes
    const quotes = [
      'I find your lack of faith disturbing.',
      'Do. Or do not. There is no try.',
      'In my experience, there is no such thing as luck.',
      'Never tell me the odds!',
      'I am altering the deal. Pray I don’t alter it any further.',
      'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
      'The Force will be with you. Always.',
      'You can’t stop the change, any more than you can stop the suns from setting.',
      'The ability to destroy a planet is insignificant next to the power of the Force.',
      'You were the chosen one! It was said that you would destroy the Sith, not join them. You were to bring balance to the Force, not leave it in darkness.',
      'So this is how liberty dies… With thunderous applause.',
      'The greatest teacher, failure is.',
      'The circle is now complete. When I left you, I was but the learner; now I am the master.',
      'Your eyes can deceive you. Don’t trust them.',
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
  }
}
