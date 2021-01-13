// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var $$Set = require("bs-platform/lib/js/set.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Cmdliner_manpage = require("./cmdliner_manpage.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var c = [0];

function new_id() {
  var id = c[0];
  c[0] = c[0] + 1 | 0;
  if (id > c[0]) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "cmdliner_info.ml",
            12,
            28
          ]
        ];
  } else {
    return id;
  }
}

function env($staropt$star, $staropt$star$1, env_var) {
  var env_docs = $staropt$star ? $staropt$star[0] : Cmdliner_manpage.s_environment;
  var env_doc = $staropt$star$1 ? $staropt$star$1[0] : "See option $(opt).";
  return /* record */[
          /* env_id */new_id(/* () */0),
          /* env_var */env_var,
          /* env_doc */env_doc,
          /* env_docs */env_docs
        ];
}

function env_var(e) {
  return e[/* env_var */1];
}

function env_doc(e) {
  return e[/* env_doc */2];
}

function env_docs(e) {
  return e[/* env_docs */3];
}

function compare(a0, a1) {
  return Caml_primitive.caml_int_compare(a0[/* env_id */0], a1[/* env_id */0]);
}

var Env = /* module */[/* compare */compare];

var Envs = $$Set.Make(Env);

function pos(pos_rev, pos_start, pos_len) {
  return /* record */[
          /* pos_rev */pos_rev,
          /* pos_start */pos_start,
          /* pos_len */pos_len
        ];
}

function pos_rev(p) {
  return p[/* pos_rev */0];
}

function pos_start(p) {
  return p[/* pos_start */1];
}

function pos_len(p) {
  return p[/* pos_len */2];
}

var dumb_pos = /* record */[
  /* pos_rev : false */0,
  /* pos_start */-1,
  /* pos_len : None */0
];

function arg(docs, $staropt$star, $staropt$star$1, env, names) {
  var docv = $staropt$star ? $staropt$star[0] : "";
  var doc = $staropt$star$1 ? $staropt$star$1[0] : "";
  var dash = function (n) {
    if (n.length === 1) {
      return "-" + n;
    } else {
      return "--" + n;
    }
  };
  var opt_names = List.map(dash, names);
  var docs$1 = docs ? docs[0] : (
      names ? Cmdliner_manpage.s_options : Cmdliner_manpage.s_arguments
    );
  return /* record */[
          /* id */new_id(/* () */0),
          /* absent : Val */[""],
          /* env */env,
          /* doc */doc,
          /* docv */docv,
          /* docs */docs$1,
          /* pos */dumb_pos,
          /* opt_kind : Flag */0,
          /* opt_names */opt_names,
          /* opt_all : false */0
        ];
}

function arg_id(a) {
  return a[/* id */0];
}

function arg_absent(a) {
  return a[/* absent */1];
}

function arg_env(a) {
  return a[/* env */2];
}

function arg_doc(a) {
  return a[/* doc */3];
}

function arg_docv(a) {
  return a[/* docv */4];
}

function arg_docs(a) {
  return a[/* docs */5];
}

function arg_pos(a) {
  return a[/* pos */6];
}

function arg_opt_kind(a) {
  return a[/* opt_kind */7];
}

function arg_opt_names(a) {
  return a[/* opt_names */8];
}

