// Banco de dados simulado de sinônimos
const bancoDeSinonimos = {
  //A
  "amável": ["gentil", "cordial", "simpático", "afável", "educado"],
  "alegre": ["feliz", "contente", "jovial", "animado", "sorridente"],
  "ágil": ["rápido", "veloz", "ligeiro", "dinâmico", "pronto"],
  "autêntico": ["genuíno", "verdadeiro", "original", "legítimo", "real"],
  "aventureiro": ["ousado", "destemido", "corajoso", "intrépido", "explorador"],
  "astuto": ["sagaz", "perspicaz", "inteligente", "esperto", "discreto"],
  "altruísta": ["solidário", "generoso", "benevolente", "caridoso", "humanitário"],
  "agradável": ["prazeroso", "agradado", "aprazível", "encantador", "simpático"],
  "afável": ["amável", "gentil", "cordial", "simpático", "educado"],
  "ambicioso": ["desejoso", "aspirante", "competitivo", "proativo", "empreendedor"],
  "abundante": ["copioso", "profuso", "rico", "exuberante", "farto"],
  "arrogante": ["presunçoso", "soberbo", "vaidoso", "prepotente", "altivo"],
  "amargo": ["ácido", "azedo", "ranzinza", "áspero", "desagradável"],
  "atento": ["observador", "vigilante", "concentrado", "cuidadoso", "zeloso"],
  "admirável": ["notável", "digno", "respeitável", "impressionante", "louvável"],
  "artístico": ["criativo", "estético", "talentoso", "inspirado", "expressivo"],
  "assustador": ["medonho", "horrível", "terrível", "atemorizante", "pavoroso"],
  "amplo": ["extenso", "grande", "vasto", "amplo", "amplo"],
  "antigo": ["velho", "arcaico", "passado", "remoto", "histórico"],
  "absoluto": ["total", "completo", "pleno", "inteiro", "íntegro"],
  "atemporal": ["eterno", "imortal", "perene", "perpétuo", "sempre atual"],
  "azedo": ["ácido", "amargo", "sour", "ácido", "sour"],
  "apavorado": ["assustado", "medroso", "apavorado", "aterrorizado", "aterrorizado"],
  "amassado": ["distorcido", "amassado", "distorcido", "distorcido", "distorcido"],
  "autossuficiente": ["independente", "autônomo", "autossuficiente", "independente", "independente"],
  "adorável": ["encantador", "cativante", "charmoso", "adorável", "adorável"],
  "assíduo": ["frequente", "constante", "regular", "assíduo", "assíduo"],
  "atrevido": ["ousado", "audacioso", "arrojado", "atrevido", "atrevido"],
  "apático": ["indiferente", "desinteressado", "apatético", "apatético", "apatético"],
  //B
  "bom": ["ótimo", "excelente", "positivo", "virtuoso", "benéfico"],
  "belo": ["bonito", "formoso", "atraente", "encantador", "lindo"],
  "bravo": ["corajoso", "valente", "destemido", "audaz", "intrépido"],
  "bondoso": ["generoso", "amável", "benevolente", "compassivo", "caridoso"],
  "barulhento": ["ruidoso", "estrondoso", "alto", "estridente", "ensurdecedor"],
  "burro": ["ignorante", "estúpido", "tolo", "lerdo", "tapado"],
  "brilhante": ["luminoso", "radiante", "resplandecente", "esplêndido", "genial"],
  "banal": ["comum", "trivial", "ordinário", "vulgar", "corriqueiro"],
  "breve": ["rápido", "curto", "conciso", "efêmero", "momentâneo"],
  "bondade": ["benevolência", "generosidade", "caridade", "compaixão", "humanidade"],
  "bizarro": ["estranho", "esquisito", "inusitado", "excêntrico", "peculiar"],
  "básico": ["fundamental", "elementar", "primário", "essencial", "nuclear"],
  "benevolente": ["altruísta", "compassivo", "caridoso", "amável", "bondoso"],
  "barato": ["acessível", "econômico", "em conta", "modesto", "reduzido"],
  "bonito": ["belo", "atraente", "formoso", "encantador", "lindo"],
  "benefício": ["vantagem", "lucro", "ganho", "proveito", "utilidade"],
  "bêbado": ["embriagado", "alcoolizado", "tonto", "ébrio", "borracho"],
  "bagunçado": ["desorganizado", "desordenado", "confuso", "caótico", "atrapalhado"],
  "bastante": ["muito", "suficiente", "abundante", "considerável", "razoável"],
  "brando": ["suave", "leve", "moderado", "meigo", "tênue"],
  "bruto": ["áspero", "rude", "grosseiro", "selvagem", "não refinado"],
  "belo": ["bonito", "formoso", "atraente", "encantador", "lindo"],
  "bastão": ["cajado", "vara", "bastão de apoio", "canudo", "varinha"],
  "branco": ["alvo", "neve", "claro", "esbranquiçado", "purificado"],
  "brincalhão": ["divertido", "engraçado", "travesso", "jocoso", "malicioso"],
  "bizarro": ["estranho", "esquisito", "inusitado", "excêntrico", "peculiar"],
  "balançado": ["oscillado", "inclinável", "vibrante", "flutuante", "tremido"],
  "banido": ["proibido", "excluído", "desterrado", "expulso", "rejeitado"],
  "bando": ["grupo", "turma", "gangue", "clique", "comunidade"],
  "bajulador": ["lisonjeiro", "adulador", "flatter", "suplicante", "puxa-saco"],
  "barato": ["acessível", "econômico", "em conta", "modesto", "reduzido"],
  "bravura": ["coragem", "valentia", "ousadia", "destreza", "intrepidez"],
  "bancário": ["financeiro", "de banco", "relativo a finanças", "investidor", "escriturário"],
  "bilionário": ["milionário", "riqueza", "fortuna", "superrico", "opulento"],
  "benéfico": ["favorável", "proveitoso", "positivo", "útil", "vantajoso"],
  "beneficiário": ["recebedor", "destinatário", "aquinhoado", "beneficiado", "acessante"],
  "bastardo": ["ilegítimo", "não reconhecido", "não legítimo", "fora do casamento", "desprovido de paternidade"],
  "bravamente": ["corajosamente", "valentemente", "audaciosamente", "destemidamente", "intrépido"],
  "boca": ["lábio", "abertura", "entradas", "orifício", "orifício bucal"],
  "barulho": ["ruído", "som", "estrondo", "grito", "ruidosidade"],
  "bizarro": ["estranho", "peculiar", "inusitado", "excêntrico", "surpreendente"],
  "bóia": ["flutuante", "prancha", "flutuador", "colete", "flutuante"],
  "banalidade": ["comum", "trivial", "vulgar", "ordinariedade", "rotineiro"],
  "batalha": ["conflito", "guerra", "luta", "disputa", "combate"],
  "beleza": ["elegância", "graciosidade", "fascínio", "deslumbramento", "formosura"],
  "banco": ["entidade financeira", "caixa", "instituição bancária", "agência", "tesouraria"],
  //C
  "calmo": ["tranquilo", "sereno", "sossegado", "pacato", "quieto"],
  "corajoso": ["valente", "intrépido", "destemido", "audacioso", "ousado"],
  "claro": ["luminoso", "nítido", "evidente", "transparente", "brilhante"],
  "criativo": ["inventivo", "imaginativo", "original", "inovador", "artístico"],
  "cansado": ["exausto", "fatigado", "esgotado", "abatido", "entorpecido"],
  "carinhoso": ["afetuoso", "meigo", "amável", "afável", "ternurento"],
  "correto": ["certo", "exato", "preciso", "justo", "adequado"],
  "comum": ["frequente", "habitual", "corriqueiro", "ordinário", "trivial"],
  "chato": ["entediante", "monótono", "aborrecido", "desagradável", "enfadonho"],
  "curioso": ["inquisitivo", "interessado", "investigador", "indagador", "questionador"],
  "complicado": ["difícil", "complexo", "intricado", "confuso", "delicado"],
  "certo": ["correto", "verdadeiro", "justo", "adequado", "preciso"],
  "cativante": ["encantador", "atraente", "fascinante", "sedutor", "envolvente"],
  "caro": ["dispendioso", "oneroso", "custoso", "elevado", "precioso"],
  "conhecido": ["famoso", "popular", "célebre", "notório", "reconhecido"],
  "cuidadoso": ["zeloso", "atento", "vigilante", "minucioso", "meticuloso"],
  "constante": ["contínuo", "frequente", "regular", "ininterrupto", "persistente"],
  "confiante": ["seguro", "otimista", "esperançoso", "firme", "resoluto"],
  "cómico": ["engraçado", "divertido", "hilário", "cômico", "caricato"],
  "confortável": ["acolhedor", "aconchegante", "agradável", "comodado", "relaxante"],
  //D
  "doce": ["açucarado", "melado", "suave", "meigo", "agradável"],
  "difícil": ["complicado", "complexo", "árduo", "trabalhoso", "desafiador"],
  "decidido": ["resoluto", "determinado", "firme", "convicto", "seguro"],
  "delicado": ["sensível", "frágil", "suave", "sutil", "refinado"],
  "duro": ["rígido", "resistente", "firme", "áspero", "sólido"],
  "doente": ["enfermo", "adoentado", "enfraquecido", "indisposto", "convalescente"],
  "dócil": ["manso", "obediente", "submisso", "tranquilo", "pacífico"],
  "desonesto": ["mentiroso", "corrupto", "trapaceiro", "fraudulento", "enganador"],
  "divertido": ["engraçado", "alegre", "animado", "cômico", "descontraído"],
  "desorganizado": ["bagunçado", "confuso", "desordenado", "caótico", "impreciso"],
  "determinado": ["firme", "decidido", "resoluto", "convicto", "persistente"],
  "desatento": ["distraído", "negligente", "descuidado", "relapso", "inadvertido"],
  "discreto": ["reservado", "comedido", "moderado", "prudente", "contido"],
  "duvidoso": ["incerto", "questionável", "inseguro", "ambíguo", "suspeito"],
  "desesperado": ["aflito", "angustiado", "atormentado", "abatido", "inconsolável"],
  "decente": ["honesto", "digno", "respeitável", "íntegro", "honrado"],
  "desleixado": ["relaxado", "negligente", "descuidado", "desorganizado", "preguiçoso"],
  "diferente": ["diverso", "distinto", "variado", "desigual", "singular"],
  "direto": ["reto", "objetivo", "franco", "linear", "claro"],
  "duradouro": ["permanente", "constante", "estável", "prolongado", "longevo"],
  //E
  "elegante": ["chique", "requintado", "sofisticado", "fino", "distinto"],
  "esperto": ["inteligente", "astuto", "sagaz", "rápido", "habilidoso"],
  "estranho": ["esquisito", "inusitado", "peculiar", "bizarro", "excêntrico"],
  "eficiente": ["competente", "produtivo", "capaz", "eficaz", "útil"],
  "educado": ["cortês", "polido", "respeitoso", "gentil", "civilizado"],
  "enorme": ["grande", "gigante", "imensurável", "vasto", "gigantesco"],
  "esforçado": ["dedicado", "aplicado", "trabalhador", "empenhado", "persistente"],
  "esperançoso": ["otimista", "confiante", "positivo", "animado", "encorajado"],
  "especial": ["único", "diferenciado", "singular", "exclusivo", "notável"],
  "emocionado": ["comovido", "sensibilizado", "tocado", "sentido", "enternecido"],
  "egoísta": ["egocêntrico", "individualista", "interesseiro", "autocentrado", "narcisista"],
  "efêmero": ["passageiro", "temporário", "transitório", "momentâneo", "breve"],
  "entusiasmado": ["animado", "empolgado", "motivado", "exaltado", "alegre"],
  "exato": ["preciso", "correto", "rigoroso", "fiel", "pontual"],
  "estrito": ["rígido", "rigoroso", "limitado", "restrito", "severo"],
  "envergonhado": ["tímido", "acanhado", "constrangido", "sem graça", "embaraçado"],
  "exigente": ["rigoroso", "detalhista", "severo", "perfeccionista", "criterioso"],
  "elevado": ["alto", "superior", "nobre", "relevante", "grandioso"],
  "escuro": ["sombrio", "obscuro", "apagado", "nebuloso", "negruzco"],
  "essencial": ["fundamental", "necessário", "vital", "básico", "primordial"],
  //F
  "feliz": ["contente", "alegre", "satisfeito", "radiante", "jubiloso"],
  "forte": ["resistente", "robusto", "vigoroso", "potente", "valente"],
  "fácil": ["simples", "acessível", "compreensível", "descomplicado", "elementar"],
  "fraco": ["débil", "frágil", "vulnerável", "tenue", "insuficiente"],
  "famoso": ["conhecido", "célebre", "popular", "notório", "renomado"],
  "fiel": ["leal", "constante", "dedicado", "honesto", "íntegro"],
  "feio": ["desagradável", "horrível", "repulsivo", "esquisito", "deformado"],
  "fresco": ["frio", "gelado", "recente", "novo", "revigorante"],
  "falso": ["mentiroso", "enganoso", "impreciso", "hipócrita", "fraudulento"],
  "furioso": ["irritado", "enfurecido", "colérico", "bravo", "raivoso"],
  "firme": ["sólido", "resoluto", "seguro", "estável", "decidido"],
  "flexível": ["maleável", "adaptável", "ajustável", "versátil", "moldável"],
  "fantástico": ["incrível", "extraordinário", "espetacular", "maravilhoso", "sensacional"],
  "folgado": ["relaxado", "preguiçoso", "indolente", "acomodado", "despreocupado"],
  "formoso": ["bonito", "belo", "encantador", "gracioso", "atraente"],
  "farto": ["abundante", "cheio", "repleto", "saciado", "generoso"],
  "firmeza": ["estabilidade", "segurança", "constância", "resistência", "determinação"],
  "fácil": ["simples", "descomplicado", "claro", "básico", "elementar"],
  "frequente": ["constante", "repetido", "habitual", "comum", "recorrente"],
  "furto": ["roubo", "subtração", "assalto", "apropriação", "crime"],
  //G
  "grande": ["enorme", "gigante", "vasto", "extenso", "amplo"],
  "gentil": ["amável", "cordial", "educado", "atencioso", "afável"],
  "generoso": ["altruísta", "solidário", "caridoso", "benevolente", "bondoso"],
  "grosso": ["espesso", "robusto", "forte", "pesado", "rude"],
  "grato": ["agradecido", "reconhecido", "obrigado", "satisfeito", "contente"],
  "gostoso": ["saboroso", "delicioso", "apetitoso", "agradável", "prazeroso"],
  "glorioso": ["vitorioso", "triunfante", "honroso", "majestoso", "resplandecente"],
  "genuíno": ["autêntico", "verdadeiro", "real", "legítimo", "original"],
  "grave": ["sério", "crítico", "perigoso", "importante", "urgente"],
  "gelado": ["frio", "congelado", "gélido", "fresco", "refrigerado"],
  "gozador": ["brincalhão", "zombeteiro", "engraçado", "irreverente", "sarcástico"],
  "ganancioso": ["ambicioso", "avarento", "cobiçoso", "interesseiro", "egoísta"],
  "grosseiro": ["rude", "áspero", "mal-educado", "bruto", "descortês"],
  "glacial": ["gélido", "frio", "gelado", "polar", "árctico"],
  "gigante": ["enorme", "colossal", "imensurável", "vasto", "monstruoso"],
  "garboso": ["vistoso", "elegante", "formoso", "imponente", "aprumado"],
  "galante": ["cortês", "educado", "amável", "cavalheiro", "cordial"],
  "gritante": ["evidente", "marcante", "notório", "chocante", "ostensivo"],
  "gastador": ["esbanjador", "prodigal", "descontrolado", "dissipador", "imprudente"],
  "governável": ["controlável", "administrável", "dominável", "submisso", "disciplinado"],
  //H
  "honesto": ["íntegro", "justo", "sincero", "decente", "leal"],
  "humilde": ["modesto", "simples", "recatado", "despretensioso", "respeitoso"],
  "honrado": ["digno", "respeitável", "valoroso", "virtuoso", "ilustre"],
  "habilidoso": ["capaz", "competente", "ágil", "talentoso", "eficiente"],
  "horrível": ["terrível", "assustador", "medonho", "pavoroso", "repulsivo"],
  "heróico": ["valente", "corajoso", "bravo", "destemido", "nobre"],
  "hábil": ["esperto", "inteligente", "astuto", "ágil", "eficaz"],
  "honra": ["respeito", "dignidade", "glória", "prestígio", "valor"],
  "higiênico": ["limpo", "saudável", "sanitário", "asseado", "salubre"],
  "honestidade": ["retidão", "integridade", "decência", "lealdade", "transparência"],
  "hostil": ["agressivo", "antipático", "ríspido", "áspero", "inamistoso"],
  "hesitante": ["indeciso", "vacilante", "inseguro", "tímido", "relutante"],
  "habitual": ["frequente", "constante", "rotineiro", "comum", "regular"],
  "harmonioso": ["equilibrado", "agradável", "consonante", "suave", "simétrico"],
  "hipócrita": ["falso", "disfarçado", "enganador", "mentiroso", "duas caras"],
  "horrendo": ["horrível", "terrível", "assustador", "espantoso", "medonho"],
  "histórico": ["antigo", "memorável", "marcante", "lendário", "importante"],
  "humorístico": ["cômico", "engraçado", "divertido", "hilário", "sarcástico"],
  "honrando": ["valorizando", "respeitando", "prestigiando", "reconhecendo", "glorificando"],
  "harmonia": ["equilíbrio", "paz", "união", "consonância", "entendimento"],
  //I
  "inteligente": ["esperto", "sagaz", "perspicaz", "brilhante", "genial"],
  "importante": ["relevante", "significativo", "valioso", "essencial", "fundamental"],
  "interessante": ["curioso", "atraente", "cativante", "envolvente", "instigante"],
  "intenso": ["forte", "profundo", "vigoroso", "firme", "marcante"],
  "incrível": ["fantástico", "extraordinário", "surpreendente", "maravilhoso", "espetacular"],
  "ignorante": ["inculto", "desinformado", "analfabeto", "indouto", "burro"],
  "injusto": ["parcial", "desigual", "desonesto", "indevido", "errado"],
  "insistente": ["persistente", "perseverante", "teimoso", "obstinado", "determinado"],
  "incansável": ["persistente", "ativo", "tenaz", "constante", "vigoroso"],
  "imparcial": ["justo", "neutro", "equilibrado", "objetivo", "isento"],
  "inseguro": ["indeciso", "temeroso", "duvidoso", "vacilante", "medroso"],
  "ideal": ["perfeito", "adequado", "excelente", "apropriado", "ótimo"],
  "impossível": ["inviável", "inalcançável", "irrealizável", "inexecutável", "inconcebível"],
  "ilustre": ["famoso", "renomado", "respeitado", "célebre", "reconhecido"],
  "infeliz": ["triste", "abatido", "melancólico", "amargurado", "descontente"],
  "ingênuo": ["inocente", "puro", "simples", "crédulo", "desprevenido"],
  "imediato": ["rápido", "instantâneo", "urgente", "pronto", "instantâneo"],
  "invisível": ["imperceptível", "oculto", "encoberto", "indetectável", "transparente"],
  "ilógico": ["irracional", "incoerente", "absurdo", "sem sentido", "contraditório"],
  "imutável": ["inalterável", "constante", "firme", "permanente", "fixo"],
  //J
  "bom": ["justo", "honesto", "íntegro", "correto", "ético"],
  "jovem": ["novo", "adolescente", "juvenil", "imatura", "recentemente nascido"],
  "julgador": ["crítico", "analítico", "preconceituoso", "opinioso", "avaliador"],
  "jovial": ["alegre", "animado", "vibrante", "juvenil", "festivo"],
  "justo": ["honesto", "íntegro", "equilibrado", "imparcial", "correto"],
  "jogado": ["abandonado", "negligenciado", "desprezado", "desconsiderado", "esquecido"],
  "jardineiro": ["horticultor", "paisagista", "cultivador", "plantador", "agricultor"],
  "jovem": ["novo", "adolescente", "imaduro", "iniciante", "recentemente nascido"],
  "jaulado": ["aprisionado", "encarcerado", "confinado", "preso", "restrito"],
  "jovem": ["novo", "adolescente", "imatura", "inexperiente", "fresco"],
  "jurídico": ["legal", "judicial", "legítimo", "oficial", "forense"],
  //K
  "karaokê": ["cantoria", "diversão musical", "show de talentos", "evento musical", "atividade recreativa"],
  "kilograma": ["quilo", "peso", "unidade de medida", "peso em gramas", "unidade de massa"],
  "ketchup": ["molho de tomate", "condimento", "sauce", "molho agridoce", "molho para frituras"],
  "kiwi": ["fruta exótica", "fruta verde", "fruta de polpa", "fruta tropical", "fruta macia"],
  //L
  "lindo": ["bonito", "belo", "formoso", "atraente", "encantador"],
  "lento": ["devagar", "vagaroso", "tardio", "demorado", "morno"],
  "leve": ["suave", "delicado", "fácil", "flutuante", "leve"],
  "longe": ["distante", "afastado", "remoto", "distante", "longínquo"],
  "lucrativo": ["rentável", "vantajoso", "proveitoso", "frutífero", "beneficioso"],
  "lúgubre": ["sombrio", "sinistro", "macabro", "melancólico", "triste"],
  "leal": ["fiel", "honesto", "íntegro", "justo", "sincero"],
  "liso": ["suave", "lisinho", "achatado", "escorregadio", "sem rugas"],
  "luminoso": ["brilhante", "radiante", "iluminado", "resplandecente", "reluzente"],
  "lamentável": ["triste", "desolador", "deplorável", "patético", "miserável"],
  "liberal": ["progressista", "democrático", "tolerante", "aberto", "descomplicado"],
  "liso": ["sem dinheiro", "sem recursos", "pobre", "necessitado", "sem fundos"],
  "ligeiro": ["rápido", "ágil", "veloz", "célere", "despachado"],
  "lúdico": ["divertido", "brincalhão", "recreativo", "alegre", "jocoso"],
  "luxuoso": ["requintado", "sofisticado", "opulento", "esplêndido", "grandioso"],
  "limitado": ["restrito", "enxuto", "reduzido", "escasso", "restritivo"],
  "letal": ["mortal", "fatal", "perigoso", "destruidor", "letal"],
  "lento": ["vagaroso", "demorado", "tardio", "lento", "gradual"],
  //M
  "muito": ["bastante", "extremamente", "consideravelmente", "significativamente", "profundamente"],
  "mágico": ["encantado", "sobrenatural", "extraordinário", "maravilhoso", "incrível"],
  "maior": ["superior", "mais grande", "mais elevado", "mais alto", "mais importante"],
  "médico": ["doutor", "especialista", "profissional de saúde", "terapeuta", "clínico"],
  "manso": ["calmo", "tranquilo", "suave", "sereno", "pacífico"],
  "misterioso": ["enigmático", "misterioso", "esotérico", "oculto", "incompreensível"],
  "magnífico": ["grandioso", "esplêndido", "maravilhoso", "deslumbrante", "incrível"],
  "moderno": ["contemporâneo", "atual", "inovador", "recente", "avançado"],
  "meigo": ["amável", "carinhoso", "afetuoso", "gentil", "doce"],
  "muito": ["excessivamente", "enormemente", "demasiadamente", "altamente", "fortemente"],
  "maluco": ["louco", "insano", "pirado", "demente", "perturbado"],
  "maduro": ["crescido", "desenvolvido", "experiente", "sábio", "pronto"],
  "moreno": ["bronzear", "escuro", "queimado", "bronzeado", "da cor do bronze"],
  "membro": ["integrante", "parte", "elemento", "participante", "component"],
  "misterioso": ["enigmático", "oculto", "misterioso", "cifrado", "incompreensível"],
  "mergulhado": ["imerso", "submerso", "afundado", "afogado", "engolido"],
  "magnífico": ["impressionante", "esplêndido", "maravilhoso", "extraordinário", "deslumbrante"],
  //N
  "novo": ["recente", "inovador", "moderno", "atual", "fresco"],
  "natural": ["orgânico", "autêntico", "genuíno", "inato", "próprio"],
  "necessário": ["indispensável", "essencial", "importante", "fundamental", "vital"],
  "negativo": ["desfavorável", "ruim", "contrário", "desaprovado", "nocivo"],
  "nobre": ["ilustre", "digno", "honrado", "respeitável", "distinguir"],
  "notável": ["reconhecido", "importante", "destacado", "singular", "memorável"],
  "normal": ["comum", "habitual", "rotineiro", "regular", "usual"],
  "nervoso": ["ansioso", "agitado", "tenso", "irritado", "preocupado"],
  "nocivo": ["prejudicial", "danoso", "perigoso", "maléfico", "destrutivo"],
  "nítido": ["claro", "visível", "evidente", "luminoso", "definido"],
  "nacional": ["patriótico", "do país", "local", "internacional", "regional"],
  "neutro": ["imparcial", "objetivo", "equilibrado", "sem partido", "sem tendência"],
  "nevoeiro": ["névoa", "bruma", "neblina", "borrifo", "vapores"],
  "nunca": ["jamais", "nunca mais", "em hipótese alguma", "de forma alguma", "em nenhum momento"],
  "notório": ["conhecido", "célebre", "reconhecido", "famoso", "renomado"],
  "nervoso": ["agitado", "ansioso", "irritado", "preocupado", "tenso"],
  //O
  "obrigado": ["grato", "agradecido", "reconhecido", "obrigado", "reconhecido"],
  "obscuro": ["escuro", "sombrio", "difuso", "turbio", "nebuloso"],
  "ordenado": ["organizado", "arrumado", "metódico", "planejado", "arrumado"],
  "obstinado": ["determinado", "teimoso", "persistente", "insistente", "firme"],
  "original": ["autêntico", "genuíno", "único", "inédito", "verdadeiro"],
  "obeso": ["gordo", "pesado", "volumoso", "corpulento", "farto"],
  "ousado": ["corajoso", "audacioso", "valente", "arrojado", "destemido"],
  "ocioso": ["preguiçoso", "inativo", "vadio", "oportuno", "vago"],
  "optimista": ["positivo", "esperançoso", "confiante", "iludido", "animado"],
  "ouvido": ["auditivo", "sensitivo", "sonoro", "acústico", "capaz de ouvir"],
  "oculto": ["escondido", "disfarçado", "encoberto", "misterioso", "invisível"],
  "obrigatório": ["necessário", "imperativo", "exigido", "indispensável", "forçado"],
  "opcional": ["facultativo", "voluntário", "livre", "discricionário", "escolhido"],
  "opaco": ["sem brilho", "fosco", "escuro", "sem transparência", "matte"],
  "otimizado": ["melhorado", "aperfeiçoado", "refinado", "aperfeiçoado", "eficiente"],
  "orgânico": ["natural", "biológico", "ecológico", "vegetal", "vivo"],
  //P
  "próximo": ["perto", "adjacente", "contíguo", "imediato", "vizinho"],
  "positivo": ["favorável", "benéfico", "construtivo", "proficiente", "otimista"],
  "perfeito": ["impecável", "ideal", "excelente", "incrível", "completo"],
  "poderoso": ["forte", "influente", "fortificado", "impotente", "dominante"],
  "pobre": ["necessitado", "carente", "impecúrio", "desfavorecido", "em dificuldades"],
  "preciso": ["exato", "acurado", "detalhado", "exato", "específico"],
  "pesado": ["forte", "denso", "massivo", "robusto", "pesado"],
  "prazeroso": ["agradável", "delicioso", "encantador", "divertido", "satisfatório"],
  "pacífico": ["tranquilo", "calmo", "sereno", "harmonioso", "pacato"],
  "pungente": ["doloroso", "emocionante", "triste", "comovente", "agudo"],
  "prático": ["funcional", "útil", "eficaz", "objetivo", "direto"],
  "potente": ["forte", "poderoso", "intenso", "robusto", "energético"],
  "perigoso": ["arriscado", "risky", "ameaçador", "preocupante", "desafiador"],
  "paciente": ["calmo", "tolerante", "resiliente", "persistente", "controlado"],
  "procurado": ["desejado", "buscado", "cobiçado", "almejado", "ansiado"],
  "promissor": ["esperançoso", "potencial", "favorável", "perspectivo", "positivo"],
  "precioso": ["valioso", "importante", "inestimável", "raro", "singular"],
  "próprio": ["individual", "pertencente", "particular", "adequado", "autêntico"],
  "perturbador": ["inquietante", "desconcertante", "alarmante", "desagradável", "preocupante"],
  //Q
  "quieto": ["calmo", "tranquilo", "sereno", "silencioso", "pacífico"],
  "qualificado": ["habilitado", "competente", "capacitado", "experiente", "aptidão"],
  "quente": ["caloroso", "abrasador", "ardente", "intenso", "fervente"],
  "querido": ["amado", "estimado", "adorado", "precioso", "valioso"],
  "qualquer": ["indiferente", "qualquer um", "qualquer coisa", "qualquer pessoa", "qualquer tipo"],
  "químico": ["biológico", "elementar", "molecular", "químico", "composto"],
  "quantitativo": ["numérico", "medido", "mensurável", "contável", "numeroso"],
  "quebrado": ["deteriorado", "partido", "rompido", "dano", "rachado"],
  "quase": ["aproximadamente", "cerca de", "perto de", "meio que", "próximo de"],
  "qualificado": ["habilitado", "preparado", "capacitado", "especializado", "experiente"],
  "questionável": ["duvidoso", "contestado", "suspeito", "incerto", "ambíguo"],
  //R
  "rápido": ["ligeiro", "veloz", "celere", "imediato", "expedito"],
  "rico": ["abastado", "próspero", "opulento", "fortuna", "afluente"],
  "real": ["verdadeiro", "autêntico", "genuíno", "sincero", "concreto"],
  "ruim": ["mau", "desfavorável", "nocivo", "dano", "imprestável"],
  "respeitável": ["digno", "honrado", "ilustre", "reconhecido", "respeitoso"],
  "relevante": ["importante", "significativo", "notável", "fundamental", "substancial"],
  "rígido": ["duro", "severo", "estrito", "inflexível", "implacável"],
  "radiante": ["brilhante", "resplandecente", "luminoso", "radiante", "reluzente"],
  "raro": ["singular", "extraordinário", "incomum", "único", "excepcional"],
  "resistente": ["forte", "robusto", "duro", "resiliente", "inflexível"],
  "realista": ["prático", "objetivo", "factual", "racional", "equilibrado"],
  "reconhecido": ["respeitado", "distinguido", "reconhecível", "notável", "ilustre"],
  "reformado": ["modificado", "alterado", "renovado", "revigorado", "restaurado"],
  "repetido": ["frequente", "costumeiro", "reiterado", "habitual", "comum"],
  "risonho": ["sorridente", "alegre", "feliz", "animado", "contente"],
  "razoável": ["adequado", "satisfatório", "decente", "aceitável", "razoável"],
  "rancoroso": ["ressentido", "vingativo", "odiado", "amargo", "azedo"],
  //S
  "simples": ["básico", "elementar", "direto", "modesto", "descomplicado"],
  "seguro": ["protegido", "confiável", "estável", "sólido", "blindado"],
  "sincero": ["honesto", "genuíno", "verdadeiro", "franco", "autêntico"],
  "sensível": ["delicado", "emocional", "inteligente", "perceptivo", "receptivo"],
  "suave": ["delicado", "agradável", "suave", "morno", "ameno"],
  "sábio": ["inteligente", "erudito", "astuto", "conhecedor", "sagaz"],
  "sério": ["grave", "importante", "formal", "respeitável", "firme"],
  "simples": ["modesto", "comum", "básico", "elementar", "direto"],
  "sutil": ["delicado", "leve", "intenso", "subtil", "discreto"],
  "suficiente": ["adequado", "satisfatório", "bastante", "apto", "completo"],
  "severo": ["rígido", "estrito", "severo", "dificultoso", "rigoroso"],
  "safado": ["imoral", "desonesto", "vagabundo", "indigno", "sem vergonha"],
  "sensato": ["prudente", "racional", "equilibrado", "ponderado", "coerente"],
  "sucesso": ["vitória", "prosperidade", "realização", "glória", "triunfo"],
  "solidário": ["compreensivo", "empático", "generoso", "altruísta", "benevolente"],
  "simpático": ["amigável", "agradável", "encantador", "gentil", "cativante"],
  "sufocante": ["opressor", "intenso", "pesado", "insuportável", "incomodante"],
  //T
  "tímido": ["reservado", "introvertido", "medroso", "retraído", "apreensivo"],
  "tranquilo": ["calmo", "sereno", "pacífico", "plácido", "descontraído"],
  "terrível": ["horrível", "assustador", "pavoroso", "medonho", "tenso"],
  "tolerante": ["compreensivo", "flexível", "paciente", "aceitante", "respeitoso"],
  "triste": ["melancólico", "abatumado", "deprimido", "desolado", "desanimado"],
  "tenso": ["apertado", "intenso", "rigoroso", "desconfortável", "nervoso"],
  "tentador": ["atraente", "sedutor", "cativante", "invitante", "irresistível"],
  "típico": ["característico", "usual", "comum", "tradicional", "convencional"],
  "tão": ["tanto", "tão grande", "extremo", "muito", "absoluto"],
  "tolerante": ["flexível", "compreensivo", "paciente", "permissivo", "aceitante"],
  "transformador": ["revolucionário", "inovador", "radical", "mudante", "impactante"],
  "triunfante": ["vitorioso", "bem-sucedido", "conquistador", "glorioso", "bem-aventurado"],
  "teimoso": ["obstinado", "persistente", "insistente", "firme", "determinado"],
  "tranquilizador": ["calmante", "relaxante", "aliviador", "suavizante", "apaziguador"],
  "trágico": ["fatal", "lamentável", "desolador", "catastrófico", "desastroso"],
  //U
  "único": ["singular", "exclusivo", "especial", "inimitável", "irrepetível"],
  "usado": ["utilizado", "aproveitado", "exaurido", "exercido", "empregado"],
  "útil": ["prático", "eficaz", "funcional", "vantajoso", "proveitoso"],
  "urgente": ["imediato", "emergencial", "pressante", "crítico", "necessário"],
  "unido": ["coeso", "juntos", "solidário", "integrado", "harmonioso"],
  "único": ["irreplicável", "exclusivo", "singular", "inimitável", "autêntico"],
  "unilateral": ["individual", "isolado", "monolateral", "único", "exclusivo"],
  "universitário": ["acadêmico", "educacional", "cultural", "intelectual", "estudantil"],
  //V
  "verdadeiro": ["genuíno", "autêntico", "real", "sincero", "honesto"],
  "veloz": ["rápido", "ligeiro", "celere", "ágil", "expedito"],
  "vivo": ["ativo", "animado", "dinâmico", "efervescente", "dinâmico"],
  "vasto": ["extenso", "amplo", "grande", "abrangente", "profundo"],
  "vulnerável": ["exposto", "sensível", "fragilizado", "precarizado", "desprotegido"],
  "vazio": ["ocioso", "desabitado", "incompleto", "aberto", "nulo"],
  "valoroso": ["valente", "corajoso", "heróico", "digno", "honroso"],
  "visível": ["perceptível", "evidente", "claro", "manifeste", "notável"],
  "vigoroso": ["forte", "robusto", "energético", "intenso", "saudável"],
  "volúvel": ["instável", "incerto", "variável", "imprevisível", "volátil"],
  "vivo": ["dinâmico", "ativo", "vibrante", "efervescente", "intenso"],
  //W
  "web": ["rede", "internet", "mundo digital", "plataforma", "ambiente virtual"],
  "wellness": ["bem-estar", "saúde", "qualidade de vida", "equilíbrio", "higiene"],
  "workshop": ["oficina", "seminário", "treinamento", "curso", "evento educacional"],
  //X
  "xará": ["homônimo", "igual", "semelhante", "colega", "companheiro"],
  "xenofóbico": ["preconceituoso", "intolerante", "discriminatório", "racista", "excludente"],
  "xixi": ["urina", "micção", "peido", "vazio", "gasto"],
  //Y
  "yoga": ["meditação", "exercício mental", "prática de equilíbrio", "técnica de relaxamento", "disciplinamento espiritual"],
  "youtuber": ["criador de conteúdo", "influenciador digital", "produtor de vídeos", "vlogger", "streamer"],
  //Z
  "zeloso": ["cuidadoso", "atento", "diligente", "precavido", "dedicado"],
  "zangado": ["irritado", "aborrecido", "furioso", "enfurecido", "raivoso"],
  "zoológico": ["parque", "reservatório", "santuário de animais", "centro de preservação", "safári"],
  "zero": ["nulo", "vazio", "nada", "inexistente", "neutro"],
  "zumbido": ["ruído", "som", "barulho", "eco", "vibração"],
  "ziguezague": ["curva", "desvio", "deslocamento", "volta", "balanço"],
  "zéfiros": ["brisa", "vento suave", "ar", "ar fresco", "breeze"]
};
// Modificação 1: Adicionar um objeto para armazenar as substituições
let substituicoes = {};
// 1. Adicione esta variável global logo após a declaração do bancoDeSinonimos
let indiceSinonimos = {};
// 2. Adicione esta função para criar o índice invertido
function atualizarIndiceSinonimos() {
    indiceSinonimos = {};
    Object.keys(bancoDeSinonimos).forEach(palavraPrincipal => {
        bancoDeSinonimos[palavraPrincipal].forEach(sinonimo => {
            indiceSinonimos[sinonimo.toLowerCase()] = palavraPrincipal;
        });
    });
}

