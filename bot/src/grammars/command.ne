@preprocessor typescript

# preprocessors
@{% const join = ([letters]: Array<string[]>): string => letters.join(''); %}
@{% const quotedSentence = ([q1, sentenceArray, q2]: string[]): string => sentenceArray; %}

# Macros
word[wtype] 	  -> $wtype:+ {% join %} # allows for a word of the type given

# nonterminals
command 		    -> namespace:? signature argument:*     {% ([namespace, command, args]) => ({namespace, command, args }) %}
namespace	      -> word[alphanumeric] ":"		            {% id %}
signature	      -> word[alphanumeric]			              {% id %}
argument	      -> __ ( 
                  word[alphnumsym]                      {% id %} 
                  | dqsentence                          {% id %} 
                  )                                     {% ([_, x]) => x %}
dqsentence      -> "\"" word[alphnumsymws] "\""         {% (m) => m[1] %}
alphnumsymws	  -> alphanumeric | symbol | __	          {% id %}
alphnumsym      -> alphanumeric | symbol			          {% id %}
alphanumeric 	  -> [a-zA-Z0-9] 			                    {% id %}
symbol		      -> [<>,.\\\/?#$%^&*+=@!'~\-:;|_]        {% id %} # matches < > , . \ / ? # $ % ^ & * + = @ ! ~ - : ;
__ 			        -> " "