# Constants

Anything that will be referenced globally in the app should be stored here. This can include:

1. Unique IDs from a database (id or guid). <sup>1</sup>
2. Config values for difference api services that aren't part of an .env file.

Note that this folder could be substituted for .env file(s) holding all information if it is considered dynamic based on how your hosting is configured or company policy is enforced.

<hr/>

<small>[1] - This may have a need where the server seeds constant values and it becomes convenient for the client side code to have a copy as well to reduce the need for some redundant api calls that retrieve this data. This doesn't necessary take the place of calling and caching a settings table from the database where the data may change based on user or server input.</small>