// Funções para importar e exportar o dicionário de sinônimos
function exportarSinonimos() {
    // Converter o banco de sinônimos para JSON e fazer download
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bancoDeSinonimos));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "sinonimos.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importarSinonimos(evento) {
    const arquivo = evento.target.files[0];
    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function (e) {
            try {
                const sinonimosImportados = JSON.parse(e.target.result);
                // Substituir ou mesclar com o banco existente
                Object.assign(bancoDeSinonimos, sinonimosImportados);
                alert('Sinônimos importados com sucesso!');
                // Limpar o input de arquivo
                document.getElementById('importarArquivo').value = '';
                // Atualizar qualquer interface que mostre os sinônimos
                atualizarListaSinonimos();
            } catch (erro) {
                alert('Erro ao importar sinônimos: ' + erro.message);
            }
        };
        leitor.readAsText(arquivo);
    }
}

// Funções para gerenciar sinônimos (adicionar, editar, excluir)
function adicionarSinonimo(palavra, sinonimos) {
    if (!palavra || palavra.trim() === '') {
        alert('Por favor, digite uma palavra válida.');
        return false;
    }

    const palavraLower = palavra.toLowerCase().trim();

    // Se a palavra já existe, alertar e não sobrescrever
    if (bancoDeSinonimos[palavraLower] && !confirm(`A palavra "${palavraLower}" já existe. Deseja substituir seus sinônimos?`)) {
        return false;
    }

    // Converter string de sinônimos em array se necessário
    let sinonimosArray = sinonimos;
    if (typeof sinonimos === 'string') {
        sinonimosArray = sinonimos.split(',').map(s => s.trim()).filter(s => s !== '');
    }

    if (!sinonimosArray || sinonimosArray.length === 0) {
        alert('Por favor, adicione pelo menos um sinônimo.');
        return false;
    }

    bancoDeSinonimos[palavraLower] = sinonimosArray;
        // ADICIONE ESTA LINHA
    atualizarIndiceSinonimos();
    return true;
}

