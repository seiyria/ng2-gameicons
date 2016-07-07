# ng2-gameicons
An easy-to-use directive for [game-icons](https://github.com/seiyria/gameicons-font) icons.

# Install
`npm i -s ng2-gameicons`

# Usage
First, make sure you have a CSS and font loader set up for webpack, like so:
```
{
  test: /\.css/,
  loader: 'style!css'
},
{
  test: /\.woff|\.eot|\.ttf/,
  loader: 'file'
},
```

It is recommended that you globally apply the Game Icons directive like so:

```
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { GameIconsDirective } from 'ng2-gameicons';
import { bootstrap } from '@angular/platform-browser-dynamic';

bootstrap(MyAppComponent, [
  provide(PLATFORM_DIRECTIVES, { useValue: GameIconsDirective, multi: true })
]);
```

Doing so will allow you to use the `gi` directive anyhwere. Supposing you don't want to do that, registering it and including it like normal will work as well.

Here is how you would use it in your templates:

```html
<i gi [icon]="'abstract-001'"></i>
```

# Options
Name    | Valid Values
----    | ------------
`icon`  | Any game-icons icon name ([full list here](http://seiyria.com/gameicons-font/))
