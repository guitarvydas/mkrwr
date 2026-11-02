var counter = 1;
var rulename = "";
var formals = "";
var ruleDescr = "";
function getn (s) {let n = counter; counter += 1; return `${s}${n}`; }
function stripbrackets (s) {
    return s
	.replace (/\\«/g, '')
	.replace (/\\»/g, '')
	.replace (/«/g, '')
	.replace (/»/g, ''); } // strip out brackets «»
function stripsuffixes (s) { return s.replace (/\+/g, '').replace (/\*/g, '').replace (/\?/g, ''); } // strip out suffixes (+/*/?)

// rulename, args, rewrite are all variations on the same string...
function asargs (s) { return stripbrackets (s); } 
function asrulename (s) { return stripbrackets (s); } 
function asrewrite (s) { return stripsuffixes (s); }

function setrule (name, formals, desc) { rulename = name.trim (); formals = formals ; ruleDescr = desc ; return ""; }
function getrulename () { return rulename; }
function getformals () { return formals; }
function getruleDescr () { return ruleDescr; }
