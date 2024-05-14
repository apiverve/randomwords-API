Random Word API
============

Random Word is a simple tool for getting random words. It returns a random word.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Random Word API](https://apiverve.com/marketplace/api/randomwords)

---

## Installation
	npm install @apiverve/randomwords --save

---

## Configuration

Before using the randomwords API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Random Word API documentation is found here: [https://docs.apiverve.com/api/randomwords](https://docs.apiverve.com/api/randomwords).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var randomwordsAPI = require('@apiverve/randomwords');
var api = new randomwordsAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
This API does not require a Query
```

###### Simple Request (using Callback)

```
api.execute(function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "word": "hang",
    "definitions": [
      "To suspend; to fasten to some elevated point without support from below; -- often used with up or out; as, to hang a coat on a hook; to hang up a sign; to hang out a banner.",
      "To fasten in a manner which will allow of free motion upon the point or points of suspension; -- said of a pendulum, a swing, a door, gate, etc.",
      "To fit properly, as at a proper angle (a part of an implement that is swung in using), as a scythe to its snath, or an ax to its helve. [U. S.]",
      "To put to death by suspending by the neck; -- a form of capital punishment; as, to hang a murderer.",
      "To cover, decorate, or furnish by hanging pictures trophies, drapery, and the like, or by covering with paper hangings; -- said of a wall, a room, etc. Hung be the heavens with black. Shak. And hung thy holy roofs with savage spoils. Dryden.",
      "To paste, as paper hangings, on the walls of a room.",
      "To hold or bear in a suspended or inclined manner or position instead of erect; to droop; as, he hung his head in shame. Cowslips wan that hang the pensive head. Milton. To hang down, to let fall below the proper position; to bend down; to decline; as, to hang down the head, or, elliptically, to hang the head. -- To hang fire (Mil.), to be slow in communicating fire through the vent to the charge; as, the gun hangs fire; hence, to hesitate, to hold back as if in suspense.",
      "To be suspended or fastened to some elevated point without support from below; to dangle; to float; to rest; to remain; to stay.",
      "To be fastened in such a manner as to allow of free motion on the point or points of suspension.",
      "To die or be put to death by suspension from the neck. [R.] \"Sir Balaam hangs.\" Pope.",
      "To hold for support; to depend; to cling; -- usually with on or upon; as, this question hangs on a single point. \"Two infants hanging on her neck.\" Peacham.",
      "To be, or be like, a suspended weight. Life hangs upon me, and becomes a burden. Addison.",
      "To hover; to impend; to appear threateningly; -- usually with over; as, evils hang over the country.",
      "To lean or incline; to incline downward. To decide which way hung the victory. Milton. His neck obliquely o'er his shoulder hung. Pope.",
      "To slope down; as, hanging grounds.",
      "To be undetermined or uncertain; to be in suspense; to linger; to be delayed. A noble stroke he lifted high, Which hung not, but so swift with tempest fell On the proud crest of Satan. Milton. To hang around, to loiter idly about. -- To hang back, to hesitate; to falter; to be reluctant. \"If any one among you hangs back.\" Jowett (Thucyd.). -- To hang by the eyelids. (a) To hang by a very slight hold or tenure. (b) To be in an unfinished condition; to be left incomplete. -- To hang in doubt, to be in suspense. -- To hang on (with the emphasis on the preposition), to keep hold; to hold fast; to stick; to be persistent, as a disease. -- To hang on the lips, words, etc., to be charmed by eloquence. -- To hang out. (a) To be hung out so as to be displayed; to project. (b) To be unyielding; as, the juryman hangs out against an agreement. [Colloq.] (c) to lounge around a particular place; as, teenageers tend to hang out at the mall these days -- To hang over. (a) To project at the top. (b) To impend over. -- To hang to, to cling. -- To hang together. (a) To remain united; to stand by one another. \"We are all of a piece; we hang together.\" Dryden. (b) To be self- consistent; as, the story does not hang together. [Colloq.] -- To hang upon. (a) To regard with passionate affection. (b) (Mil.) To hover around; as, to hang upon the flanks of a retreating enemy.",
      "The manner in which one part or thing hangs upon, or is connected with, another; as, the hang of a scythe.",
      "Connection; arrangement; plan; as, the hang of a discourse. [Colloq.]",
      "A sharp or steep declivity or slope. [Colloq.] To get the hang of, to learn the method or arrangement of; hence, to become accustomed to. [Colloq.]"
    ],
    "pronounciation": "HH AE1 NG"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the mailboxlayer website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.