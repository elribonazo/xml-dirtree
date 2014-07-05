var fs = require("fs"),
	xml2js = require("xml2js");

exports.get_tree = function tree(dir,options){
	if(options.files_){
		 files_ = options.files_;
	}else{
		 files_ = {};
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
        		name = name.replace(options,replacefor);
        	}
        	var directorio = {file:name};
            files_.push(directorio);
        }
    }
    return files_;
}

exports.generate_xml = function xml(tree_source){
	var lista = [];
	lista.directories = [];
	
	var builder = new xml2js.Builder();
	var xml = builder.buildObject(tree_source);
	
	return xml;
}