function editarSinonimo(palavraAntiga, palavraNova, sinonimos) {
    const palavraAntigaLower = palavraAntiga.toLowerCase().trim();
    const palavraNovaLower = palavraNova.toLowerCase().trim();

    // Verificar se a palavra existe
    if (!bancoDeSinonimos[palavraAntigaLower]) {
        alert(`A palavra "${palavraAntigaLower}" não existe no dicionário.`);
        return false;
    }

    // Se a palavra nova for diferente da antiga e já existir
    if (palavraAntigaLower !== palavraNovaLower &&
        bancoDeSinonimos[palavraNovaLower] &&
        !confirm(`A palavra "${palavraNovaLower}" já existe. Deseja substituir seus sinônimos?`)) {
        return false;
    }

    // Converter string de sinônimos em array se necessário
    let sinonimosArray = sinonimos;
    if (typeof sinonimos === 'string') {
        sinonimosArray = sinonimos.split(',').map(s => s.trim()).filter(s => s !== '');
    }

    // Se a palavra nova for diferente da antiga, excluir a antiga e adicionar a nova
    if (palavraAntigaLower !== palavraNovaLower) {
        delete bancoDeSinonimos[palavraAntigaLower];
    }

    bancoDeSinonimos[palavraNovaLower] = sinonimosArray;
    // ADICIONE ESTA LINHA
    atualizarIndiceSinonimos();
    return true;
}

