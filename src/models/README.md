## Models
Models are our middleware properly connecting, cleaning and parsing the data to and from the server.

These models may if desired, match the exact naming convention used on the server in order for both developer parties to match responsibilities easily. Short readme files or comments in the model may be encouraged as mini documentation to guide developers in understanding the code path as well.

### From The Server
Model sets the data as the server passes it and sets addition defaults in order for us to handle the data as the frontend would like to see it in it's final form.

### To The Server
Model cleans the outgoing data making sure we aren't sending bad or extra information that may impact the server functions or user experience.