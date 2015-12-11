# Zombie Translator

## Endpoints:

/: This documentation

/zombify: translate from English to Zombie.

/unzombify: translate from Zombie to English.

## All endpoints expect a GET parameter called 'q', value = text to be translated.

For example:

/zombify?q=test returns

{"result":"Trrst"}

/unzombify?q=Trrst returns

{"result":"Test"}