function excluirSinonimo(palavra) {
    const palavraLower = palavra.toLowerCase().trim();

    if (!bancoDeSinonimos[palavraLower]) {
        alert(`A palavra "${palavraLower}" não existe no dicionário.`);
        return false;
    }

    if (confirm(`Tem certeza que deseja excluir a palavra "${palavraLower}" e seus sinônimos?`)) {
        delete bancoDeSinonimos[palavraLower];
        // ADICIONE ESTA LINHA
        atualizarIndiceSinonimos();
        return true;
    }

    return false;
}

// Função para mostrar todos os sinônimos em uma interface de gerenciamento
function atualizarListaSinonimos() {
    const listaSinonimos = document.getElementById('listaSinonimos');
    if (!listaSinonimos) return;

    listaSinonimos.innerHTML = '';

    // Ordenar as palavras alfabeticamente
    const palavrasOrdenadas = Object.keys(bancoDeSinonimos).sort();

    palavrasOrdenadas.forEach(palavra => {
        const sinonimosTexto = bancoDeSinonimos[palavra].join(', ');

        const divPalavra = document.createElement('div');
        divPalavra.classList.add('item-sinonimo');
        divPalavra.innerHTML = `
            <div class="palavra-principal">${palavra}</div>
            <div class="sinonimos-lista">${sinonimosTexto}</div>
            <div class="acoes">
                <button class="editar-btn" data-palavra="${palavra}">Editar</button>
                <button class="excluir-btn" data-palavra="${palavra}">Excluir</button>
            </div>
        `;

        listaSinonimos.appendChild(divPalavra);
    });

    // Adicionar eventos aos botões
    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            iniciarEdicao(palavra);
        });
    });

    document.querySelectorAll('.excluir-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            if (excluirSinonimo(palavra)) {
                atualizarListaSinonimos();
            }
        });
    });
}

