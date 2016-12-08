# Uncle Iroh

This is the source code for the Uncle Iroh skill.

## Usage

Check out the [utterances](./assets/Utterances.txt) for some examples.

You can say things like...

* Alexa, ask Uncle Iroh for some advice.
* Alexa, ask Uncle Iroh to sing to me.
* Alexa, ask Uncle Iroh if he would like some tea.
* Alexa, ask Uncle Iroh if he hates tea.

## Development

To develop this Alexa skill, create a Lambda triggered by the Alexa Skill Kit. Then run `npm run zip` and upload the resulting zip to the lambda.

Then in the [developer console](https://developer.amazon.com), add a new Alexa skill and point it to the lambda you just created. You'll need to provide the [Intent Schema](./assets/IntentSchema.json) and the [Sample Utterances](./assets/Utterances.txt).

Good luck!