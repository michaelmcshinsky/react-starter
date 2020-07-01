# Services

The services code handles major business logic throughout your app. Various components may import services to make decisions or communicate with central information brokers here that, as a result, impact large portions of your app. The services you create may be used and impace each other as they evolve as well.

## Examples
* Api
* Models
* Authentication
* Authorization
* Context
* Hooks <sup>1</sup>
* Intl <sup>2</sup>
* Local <sup>3</sup>
* State <sup>4</sup>

<hr/>

<small>[1] - This may be here or in the utilities folder depending on how you view the role of hooks in your application.</small>
<small>[2] - Internationalization</small>
<small>[3] - Localization</small>
<small>[4] - Redux or other flavors of global state management</small>