// Função para iniciar a edição de uma palavra
function iniciarEdicao(palavra) {
    const formEditar = document.getElementById('formSinonimos');
    const inputPalavra = document.getElementById('novaPalavra');
    const inputSinonimos = document.getElementById('novosSinonimos');
    const palavraAntigaInput = document.getElementById('palavraAntiga');

    if (!formEditar || !inputPalavra || !inputSinonimos) return;

    inputPalavra.value = palavra;
    inputSinonimos.value = bancoDeSinonimos[palavra].join(', ');

    if (palavraAntigaInput) {
        palavraAntigaInput.value = palavra;
    } else {
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.id = 'palavraAntiga';
        hiddenInput.value = palavra;
        formEditar.appendChild(hiddenInput);
    }

    // Rolar até o formulário
    formEditar.scrollIntoView({ behavior: 'smooth' });
}

// Função para pesquisar sinônimos
// Modifique a função pesquisarSinonimos para pesquisa em tempo real e incluir botões
function pesquisarSinonimos(termoPesquisa) {
    const resultadosPesquisa = document.getElementById('resultadosPesquisa');
    if (!resultadosPesquisa) return;

    resultadosPesquisa.innerHTML = '';

    if (!termoPesquisa || termoPesquisa.trim() === '') {
        resultadosPesquisa.innerHTML = '<p>Digite um termo para pesquisar.</p>';
        return;
    }

    const termoPesquisaLower = termoPesquisa.toLowerCase().trim();
    let encontrados = false;

    // Adicionar botão "Novo" fixo acima dos resultados
    const novoBotao = document.createElement('div');
    novoBotao.classList.add('novo-sinonimo-btn');
    novoBotao.innerHTML = '<button id="btnNovoSinonimo">+ Novo Sinônimo</button>';
    resultadosPesquisa.appendChild(novoBotao);

    // Pesquisa direta (palavra exata)
    if (bancoDeSinonimos[termoPesquisaLower]) {
        const divResultado = document.createElement('div');
        divResultado.classList.add('resultado-item');
        divResultado.innerHTML = `
            <div class="palavra-resultado">${termoPesquisaLower}</div>
            <div class="sinonimos-resultado">${bancoDeSinonimos[termoPesquisaLower].join(', ')}</div>
            <div class="acoes-resultado">
                <button class="editar-btn" data-palavra="${termoPesquisaLower}">Editar</button>
                <button class="excluir-btn" data-palavra="${termoPesquisaLower}">Excluir</button>
            </div>
        `;
        resultadosPesquisa.appendChild(divResultado);
        encontrados = true;
    }
    // ADICIONE ESTE BLOCO - Verificar se é um sinônimo no índice
    else if (indiceSinonimos[termoPesquisaLower]) {
        const palavraPrincipal = indiceSinonimos[termoPesquisaLower];
        const divResultado = document.createElement('div');
        divResultado.classList.add('resultado-item');
        divResultado.innerHTML = `
            <div class="palavra-resultado">${palavraPrincipal}</div>
            <div class="sinonimos-resultado">${bancoDeSinonimos[palavraPrincipal].join(', ')}</div>
            <div class="info-resultado">Contém "${termoPesquisaLower}" como sinônimo</div>
            <div class="acoes-resultado">
                <button class="editar-btn" data-palavra="${palavraPrincipal}">Editar</button>
                <button class="excluir-btn" data-palavra="${palavraPrincipal}">Excluir</button>
            </div>
        `;
        resultadosPesquisa.appendChild(divResultado);
        encontrados = true;
    }

    // Pesquisa parcial (palavras que contêm o termo)
    Object.keys(bancoDeSinonimos).forEach(palavra => {
        if (palavra !== termoPesquisaLower && palavra.includes(termoPesquisaLower)) {
            const divResultado = document.createElement('div');
            divResultado.classList.add('resultado-item');
            divResultado.innerHTML = `
                <div class="palavra-resultado">${palavra}</div>
                <div class="sinonimos-resultado">${bancoDeSinonimos[palavra].join(', ')}</div>
                <div class="acoes-resultado">
                    <button class="editar-btn" data-palavra="${palavra}">Editar</button>
                    <button class="excluir-btn" data-palavra="${palavra}">Excluir</button>
                </div>
            `;
            resultadosPesquisa.appendChild(divResultado);
            encontrados = true;
        }

        // Pesquisar nos sinônimos também
        const sinonimos = bancoDeSinonimos[palavra];
        if (sinonimos.some(s => s.toLowerCase().includes(termoPesquisaLower))) {
            const divResultado = document.createElement('div');
            divResultado.classList.add('resultado-item');
            divResultado.innerHTML = `
                <div class="palavra-resultado">${palavra}</div>
                <div class="sinonimos-resultado">${bancoDeSinonimos[palavra].join(', ')}</div>
                <div class="info-resultado">Contém "${termoPesquisaLower}" como sinônimo</div>
                <div class="acoes-resultado">
                    <button class="editar-btn" data-palavra="${palavra}">Editar</button>
                    <button class="excluir-btn" data-palavra="${palavra}">Excluir</button>
                </div>
            `;
            resultadosPesquisa.appendChild(divResultado);
            encontrados = true;
        }
    });

    if (!encontrados) {
        resultadosPesquisa.innerHTML = '<div class="novo-sinonimo-btn"><button id="btnNovoSinonimo">+ Novo Sinônimo</button></div><p>Nenhum resultado encontrado.</p>';
    }

    // Adicionar eventos aos botões de editar e excluir nos resultados
    adicionarEventosBotoes();
}

