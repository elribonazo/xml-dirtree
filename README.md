xml-dirtree
===========

Generate a XML that contains all the paths and folders inside it.


Howto use

npm install xml-tree

On your NPM project

var xml_tree = require("xml-tree");

var options = {
	replace:"/path_to_remove/",  //optional, to remove unwanted strings in the path.
}	

var tree = xml_tree.get_tree("/directory/",options); //returns array of the directory and the files inside it
var xml_tree = xml_tree.generate_xml(tree); //returns xml_tree

XML example

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <0>
    <file>/Users/ribo/music/iTunes/iTunes Media//Where? I Lost My Underwear/Where? I Lost My Underwear.mp3</file>
  </0>
</root>


