var fs = require("fs"),
	xml2js = require("xml2js"),
	builder = require('xmlbuilder');


exports.get_tree = function tree(dir,options){
	if(options.files_){
		 files_ = options.files_;
	}else{
		 files_ = [];
	}


    if (typeof files_ === 'undefined') files_=[];
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
        	options.files_ = files_;
        	tree(name,options);
        } else {
        	if(options.replace && options.replacefor){
        		name = name.replace(options.replace,options.replacefor);
        		
        	}
        	 if (!name.match(\.)) {
             	var directorio = {};
            	directorio.file = name;
                files_.push(directorio);
        	}

        }
    }
    return files_;
}

exports.generate_xml = function xml(tree_source){

	var doc = builder.create("root");
	var root = doc.ele('files');
	
	
	
	for(i in tree_source){
		file = tree_source[i];
		console.log("add new eleement " + file.file)
		root.ele("file").txt(file.file);
	}

	var xml = doc.toString();	
	return xml;
}