// Função para quebrar o texto em palavras
function quebrarTexto(texto) {
    // Preservar espaços e pontuação
    return texto.split(/(\s+|[,.!?;:()—–-])/g).filter(item => item !== '');
}

// Função para criar elementos HTML para sinônimos
// Função modificada para criar elementos HTML para sinônimos
function criarAreaSinonimos(texto) {
    // Armazenar as substituições no armazenamento local para persistência
    if (Object.keys(substituicoes).length > 0) {
        localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));
    }

    // Recuperar substituições se existirem
    const substituicoesArmazenadas = localStorage.getItem('textSubstituicoes');
    if (substituicoesArmazenadas && Object.keys(substituicoes).length === 0) {
        substituicoes = JSON.parse(substituicoesArmazenadas);
    }

    const palavras = quebrarTexto(texto);
    const sinonimosArea = document.getElementById('sinonimosArea');
    sinonimosArea.innerHTML = '';

    // Limpar e usar o textoEntrada como área de resultado também
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Div para conter todas as palavras com sinônimos (mostradas diretamente)
    const palavrasContainer = document.createElement('div');
    palavrasContainer.className = 'palavras-container';
    sinonimosArea.appendChild(palavrasContainer);

    palavras.forEach((palavra, index) => {
        // Verificar se é uma palavra que pode ter sinônimos (não é espaço ou pontuação)
        if (!/^\s+$/.test(palavra) && !/^[,.!?;:()—–-]+$/.test(palavra)) {
            const palavraLower = palavra.toLowerCase();

            // Adicionar a palavra ao resultado
            const spanPalavra = document.createElement('span');

            // Verificar se esta palavra tinha uma substituição anterior
            const indexTexto = index.toString();
            if (substituicoes[indexTexto] && substituicoes[indexTexto].original === palavra) {
                spanPalavra.textContent = substituicoes[indexTexto].substituido;
                spanPalavra.classList.add('palavra-original');
            } else {
                spanPalavra.textContent = palavra;
            }

            spanPalavra.className = 'palavra';
            spanPalavra.dataset.original = palavra;
            spanPalavra.dataset.index = index;

            // Evento de clique da palavra no resultado
            spanPalavra.addEventListener('click', function () {
                // Se a palavra foi substituída, voltar ao original
                if (this.classList.contains('palavra-original')) {
                    this.textContent = this.dataset.original;
                    this.classList.remove('palavra-original');

                    // Remover do objeto de substituições
                    delete substituicoes[this.dataset.index];

                    // Atualizar o armazenamento local após remover a substituição
                    localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));

                    // Mostrar novamente a div de sinônimos para esta palavra
                    const divPalavra = document.querySelector(`.palavra-sinonimos[data-index="${this.dataset.index}"]`);
                    if (divPalavra) {
                        divPalavra.classList.remove('escondido');
                    }

                    atualizarResultadoFinal();
                } else {
                    // Se a palavra tem sinônimos, destacá-la e mostrar seus sinônimos
                    if (bancoDeSinonimos[palavraLower]) {
                        // Limpar qualquer destaque anterior
                        document.querySelectorAll('.palavra').forEach(p => {
                            p.classList.remove('palavra-destacada');
                        });

                        // Destacar a palavra clicada
                        this.classList.add('palavra-destacada');

                        // Mostrar os sinônimos desta palavra
                        document.querySelectorAll('.palavra-sinonimos').forEach(div => {
                            div.classList.add('escondido');
                        });

                        const divPalavra = document.querySelector(`.palavra-sinonimos[data-index="${this.dataset.index}"]`);
                        if (divPalavra) {
                            divPalavra.classList.remove('escondido');
                            divPalavra.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                }
            });

            resultado.appendChild(spanPalavra);

            // Verificar se temos sinônimos para esta palavra
            if (bancoDeSinonimos[palavraLower]) {
                const divPalavra = document.createElement('div');
                divPalavra.innerHTML = `<strong>${palavra}:</strong>`;
                divPalavra.className = 'palavra-sinonimos'; // Não mais escondido por padrão
                divPalavra.dataset.index = index;
                divPalavra.dataset.palavraLower = palavraLower;

                // Verificar se a palavra já foi substituída
                if (substituicoes[index]) {
                    divPalavra.classList.add('escondido');
                }

                const divSinonimos = document.createElement('div');
                divSinonimos.className = 'sinonimos';

                bancoDeSinonimos[palavraLower].forEach(sinonimo => {
                    const btnSinonimo = document.createElement('button');
                    btnSinonimo.textContent = sinonimo;
                    btnSinonimo.className = 'sinonimo-btn';
                    btnSinonimo.dataset.index = index;

                    // Função do botão de sinônimo
                    btnSinonimo.addEventListener('click', function () {
                        const indexPalavra = this.dataset.index;
                        const palavraOriginal = palavras[indexPalavra];
                        const palavrasElements = document.querySelectorAll('.palavra');

                        // Encontrar a palavra com o índice correto
                        palavrasElements.forEach(p => {
                            if (p.dataset.index === indexPalavra) {
                                p.textContent = sinonimo;
                                p.classList.add('palavra-original');
                                p.classList.remove('palavra-destacada');

                                // Armazenar a substituição
                                substituicoes[indexPalavra] = {
                                    original: p.dataset.original,
                                    substituido: sinonimo
                                };

                                // Salvar as substituições no armazenamento local
                                localStorage.setItem('textSubstituicoes', JSON.stringify(substituicoes));

                                // Ocultar a div de sinônimos para esta palavra
                                const divPai = this.closest('div.palavra-sinonimos');
                                if (divPai) {
                                    divPai.classList.add('escondido');
                                }

                                atualizarResultadoFinal();
                            }
                        });
                    });

                    divSinonimos.appendChild(btnSinonimo);
                });

                divPalavra.appendChild(divSinonimos);
                palavrasContainer.appendChild(divPalavra);
            }
        } else {
            // Se for espaço ou pontuação, apenas adicionar ao resultado
            const spanPalavra = document.createElement('span');
            spanPalavra.textContent = palavra;
            resultado.appendChild(spanPalavra);
        }
    });

    // Adicionar evento ao campo de pesquisa
    const filtroInput = document.getElementById('filtroSinonimos');
    if (filtroInput) {
        filtroInput.addEventListener('input', function () {
            const filtro = this.value.toLowerCase();

            // Se o filtro estiver vazio, ocultar todas as palavras com sinônimos
            if (!filtro) {
                document.querySelectorAll('.palavra-sinonimos').forEach(div => {
                    div.classList.add('escondido');
                });
                return;
            }

            // Mostrar apenas as palavras que contêm o filtro
            document.querySelectorAll('.palavra-sinonimos').forEach(div => {
                const palavraTexto = div.dataset.palavraLower;

                if (palavraTexto && palavraTexto.includes(filtro)) {
                    div.classList.remove('escondido');
                } else {
                    div.classList.add('escondido');
                }
            });
        });
    }

    // Adicionar um estilo destacado para a palavra clicada
    const style = document.createElement('style');
    style.textContent = `
        .palavra-destacada {
            background-color: #ffff99;
            border-radius: 3px;
            padding: 2px 4px;
            cursor: pointer;
        }
        .palavra {
            cursor: pointer;
        }
        .palavra-original {
            color: #0066cc;
            font-weight: bold;
            text-decoration: underline;
            cursor: pointer;
        }
        .escondido {
            display: none;
        }
        .pesquisa-sinonimos {
            margin-bottom: 15px;
        }
        .pesquisa-sinonimos input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 5px;
        }
        .pesquisa-sinonimos small {
            color: #777;
            font-size: 0.8em;
        }
        .palavras-container {
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #eee;
            padding: 10px;
        }
    `;

    document.head.appendChild(style);
}

