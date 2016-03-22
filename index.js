var program = require('commander');
var glob=require('glob');
 
program
  .version(require('./package.json').version)
  .option('-s, --start [path]', 'Search into [path] folder','foo/bar')
  .parse(process.argv);
 
console.log('args',program.args)

// given this directory
// look for all pakcage.json starting from this directory // log which folder you are visiting, removing new line
// log how many package.json trovi
// log which package.json you are analysing and number of dependencies that are found
// get the path of all packagejson files
// read one by one, if field deps contains name of dependency, then add the name, at the end, write each name
// dont add duplicates to the list of dependencies

var packageJsonFiles=[];

function isDependent(packageJson, moduleName,cb){
	var result;
	var depNames;
	if (!packageJson.dependencies){
		return cb(null,false);
	}
	depNames=Object.keys(packageJson.dependencies);
	result=depNames.some(function(depName){
		return depName===moduleName;
	});
	return cb(null,result);
}
function readFile(filename, cb){
	return require(filename);	
	// fs.readFile(fiename,{encoding:'utf8'},function(){
});
}
function getDepName=function(packgeJson,cb){
	cb(null,packageJson.name);
}

async.map(pacjageJsonPaths, parseFile, next);
async.filter(packageJsonContents, isDependent, next);
async.map(packageJsonContents, getDepName, next);




function hh(fn){
	
}

function getDependenciesByModuleName(){
	async.waterfall([
		function readContent(next){}
		function filterDependents(content,next){}
		function returnModuleNames(content,next){}
	],function(err,result){
	  done();
	});	
}

glob("**/package.json", function(err, files){
	packageJsonFiles=packageJsonFiles.concat(files);
	console.log(packageJsonFiles);
});