function arg_opt_name_sample(a) {
  var _param = a[/* opt_names */8];
  while(true) {
    var param = _param;
    if (param) {
      var n = param[0];
      if (n.length > 2) {
        return n;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return List.hd(a[/* opt_names */8]);
    }
  };
}

function arg_make_req(a) {
  var newrecord = a.slice();
  newrecord[/* absent */1] = /* Err */0;
  return newrecord;
}

function arg_make_all_opts(a) {
  var newrecord = a.slice();
  newrecord[/* opt_all */9] = /* true */1;
  return newrecord;
}

function arg_make_opt(absent, opt_kind, a) {
  var newrecord = a.slice();
  newrecord[/* absent */1] = absent;
  newrecord[/* opt_kind */7] = opt_kind;
  return newrecord;
}

function arg_make_opt_all(absent, opt_kind, a) {
  var newrecord = a.slice();
  newrecord[/* absent */1] = absent;
  newrecord[/* opt_kind */7] = opt_kind;
  newrecord[/* opt_all */9] = /* true */1;
  return newrecord;
}

function arg_make_pos(pos, a) {
  var newrecord = a.slice();
  newrecord[/* pos */6] = pos;
  return newrecord;
}

function arg_make_pos_abs(absent, pos, a) {
  var newrecord = a.slice();
  newrecord[/* absent */1] = absent;
  newrecord[/* pos */6] = pos;
  return newrecord;
}

function arg_is_opt(a) {
  return +(a[/* opt_names */8] !== /* [] */0);
}

function arg_is_pos(a) {
  return +(a[/* opt_names */8] === /* [] */0);
}

function arg_is_req(a) {
  return +(a[/* absent */1] === /* Err */0);
}

function arg_pos_cli_order(a0, a1) {
  var c = Caml_primitive.caml_int_compare(a0[/* pos */6][/* pos_rev */0], a1[/* pos */6][/* pos_rev */0]);
  if (c !== 0) {
    return c;
  } else if (a0[/* pos */6][/* pos_rev */0]) {
    return Caml_primitive.caml_int_compare(a1[/* pos */6][/* pos_start */1], a0[/* pos */6][/* pos_start */1]);
  } else {
    return Caml_primitive.caml_int_compare(a0[/* pos */6][/* pos_start */1], a1[/* pos */6][/* pos_start */1]);
  }
}

function rev_arg_pos_cli_order(a0, a1) {
  return arg_pos_cli_order(a1, a0);
}

function compare$1(a0, a1) {
  return Caml_primitive.caml_int_compare(a0[/* id */0], a1[/* id */0]);
}

var Arg = /* module */[/* compare */compare$1];

var Args = $$Set.Make(Arg);

function exit($staropt$star, $staropt$star$1, max, min) {
  var exit_docs = $staropt$star ? $staropt$star[0] : Cmdliner_manpage.s_exit_status;
  var exit_doc = $staropt$star$1 ? $staropt$star$1[0] : "undocumented";
  var max$1 = max ? max[0] : min;
  return /* record */[
          /* exit_statuses : tuple */[
            min,
            max$1
          ],
          /* exit_doc */exit_doc,
          /* exit_docs */exit_docs
        ];
}

function exit_statuses(e) {
  return e[/* exit_statuses */0];
}

function exit_doc(e) {
  return e[/* exit_doc */1];
}

function exit_docs(e) {
  return e[/* exit_docs */2];
}

function exit_order(e0, e1) {
  return Caml_obj.caml_compare(e0[/* exit_statuses */0], e1[/* exit_statuses */0]);
}

function term($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, $staropt$star$6, $staropt$star$7, term_version, term_name) {
  var term_args = $staropt$star ? $staropt$star[0] : Args[/* empty */0];
  var term_man_xrefs = $staropt$star$1 ? $staropt$star$1[0] : /* [] */0;
  var term_man = $staropt$star$2 ? $staropt$star$2[0] : /* [] */0;
  var term_envs = $staropt$star$3 ? $staropt$star$3[0] : /* [] */0;
  var term_exits = $staropt$star$4 ? $staropt$star$4[0] : /* [] */0;
  var term_sdocs = $staropt$star$5 ? $staropt$star$5[0] : Cmdliner_manpage.s_options;
  var term_docs = $staropt$star$6 ? $staropt$star$6[0] : "COMMANDS";
  var term_doc = $staropt$star$7 ? $staropt$star$7[0] : "";
  var term_info = /* record */[
    /* term_name */term_name,
    /* term_version */term_version,
    /* term_doc */term_doc,
    /* term_docs */term_docs,
    /* term_sdocs */term_sdocs,
    /* term_exits */term_exits,
    /* term_envs */term_envs,
    /* term_man */term_man,
    /* term_man_xrefs */term_man_xrefs
  ];
  return /* record */[
          /* term_info */term_info,
          /* term_args */term_args
        ];
}

function term_name(t) {
  return t[/* term_info */0][/* term_name */0];
}

function term_version(t) {
  return t[/* term_info */0][/* term_version */1];
}

function term_doc(t) {
  return t[/* term_info */0][/* term_doc */2];
}

function term_docs(t) {
  return t[/* term_info */0][/* term_docs */3];
}

function term_stdopts_docs(t) {
  return t[/* term_info */0][/* term_sdocs */4];
}

function term_exits(t) {
  return t[/* term_info */0][/* term_exits */5];
}

function term_envs(t) {
  return t[/* term_info */0][/* term_envs */6];
}

function term_man(t) {
  return t[/* term_info */0][/* term_man */7];
}

function term_man_xrefs(t) {
  return t[/* term_info */0][/* term_man_xrefs */8];
}

function term_args(t) {
  return t[/* term_args */1];
}

function term_add_args(t, args) {
  return /* record */[
          /* term_info */t[/* term_info */0],
          /* term_args */Curry._2(Args[/* union */6], args, t[/* term_args */1])
        ];
}

function $$eval(term, main, choices, env) {
  return /* record */[
          /* term */term,
          /* main */main,
          /* choices */choices,
          /* env */env
        ];
}

function eval_term(e) {
  return e[/* term */0];
}

function eval_main(e) {
  return e[/* main */1];
}

function eval_choices(e) {
  return e[/* choices */2];
}

function eval_env_var(e, v) {
  return Curry._1(e[/* env */3], v);
}

function eval_kind(ei) {
  if (ei[/* choices */2]) {
    if (ei[/* term */0][/* term_info */0][/* term_name */0] === ei[/* main */1][/* term_info */0][/* term_name */0]) {
      return /* Multiple_main */-91404312;
    } else {
      return /* Multiple_sub */491021489;
    }
  } else {
    return /* Simple */-317491118;
  }
}

function eval_with_term(ei, term) {
  return /* record */[
          /* term */term,
          /* main */ei[/* main */1],
          /* choices */ei[/* choices */2],
          /* env */ei[/* env */3]
        ];
}

function eval_has_choice(e, cmd) {
  var is_cmd = function (t) {
    return +(t[/* term_info */0][/* term_name */0] === cmd);
  };
  return List.exists(is_cmd, e[/* choices */2]);
}

exports.env = env;
exports.env_var = env_var;
exports.env_doc = env_doc;
exports.env_docs = env_docs;
exports.Env = Env;
exports.Envs = Envs;
exports.pos = pos;
exports.pos_rev = pos_rev;
exports.pos_start = pos_start;
exports.pos_len = pos_len;
exports.arg = arg;
exports.arg_id = arg_id;
exports.arg_absent = arg_absent;
exports.arg_env = arg_env;
exports.arg_doc = arg_doc;
exports.arg_docv = arg_docv;
exports.arg_docs = arg_docs;
exports.arg_opt_names = arg_opt_names;
exports.arg_opt_name_sample = arg_opt_name_sample;
exports.arg_opt_kind = arg_opt_kind;
exports.arg_pos = arg_pos;
exports.arg_make_req = arg_make_req;
exports.arg_make_all_opts = arg_make_all_opts;
exports.arg_make_opt = arg_make_opt;
exports.arg_make_opt_all = arg_make_opt_all;
exports.arg_make_pos = arg_make_pos;
exports.arg_make_pos_abs = arg_make_pos_abs;
exports.arg_is_opt = arg_is_opt;
exports.arg_is_pos = arg_is_pos;
exports.arg_is_req = arg_is_req;
exports.arg_pos_cli_order = arg_pos_cli_order;
exports.rev_arg_pos_cli_order = rev_arg_pos_cli_order;
exports.Arg = Arg;
exports.Args = Args;
exports.exit = exit;
exports.exit_statuses = exit_statuses;
exports.exit_doc = exit_doc;
exports.exit_docs = exit_docs;
exports.exit_order = exit_order;
exports.term = term;
exports.term_name = term_name;
exports.term_version = term_version;
exports.term_doc = term_doc;
exports.term_docs = term_docs;
exports.term_stdopts_docs = term_stdopts_docs;
exports.term_exits = term_exits;
exports.term_envs = term_envs;
exports.term_man = term_man;
exports.term_man_xrefs = term_man_xrefs;
exports.term_args = term_args;
exports.term_add_args = term_add_args;
exports.$$eval = $$eval;
exports.eval_term = eval_term;
exports.eval_main = eval_main;
exports.eval_choices = eval_choices;
exports.eval_env_var = eval_env_var;
exports.eval_kind = eval_kind;
exports.eval_with_term = eval_with_term;
exports.eval_has_choice = eval_has_choice;
/* Envs Not a pure module */