// Adicionar evento ao botão processar
document.getElementById('processar').addEventListener('click', function () {
    const texto = document.getElementById('textoEntrada').value;
    if (texto.trim() !== '') {
        criarAreaSinonimos(texto);
    } else {
        alert('Por favor, digite algum texto antes de processar.');
    }
});


// Função para processar o texto em tempo real
function processarEmTempoReal() {
    const texto = document.getElementById('textoEntrada').value;
    if (texto.trim() !== '') {
        criarAreaSinonimos(texto);
    }
}
// Função para atualizar o resultado final (usado para o botão de copiar)
function atualizarResultadoFinal() {
    const palavras = document.querySelectorAll('#resultado span');
    let textoFinal = '';
    palavras.forEach(p => {
        textoFinal += p.textContent;
    });
    return textoFinal;
}
// Função para copiar o resultado para a área de transferência
function copiarResultado() {
    const textoFinal = atualizarResultadoFinal();
    navigator.clipboard.writeText(textoFinal).then(() => {
        alert('Texto copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}
// Adicionar eventos depois que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
        // ADICIONE ESTA LINHA AQUI, como primeira instrução dentro da função
    atualizarIndiceSinonimos();
    // Adicionar evento de input para processamento em tempo real
    document.getElementById('textoEntrada').addEventListener('input', processarEmTempoReal);

    // Adicionar evento ao botão copiar
    document.getElementById('copiar').addEventListener('click', copiarResultado);

    // Manter o evento no botão processar (opcional, já que agora é em tempo real)
    document.getElementById('textoEntrada').addEventListener('input', processarEmTempoReal);
    document.getElementById('copiar').addEventListener('click', copiarResultado);
    document.getElementById('processar').addEventListener('click', function () {
        const texto = document.getElementById('textoEntrada').value;
        if (texto.trim() !== '') {
            criarAreaSinonimos(texto);
        } else {
            alert('Por favor, digite algum texto antes de processar.');
        }

    });
    // Adicionar novos event listeners para o gerenciador de sinônimos

    // Botões de exportar e importar
    if (document.getElementById('btnExportar')) {
        document.getElementById('btnExportar').addEventListener('click', exportarSinonimos);
    }

    if (document.getElementById('importarArquivo')) {
        document.getElementById('importarArquivo').addEventListener('change', importarSinonimos);
    }

    // Botão de pesquisa
    if (document.getElementById('btnPesquisar')) {
        document.getElementById('btnPesquisar').addEventListener('click', function () {
            const termo = document.getElementById('termoPesquisa').value;
            pesquisarSinonimos(termo);
        });
    }
    if (document.getElementById('termoPesquisa')) {
        // Remover o evento de keypress e adicionar evento de input para pesquisa em tempo real
        document.getElementById('termoPesquisa').removeEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                pesquisarSinonimos(this.value);
            }
        });

        document.getElementById('termoPesquisa').addEventListener('input', function () {
            pesquisarSinonimos(this.value);
        });
    }

    // Também pesquisar ao pressionar Enter
    if (document.getElementById('termoPesquisa')) {
        document.getElementById('termoPesquisa').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                pesquisarSinonimos(this.value);
            }
        });
    }

    // Botão salvar (adicionar/editar sinônimo)
    if (document.getElementById('btnSalvar')) {
        document.getElementById('btnSalvar').addEventListener('click', function () {
            const novaPalavra = document.getElementById('novaPalavra').value;
            const novosSinonimos = document.getElementById('novosSinonimos').value;
            const palavraAntigaInput = document.getElementById('palavraAntiga');

            let sucesso = false;

            if (palavraAntigaInput && palavraAntigaInput.value) {
                // Modo de edição
                sucesso = editarSinonimo(palavraAntigaInput.value, novaPalavra, novosSinonimos);
                if (sucesso) {
                    palavraAntigaInput.remove();
                }
            } else {
                // Modo de adição
                sucesso = adicionarSinonimo(novaPalavra, novosSinonimos);
            }

            if (sucesso) {
                document.getElementById('novaPalavra').value = '';
                document.getElementById('novosSinonimos').value = '';
                atualizarListaSinonimos();
            }
        });
    }

    // Botão cancelar edição
    if (document.getElementById('btnCancelar')) {
        document.getElementById('btnCancelar').addEventListener('click', function () {
            const palavraAntigaInput = document.getElementById('palavraAntiga');
            if (palavraAntigaInput) {
                palavraAntigaInput.remove();
            }

            document.getElementById('novaPalavra').value = '';
            document.getElementById('novosSinonimos').value = '';
        });
    }

    // Inicializar a lista de sinônimos
    atualizarListaSinonimos();
    // Inicializar o reconhecimento de voz
    iniciarReconhecimentoVoz();

});

