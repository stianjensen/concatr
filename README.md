# concatr

Concats files and either serves them on localhost, or outputs a compiled file.

# Usage

Compile an input file to concatr.html:

```concatr build FILENAME```

Serve an input file on localhost:

```concatr serve FILENAME```

In the file you're parsing, instances of `@include(PATH)` will be replaced with either contents of a file, or the contents of all files in a folder.

# To do:

- Make `concatr serve` watch for changes and update live.
- Have concatr parse included files for @include tags.
- Make folder includes sortable (currently it's pretty random).
