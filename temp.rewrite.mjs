let parameters = {};
function pushParameter (name, v) {
    if (!parameters [name]) {
        parameters [name] = [];
    }
    parameters [name].push (v);
}
function popParameter (name) {
    parameters [name].pop ();
}
function getParameter (name) {
    let top = parameters [name].pop ();
    parameters [name].push (top);
    return top;
}


let _rewrite = {

Grammars : function (Grammar,) {
enter_rule ("Grammars");
    set_return (`${Grammar.rwr ().join ('')}`);
return exit_rule ("Grammars");
},
Grammar : function (ident,SuperGrammar,_1,Rule,_2,) {
enter_rule ("Grammar");
    set_return (`${ident.rwr ()}${SuperGrammar.rwr ().join ('')}${_1.rwr ()}${Rule.rwr ().join ('')}${_2.rwr ()}`);
return exit_rule ("Grammar");
},
SuperGrammar : function (_3,ident,) {
enter_rule ("SuperGrammar");
    set_return (`${_3.rwr ()}${ident.rwr ()}`);
return exit_rule ("SuperGrammar");
},
Rule_define : function (ident,Formals,ruleDescr,_4,RuleBody,) {
enter_rule ("Rule_define");
    set_return (`${ident.rwr ()}${Formals.rwr ().join ('')}${ruleDescr.rwr ().join ('')}${_4.rwr ()}${RuleBody.rwr ()}`);
return exit_rule ("Rule_define");
},
Rule_override : function (ident,Formals,_5,OverrideRuleBody,) {
enter_rule ("Rule_override");
    set_return (`${ident.rwr ()}${Formals.rwr ().join ('')}${_5.rwr ()}${OverrideRuleBody.rwr ()}`);
return exit_rule ("Rule_override");
},
Rule_extend : function (ident,Formals,_6,RuleBody,) {
enter_rule ("Rule_extend");
    set_return (`${ident.rwr ()}${Formals.rwr ().join ('')}${_6.rwr ()}${RuleBody.rwr ()}`);
return exit_rule ("Rule_extend");
},
RuleBody_toplevelcasebranch : function (_7,_9,) {
enter_rule ("RuleBody_toplevelcasebranch");
    set_return (`${_7.rwr ().join ('')}${_9.rwr ()}`);
return exit_rule ("RuleBody_toplevelcasebranch");
},
RuleBody_seq : function (_10,TopLevelTermWithoutCaseName,) {
enter_rule ("RuleBody_seq");
    set_return (`${_10.rwr ().join ('')}${TopLevelTermWithoutCaseName.rwr ()}`);
return exit_rule ("RuleBody_seq");
},
TopLevelTermWithCaseName : function (Seq,caseName,) {
enter_rule ("TopLevelTermWithCaseName");
    set_return (`${Seq.rwr ()}${caseName.rwr ()}`);
return exit_rule ("TopLevelTermWithCaseName");
},
TopLevelTermWithoutCaseName : function (Seq,) {
enter_rule ("TopLevelTermWithoutCaseName");
    set_return (`${Seq.rwr ()}`);
return exit_rule ("TopLevelTermWithoutCaseName");
},
OverrideRuleBody : function (_12,_14,) {
enter_rule ("OverrideRuleBody");
    set_return (`${_12.rwr ().join ('')}${_14.rwr ()}`);
return exit_rule ("OverrideRuleBody");
},
OverrideTopLevelTerm_superSplice : function (_15,) {
enter_rule ("OverrideTopLevelTerm_superSplice");
    set_return (`${_15.rwr ()}`);
return exit_rule ("OverrideTopLevelTerm_superSplice");
},
OverrideTopLevelTerm_default : function (TopLevelTermWithoutCaseName,) {
enter_rule ("OverrideTopLevelTerm_default");
    set_return (`${TopLevelTermWithoutCaseName.rwr ()}`);
return exit_rule ("OverrideTopLevelTerm_default");
},
Formals : function (_16,_18,_19,) {
enter_rule ("Formals");
    set_return (`${_16.rwr ()}${_18.rwr ()}${_19.rwr ()}`);
return exit_rule ("Formals");
},
Params : function (_20,_22,_23,) {
enter_rule ("Params");
    set_return (`${_20.rwr ()}${_22.rwr ()}${_23.rwr ()}`);
return exit_rule ("Params");
},
Seq : function (Iter,) {
enter_rule ("Seq");
    set_return (`${Iter.rwr ().join ('')}`);
return exit_rule ("Seq");
},
Iter_star : function (Pred,_24,) {
enter_rule ("Iter_star");
    set_return (`${Pred.rwr ()}${_24.rwr ()}`);
return exit_rule ("Iter_star");
},
Iter_plus : function (Pred,_25,) {
enter_rule ("Iter_plus");
    set_return (`${Pred.rwr ()}${_25.rwr ()}`);
return exit_rule ("Iter_plus");
},
Iter_opt : function (Pred,_26,) {
enter_rule ("Iter_opt");
    set_return (`${Pred.rwr ()}${_26.rwr ()}`);
return exit_rule ("Iter_opt");
},
Iter_default : function (Pred,) {
enter_rule ("Iter_default");
    set_return (`${Pred.rwr ()}`);
return exit_rule ("Iter_default");
},
Pred_not : function (_27,Lex,) {
enter_rule ("Pred_not");
    set_return (`${_27.rwr ()}${Lex.rwr ()}`);
return exit_rule ("Pred_not");
},
Pred_lookahead : function (_28,Lex,) {
enter_rule ("Pred_lookahead");
    set_return (`${_28.rwr ()}${Lex.rwr ()}`);
return exit_rule ("Pred_lookahead");
},
Pred_default : function (Lex,) {
enter_rule ("Pred_default");
    set_return (`${Lex.rwr ()}`);
return exit_rule ("Pred_default");
},
Lex_lex : function (_29,Base,) {
enter_rule ("Lex_lex");
    set_return (`${_29.rwr ()}${Base.rwr ()}`);
return exit_rule ("Lex_lex");
},
Lex_default : function (Base,) {
enter_rule ("Lex_default");
    set_return (`${Base.rwr ()}`);
return exit_rule ("Lex_default");
},
Base_application : function (ident,Params,) {
enter_rule ("Base_application");
    set_return (`${ident.rwr ()}${Params.rwr ()}`);
return exit_rule ("Base_application");
},
Base_simple : function (ident,) {
enter_rule ("Base_simple");
    set_return (`${ident.rwr ()}`);
return exit_rule ("Base_simple");
},
Base_range : function (oneCharTerminal,_38,oneCharTerminal2,) {
enter_rule ("Base_range");
    set_return (`${oneCharTerminal.rwr ()}${_38.rwr ()}${oneCharTerminal2.rwr ()}`);
return exit_rule ("Base_range");
},
Base_terminal : function (terminal,) {
enter_rule ("Base_terminal");
    set_return (`${terminal.rwr ()}`);
return exit_rule ("Base_terminal");
},
Base_parenalt : function (_39,Seq,OrSeq,_40,) {
enter_rule ("Base_parenalt");
    set_return (`${_39.rwr ()}${Seq.rwr ()}${OrSeq.rwr ().join ('')}${_40.rwr ()}`);
return exit_rule ("Base_parenalt");
},
Base_parenseq : function (_41,Seq,_42,) {
enter_rule ("Base_parenseq");
    set_return (`${_41.rwr ()}${Seq.rwr ()}${_42.rwr ()}`);
return exit_rule ("Base_parenseq");
},
OrSeq : function (_43,Seq,) {
enter_rule ("OrSeq");
    set_return (`${_43.rwr ()}${Seq.rwr ()}`);
return exit_rule ("OrSeq");
},
ruleDescr : function (_44,ruleDescrText,_45,) {
enter_rule ("ruleDescr");
    set_return (`${_44.rwr ()}${ruleDescrText.rwr ()}${_45.rwr ()}`);
return exit_rule ("ruleDescr");
},
ruleDescrText : function (any,) {
enter_rule ("ruleDescrText");
    set_return (`${any.rwr ().join ('')}`);
return exit_rule ("ruleDescrText");
},
caseName : function (_47,space,name,space2,_52,) {
enter_rule ("caseName");
    set_return (`${_47.rwr ()}${space.rwr ().join ('')}${name.rwr ()}${space2.rwr ().join ('')}${_52.rwr ()}`);
return exit_rule ("caseName");
},
name : function (nameFirst,nameRest,) {
enter_rule ("name");
    set_return (`${nameFirst.rwr ()}${nameRest.rwr ().join ('')}`);
return exit_rule ("name");
},
nameFirst : function (_54,) {
enter_rule ("nameFirst");
    set_return (`${_54.rwr ()}`);
return exit_rule ("nameFirst");
},
nameRest : function (_56,) {
enter_rule ("nameRest");
    set_return (`${_56.rwr ()}`);
return exit_rule ("nameRest");
},
ident : function (name,) {
enter_rule ("ident");
    set_return (`${name.rwr ()}`);
return exit_rule ("ident");
},
terminal : function (_57,terminalChar,_58,) {
enter_rule ("terminal");
    set_return (`${_57.rwr ()}${terminalChar.rwr ().join ('')}${_58.rwr ()}`);
return exit_rule ("terminal");
},
oneCharTerminal : function (_59,terminalChar,_60,) {
enter_rule ("oneCharTerminal");
    set_return (`${_59.rwr ()}${terminalChar.rwr ()}${_60.rwr ()}`);
return exit_rule ("oneCharTerminal");
},
terminalChar : function (_67,) {
enter_rule ("terminalChar");
    set_return (`${_67.rwr ()}`);
return exit_rule ("terminalChar");
},
escapeChar_backslash : function (_68,) {
enter_rule ("escapeChar_backslash");
    set_return (`${_68.rwr ()}`);
return exit_rule ("escapeChar_backslash");
},
escapeChar_doubleQuote : function (_69,) {
enter_rule ("escapeChar_doubleQuote");
    set_return (`${_69.rwr ()}`);
return exit_rule ("escapeChar_doubleQuote");
},
escapeChar_singleQuote : function (_70,) {
enter_rule ("escapeChar_singleQuote");
    set_return (`${_70.rwr ()}`);
return exit_rule ("escapeChar_singleQuote");
},
escapeChar_backspace : function (_71,) {
enter_rule ("escapeChar_backspace");
    set_return (`${_71.rwr ()}`);
return exit_rule ("escapeChar_backspace");
},
escapeChar_lineFeed : function (_72,) {
enter_rule ("escapeChar_lineFeed");
    set_return (`${_72.rwr ()}`);
return exit_rule ("escapeChar_lineFeed");
},
escapeChar_carriageReturn : function (_73,) {
enter_rule ("escapeChar_carriageReturn");
    set_return (`${_73.rwr ()}`);
return exit_rule ("escapeChar_carriageReturn");
},
escapeChar_tab : function (_74,) {
enter_rule ("escapeChar_tab");
    set_return (`${_74.rwr ()}`);
return exit_rule ("escapeChar_tab");
},
escapeChar_unicodeCodePoint : function (_75,hexDigit,hexDigit2,hexDigit3,hexDigit4,hexDigit5,hexDigit6,_76,) {
enter_rule ("escapeChar_unicodeCodePoint");
    set_return (`${_75.rwr ()}${hexDigit.rwr ()}${hexDigit2.rwr ().join ('')}${hexDigit3.rwr ().join ('')}${hexDigit4.rwr ().join ('')}${hexDigit5.rwr ().join ('')}${hexDigit6.rwr ().join ('')}${_76.rwr ()}`);
return exit_rule ("escapeChar_unicodeCodePoint");
},
escapeChar_unicodeEscape : function (_77,hexDigit,hexDigit2,hexDigit3,hexDigit4,) {
enter_rule ("escapeChar_unicodeEscape");
    set_return (`${_77.rwr ()}${hexDigit.rwr ()}${hexDigit2.rwr ()}${hexDigit3.rwr ()}${hexDigit4.rwr ()}`);
return exit_rule ("escapeChar_unicodeEscape");
},
escapeChar_hexEscape : function (_78,hexDigit,hexDigit2,) {
enter_rule ("escapeChar_hexEscape");
    set_return (`${_78.rwr ()}${hexDigit.rwr ()}${hexDigit2.rwr ()}`);
return exit_rule ("escapeChar_hexEscape");
},
space : function (comment,) {
enter_rule ("space");
    set_return (`${comment.rwr ()}`);
return exit_rule ("space");
},
comment_singleLine : function (_79,any,_82,) {
enter_rule ("comment_singleLine");
    set_return (`${_79.rwr ()}${any.rwr ().join ('')}${_82.rwr ()}`);
return exit_rule ("comment_singleLine");
},
comment_multiLine : function (_83,any,_85,) {
enter_rule ("comment_multiLine");
    set_return (`${_83.rwr ()}${any.rwr ().join ('')}${_85.rwr ()}`);
return exit_rule ("comment_multiLine");
},
tokens : function (token,) {
enter_rule ("tokens");
    set_return (`${token.rwr ().join ('')}`);
return exit_rule ("tokens");
},
token : function (_86,) {
enter_rule ("token");
    set_return (`${_86.rwr ()}`);
return exit_rule ("token");
},
operator : function (_96,) {
enter_rule ("operator");
    set_return (`${_96.rwr ()}`);
return exit_rule ("operator");
},
punctuation : function (_101,) {
enter_rule ("punctuation");
    set_return (`${_101.rwr ()}`);
return exit_rule ("punctuation");
},
NemptyListOf : function (elem,_102,) {
enter_rule ("NemptyListOf");
    set_return (`${elem.rwr ()}${_102.rwr ().join ('')}`);
return exit_rule ("NemptyListOf");
},
NemptyListOf2 : function (sep,elem,) {
enter_rule ("NemptyListOf2");
    set_return (`${sep.rwr ()}${elem.rwr ()}`);
return exit_rule ("NemptyListOf2");
},
NonemptyListOf : function (x,) {
enter_rule ("NonemptyListOf");
    set_return (`${x.rwr ()}`);
return exit_rule ("NonemptyListOf");
},
_terminal: function () { return this.sourceString; },
_iter: function (...children) { return children.map(c => c.rwr ()); }
}