// Função para adicionar eventos aos botões nos resultados da pesquisa
function adicionarEventosBotoes() {
    // Adicionar evento ao botão Novo Sinônimo
    document.getElementById('btnNovoSinonimo').addEventListener('click', function () {
        abrirModal('novo');
    });

    // Adicionar eventos aos botões de editar
    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            abrirModal('editar', palavra);
        });
    });

    // Adicionar eventos aos botões de excluir
    document.querySelectorAll('.excluir-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const palavra = this.dataset.palavra;
            if (excluirSinonimo(palavra)) {
                // Atualizar a pesquisa após excluir
                pesquisarSinonimos(document.getElementById('termoPesquisa').value);
            }
        });
    });
}

// Função para criar e gerenciar o modal
function abrirModal(modo, palavra = '') {
    // Criar o modal se ainda não existir
    let modal = document.getElementById('sinonimosModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'sinonimosModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-conteudo">
                <span class="fechar-modal">&times;</span>
                <h3 id="modalTitulo">Adicionar Sinônimo</h3>
                <form id="modalForm" class="form-sinonimos">
                    <div class="campo">
                        <label for="modalPalavra">Palavra:</label>
                        <input type="text" id="modalPalavra" placeholder="Digite uma palavra" required>
                    </div>
                    <div class="campo">
                        <label for="modalSinonimos">Sinônimos (separados por vírgula):</label>
                        <textarea id="modalSinonimos" placeholder="Digite os sinônimos separados por vírgula" required></textarea>
                    </div>
                    <input type="hidden" id="modalPalavraAntiga" value="">
                    <div class="acoes">
                        <button type="button" id="modalBtnSalvar">Salvar</button>
                        <button type="button" id="modalBtnCancelar">Cancelar</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        // Adicionar eventos ao modal
        document.querySelector('.fechar-modal').addEventListener('click', function () {
            modal.style.display = 'none';
        });

        document.getElementById('modalBtnCancelar').addEventListener('click', function () {
            modal.style.display = 'none';
        });

        document.getElementById('modalBtnSalvar').addEventListener('click', function () {
            const novaPalavra = document.getElementById('modalPalavra').value;
            const novosSinonimos = document.getElementById('modalSinonimos').value;
            const palavraAntiga = document.getElementById('modalPalavraAntiga').value;

            let sucesso = false;

            if (palavraAntiga) {
                // Modo de edição
                sucesso = editarSinonimo(palavraAntiga, novaPalavra, novosSinonimos);
            } else {
                // Modo de adição
                sucesso = adicionarSinonimo(novaPalavra, novosSinonimos);
            }

            if (sucesso) {
                modal.style.display = 'none';
                // Atualizar a pesquisa após salvar
                pesquisarSinonimos(document.getElementById('termoPesquisa').value);
            }
        });

        // Fechar o modal se clicar fora dele
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Configurar o modal de acordo com o modo
    if (modo === 'editar') {
        document.getElementById('modalTitulo').textContent = 'Editar Sinônimo';
        document.getElementById('modalPalavra').value = palavra;
        document.getElementById('modalSinonimos').value = bancoDeSinonimos[palavra].join(', ');
        document.getElementById('modalPalavraAntiga').value = palavra;
    } else {
        document.getElementById('modalTitulo').textContent = 'Adicionar Sinônimo';
        document.getElementById('modalPalavra').value = document.getElementById('termoPesquisa').value || '';
        document.getElementById('modalSinonimos').value = '';
        document.getElementById('modalPalavraAntiga').value = '';
    }

    // Exibir o modal
    modal.style.display = 'block';
}
// Função para controlar o reconhecimento de voz
function iniciarReconhecimentoVoz() {
    // Verificar se o navegador suporta reconhecimento de voz
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Seu navegador não suporta reconhecimento de voz. Tente usar Chrome ou Edge.');
        return;
    }

    // Criar instância do reconhecimento de voz
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Configurar o reconhecimento
    recognition.lang = 'pt-BR'; // Configurar para português brasileiro
    recognition.continuous = false;
    recognition.interimResults = false; // Mudado para false para evitar resultados parciais
    
    const textoEntrada = document.getElementById('textoEntrada');
    const botaoMic = document.getElementById('botaoMic');
    
    // Variável para armazenar a posição atual do cursor
    let cursorPos = textoEntrada.selectionStart || textoEntrada.value.length;
    
    // Salvar a posição do cursor antes de iniciar o reconhecimento
    textoEntrada.addEventListener('click', () => {
        cursorPos = textoEntrada.selectionStart;
    });
    
    // Evento ao iniciar o reconhecimento
    recognition.onstart = () => {
        botaoMic.classList.add('ativo');
        botaoMic.innerHTML = '<i class="mic-icon-ativo"></i>'; // ícone de microfone ativo
    };
    
    // Evento para resultados finais apenas
    recognition.onresult = (event) => {
        // Pegar apenas o último resultado (resultado final)
        const transcript = event.results[0][0].transcript;
            
        // Inserir o texto na posição do cursor
        const valorAntes = textoEntrada.value.substring(0, cursorPos);
        const valorDepois = textoEntrada.value.substring(cursorPos);
        
        textoEntrada.value = valorAntes + transcript + valorDepois;
        
        // Atualizar a posição do cursor
        cursorPos += transcript.length;
        textoEntrada.selectionStart = cursorPos;
        textoEntrada.selectionEnd = cursorPos;
        
        // Disparar o evento input para processar em tempo real
        const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        textoEntrada.dispatchEvent(inputEvent);
    };
    
    // Evento ao finalizar o reconhecimento
    recognition.onend = () => {
        botaoMic.classList.remove('ativo');
        botaoMic.innerHTML = '<i class="mic-icon"></i>'; // ícone de microfone normal
    };
    
    // Evento de erro
    recognition.onerror = (event) => {
        console.error('Erro no reconhecimento de voz:', event.error);
        botaoMic.classList.remove('ativo');
        botaoMic.innerHTML = '<i class="mic-icon"></i>';
        
        if (event.error === 'not-allowed') {
            alert('Permissão de microfone negada. Por favor, permita o acesso ao microfone.');
        }
    };
    
    // Iniciar ou parar o reconhecimento ao clicar no botão
    botaoMic.addEventListener('click', () => {
        if (botaoMic.classList.contains('ativo')) {
            recognition.stop();
        } else {
            // Salvar a posição atual do cursor
            cursorPos = textoEntrada.selectionStart || textoEntrada.value.length;
            recognition.start();
        }
    });
}