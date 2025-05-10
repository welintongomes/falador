// Banco de dados simulado de sinônimos
const bancoDeSinonimos = {
//A
  "à custa de": ["à expensa de", "em detrimento de", "à conta de"],
  "à medida que": ["conforme", "à medida que", "à medida que"],
  "a partir": ["desde", "a partir de", "começando"],
  "a posteriori": ["posteriormente", "depois", "mais tarde"],
  "a priori": ["antecipadamente", "de antemão", "de início"],
  "a propósito": ["por acaso", "casualmente", "por oportunismo"],
  "a respeito de": ["sobre", "acerca de", "relativo a", "em relação a"],
  "ab-rogar": ["revogar", "anular", "cancelar", "abolir", "invalidar"],
  "aba": ["tampa", "cobertura", "capô"],
  "abacaxi": ["ananás"],
  "abaixo": ["embaixo", "inferior", "em baixo"],
  "abalar": ["balançar", "agitar", "mover", "tremer", "sacudir"],
  "abalroar": ["colidir", "bater", "impactar", "atropelar", "acidentar"],
  "abandonar": ["deixar", "desistir", "renunciar", "desamparar"],
  "abarcar": ["abranger", "incluir", "compreender", "envolver"],
  "abarroado": ["teimoso", "obstinado", "persistente", "perseverante", "aferrado"],
  "abarrotado": ["lotado", "cheio", "repleto", "superlotado", "apinhado"],
  "abastado": ["rico", "próspero", "endinheirado", "opulento", "abundante"],
  "abate": ["derrubada", "redução", "abatimento", "diminuição", "eliminação"],
  "abatido": ["triste", "desanimado", "desolado", "deprimido", "melancólico"],
  "abaulado": ["curvado", "arredondado", "convexo", "abobadado"],
  "abdicar": ["renunciar", "desistir", "abandonar"],
  "ábdito": ["oculto", "escondido", "secreto", "encoberto", "velado"],
  "abdome": ["barriga", "pança", "ventre", "abdômen", "bojo"],
  "abdômen": ["barriga", "pança", "ventre", "abdome", "bojo"],
  "abdução": ["rapto", "sequestro", "captura", "prisão", "arremesso"],
  "abduzir": ["raptar", "sequestrar", "capturar", "arremessar", "tirar"],
  "abelha": ["inseto", "himenóptero"],
  "abelhão": ["abelha", "inseto", "himenóptero"],
  "abençoado": ["bendito", "sagrado", "santo", "santificado"],
  "abençoar": ["benzer", "louvar", "bendizer", "santificar"],
  "abençoe": ["benza", "louva"],
  "abençoei": ["benzi", "louvei"],
  "aberração": ["anomalia", "desvio", "irregularidade", "anormalidade"],
  "abertamente": ["francamente", "de forma clara", "abertamente"],
  "abertas": ["descobertas", "expostas", "reveladas"],
  "aberto": ["descoberto", "exposto", "revelado"],
  "abiquem": ["abiquem"],
  "abismo": ["precipício", "poço"],
  "abissal": ["profundo", "infinito"],
  "abjeto": ["desprezível", "vil", "ignóbil", "torpe", "indigno"],
  "ablução": ["purificação", "limpeza", "lavagem"],
  "abnegação": ["sacrifício", "renúncia", "desapego"],
  "abnegado": ["dedicado", "devotado", "sacrificado"],
  "abóbada": ["cúpula", "arco"],
  "abobreira": ["abóbora", "cabaça"],
  "abole": ["elimina", "extingue", "anula"],
  "abolição": ["extinção", "anulação", "revogação"],
  "abolido": ["extinto", "anulado", "revogado"],
  "abolir": ["extinguir", "anular", "revogar"],
  "abominação": ["desprezo", "aversão", "repúdio"],
  "abominável": ["desprezível", "repulsivo", "detestável"],
  "abonar": ["aprovar", "justificar", "ratificar", "confirmar", "validar"],
  "abordada": ["atacada", " abordada", " abordada", " abordada", " abordada"],
  "abordado": ["tratado", "discutido", "analisado", "abordado", "abordado"],
  "abordagem": ["aproximação", "técnica", "método", "estratégia", "abordagem"],
  "abordar": ["tratar", "discutir", "analisar", "enfrentar", "aproximar-se"],
  "aborígene": ["indígena", "nativo", "aborígine", "autóctone", "primitivo"],
  "aborrecer": ["desgostar", "enfurecer", "irritar", "aborrecer", "aborrecer"],
  "aborrecido": ["irritado", "chateado", "desgostoso", "aborrecido", "aborrecido"],
  "aborto": ["interrupção", "gravidez interrompida", "aborto", "abortamento", "terminação"],
  "abraço": ["acolhimento", "afago", "carinho", "abraço", "abraço"],
  "abrandar": ["amolecer", "suavizar", "mitigar", "aliviar", "abrandar"],
  "abrange": ["inclui", "cobre", "envolve", "abrange", "abrange"],
  "abrangência": ["extensão", "alcance", "alcance", "abrangência", "abrangência"],
  "abrangendo": ["inclusão", "envolvimento", "compreendendo", "abrangendo", "abrangendo"],
  "abrangente": ["amplo", "extenso", "geral", "abrangente", "abrangente"],
  "abranger": ["incluir", "abrir", "compreender", "abranger", "abranger"],
  "abrasada": ["quente", "incandescente", "abrasadora", "abrasadora", "abrasadora"],
  "abrasadora": ["intensa", "quente", "incandescente", "abrasiva", "abrasadora"],
  "abrasar": ["queimar", "incendiar", "abrasar", "incendiar", "consumir"],
  "abreviação": ["abreviatura", "sigla", "redução", "abreviação", "abreviação"],
  "abreviar": ["reduzir", "encurtar", "abreviar", "encurtar", "diminuir"],
  "abrigo": ["refúgio", "refúgio", "abrigo", "abrigo", "cobertura"],
  "abrir": ["destrancar", "desbloquear", "iniciar", "abrir", "abrir"],
  "abriu": ["iniciou", "desbloqueou", "destrancou", "abriu", "abriu"],
  "abrolho": ["espinho", "armadilha", "perigo", "abrolho", "abrolho"],
  "abrupta": ["repentina", "inesperada", "imprevisível", "abrupta", "abrupta"],
  "abruptamente": ["repentinamente", "inesperadamente", "imprevisivelmente", "brusco", "abruptamente"],
  "abrupto": ["repentino", "inesperado", "imprevisível", "abrupto", "abrupto"],
  "abscôndito": ["oculto", "escondido", "secreto", "velado", "disfarçado"],
  "absenteísmo": ["falta", "ausência", "deserção", "abstencionismo", "desistência"],
  "absolutamente": ["totalmente", "completamente", "plenamente", "absolutamente", "absolutamente"],
  "absolutismo": ["despotismo", "autocracia", "tirania", "monarquia", "absolutismo"],
  "absoluto": ["completo", "total", "inteiro", "absoluto", "absoluto"],
  "absolver": ["isentar", "perdoar", "libertar", "exonerar", "absolver"],
  "absolvição": ["perdão", "absolvição", "libertação", "exoneração"],
  "absolvido": ["perdoado", "libertado", "exonerado"],
  "absorção": ["sugestão", "assimilação", "incorporação", "captura"],
  "absorto": ["atônito", "pensativo", "impressionado", "maravilhado"],
  "absorver": ["sugar", "incorporar", "capturar", "assimilar"],
  "absorver-se": ["mergulhar", "envolver-se", "dedicar-se", "focar-se"],
  "absorvido": ["absorvido", "capturado", "incorporado"],
  "absorvimento": ["absorção", "incorporação", "sugestão"],
  "abstém": ["abster-se", "renunciar", "abster"],
  "abstêmio": ["abstinente", "modesto", "contido"],
  "abstenção": ["renúncia", "evitação", "abstenção", "recusa"],
  "abster": ["renunciar", "desistir", "evitar"],
  "abstinência": ["renúncia", "abstinência", "contenção"],
  "abstinente": ["abstêmio", "moderado", "contido"],
  "abstração": ["distanciamento", "isolamento", "generalização"],
  "abstrai": ["isolamento", "fuga", "reflexão"],
  "abstrair": ["desviar", "focar-se", "separar", "distanciar"],
  "abstrato": ["teórico", "imaginário", "conceitual", "intangible"],
  "absurda": ["irracional", "ilógica", "sem sentido", "ridícula"],
  "absurdamente": ["irracionalmente", "ilogicamente", "sem sentido"],
  "absurdo": ["ilógico", "irracional", "sem sentido", "ridículo"],
  "abundância": ["riqueza", "profusão", "grande quantidade", "superabundância"],
  "abundante": ["rico", "copioso", "profuso", "numeroso"],
  "abundantemente": ["profusamente", "copiosamente", "ricas"],
  "abusar": ["exceder", "violentar", "explorar", "abusar"],
  "abusivo": ["excessivo", "violento", "explorador", "injusto"],
  "abuso": ["violência", "excesso", "exploração", "maltrato"],
  "acabar": ["terminar", "concluir", "finalizar", "completar"],
  "acabou-se": ["findou", "terminou", "cessou", "desapareceu"],
  "academia": ["instituto", "escola", "faculdade", "centro de estudos"],
  "acadêmico": ["científico", "educacional", "teórico", "intelectual"],
  "acalanto": ["canto de ninar", "melodia suave", "canção de embalar"],
  "acalentar": ["embalar", "consolar", "cuidar", "acalmar"],
  "acalento": ["canto de ninar", "melodia suave", "canto reconfortante"],
  "acanhado": ["tímido", "reservado", "envergonhado", "modesto"],
  "ação": ["atividade", "movimento", "gesto", "processo"],
  "acarretado": ["resultante", "conseqüente", "provocado", "derivado"],
  "acarretar": ["causar", "provocar", "resultar em", "produzir"],
  "acasalar": ["juntar", "casar", "reunir", "ajuntar"],
  "acaso": ["casualidade", "sorte", "acidente", "imprevisibilidade"],
  "acatar": ["obedecer", "seguir", "respeitar", "aceitar"],
  "acautelar": ["prevenir", "precaver", "proteger", "cautelar"],
  "aceder": ["concordar", "permitir", "autorizar", "aceder"],
  "acéfalo": ["sem cérebro", "ignorante", "sem inteligência"],
  "aceitação": ["aprovação", "consentimento", "admissão", "aceitação"],
  "aceitar": ["concordar", "admitir", "assumir", "receber"],
  "aceleração": ["acréscimo", "aumento", "intensificação", "aceleramento"],
  "acenar": ["sinalizar", "saudar", "agitar", "mover"],
  "acender": ["iluminar", "acender", "acender", "dar luz"],
  "acendido": ["iluminado", "aceso", "acendido", "flamejante"],
  "acento": ["ênfase", "tônica", "sotaque", "entonação"],
  "acentuada": ["destacada", "intensa", "forte", "marcada"],
  "acentuar": ["destacar", "realçar", "salientar", "enfatizar"],
  "acepção": ["sentido", "significado", "interpretação", "conotação"],
  "acerca": ["sobre", "relativo a", "a respeito de", "acerca de"],
  "acerejado": ["decorado", "enfeitado", "ornamentado", "engalanado"],
  "acertar": ["corrigir", "ajustar", "consertar", "resolver"],
  "acertarão": ["resolverão", "corrigirão", "ajustarão", "completarão"],
  "acervo": ["coleção", "conjunto", "inventário", "totalidade"],
  "acesa": ["iluminada", "acesa", "sacudida", "acendida"],
  "aceso": ["iluminado", "acendido", "brilhante", "aceso"],
  "acessar": ["entrar", "acessar", "abrir", "chegar"],
  "acessibilidade": ["facilidade", "acessibilidade", "acesso", "disponibilidade"],
  "acessível": ["disponível", "alcançável", "acessível", "fácil de chegar"],
  "acesso": ["entrada", "acesso", "chegada", "entrada"],
  "acessório": ["secundário", "complementar", "adicional", "auxiliar"],
  "acha": ["encontra", "considera", "acredita", "julga"],
  "achanar": ["encolher", "embolar", "reduzir", "comprimir"],
  "achar": ["encontrar", "localizar", "descobrir", "perceber"],
  "acharia": ["consideraria", "pensaria", "julgar-se-ia", "acreditava"],
  "achem": ["encontrem", "descubram", "percebam", "considerem"],
  "achicalhe": ["desprezo", "ofensa", "humilhação", "vergonha"],
  "achincalhamento": ["ridicularização", "humilhação", "desprezo", "rebaixamento"],
  "achismo": ["opinião", "presunção", "convicção", "crença"],
  "acidental": ["casual", "fortuito", "imprevisto", "involuntário"],
  "acidente": ["incidente", "imprevisto", "eventualidade", "siniestro"],
  "acidez": ["amargor", "azedo", "acidez", "sabor ácido"],
  "acima": ["superior", "mais alto", "em cima", "sobre"],
  "acinte": ["desprezo", "desrespeito", "insolência", "desdém"],
  "acintosamente": ["desrespeitosamente", "desafiadoramente", "arrogantemente"],
  "acintoso": ["insolente", "desrespeitoso", "desaforado", "desdenhoso"],
  "acionar": ["ativar", "iniciar", "ligar", "operar"],
  "acirrado": ["intenso", "fervoroso", "intenso", "extremo"],
  "acirrante": ["provocante", "instigante", "intensificador", "agitado"],
  "aclamação": ["aplausos", "elogios", "aclamação", "gritos de aprovação"],
  "acme": ["pico", "auge", "topo", "culminação"],
  "acocorar": ["curvar-se", "agachar", "ajoelhar", "dobrar-se"],
  "ações": ["movimentos", "atividades", "gestos", "ações"],
  "acoime": ["culpa", "acusação", "fardo", "responsabilidade"],
  "açoite": ["flagelo", "punição", "surra", "castigo", "bastinado"],
  "acolá": ["ali", "lá", "aí", "naquele lugar"],
  "acolher": ["receber", "abraçar", "acolher", "admitir", "aceitar"],
  "acolhíamos": ["recebíamos", "admitíamos", "abraçávamos", "acolhíamos"],
  "acolhida": ["recepção", "admissão", "acolhimento", "abertura"],
  "acolhido": ["recebido", "admitido", "abraçado", "aceito"],
  "acolhimento": ["recepção", "abrigo", "acolhida", "admissão"],
  "acometer": ["atingir", "incidir", "afetar", "invadir", "atingir"],
  "acometermos": ["atingirmos", "sofrermos", "incidirmos", "afetarmos"],
  "acometida": ["atingida", "afligida", "prejudicada", "contaminada"],
  "acometido": ["atingido", "afligido", "prejudicado", "contaminado"],
  "acompanhamento": ["monitoramento", "vigilância", "supervisão", "seguimento"],
  "acompanhar": ["seguir", "observar", "monitorar", "vigiando"],
  "acompanharemos": ["seguiremos", "observaremos", "vigilaremos", "monitoraremos"],
  "acondicionado": ["armazenado", "guardado", "reservado", "tratado"],
  "acondicionamento": ["armazenamento", "guardar", "tratamento", "organização"],
  "acondicionar": ["armazenar", "guardar", "reservar", "organizar"],
  "aconselharmos": ["orientarmos", "sugerirmos", "aconselharmos", "recomendar"],
  "acontecer": ["ocorrer", "suceder", "surge", "realizar-se"],
  "acontecimento": ["evento", "ocorrência", "episódio", "ocorrência"],
  "acontecimentos": ["eventos", "ocorrências", "episódios", "casos"],
  "aconteço": ["ocorro", "realizo", "surge", "apareço"],
  "acordado": ["desperto", "acordado", "atento", "acordado"],
  "acordar": ["despertar", "acordar", "levantar-se", "sair do sono"],
  "acordo": ["pacto", "entendimento", "contrato", "convenção"],
  "acreditar": ["crer", "confiar", "achar", "supor"],
  "acrescentar": ["adicionar", "incluir", "somar", "juntar"],
  "acrescento": ["adição", "soma", "inclusão", "incremento"],
  "acrescido": ["aumentado", "adicionado", "somado", "incrementado"],
  "acréscimo": ["aumento", "soma", "adição", "incremento"],
  "acrítico": ["não crítico", "não analítico", "não observador"],
  "acrônimo": ["abreviação", "sigla", "abreviatura", "redução"],
  "actividade": ["atividade", "ocupação", "trabalho", "função"],
  "acuado": ["encurralado", "pressionado", "assustado", "aterrorizado"],
  "açúcar": ["doçura", "sacarose", "glicose", "mel"],
  "acudas": ["ajuda", "socorro", "assistência", "auxílio"],
  "açude": ["represa", "reservatório", "barragem", "dique"],
  "acudir": ["socorrer", "ajudar", "assistir", "auxiliar"],
  "acuidade": ["precisão", "agudeza", "nitidez", "clareza"],
  "açulado": ["apontado", "encorajado", "estimulado", "incitado"],
  "açular": ["incitar", "provocar", "instigar", "despertar"],
  "acume": ["pico", "ápice", "topo", "culminância"],
  "acumulando": ["acrescentando", "juntando", "arrecadando", "reunindo"],
  "acumular": ["arrecadar", "juntar", "reunir", "amontoar"],
  "acúmulo": ["acréscimo", "acumulação", "reunião", "acréscimo"],
  "acurácia": ["precisão", "exatidão", "fidelidade", "certeza"],
  "acuracidade": ["precisão", "exatidão", "acurácia", "perfeição"],
  "acurado": ["preciso", "exato", "fiel", "certo"],
  "acusar": ["denunciar", "reprovar", "imputar", "indicar"],
  "acusava": ["denunciava", "imputava", "reprovava", "relatava"],
  "ad aeternum": ["para sempre", "eternamente", "perpetuamente", "infinitamente"],
  "adágio": ["provérbio", "ditado", "sabedoria popular", "máxima"],
  "adaptação": ["ajuste", "adaptação", "alteração", "modificação"],
  "adaptar": ["ajustar", "modificar", "adequar", "ajustar-se"],
  "adaptativo": ["flexível", "modificável", "ajustável", "maleável"],
  "adaptável": ["flexível", "ajustável", "maleável", "modificável"],
  "ademais": ["além disso", "também", "igualmente", "adicionalmente"],
  "adendo": ["acréscimo", "adicional", "nota", "observação"],
  "adentrar": ["entrar", "adentrar", "penetrar", "entrar em"],
  "adepto": ["seguidor", "fã", "entusiasta", "partidário"],
  "adequação": ["ajuste", "adequação", "compatibilidade", "conformidade"],
  "adequado": ["apto", "apropriado", "conveniente", "compatível"],
  "adequar": ["ajustar", "adaptar", "arranjar", "conformar"],
  "adereço": ["acessório", "ornamento", "decoração", "adereço"],
  "aderência": ["adesão", "atrito", "fixação", "ligação"],
  "aderido": ["unido", "agarrado", "ligado", "colado"],
  "aderir": ["unir-se", "juntar-se", "aceitar", "agrupar-se"],
  "adesão": ["adesão", "inclusão", "aderência", "fidelidade"],
  "adestrar": ["treinar", "ensinar", "formar", "instruir"],
  "adeus": ["despedida", "partida", "tchau", "despedir-se"],
  "adiante": ["à frente", "mais à frente", "posteriormente", "daqui para frente"],
  "adiante-se": ["antecipe-se", "avance", "antecipadamente", "prossiga"],
  "adiar": ["postergar", "remarcar", "protelar", "adiar"],
  "adição": ["acréscimo", "adicional", "soma", "incremento"],
  "adicionar": ["incluir", "acrescentar", "somar", "adicionar"],
  "adimplir": ["cumprir", "executar", "realizar", "atender"],
  "aditamento": ["acréscimo", "anexo", "suplemento", "adicional"],
  "aditar": ["adicionar", "acrescentar", "suplementar", "incluir"],
  "adivinha": ["enigma", "mistério", "questão", "charada"],
  "adjacente": ["vizinho", "próximo", "contíguo", "lado"],
  "adjetivo": ["característica", "atributo", "qualidade", "descritor"],
  "adjudicação": ["atribuição", "designação", "concessão", "atribuição"],
  "adjudicar": ["atribuir", "conceder", "dar", "designar"],
  "adjunto": ["suplementar", "secundário", "complementar", "auxiliar"],
  "administração": ["gestão", "administração", "direção", "comando"],
  "admiração": ["respeito", "surpresa", "encanto", "apreço"],
  "admirar": ["respeitar", "encantar", "apreciar", "surpreender-se"],
  "admirável": ["notável", "extraordinário", "excelente", "impressionante"],
  "admissão": ["entrada", "aceitação", "ingresso", "admissão"],
  "admissibilidade": ["aceitação", "legitimidade", "validade", "admissibilidade"],
  "admitir": ["aceitar", "reconhecer", "assumir", "conceder", "autorizar"],
  "admoestação": ["advertência", "repreensão", "censura", "punição", "admoestamento"],
  "admoestar": ["repreender", "advertir", "censurar", "punir", "chamar a atenção"],
  "admoeste": ["repreenda", "advertir", "chame a atenção", "censure", "critique"],
  "adoção": ["admissão", "aceitação", "incorporação", "assimilação", "recebimento"],
  "adolescente": ["jovem", "menor", "criança", "pubescente", "inexperiente"],
  "adolescentes": ["jovens", "menores", "crianças", "pubescentes", "inexperientes"],
  "adorá-lo": ["amá-lo", "idolatrá-lo", "venerá-lo", "apreciá-lo", "reverenciá-lo"],
  "adoração": ["veneração", "culto", "adoração", "idolatria", "apreço"],
  "adorar": ["venerar", "idolar", "amplo", "reverenciar", "apreciar"],
  "adorável": ["encantador", "admirável", "cativante", "atraente", "amável"],
  "adore": ["venerar", "idolatrar", "apreciar", "adorar", "amar"],
  "adorno": ["decoração", "ornamento", "enfeite", "embelecimento", "detalhe"],
  "adotar": ["adquirir", "incorporar", "assumir", "aceitar", "iniciar"],
  "adquiríamos": ["obtivemos", "conseguimos", "ganhávamos", "comprávamos", "alcançávamos"],
  "adquirido": ["obtido", "conquistado", "conseguido", "alcançado", "comprado"],
  "adquirir": ["obter", "conseguir", "comprar", "conquistar", "alcançar"],
  "adquiriria": ["compraria", "obteria", "conseguiria", "ganharia", "alcançaria"],
  "adrede": ["propositadamente", "intencionalmente", "deliberadamente", "com propósito", "previamente"],
  "adrenalina": ["hormônio", "substância estimulante", "neurotransmissor", "hormônio excitante", "substância nervosa"],
  "adstringência": ["rigidez", "dureza", "estreitamento", "restrição", "contratilidade"],
  "adstringente": ["restritivo", "rigoroso", "intenso", "forte", "seco"],
  "adstrito": ["vinculado", "ligado", "restrito", "conectado", "limitado"],
  "aduaneiro": ["alfandegário", "fronteiriço", "de aduana", "de alfândega", "de comércio exterior"],
  "adubação": ["fertilização", "adubo", "fertilidade", "melhora do solo", "fertilização agrícola"],
  "adular": ["elogiaro", "lisonjear", "exaltar", "ajudar", "admirar"],
  "adultério": ["infidelidade", "traição", "adultério conjugal", "traição conjugal", "infidelidade conjugal"],
  "aduzir": ["argumentar", "afirmar", "informar", "explicar", "expôr"],
  "aduzo": ["afirmo", "argumento", "explico", "digo", "informo"],
  "advém": ["procede", "vem", "surge", "resulta", "originado"],
  "advenhas": ["chegues", "aconteçam", "sobrevenham", "advenha", "surgem"],
  "advento": ["chegada", "emergência", "aparecimento", "manifestação", "surgimento"],
  "adversário": ["oponente", "concorrente", "rival", "inimigo", "competidor"],
  "adversativa": ["contraditória", "opositiva", "antagônica", "oponente", "contrária"],
  "adversidade": ["dificuldade", "problema", "desafio", "obstáculo", "contrariedade"],
  "adverso": ["contrário", "oposto", "negativo", "opositor", "inimigo"],
  "adversos": ["contrários", "opositores", "inimigos", "antagônicos", "negativos"],
  "advertência": ["aviso", "alerta", "admoestação", "repreensão", "censura"],
  "advertir": ["avisar", "alertar", "repreender", "chamar a atenção", "censurar"],
  "advindo": ["chegado", "surgido", "aparecido", "emergido", "resultante"],
  "advir": ["provir", "resultar", "emergir", "surgir", "vir de"],
  "advogado": ["jurista", "advogado", "procurador", "defensor", "consultor jurídico"],
  "advogado-pilantra": ["fraudulento", "enganador", "picareta", "desonesto", "corrupto"],
  "aerófano": ["balão", "dirigível", "aeronave", "zepelim", "aeroplano"],
  "afã": ["esforço", "dedicação", "ímpeto", "vontade", "zeal"],
  "afabilidade": ["gentileza", "educação", "cordialidade", "simplicidade", "doçura"],
  "afagar": ["acariciar", "mimar", "tocar", "carinhar", "afagar"],
  "afago": ["carinho", "mimo", "cuidado", "afeto", "toque"],
  "afanei": ["roubei", "furtava", "subtraí", "desonrei", "apoderei-me"],
  "afasia": ["dificuldade de fala", "distúrbio de fala", "desordem verbal", "dificuldade de comunicação", "perda de linguagem"],
  "afastar": ["remover", "distanciar", "separar", "dispersar", "eliminar"],
  "afável": ["amável", "gentil", "cordial", "simpático", "educado"],
  "afazeres": ["tarefas", "ocupações", "trabalhos", "responsabilidades", "afazeres diários"],
  "afecção": ["doença", "condição", "problema", "distúrbio", "sintoma"],
  "afeição": ["carinho", "afeto", "amor", "amorosidade", "simpatia"],
  "afeiçoar-se": ["apaixonar-se", "sentir afeto", "gostar", "amar", "adotar"],
  "afeito": ["habituado", "acostumado", "adaptado", "familiar", "iniciado"],
  "afeminado": ["feminino", "delicado", "sensível", "afeminado", "frágil"],
  "aferição": ["medição", "verificação", "avaliação", "análise", "checagem"],
  "aferir": ["medir", "verificar", "avaliar", "checar", "inspecionar"],
  "afeta": ["influencia", "mexe", "modifica", "atinge", "prejudica"],
  "afetação": ["artificialidade", "simulação", "fingimento", "pretenção", "exagero"],
  "afetar": ["influenciar", "modificar", "prejudicar", "alterar", "impactar"],
  "afetivo": ["emocional", "sentimental", "amoroso", "carinhoso", "passional"],
  "afeto": ["carinho", "amor", "ternura", "cuidado", "amizade"],
  "afetuoso": ["carinhoso", "amoroso", "dócil", "meigo", "sensível"],
  "affair": ["romance", "relacionamento", "caso", "história", "envolvimento"],
  "afilhada": ["padrinha", "filha de consideração", "madrinha", "comadre", "mentora"],
  "afilhado": ["padrinho", "filho de consideração", "mentorado", "comigo", "tutorado"],
  "afiliação": ["filiação", "adesão", "afirmação", "conexão", "pertencimento"],
  "afim": ["semelhante", "similar", "ligado", "relacionado", "próximo"],
  "afinal": ["por fim", "finalmente", "consequentemente", "em última análise", "por último"],
  "afinar": ["ajustar", "harmonizar", "regular", "compor", "modificar"],
  "afinaria": ["afinar", "ajustaria", "harmonizaria", "modificaria", "regularia"],
  "afinco": ["esforço", "dedicação", "vontade", "determinação", "emprego"],
  "afinidade": ["similaridade", "relação", "semelhança", "conexão", "sintonia"],
  "afins": ["semelhantes", "relacionados", "conexos", "sintônicos", "similares"],
  "afirmação": ["declaração", "asseveração", "afirmação", "asseveração", "dizer"],
  "afirmar": ["dizer", "asseverar", "declarar", "reconhecer", "confirmar"],
  "afirmará": ["declarará", "asseverará", "dirá", "reconhecerá", "confirmará"],
  "afirmo": ["digo", "confirmo", "reconheço", "assevero", "declaro"],
  "aflição": ["angústia", "sofrimento", "dor", "tristeza", "preocupação"],
  "aflige": ["preocupa", "angustia", "incomoda", "perturba", "desespera"],
  "afligir": ["preocupar", "angustiar", "incomodar", "perturbar", "turbular"],
  "aflito": ["ansioso", "preocupado", "desesperado", "aflito", "turbado"],
  "aflorar": ["surgir", "aparecer", "manifestar-se", "emergir", "desabrochar"],
  "afluente": ["rival", "tributário", "confluente", "fiscal", "rival"],
  "afluído": ["fluído", "desaguado", "corrente", "passando", "fluindo"],
  "afoito": ["arrojado", "audaz", "ousado", "impetuoso", "corajoso"],
  "afônica": ["sem voz", "rouca", "sem som", "sem capacidade vocal", "muda"],
  "afônico": ["sem voz", "mudo", "sem som", "sem fala", "sem expressão vocal"],
  "afora": ["exceto", "fora", "além de", "salvo", "fora de"],
  "aforismo": ["máxima", "ditado", "provérbio", "sentença", "pensamento"],
  "afortunado": ["sortudo", "próspero", "rico", "feliz", "afortunado"],
  "afronta": ["insulto", "desrespeito", "humilhação", "ofensa", "provocação"],
  "afrontosa": ["insultante", "desrespeitosa", "provocadora", "desafiante", "atrevida"],
  "afrontoso": ["insultante", "desrespeitoso", "provocador", "atrevido", "desafiador"],
  "afugentar": ["espantar", "afastar", "repelir", "dispersar", "expulsar"],
  "afundar": ["mergulhar", "submergir", "afogar", "afundar", "submergir"],
  "agem": ["atuam", "comportam-se", "procedem", "reagem", "agem"],
  "agenda": ["calendário", "programa", "cronograma", "horário", "tabela"],
  "agente": ["representante", "intermediário", "funcionário", "operador", "agente"],
  "agentivo": ["relativo ao agente", "ativo", "executor", "agente", "agente"],
  "agilidade": ["rapidez", "velocidade", "destreza", "eficiência", "agilidade"],
  "agilizar": ["acelerar", "facilitar", "otimizar", "dinamizar", "agilizar"],
  "agiotar": ["emprestar dinheiro a juros altos", "explorar financeiramente", "agenciar", "agiotar", "agiotar"],
  "agir": ["atuar", "proceder", "comportar-se", "agir", "agir"],
  "agitação": ["movimento", "excitação", "agitação", "agitação", "agitação"],
  "agitado": ["nervoso", "inquieto", "excitado", "agitado", "agitado"],
  "aglomeração": ["multidão", "concentração", "acúmulo", "aglomerado", "aglomeração"],
  "aglutinar": ["unir", "agrupar", "concentrar", "juntar", "aglutinar"],
  "agnóstico": ["não crente", "cético", "ateu", "agnóstico", "agnóstico"],
  "agonia": ["sofrimento", "aflição", "angústia", "agonia", "agonia"],
  "agoureiro": ["mau presságio", "preditor de infortúnios", "agoureiro", "agoureiro", "agoureiro"],
  "agouro": ["presságio", "preságio", "augúrio", "agouro", "agouro"],
  "agraciado": ["abençoado", "favorecido", "privilegiado", "agraciado", "agraciado"],
  "agraciar": ["abençoar", "favorecer", "privilegiar", "agraciar", "agraciar"],
  "agradar": ["satisfazer", "contentar", "encantar", "agradar", "agradar"],
  "agradável": ["prazeroso", "agradável", "encantador", "agradável", "agradável"],
  "agradecer": ["expressar gratidão", "reconhecer", "agradecer", "agradecer", "agradecer"],
  "agrário": ["rural", "agrícola", "campestre", "agrário", "agrário"],
  "agravante": ["agravador", "piorador", "complicador", "agravante", "agravante"],
  "agravar": ["piorar", "intensificar", "aumentar", "agravar", "agravar"],
  "agravo": ["recurso", "protesto", "contestação", "agravo", "agravo"],
  "agredi": ["ofendi", "insultei", "atropelado", "agredi", "agredi"],
  "agregado": ["juntado", "unido", "acrescentado", "agregado", "agregado"],
  "agregar": ["unir", "juntar", "acrescentar", "agregar", "agregar"],
  "agremiação": ["associação", "sociedade", "clube", "agremiação", "agremiação"],
  "agressão": ["ataque", "violência", "ofensa", "agressão", "agressão"],
  "agressivo": ["violento", "hostil", "agressivo", "agressivo", "agressivo"],
  "agressores": ["atacantes", "agressores", "ofensores", "agressores", "agressores"],
  "agreste": ["rude", "selvagem", "rústico", "agreste", "agreste"],
  "agricultura": ["agronomia", "cultivo", "lavroura", "agricultura", "agricultura"],
  "agrotóxico": ["pesticida", "veneno agrícola", "agrotóxico", "agrotóxico", "agrotóxico"],
  "agrupamento": ["concentração", "reunião", "agregação", "agrupamento", "agrupamento"],
  "agrura": ["dificuldade", "sofrimento", "adversidade", "agrura", "agrura"],
  "aguardar": ["esperar", "aguardar", "ansiar", "aguardar", "aguardar"],
  "aguardo": ["espera", "aguardo", "expectativa", "aguardo", "aguardo"],
  "águas": ["rios", "lagos", "mares", "águas", "águas"],
  "aguça": ["afiar", "aguzar", "aperfeiçoar", "aguça", "aguça"],
  "aguçado": ["afiado", "perspicaz", "aguçado", "aguçado", "aguçado"],
  "aguçar": ["afiar", "aguzar", "aperfeiçoar", "aguçar", "aguçar"],
  "agudo": ["afiado", "intenso", "agudo", "agudo", "agudo"],
  "aguentar": ["suportar", "tolerar", "resistir", "agarrar-se", "persistir"],
  "aguerrido": ["valente", "corajoso", "combativo", "bravo", "lutador"],
  "aguilhão": ["espeto", "agulha", "ferrão", "estímulo", "incitador"],
  "ah": ["ó", "ai", "ufa", "nossa", "vixe"],
  "aia": ["dama de companhia", "empregada", "assistente", "serva", "ama"],
  "ainda": ["até agora", "mesmo", "também", "por enquanto", "todavia"],
  "ainda-bem": ["felizmente", "graças a Deus", "por sorte", "ufa", "que bom"],
  "aio": ["tutor", "preceptor", "educador", "mentor", "instrutor"],
  "ajeitar": ["arrumar", "organizar", "endireitar", "alinhar", "ajustar"],
  "ajo": ["ajoelho", "curvo-me", "submeto-me", "inclino-me", "me prostro"],
  "ajuda": ["auxílio", "assistência", "amparo", "apoio", "colaboração"],
  "ajudador": ["auxiliador", "colaborador", "assistente", "parceiro", "amigo"],
  "ajudante": ["assistente", "auxiliar", "substituto", "colaborador", "ajudador"],
  "ajudar": ["auxiliar", "amparar", "colaborar", "socorrer", "assistir"],
  "ajuizamento": ["julgamento", "ponderação", "decisão", "análise", "avaliação"],
  "ajuntar": ["reunir", "juntar", "agregar", "coletar", "acumular"],
  "ajustado": ["organizado", "combinado", "alinhado", "adequado", "regulado"],
  "ajustável": ["regulável", "adaptável", "ajustado", "flexível", "configurável"],
  "ajuste": ["ajustamento", "acordo", "adaptação", "alinhamento", "regulagem"],
  "alado": ["com asas", "voador", "aéreo", "alado", "pennado"],
  "alameda": ["avenida", "caminho arborizado", "via", "rua", "trajeto"],
  "alarde": ["ostentação", "exibição", "propaganda", "apresentação", "vanglória"],
  "alarido": ["gritaria", "barulho", "confusão", "clamor", "tumulto"],
  "alarme": ["sirene", "sinal", "alerta", "aviso", "advertência"],
  "alavancar": ["impulsionar", "erguer", "elevar", "estimular", "fomentar"],
  "alçada": ["altura", "nível", "competência", "posição", "patamar"],
  "alcançar": ["atingir", "chegar", "conseguir", "obter", "alcançar"],
  "alcance": ["extensão", "distância", "raio", "medida", "possibilidade"],
  "alçar": ["erguer", "levantar", "elevar", "suspender", "alavancar"],
  "alcateia": ["matilha", "bando", "grupo de lobos", "tropa", "ajuntamento"],
  "alcatrão": ["piche", "betume", "resíduo", "substância preta", "massa asfáltica"],
  "alcova": ["quarto", "aposento", "recanto", "dormitório", "câmara"],
  "alcoviteira": ["fofoqueira", "intermediária", "mediadora amorosa", "mexeriqueira", "casamenteira"],
  "alcoviteiro": ["fofoqueiro", "intermediário", "mediador amoroso", "mexeriqueiro", "casamenteiro"],
  "alcunha": ["apelido", "epíteto", "sobrenome", "designação", "cognome"],
  "aldeão": ["camponês", "morador de aldeia", "habitante rural", "rústico", "vilarejo"],
  "aldeia": ["vila", "povoado", "comunidade", "lugarejo", "arraial"],
  "aleatoriedade": ["casualidade", "imprevisibilidade", "acaso", "contingência", "eventualidade", "ocorrência", "acidente", "vicissitude", "imprevisto", "indeterminação", "desordem", "entropia", "incerteza"],
  "aleatório": ["acidental", "imprevisível", "casual", "contingente", "eventual", "fortuito", "incerto", "duvidável", "instável", "arbitrário", "imprevisto", "inesperado", "ocorrente", "inesperado", "aleatório"],
  "alega": ["afirma", "declara", "diz", "sustenta", "assevera", "argumenta", "justifica", "apresenta", "exponde", "menciona", "cita", "aponta", "invoca", "relata", "apresenta"],
  "alegação": ["argumento", "justificativa", "defesa", "declaração", "afirmação", "exposição", "apresentação", "argumentação", "argumento", "alegamento", "alegação"],
  "alegar": ["argumentar", "justificar", "afirmar", "declarar", "expor", "apresentar", "invocar", "citar", "mencionar", "apontar", "referir", "dizer", "relatar", "apontar", "alegar"],
  "alego": ["afirmo", "declaro", "digo", "sustento", "assevero", "argumento", "justifico", "apresento", "exponho", "menciono", "cito", "aponto", "invoco", "relato", "aponto"],
  "alegoria": ["parábola", "metáfora", "símbolo", "representação", "figura de linguagem", "imagem", "apólogo", "fábula", "figura literária", "alegoria"],
  "alegórico": ["simbolista", "metafórico", "figurativo", "representativo", "abstrato", "metafórico", "alegórico"],
  "alegre": ["feliz", "contente", "jovial", "animado", "sorridente", "bem-disposto", "radiante", "alegre"],
  "alegria": ["felicidade", "contentamento", "júbilo", "satisfação", "prazer", "regozijo", "entusiasmo", "ânimo", "alegria"],
  "aleijado": ["deficiente", "inválido", "incapacitado", "impossibilitado", "mutilado", "deficiente físico", "aleijado"],
  "aleivosia": ["traição", "falsidade", "deslealdade", "infidelidade", "duplicidade", "traição", "aleivosia"],
  "aleivoso": ["traidor", "falso", "desleal", "infiel", "duplicado", "traiçoeiro", "aleivoso"],
  "aleluia": ["glória", "louvor", "exaltação", "adoração", "gratidão", "aleluia"],
  "além": ["mais distante", "ultrapassando", "fora de", "para além de", "acima de", "além"],
  "além da medida": ["excessivamente", "demasiadamente", "exageradamente", "desmesuradamente", "além da conta", "além da medida"],
  "além de": ["além disso", "para além de", "fora de", "acima de", "além de"],
  "além disso": ["além do mais", "para além disso", "fora isso", "além disso"],
  "alento": ["ânimo", "coragem", "vigor", "força", "energia", "impulso", "alento"],
  "alerta": ["aviso", "advertência", "atenção", "cuidado", "sinal", "alerta"],
  "alfa": ["primeiro", "inicial", "primário", "fundamental", "alfa"],
  "alfândega": ["aduana", "posto de controle", "ponto de fiscalização", "alfândega"],
  "alfarrábio": ["livro antigo", "obra rara", "manuscrito", "livro raro", "alfarrábio"],
  "alforje": ["bolsa", "saco", "mochila", "carteira", "alforje"],
  "algarismo": ["dígito", "número", "símbolo numérico", "algoritmo", "algarismo"],
  "algazarra": ["barulho", "confusão", "tumulto", "gritaria", "alvoroço", "algazarra"],
  "algibeira": ["bolso", "pochete", "bolsinha", "carteira", "algibeira"],
  "algo": ["coisa", "item", "objeto", "assunto", "algo"],
  "algoritmo": ["procedimento", "método", "processo", "sistema", "algoritmo"],
  "algoz": ["carrasco", "executor", "torturador", "algoz"],
  "algozes": ["carrascos", "executores", "torturadores", "algozes"],
  "alguém": ["pessoa", "indivíduo", "ser humano", "alguém"],
  "algum": ["determinado", "certo", "específico", "algum"],
  "algum tempo": ["algum período", "algum intervalo", "algum espaço de tempo", "algum tempo"],
  "alguma": ["determinada", "certa", "específica", "alguma"],
  "alguns": ["determinados", "certos", "específicos", "alguns"],
  "algures": ["em algum lugar", "em algum ponto", "em algum local", "algures"],
  "alheia": ["estranha", "externa", "desconhecida", "alheia"],
  "alheio": ["estranho", "externo", "desconhecido", "alheio"],
  "alhures": ["em outro lugar", "em outro ponto", "em outro local", "alhures"],
  "ali": ["lá", "aí", "aqui", "ali"],
  "aliado": ["parceiro", "companheiro", "cúmplice", "aliado"],
  "aliás": ["porém", "entretanto", "contudo", "no entanto", "todavia", "mas", "por outro lado", "ainda assim", "aliás"],
  "alicerçamento": ["fundação", "baseamento", "estruturação", "alicerceamento", "alicerçamento"],
  "alicerce": ["fundamento", "base", "suporte", "fundação", "alicerce"],
  "aliciamento": ["incitação", "indução", "persuasão", "convencimento", "aliciamento"],
  "aliciar": ["seduzir", "persuadir", "induzir", "convencer", "aliciar"],
  "alienação": ["desvinculação", "afastamento", "distanciamento", "alienação"],
  "alienado": ["desvinculado", "afastado", "distante", "alienado"],
  "alienar": ["desvincular", "afastar", "distanciar", "alienar"],
  "alienaria": ["alienação", "desvinculação", "afastamento", "alienaria"],
  "alienígena": ["extraterrestre", "extraterrestre", "alienígena"],
  "alijamento": ["exclusão", "marginalização", "afastamento", "alijamento"],
  "alijar": ["excluir", "marginalizar", "afastar", "alijar"],
  "alimária": ["alimentação", "nutrição", "sustento", "alimária"],
  "alimentoso": ["nutritivo", "sustentador", "alimentar", "alimentoso"],
  "alínea": ["parágrafo", "inciso", "item", "alínea"],
  "alinhar": ["arrumar", "organizar", "alocar", "alinhar"],
  "alinhar-se": ["alistar-se", "alocar-se", "alistar-se", "alinhar-se"],
  "alisado": ["suavizado", "nivelado", "polido", "alisado"],
  "alívio": ["consolo", "alívio", "alívio"],
  "alma": ["espírito", "essência", "psique", "alma"],
  "almeja": ["deseja", "aspira", "quer", "almeja"],
  "almejado": ["desejado", "almejado", "almejado"],
  "almejante": ["desejante", "aspirante", "almejante"],
  "almejar": ["desejar", "aspirar", "querer", "almejar"],
  "almoço": ["refeição", "jantar", "lanche", "almoço"],
  "alocação": ["distribuição", "atribuição", "designação", "alocação"],
  "alocado": ["designado", "atribuído", "distribuído", "alocado"],
  "alocar": ["designar", "atribuir", "distribuir", "alocar"],
  "alocução": ["discurso", "fala", "pronunciamento", "alocução"],
  "alpendre": ["varanda", "terraço", "pátio", "alpendre"],
  "alta": ["elevada", "superior", "alta"],
  "altamente": ["muito", "intensamente", "altamente"],
  "altaneiro": ["orgulhoso", "soberbo", "altivo", "altaneiro"],
  "alteração": ["modificação", "mudança", "variação", "alteração"],
  "alterar": ["modificar", "mudar", "transformar", "alterar"],
  "altercação": ["discussão", "debate", "conflito", "altercação"],
  "alteridade": ["outrem", "outro", "diferente", "alteridade"],
  "alternado": ["intercalado", "alternativo", "alternado"],
  "alternância": ["variação", "mudança", "alternância"],
  "alternativa": ["opção", "escolha", "alternativa"],
  "alternativo": ["opcional", "substituto", "alternativo"],
  "altíssimo": ["extremamente alto", "superlativo", "altíssimo"],
  "altivez": ["orgulho", "dignidade", "altivez"],
  "altivíssimo": ["extremamente altivo", "altivíssimo"],
  "altivo": ["orgulhoso", "soberbo", "altivo"],
  "alto": ["elevado", "grande", "alto"],
  "altruísmo": ["generosidade", "solidariedade", "benevolência", "altruísmo"],
  "altruísta": ["generoso", "benevolente", "solidário", "caridoso", "filantrópico", "humanitário", "desinteressado", "compassivo", "benevolente", "solidário"],
  "alucinação": ["ilusão", "delírio", "fantasia", "visão", "quimera", "miragem", "devaneio", "alucinatório", "alucinado"],
  "alucinatório": ["ilusório", "fantástico", "imaginário", "quimérico", "irreal", "surreal", "fantasmagórico", "alucinante", "alucinógeno"],
  "alude": ["refere-se", "menciona", "cita", "faz referência", "alude a", "evoca", "sugere", "insinua", "alusão"],
  "aludido": ["mencionado", "referido", "citado", "aludido", "indicado", "evocado", "sugerido", "insinuado", "alusão"],
  "aludir": ["referir", "mencionar", "citar", "fazer referência", "evocar", "sugerir", "insinuar", "alusão"],
  "alumiar": ["iluminar", "clarear", "esclarecer", "iluminar-se", "acender", "brilhar", "reluzir", "alumiar-se"],
  "aluno": ["estudante", "discente", "aprendiz", "pupilo", "educando", "alunado", "aprendiz", "discente"],
  "alusão": ["referência", "menção", "citação", "insinuação", "evocação", "sugestão", "alusão", "aludido"],
  "alusivo": ["referencial", "indicativo", "sugestivo", "evocativo", "insinuante", "aludido", "alusão"],
  "alva": ["branca", "pálida", "clara", "luminosa", "brilhante", "alvo", "alvo", "alvo"],
  "alvejado": ["atingido", "ferido", "golpeado", "acertado", "alvo", "alvo", "alvo"],
  "alvíssaras": ["recompensa", "prêmio", "gratificação", "bônus", "alvo", "alvo", "alvo"],
  "alvissareiro": ["portador de boas notícias", "mensageiro", "anunciador", "alvo", "alvo", "alvo"],
  "alvitre": ["opinião", "sugestão", "conselho", "parecer", "proposta", "alvo", "alvo", "alvo"],
  "alvo": ["destino", "objetivo", "meta", "fim", "propósito", "alvo", "alvo", "alvo"],
  "alvorada": ["amanhecer", "aurora", "nascer do sol", "alvorada", "alvo", "alvo", "alvo"],
  "alvorecer": ["amanhecer", "aurora", "nascer do sol", "alvorada", "alvo", "alvo", "alvo"],
  "alvorecido": ["clareado", "iluminado", "esclarecido", "alvo", "alvo", "alvo"],
  "alvoroço": ["agitação", "tumulto", "confusão", "barulho", "burburinho", "alvo", "alvo", "alvo"],
  "amabilidade": ["gentileza", "cortesia", "educação", "polidez", "delicadeza", "amável", "amável", "amável"],
  "amada": ["querida", "estimada", "adorada", "preciosa", "amada", "amável", "amável", "amável"],
  "amado": ["querido", "estimado", "adorado", "precioso", "amado", "amável", "amável", "amável"],
  "amadurecer": ["maturar", "enrijecer", "fortalecer", "aperfeiçoar", "amadurecer", "amável", "amável", "amável"],
  "amálgama": ["mistura", "fusão", "combinação", "mescla", "amálgama", "amável", "amável", "amável"],
  "amalgamar": ["fundir", "misturar", "combinar", "mesclar", "amalgamar", "amável", "amável", "amável"],
  "amanhasse": ["preparasse", "organizar-se", "planejasse", "arrumasse", "amanhasse", "amável", "amável", "amável"],
  "amante": ["parceiro", "companheiro", "cônjuge", "namorado", "amante", "amável", "amável", "amável"],
  "amar": ["adorar", "estimular", "apreciar", "cuidar", "amar", "amável", "amável", "amável"],
  "amarelo": ["dourado", "mostarda", "canário", "ouro", "amarelo", "amável", "amável", "amável"],
  "amarescente": ["desbotado", "descolorido", "pálido", "desvanecido", "amarescente", "amável", "amável", "amável"],
  "amargo": ["ácido", "azedo", "picante", "ranzinza", "amargo", "amável", "amável", "amável"],
  "amargura": ["tristeza", "desgosto", "decepção", "mágoa", "amargura", "amável", "amável", "amável"],
  "amargurado": ["triste", "desgostoso", "abatido", "melancólico", "amargurado", "amável", "amável", "amável"],
  "amaricado": ["envelhecido", "curado", "fermentado", "fermentado", "amaricado", "amável", "amável", "amável"],
  "amásia": ["relacionamento extraconjugal", "romance paralelo", "amásia", "amável", "amável", "amável"],
  "amasiado": ["coabitado", "convivido", "juntado", "amasiado", "amável", "amável", "amável"],
  "amassado": ["amarrotado", "enrugado", "vincado", "esmagado", "misturado", "acostumado", "derrotado", "barrento", "amassadura"],
  "amável": ["afável", "agradável", "gentil", "amigável", "educado", "cortês", "simpático", "carinhoso", "atencioso"],
  "amazona": ["guerreira", "cavaleira", "combatente", "lutadora", "cavaleira amazona", "mulher guerreira", "mulher cavaleira"],
  "ambas": ["as duas", "as duas partes", "as duas coisas", "ambas as opções", "ambas as alternativas"],
  "ambição": ["desejo", "aspiração", "cobiça", "vontade", "intenção", "objetivo", "meta", "anelo", "ânsia"],
  "ambicioso": ["cobiçoso", "desejoso", "aspirante", "arrojado", "audacioso", "ousado", "determinado", "empreendedor", "visionário"],
  "ambiência": ["atmosfera", "clima", "ambiente", "mood", "aura", "cultura", "contexto", "cenário", "ambiente envolvente"],
  "ambiente": ["meio ambiente", "ecossistema", "clima", "atmosfera", "contexto", "espaço", "local", "área", "ambiente social"],
  "ambiguidade": ["incerteza", "confusão", "dúvida", "equívoco", "imprecisão", "indefinição", "indeterminação", "insegurança", "irresolução"],
  "ambíguo": ["duplo", "confuso", "incerto", "vago", "impreciso", "indefinido", "inseguro", "equívoco", "polissêmico"],
  "ambivalência": ["ambiguidade", "confusão", "dúvida", "equívoco", "hesitação", "indefinição", "insegurança", "irresolução", "vacilação"],
  "ambivalente": ["ambíguo", "dúbio", "confuso", "equívoco", "incerto", "impreciso", "indeterminado", "contraditório", "paradoxal"],
  "ambos": ["os dois", "as duas partes", "os dois elementos", "as duas opções", "ambas as alternativas", "ambas as escolhas"],
  "ambulante": ["itinerante", "vagabundo", "errante", "nômade", "móvel", "peregrino", "transitório", "móvel", "ambulante"],
  "ameaça": ["perigo", "risco", "ameaço", "intimidação", "ameaçamento", "ameaçador", "ameaçante", "ameaçador", "ameaçoso"],
  "ameaçar": ["intimidar", "perigar", "riscar", "ameaçar", "ameaçar", "ameaçar", "ameaçar", "ameaçar", "ameaçar"],
  "ameaçara": ["intimidara", "perigara", "riscara", "ameaçara", "ameaçara", "ameaçara", "ameaçara", "ameaçara", "ameaçara"],
  "amealhar": ["acumular", "recolher", "arrecadar", "coletar", "juntar", "angariar", "recolher", "recolher", "recolher"],
  "amedrontado": ["assustado", "apavorado", "medroso", "temeroso", "aterrorizado", "assustado", "apavorado", "medroso", "temeroso"],
  "amém": ["assim seja", "que assim seja", "que seja", "que aconteça", "que se realize", "que se concretize", "que se cumpra", "que se faça", "que se realize"],
  "amena": ["agradável", "suave", "amável", "agradável", "amável", "agradável", "amável", "agradável", "amável"],
  "amenizar": ["suavizar", "atenuar", "mitigar", "aliviar", "diminuir", "amenizar", "suavizar", "atenuar", "mitigar"],
  "ameno": ["suave", "agradável", "amável", "agradável", "amável", "agradável", "amável", "agradável", "amável"],
  "amesquinhado": ["desprezado", "humilhado", "rebaixado", "depreciado", "desvalorizado", "rebaixado", "humilhado", "desprezado", "depreciado"],
  "amido": ["polissacarídeo", "carboidrato", "amilopectina", "amilo", "amilopectina", "amilopectina", "amilopectina", "amilopectina", "amilopectina"],
  "amiga": ["companheira", "camarada", "amiga", "amiga", "amiga", "amiga", "amiga", "amiga", "amiga"],
  "amigo": ["companheiro", "camarada", "amigo", "amigo", "amigo", "amigo", "amigo", "amigo", "amigo"],
  "amistoso": ["amigável", "cordial", "afável", "simpático", "amável", "amigável", "cordial", "afável", "simpático"],
  "amiudamente": ["frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente"],
  "amiúde": ["frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente", "habitualmente", "costumeiramente", "regularmente", "frequentemente"],
  "amizade": ["companheirismo", "camaradagem", "amizade", "amizade", "amizade", "amizade", "amizade", "amizade", "amizade"],
  "amnésia": ["esquecimento", "perda de memória", "lapsos de memória", "esquecimento", "perda de memória", "lapsos de memória", "esquecimento", "perda de memória", "lapsos de memória"],
  "amoldado": ["adaptado", "ajustado", "modelado", "moldado", "conformado", "ajustável", "personalizado", "configurado", "formatado"],
  "amolentado": ["suavizado", "amaciado", "atenuado", "relaxado", "suavizado", "amolecido", "amolecido", "suavizado", "amaciado"],
  "amolentar": ["suavizar", "amolecer", "atenuar", "relaxar", "suavizar", "amolecer", "amolecer", "suavizar", "amaciado"],
  "amontoar": ["acumular", "empilhar", "agrupar", "acumular", "agrupar", "empilhar", "amontoar", "acumular", "empilhar"],
  "amor": ["afeto", "carinho", "paixão", "afeição", "ternura", "desejo", "sentimento", "coração", "cuidado"],
  "amor-próprio": ["autoestima", "autoconfiança", "autovalorização", "autorespeito", "autocuidado", "autovalor", "autorespeito", "autocuidado", "autovalor"],
  "amoral": ["imoral", "não ético", "sem moral", "sem princípios", "sem ética", "sem valores", "sem princípios", "sem ética", "sem valores"],
  "amorfo": ["sem forma", "sem estrutura", "indefinido", "sem contorno", "sem forma definida", "sem estrutura", "indefinido", "sem contorno", "sem forma definida"],
  "amorosa": ["afetuosa", "carinhosa", "ternurenta", "afetuosa", "carinhosa", "ternurenta", "afetuosa", "carinhosa", "ternurenta"],
  "amorosidade": ["afetuosidade", "carinhosidade", "ternura", "afeto", "carinho", "ternura", "afeto", "carinho", "ternura"],
  "amoroso": ["afetuoso", "carinhoso", "ternurento", "afetuoso", "carinhoso", "ternurento", "afetuoso", "carinhoso", "ternurento"],
  "amostra": ["exemplo", "modelo", "amostra", "exemplo", "modelo", "amostra", "exemplo", "modelo", "amostra"],
  "amparar": ["ajudar", "auxiliar", "socorrer", "assistir", "apoiar", "sustentar", "amparar", "ajudar", "auxiliar"],
  "ampare": ["ajude", "auxilie", "socorra", "assista", "apoie", "sustente", "ampare", "ajude", "auxilie"],
  "amparo": ["apoio", "assistência", "ajuda", "suporte", "proteção", "sustentação", "amparo", "apoio", "assistência"],
  "amplexo": ["abraço", "aperto", "aperto de mão", "abraço", "aperto", "aperto de mão", "abraço", "aperto", "aperto de mão"],
  "ampliar": ["aumentar", "expandir", "crescer", "alargar", "estender", "expandir", "crescer", "alargar", "estender"],
  "amplificado": ["aumentado", "expandido", "crescido", "alargado", "estendido", "expandido", "crescido", "alargado", "estendido"],
  "amplificar": ["aumentar", "expandir", "crescer", "alargar", "estender", "expandir", "crescer", "alargar", "estender"],
  "amplitude": ["extensão", "largura", "dimensão", "tamanho", "escala", "capacidade", "envergadura", "proporção", "ampliação"],
  "amplo": ["grande", "extenso", "vastos", "amplitude", "espaçoso", "ampla", "dilatado", "alargado", "generoso"],
  "amputação": ["corte", "secação", "extirpação", "remoção", "ablação", "dissecação", "desmembramento"],
  "amuado": ["mole", "irritado", "aborrecido", "triste", "murcho", "melancólico", "desanimado", "deprimido"],
  "amuar": ["irritar", "aborrecer", "magoar", "entristecer", "chatear", "desgostar", "desencorajar", "magoar", "entristecer"],
  "anacrônica": ["antiquada", "desatualizada", "passada", "arcaica", "ultrapassada", "dissociada", "retro", "fora de moda"],
  "anacrônico": ["antiquado", "obsoleto", "arcaico", "passado", "desatualizado", "retro", "ultrapassado", "fora de moda"],
  "anacronismo": ["desatualização", "obsolescência", "incongruência", "arcaísmo", "retrocesso", "erro temporal", "desfasamento"],
  "anais": ["registros", "livros", "memórias", "documentos", "arquivos", "históricos", "crônicas", "relatórios"],
  "analfabeto": ["iletrado", "sem instrução", "inculto", "não escolarizado", "instrução insuficiente", "sem leitura", "sem educação"],
  "analisa": ["examina", "avalia", "observa", "estuda", "pesquisa", "analisa", "compreende", "interpreta"],
  "analisados": ["examinados", "observados", "estudados", "avaliados", "inspecionados", "pesquisados", "explorados", "diagnosticados"],
  "analisar": ["examinar", "avaliar", "observar", "estudar", "pesquisar", "avaliar", "inspecionar", "diagnosticar", "observar"],
  "analisasse": ["examinasse", "avaliar-se", "estudasse", "inspecionasse", "observasse", "pesquisasse", "estudasse"],
  "analise": ["exame", "avaliação", "estudo", "análise", "observação", "inspeção", "investigação", "avaliação", "pesquisa"],
  "análise": ["exame", "estudo", "avaliação", "investigação", "inspeção", "observação", "pesquisa", "diagnóstico"],
  "analítica": ["racional", "metódica", "precisa", "objetiva", "técnica", "detalhada", "científica", "crítica", "minuciosa"],
  "analítico": ["racional", "metódico", "preciso", "objetivo", "técnico", "detalhado", "científico", "crítico", "minucioso"],
  "análoga": ["semelhante", "parecida", "equivalente", "comparável", "afim", "compatível", "similar", "correspondente"],
  "analogamente": ["semelhantemente", "de modo similar", "de maneira comparável", "de forma semelhante", "de forma correspondente", "igualmente", "da mesma forma"],
  "analogia": ["semelhança", "comparação", "equivalência", "paralelismo", "relação", "correspondência", "conexão", "comparação"],
  "analógico": ["semelhante", "equivalente", "correspondente", "similar", "afim", "relacionado", "comparável", "paralelo"],
  "análogo": ["semelhante", "similar", "comparável", "correspondente", "equivalente", "relacionado", "compatível"],
  "anamnese": ["histórico médico", "diagnóstico", "relato clínico", "entrevista", "consulta", "histórico de saúde", "análise médica"],
  "ananás": ["abacaxi", "fruta tropical", "carambola", "fruto da família das bromeliáceas"],
  "anarquia": ["desordem", "caos", "confusão", "desorganização", "rebelião", "subversão", "tumulto", "desgoverno", "baderna"],
  "anárquico": ["caótico", "desordenado", "sem controle", "sem lei", "desorganizado", "desgovernado", "rebeldia", "subversivo"],
  "anátema": ["maldição", "execrável", "maldição", "condenação", "imprecado", "desagrado", "desavença", "detestável"],
  "ancenúbio": ["matrimônio", "casamento", "união", "aliança", "conjugalidade", "casamento arranjado", "aliança formal"],
  "ancestrais": ["antepassados", "antecessores", "ancestrais", "progenitores", "precursores", "antecedentes", "avós", "bisavós"],
  "ancestral": ["antepassado", "progenitor", "genitor", "ancestral", "anterior", "predecessor", "antecessor", "fundador"],
  "ancestralidade": ["herança", "tradição", "origem", "linhagem", "genealogia", "raiz", "patrimônio genético", "origem histórica"],
  "anciã": ["idosa", "velha", "sénior", "senil", "madura", "avó", "anciã", "velhinha"],
  "ancião": ["idoso", "velho", "sénior", "experiente", "anterior", "senil", "avô", "ancião", "venerável"],
  "ancorar": ["fixar", "prender", "amarrar", "atacar", "anexar", "ligar", "fundear", "segurar"],
  "andados": ["andados", "viajados", "percorridos", "trilhados", "explorados", "caminhados", "avançados"],
  "andar": ["caminhar", "perambular", "ir", "mover-se", "deslocar-se", "passear", "circular", "trilhar"],
  "andarão": ["irão", "caminharão", "deslocar-se-ão", "se moverão", "avançarão", "se deslocarão"],
  "andarei": ["caminharei", "irei", "me moverei", "viajarei", "trilharei", "me deslocarei"],
  "andássemos": ["percorressemos", "caminhássemos", "viajássemos", "nos deslocássemos", "avançássemos"],
  "andávamos": ["percorriamos", "caminhávamos", "viajávamos", "nos deslocávamos", "avançávamos"],
  "andemos": ["caminhemos", "viajemos", "nos movamos", "trilhamos", "percorremos"],
  "anedota": ["piada", "história", "conto", "narrativa", "brincadeira", "historieta", "gag", "engraçado"],
  "anel": ["argola", "anel de dedo", "banda", "ferragem", "volta", "círculo", "giro"],
  "anelar": ["desejar", "ansiar", "querer", "sonhar", "almejar", "ansiar", "aspirar"],
  "anelo": ["desejo", "ânsia", "aspiração", "vontade", "ansiedade", "almejo"],
  "anexar": ["adicionar", "incorporar", "incluir", "juntar", "agregar", "anexar", "ligar", "agregar"],
  "anexo": ["adicional", "incorporado", "anexado", "agregado", "adicionada", "acrescentado"],
  "anfibologia": ["ambiguidade", "confusão", "dupla interpretação", "erro de linguagem", "imprecisão"],
  "anfitriã": ["hospedeira", "recepcionista", "mestre de cerimônias", "organizador", "organizador de evento"],
  "anfitrião": ["hospedeiro", "anfitriã", "recepcionista", "mestre de cerimônias", "organizador", "responsável"],
  "angariar": ["obter", "captar", "arrecadar", "conseguir", "recolher", "garimpar", "recolher"],
  "angelical": ["divino", "celestial", "angélico", "puro", "santo", "etérico", "cósmico", "celestial"],
  "angústia": ["sofrimento", "dor", "aflição", "desespero", "angústia", "preocupação", "tensão", "ansiedade", "desassossego", "angustiante"],
  "angustiado": ["preocupado", "aflito", "ansioso", "desesperado", "abatido", "perturbado", "nervoso", "desolado", "triste", "desesperançado"],
  "anhanga": ["tempestade", "tormenta", "guincho", "rugido", "barulho"],
  "anil": ["cor azul", "azul", "tonalidade azul", "cor azulada"],
  "animação": ["entusiasmo", "exaltação", "energia", "vitalidade", "alegria", "vigor", "fervor", "dinamismo", "entusiasmo", "euforia"],
  "animada": ["alegre", "vibrante", "excitada", "entusiasmada", "animada", "jovial", "exuberante", "festa", "energizada"],
  "animadamente": ["alegremente", "entusiasticamente", "excitadamente", "vivazmente", "energicamente", "com entusiasmo", "com energia"],
  "animado": ["entusiasmado", "alegre", "vibrante", "exuberante", "empolgado", "eufórico", "energizado", "excitante", "radiante"],
  "animal": ["bestial", "bruto", "selvagem", "feroz", "irracional", "instintivo", "não humano", "creatura", "quadrúpede"],
  "animália": ["fauna", "bicharada", "seres vivos", "seres irracionais", "mundo animal"],
  "anímico": ["mental", "emocional", "psíquico", "espiritual", "psicológico", "interior", "psíquico"],
  "animismo": ["crença", "mitologia", "fé", "religião", "espiritualismo", "credo", "superstição", "entidades espirituais"],
  "ânimo": ["vigor", "energia", "determinação", "força", "vitalidade", "coragem", "ímpeto", "disposição", "gás", "ânimo"],
  "animosidade": ["hostilidade", "rancor", "ressentimento", "inimizade", "ódio", "antagonismo", "raiva", "agressividade", "animosidade"],
  "aninhado": ["enrolado", "acocorado", "recolhido", "encolhido", "curvado", "ajuntado", "protegido", "compactado"],
  "aninhar": ["encolher", "recolher", "ajuntar-se", "fazer ninho", "aninhavar-se", "enrolar-se", "se recolher", "se abrigar"],
  "aniquilador": ["destruidor", "exterminador", "eliminador", "devastador", "desintegrador", "extirpador", "matador", "destruído"],
  "aniquilar": ["destruir", "exterminar", "eliminar", "extinguir", "apagar", "devastar", "eliminar", "reduzir", "apagar"],
  "anistia": ["perdão", "absolvição", "perdão judicial", "liberação", "remissão", "libertação", "absolvição", "relaxamento"],
  "aniversário": ["comemoração", "data festiva", "celebração", "aniversário", "festa de aniversário", "festividade", "aniversário"],
  "anjo mau": ["demônio", "diabo", "espírito maligno", "ser do mal", "entidade maligna", "ser demoníaco"],
  "ano": ["ano civil", "período de 365 dias", "ano fiscal", "ciclo anual", "ano de vida", "ciclo de 12 meses"],
  "anódino": ["inofensivo", "insignificante", "inexpressivo", "fácil", "não prejudicial", "não doloroso", "suave", "neutro"],
  "anojado": ["envergonhado", "arrependido", "culpado", "humilhado", "desonrado", "envergonhado", "penitente"],
  "anomalia": ["irregularidade", "defeito", "desvio", "anormalidade", "distúrbio", "falha", "imperfeição", "inconformidade", "defeito"],
  "anômalo": ["irregular", "estranho", "incomum", "anormal", "bizarro", "extravagante", "atípico", "fora do comum", "desviante"],
  "anomia": ["falta de normas", "desordem", "caos social", "anomalia", "incoerência", "ausência de lei", "desorganização"],
  "anonimato": ["desconhecido", "incógnito", "anônimo", "sem nome", "sem identidade", "oculto", "sem identificação"],
  "anônimo": ["desconhecido", "incógnito", "sem nome", "sem identificação", "anônima", "não identificado", "invisível"],
  "anormal": ["irregular", "extraordinário", "estranho", "incomum", "atípico", "anômalo", "improvável", "incorreto"],
  "anoso": ["envelhecido", "antigo", "gastado", "usado", "decrépito", "velho", "gasto", "usado"],
  "anseia": ["deseja", "almeja", "quer", "ansiou", "aspira", "deseja muito", "espera", "toma", "anseia"],
  "anseie": ["deseje", "almeje", "queira", "aspire", "espera", "ansiosamente espera", "deseje profundamente"],
  "anseio": ["desejo", "vontade", "aspiração", "ânsia", "desejo profundo", "ambição", "fome", "ansiedade"],
  "ansiar": ["desejar", "almejar", "ansiar", "ter pressa", "esperar intensamente", "ter vontade de", "desejar muito"],
  "ansiedade": ["preocupação", "aflição", "medo", "nervosismo", "tensão", "desejo", "ansioso", "preocupação constante"],
  "ansiosa": ["preocupada", "ansiosa", "aflita", "agitada", "nervosa", "impaciente", "ansiosa", "impulsiva", "nervosa"],
  "ansioso": ["preocupado", "aflito", "nervoso", "ansioso", "inquieto", "tenso", "angustiado", "apreensivo", "nervoso", "tenso"],
  "antagônico": ["oposto", "contrário", "adversário", "inimigo", "opositor", "contraposto", "dissidente", "hostil", "antagonista"],
  "antagonismo": ["oposição", "contrariedade", "inimizade", "hostilidade", "disputa", "conflito", "rivalidade", "oposição", "discordância"],
  "antagonista": ["oponente", "adversário", "rival", "inimigo", "opositor", "contrário", "oponente", "concorrente", "adversário"],
  "ante": ["antes", "antes de", "previamente", "previamente a", "anteriormente"],
  "antecedência": ["antecedência", "prioridade", "anterioridade", "antecedente", "presteza", "urgência"],
  "antecedente": ["anterior", "precedente", "anterior", "próprio anterior", "predecessor"],
  "antecessor": ["predecessor", "anterior", "previamente", "passado", "anterior", "antecedente"],
  "antemão": ["de antemão", "antes", "previamente", "com antecedência", "logo", "antes do tempo"],
  "anteparo": ["proteção", "defesa", "obstáculo", "barreira", "obstáculo", "impedimento"],
  "antepassado": ["passado", "anterior", "histórico", "sucedido", "precedente"],
  "anteponha": ["colocar antes", "colocar antes de", "preceder", "pôr antes", "anteceder"],
  "anterior": ["passado", "previamente", "prévio", "antecedente", "anterior", "precedente", "predecessor"],
  "anterioridade": ["anterioridade", "precedência", "anterior", "prioridade"],
  "antes": ["anteriormente", "antes de", "anterior", "previamente", "antes que", "antes que o esperado"],
  "anteveem": ["prevêem", "antecipam", "prevê", "preveem", "presagem", "adivinham"],
  "antevi": ["percebi", "antevi", "percebi", "compreendi", "vislumbrei"],
  "antevisão": ["previsão", "prever", "olhar para o futuro", "visão antecipada", "prefiguração"],
  "anti": ["contra", "oposição", "antagonista", "anti-", "antagonista"],
  "anti-inflacionário": ["que combate a inflação", "desinflacionário", "estabilizador", "anti-aumento de preços"],
  "antidemocrático": ["totalitário", "autoritário", "arbitrário", "tirânico", "ditatorial", "não democrático", "autocrático"],
  "antídoto": ["remédio", "cura", "tratamento", "remédio", "solução", "contraveneno", "contra-toxico"],
  "antiético": ["imoral", "não ético", "antiético", "corrupto", "antiético", "ilícito", "contrário à ética"],
  "antigo": ["velho", "antiquado", "arcaico", "passado", "primitivo", "doutro tempo", "arredio", "antiquíssimo"],
  "antinomia": ["contradição", "oposição", "conflito", "contrariedade", "discordância", "discrepância"],
  "antipatia": ["aversão", "repulsa", "rancor", "inimizade", "antagonismo", "desgosto", "antipatia", "hostilidade"],
  "antipático": ["desagradável", "hostil", "inamistoso", "rude", "desatencioso", "arrogante", "insensível", "irritante"],
  "antípoda": ["oposto", "contrário", "antagônico", "discrepante", "em oposição", "oposto", "lugar oposto"],
  "antiquado": ["velho", "ultrapassado", "desatualizado", "arcaico", "obsoleto", "desgastado", "superado", "passado", "defasado"],
  "antiquados": ["superados", "arcaicos", "ultrapassados", "obsoletos", "desatualizados", "defasados"],
  "antítese": ["oposição", "contradição", "inversão", "contrário", "antagonismo", "oposição direta", "oposição direta"],
  "antitético": ["oposto", "contrário", "contraditório", "inverso", "oposição direta", "antagonista", "oposição"],
  "antitóxico": ["desintoxicante", "não tóxico", "não venenoso", "curativo", "desintoxicante"],
  "antologia": ["coleção", "compilação", "reunião", "coleção de obras", "coleção de textos", "antologia literária"],
  "antológico": ["exemplar", "referencial", "de referência", "mítico", "icônico", "clássico", "notável"],
  "antônimo": ["contrário", "oposto", "inverso", "antagônico", "oposição", "contrário"],
  "antro": ["caverna", "covil", "esconderijo", "refúgio", "esconderijo"],
  "antrópico": ["humano", "da humanidade", "relacionado ao ser humano", "da natureza humana", "da vida humana"],
  "antropocentrismo": ["antropocentrismo", "visão centrada no homem", "visão de que o homem é o centro", "humanocentrismo"],
  "antropófago": ["canibal", "devorador de carne humana", "comediante humano", "come-gente", "comediante"],
  "antropologia": ["ciência social", "estudo da humanidade", "estudo dos povos", "estudo dos seres humanos", "ciência antropológica"],
  "antropomórfico": ["humanizado", "semelhante ao homem", "com características humanas", "humaniforme", "em forma humana"],
  "anuência": ["aprovação", "consentimento", "autorização", "aceitação", "concordância", "permissão"],
  "anuente": ["que consente", "que aprova", "que permite", "que autoriza", "que aceita", "consentidor"],
  "anuir": ["consentir", "aprovar", "aceitar", "permitir", "concordar", "aceder", "autorizar"],
  "anuncio": ["divulgação", "propaganda", "publicidade", "anúncio", "mensagem", "aviso", "comunicação"],
  "ao": ["em", "na", "para", "à", "em direção a", "para"],
  "ao passo que": ["enquanto", "à medida que", "durante", "simultaneamente"],
  "ao redor": ["em volta", "ao redor de", "circundante", "nas proximidades", "em torno de", "cercado"],
  "aonde": ["para onde", "aonde", "em direção a", "onde"],
  "apagada": ["extinta", "desligada", "apaga", "desaparecida", "sumida", "extinguida", "apagada"],
  "apaixonado": ["entusiástico", "emocionado", "aflito", "intenso", "encantado", "enamorado", "romântico"],
  "apanágio": ["privilégio", "direito", "favor", "benefício", "atributo"],
  "apanhar": ["catar", "pegar", "recolher", "capturar", "arrebatar", "agarrar"],
  "apanharia": ["pegar", "capturaria", "agarraria", "recolheria", "cataría", "faria"],
  "aparamentar": ["equipar", "arranjar", "fornecer", "tratar", "prover", "enfeitar", "preparar"],
  "aparato": ["equipamento", "instrumentos", "utensílios", "armamento", "apetrechos", "fornecimento"],
  "aparecer": ["mostrar-se", "surgir", "manifestar-se", "aparecer", "vir a tona", "revelar-se"],
  "aparecerão": ["surgirão", "mostraram-se", "revelarão", "mostrar-se-ão", "surgirão"],
  "apareci": ["surgi", "mostrei-me", "revelar-me", "apareci", "surgi"],
  "aparelhos": ["equipamentos", "dispositivos", "instrumentos", "máquinas", "utensílios", "ferramentas"],
  "aparência": ["aspecto", "visual", "imagem", "semblante", "externo", "fisionomia", "aspecto exterior"],
  "aparente": ["visível", "perceptível", "manifesto", "externo", "visível", "óbvio"],
  "aparentemente": ["visivelmente", "em aparência", "de forma visível", "externamente", "aos olhos"],
  "apartado": ["isolado", "distante", "separado", "afastado", "divorciado", "isolado"],
  "apartar": ["separar", "distanciar", "dividir", "isolar", "afastar", "separar-se", "separar"],
  "apartidário": ["não partidário", "neutro", "independente", "sem partido", "isento"],
  "apascentar": ["alimentar", "pastar", "cuidar", "alimentar-se", "regar", "nutrir"],
  "apatia": ["indiferença", "desinteresse", "falta de entusiasmo", "desânimo", "insensibilidade", "letargia", "apatia"],
  "apático": ["indiferente", "desinteressado", "apatético", "insensível", "desanimado", "falta de emoção"],
  "apaziguar": ["acalmar", "tranquilizar", "serenar", "aliviar", "apaziguar", "suavizar", "acelerar", "acalma"],
  "apedeuta": ["ignorante", "inculto", "não educado", "não instruído", "pessoa sem formação"],
  "apegar": ["segurar", "agarrar", "prender", "capturar", "apossar-se", "tirar", "segurar"],
  "apego": ["afeto", "carinho", "grande apego", "afeto", "vínculo", "ligação"],
  "apelado": ["recorrido", "procurado", "clamado", "pedido", "requisitado", "apelante"],
  "apelante": ["requerente", "que apela", "proponente", "peticionário"],
  "apelar": ["solicitar", "recorrer", "pedir", "protestar", "reclamar", "implorar"],
  "apelido": ["nome", "surnome", "diminutivo", "título", "sobrenome", "identificação"],
  "apelo": ["chamado", "protesto", "reclamação", "pedido", "proposta", "invocação", "clamor"],
  "apenas": ["somente", "exclusivamente", "apenas", "único", "somente", "apenas"],
  "apêndice": ["anexo", "acréscimo", "suplemento", "adendo", "inciso", "post-scriptum"],
  "apenso": ["juntado", "anexado", "acrescentado", "adicionado", "ligado", "acrescentado"],
  "aperceber-se": ["notar", "perceber", "observar", "entender", "sentir", "perceber-se"],
  "aperfeiçoamento": ["melhoria", "aperfeiçoamento", "evolução", "refinamento", "atualização", "acréscimo", "progresso"],
  "aperfeiçoar": ["melhorar", "refinar", "aperfeiçoar", "aperfeiçoar", "melhorar"],
  "apesar": ["embora", "não obstante", "contudo", "apesar de", "mas"],
  "apesar de": ["não obstante", "mesmo com", "a despeito de", "ainda que", "embora"],
  "apessoado": ["com aparência humana", "com forma humana", "humanizado", "com características humanas"],
  "apetecer": ["desejar", "querer", "ansiar", "almejar", "ter desejo de"],
  "apetecido": ["desejado", "querido", "almejado", "ansiado", "desejável"],
  "apetrechar": ["equipar", "fornecer", "prover", "armar", "arranjar", "preparar", "montar", "adornar", "completar", "instalar"],
  "apetrechos": ["utensílios", "ferramentas", "equipamento", "instrumentos", "materiais", "aparatos", "acessórios", "artifícios", "suprimentos"],
  "apiedar-se": ["compadecer", "lamentar", "sentir pena", "ter compaixão", "ter dó", "ter misericórdia", "entristecer-se"],
  "aplacar": ["acalmar", "suavizar", "aliviar", "tranquilizar", "atenuar", "serenar", "mitigar", "amortecer", "diminuir", "apaziguar"],
  "aplausível": ["merecedor de aplausos", "digno de aplausos", "louvável", "reconhecível", "admirável", "aprovável", "honroso"],
  "aplicabilidade": ["utilidade", "praticabilidade", "efetividade", "viabilidade", "relevância", "adequação", "aplicação prática"],
  "aplicação": ["uso", "emprego", "utilização", "implementação", "execução", "aplicação prática", "realização", "exercício", "uso prático"],
  "aplicada": ["diligente", "esforçada", "dedicada", "atenta", "comprometida", "exercitada", "prática", "concreta", "focada"],
  "aplicar": ["utilizar", "empregar", "usar", "colocar em prática", "exercer", "executar", "impor", "implementar", "realizar"],
  "aplicável": ["utilizável", "adequado", "apropriado", "próprio", "relevante", "apto", "viável", "eficaz", "prático", "funcional"],
  "apocalipse": ["catástrofe", "fim do mundo", "destruição", "tragédia", "calamidade", "devastação", "desastre", "ruína", "cataclismo"],
  "apocalíptico": ["catastrófico", "destrutivo", "caótico", "trágico", "extremo", "alarmante", "terrível", "de fim do mundo", "sombrio"],
  "apócrifa": ["falsa", "falsificada", "fictícia", "não autêntica", "ilegítima", "não genuína", "não verdadeira"],
  "apócrifo": ["falso", "fraudulento", "não autêntico", "fictício", "não verídico", "inverídico", "ilegítimo"],
  "apodadura": ["disciplina", "rigor", "estrito", "tensão", "pressão", "força", "controle", "apertamento"],
  "apoderar": ["tomar posse", "assumir", "apropriar-se", "capturar", "dominar", "possuir", "se apoderar de", "incorporar", "ocupar"],
  "apogeu": ["auge", "pico", "cume", "clímax", "zênite", "máximo", "topo", "ponto alto", "extremo"],
  "apoiar": ["sustentar", "ajudar", "assistir", "amparar", "fortalecer", "auxiliar", "dar suporte", "reforçar", "amparar"],
  "apoiava": ["sustentava", "ajudava", "assistia", "amparava", "fortalecia", "reforçava", "auxiliava", "dava suporte"],
  "apoio": ["suporte", "assistência", "ajuda", "sustentação", "auxílio", "reforço", "subsidiação", "acolhimento", "proteção"],
  "apologético": ["defensivo", "justificador", "explicativo", "argumentativo", "doutrinador", "explanatório", "de defesa"],
  "apologia": ["defesa", "justificação", "exaltação", "exposição", "argumentação", "sustentação", "defensiva", "elogio"],
  "apologista": ["defensor", "justificador", "seguidor", "advogado", "partidário", "adepto", "sustentador", "defensor"],
  "apólogo": ["fábula", "parábola", "história", "conto", "narrativa", "história moral", "exemplo", "conto moral"],
  "apontamento": ["nota", "observação", "comentário", "indicação", "registro", "anotação", "detalhe", "consideração", "observação"],
  "apontar": ["indicar", "mostrar", "indicar", "salientar", "marcar", "destacar", "sinalizar", "indicar", "refletir"],
  "apoplexia": ["derrame cerebral", "insulto cerebral", "acidente vascular cerebral", "embolia cerebral", "paralisia"],
  "apor": ["explicar", "argumentar", "insistir", "dizer", "colocar", "afirmar", "debater", "apresentar", "sugerir"],
  "aporia": ["contradição", "dúvida", "impasse", "dilema", "incerteza", "enigma", "questão difícil", "obstáculo"],
  "aportar": ["chegar", "alcançar", "atingir", "atingir o destino", "tomar destino", "aproximar", "desembocar"],
  "aporte": ["contribuição", "investimento", "ajuda", "acréscimo", "aporte financeiro", "apoio", "contribuição"],
  "após": ["depois", "posteriormente", "em seguida", "após", "a seguir", "depois de", "subsequente"],
  "aposento": ["quarto", "câmara", "dormitório", "habitação", "cômodo", "residência", "casa", "lar"],
  "apostasia": ["renúncia", "deserção", "abandono", "heresia", "traição", "rejeição", "desistência", "abandono da fé"],
  "apóstata": ["renegado", "desertor", "herege", "traidor", "descrente", "abjurador", "renunciante"],
  "apostila": ["manual", "livro didático", "guia", "nota de estudo", "documento de estudo", "folha de estudos"],
  "aposto": ["anexo", "adendo", "complemento", "acréscimo", "suplemento", "apêndice", "informação adicional"],
  "apóstolo": ["discípulo", "missionário", "seguidor", "emissário", "pregador", "evangelista", "missionário"],
  "apoteose": ["clímax", "culminância", "apogeu", "grande êxito", "glória", "exaltação", "pico"],
  "apoteótico": ["triunfal", "glorioso", "grandioso", "espetacular", "brilhante", "exaltado", "heroico"],
  "apraz": ["agrada", "satisfez", "agrada", "satisfaz", "delicia", "contenta", "encanta", "prazeroso"],
  "aprazado": ["satisfeito", "contente", "agradado", "deliciado", "contentado", "agraciado"],
  "aprazível": ["agradável", "delicioso", "satisfatório", "gostoso", "aprazente", "confortante", "suave", "aprazado"],
  "aprecar": ["deteriorar", "enfraquecer", "comprometer", "desgastar", "danificar", "rebaixar"],
  "apreciação": ["avaliação", "avaliação crítica", "percepção", "julgamento", "apreço", "avaliação", "valor", "observação"],
  "apreciador": ["admirador", "crítico", "avaliador", "julgador", "entusiasta", "entendedor", "apreciador"],
  "apreciar": ["avaliar", "examinar", "gostar", "admirar", "apreciar", "avaliar", "reconhecer", "perceber"],
  "apreciarmos": ["avaliarmos", "apreciarmos", "examinarmos", "avaliar", "admirar", "reconhecer"],
  "apreço": ["estima", "valorização", "carinho", "apreço", "gratidão", "respeito", "admiração"],
  "apreender": ["capturar", "conquistar", "agarrar", "prender", "recolher", "apreender", "acatar"],
  "apreendessem": ["capturassem", "recolhessem", "prendessem", "agarrassem", "tomassem", "conquistassem"],
  "apreendido": ["capturado", "preso", "detido", "agarrado", "conquistado", "recolhido"],
  "apreensão": ["medo", "temor", "ansiedade", "dúvida", "inquietação", "preocupação", "desconfiança"],
  "apreensivo": ["ansioso", "preocupado", "nervoso", "inquieto", "ansioso", "receoso", "apreensivo"],
  "apregoar": ["proclamar", "divulgar", "anunciar", "afirmar", "gritar", "declamar", "publicar"],
  "aprender": ["estudar", "compreender", "entender", "absorver", "apreender", "ensinar", "conhecer", "captar"],
  "aprendizado": ["ensino", "educação", "desenvolvimento", "instrução", "formação", "conhecimento", "sabedoria"],
  "aprendizagem": ["ensino", "formação", "estudo", "conhecimento", "instrução", "educação", "treinamento"],
  "apresentação": ["exposição", "mostra", "desfile", "relato", "performance", "exibição", "introdução"],
  "apresentada": ["mostrada", "exposta", "demonstrada", "revelada", "introduzida", "proposta", "divulgada"],
  "apresentados": ["expostos", "demonstrados", "revelados", "introduzidos", "mostrados", "propostos"],
  "apresentando": ["mostrando", "expondo", "demonstrando", "revelando", "introduzindo", "propondo", "divulgando"],
  "apresentar": ["mostrar", "demonstrar", "expor", "introduzir", "exibir", "relatar", "propor", "exibir"],
  "apresentávamos": ["expondo", "demonstrando", "mostrando", "revelando", "introduzindo", "exibindo"],
  "apresentável": ["adequado", "apto", "apropriado", "exibível", "apresentado", "mostrável", "digno"],
  "apressar": ["acelerar", "apressar", "afobar", "agitar", "apurando", "preparar"],
  "apresso": ["urgente", "acelero", "agito", "urgência"],
  "apressuramento": ["pressão", "urgência", "agitação", "velocidade"],
  "apressurar": ["acelerar", "pressionar", "agitar", "afobar"],
  "aprimorado": ["melhorado", "refinado", "aperfeiçoado", "evoluído", "avançado"],
  "aprimoramento": ["aperfeiçoamento", "melhoria", "evolução", "aperfeiçoação", "refinamento"],
  "aprimorar": ["aperfeiçoar", "melhorar", "refinar", "avançar", "evoluir"],
  "aprisco": ["gaiola", "cercado", "abrigo", "canil", "refúgio"],
  "apropriado": ["adequado", "apropriado", "adequado", "apropriado"],
  "apropriar": ["tomar", "possuir", "apoderar", "capturar", "apropriar-se", "adquirir"],
  "apropriar-se": ["tomar", "possuir", "apoderar-se", "capturar", "apropriar"],
  "aprouver": ["aceitar", "aprovar", "concordar", "validar", "permitir", "verificar", "consentir"],
  "aprovação": ["consentimento", "autorização", "permissão", "validação", "aceitação", "suporte"],
  "aproveitador": ["explorador", "interesseiro", "cambista", "ganancioso", "ausente de ética", "aproveitador"],
  "aproveitar": ["usufruir", "tirar proveito", "se beneficiar", "extrair", "aproveitar", "usufruir"],
  "aproveite": ["faça uso", "aproveite", "colha", "utilize", "usufrua"],
  "aprovisionado": ["fornecido", "suprido", "disponibilizado", "reservado", "provisionado", "estocado"],
  "aprovisionar": ["fornecer", "suprir", "reservar", "abastecer", "provisionar", "disponibilizar"],
  "aproximar": ["chegar", "acercar", "atrair", "conectar", "aproximar-se", "juntar"],
  "aprumar": ["endireitar", "ajustar", "alinhar", "arrumar", "equilibrar", "regular"],
  "apta": ["habilitada", "capaz", "qualificada", "competente", "proficiente", "adequada", "preparada"],
  "aptidão": ["habilidade", "competência", "capacidade", "qualidade", "proeficiência", "especialização"],
  "apto": ["qualificado", "preparado", "habilitado", "competente", "apto", "habilidoso"],
  "apuração": ["investigação", "inquérito", "análise", "exame", "verificação", "inspeção", "levantamento"],
  "apurado": ["investigado", "analisado", "verificado", "conferido", "inspecionado", "esclarecido"],
  "apurar": ["investigar", "examinar", "verificar", "esclarecer", "conferir", "analisar", "inspecionar", "checar", "avaliar", "esclarecer"],
  "aquela": ["aquela coisa", "essa", "a citada", "a mencionada", "a indicada", "a especificada"],
  "aquele": ["aquele homem", "aquele objeto", "o citado", "o mencionado", "o indicado", "o especificado"],
  "aquém": ["abaixo", "inferior", "menos", "para baixo", "em baixo", "por baixo"],
  "aqui": ["neste local", "neste lugar", "nesse ponto", "nessa região", "neste local"],
  "aquiescência": ["concordância", "consentimento", "aceitação", "aprovação", "assentimento", "submissão"],
  "aquiescer": ["concordar", "aceitar", "aprovar", "consentir", "submeter-se", "anuir"],
  "aquisição": ["compra", "obtenção", "adquirir", "incorporação", "obtenção", "alcançar", "recebimento"],
  "ar": ["atmosfera", "ambiente", "vento", "brisa", "aire", "aragem"],
  "arábico": ["árabe", "relativo à língua árabe", "do Oriente Médio", "árabe clássico", "linguagem árabe"],
  "arado": ["implemento agrícola", "ferramenta de cultivo", "utensílio agrícola", "instrumento de lavra"],
  "arador": ["agricultor", "lavrador", "trabalhador rural", "fazendeiro", "cultivador"],
  "aragem": ["brisa", "vento suave", "corrente de ar", "ar fresco", "aragem"],
  "aranha": ["arácnido", "inseto", "bicho", "aranhóide"],
  "arar": ["plantar", "semear", "cultivar", "lavourar", "regar"],
  "arara": ["ave tropical", "papagaio", "psitacídeo", "arara-azul", "arara-vermelha"],
  "arauto": ["mensageiro", "heraldista", "anunciante", "portador", "mensageiro de novidades"],
  "arbitrária": ["autoritária", "despótica", "imparcial", "autocrática", "não fundamentada", "injusta"],
  "arbitrariamente": ["de forma autoritária", "sem base", "sem critério", "sem justificativa", "de forma injusta"],
  "arbitrariedade": ["autoritarismo", "injustiça", "despotismo", "imparcialidade", "tiranismo", "arbitrarismo"],
  "arbitrário": ["autoritário", "sem razão", "imparcial", "injusto", "indefinido", "desprovido de critérios"],
  "arbítrio": ["decisão", "opção", "preferência", "juízo", "critério", "livre-arbítrio", "escolha"],
  "árbitro": ["juiz", "referee", "moderador", "avaliador", "examinador", "juiz de campo", "juiz de partida"],
  "arborizado": ["com árvores", "florestado", "verde", "vegetado", "paisagístico"],
  "arbusto": ["arbóreo", "planta", "vegetação", "arbusto lenhoso", "mato"],
  "arcabouço": ["estrutura", "fundamento", "esqueleto", "estruturação", "estrutura básica", "base", "construção"],
  "arcaico": ["antigo", "pré-histórico", "passado", "primitivo", "arcaizante", "vintage", "retrô"],
  "arcar": ["suportar", "carregar", "suportar peso", "encarar", "enfrentar", "assumir", "responsabilizar-se"],
  "archote": ["tocha", "vela", "lume", "lanterna", "fogo", "iluminação portátil"],
  "árdego": ["ardente", "intenso", "feroz", "violento", "de calor extremo", "intenso"],
  "ardil": ["estratagema", "trapaça", "fraude", "manipulação", "artifício", "engano", "farsa"],
  "ardiloso": ["astuto", "enganador", "fraudulento", "manhoso", "caviloso", "truculento", "perverso"],
  "ardor": ["paixão", "fervor", "intensidade", "sentimento forte", "desejo", "ímpeto", "calor", "desconforto"],
  "arduamente": ["dificilmente", "com esforço", "com dificuldade", "penosamente", "exaustivamente", "incansavelmente"],
  "areia": ["grãos", "material arenoso", "terra fina", "sólo", "sedimento", "pó de terra"],
  "aresta": ["bordo", "margem", "canto", "extremo", "ponta", "límite", "canto afiado"],
  "arfar": ["respirar com dificuldade", "ofegar", "suspirar", "respiração difícil", "exalar", "soltar ar"],
  "argo": ["intenção", "sentido", "objetivo", "finalidade", "direção"],
  "argola": ["anel", "círculo", "anel de metal", "laço", "aro", "argola metálica"],
  "argúcia": ["inteligência", "astúcia", "perspicácia", "habilidade", "sagacidade", "acuidade", "percepção"],
  "argucioso": ["perspicaz", "inteligente", "astuto", "sagaz", "esperto", "mestre"],
  "arguição": ["questão", "interrogação", "pergunta", "questionamento", "inquérito", "consulta", "prova"],
  "arguido": ["acusado", "suspeito", "réu", "denunciado", "interrogado"],
  "arguir": ["questionar", "interrogar", "perguntar", "afirmar", "alegar", "propor", "discutir"],
  "argumentar": ["discutir", "justificar", "razão", "apresentar razões", "defender", "fundamentar", "disputar"],
  "argumentaria": ["discutiria", "debateria", "defenderia", "justificaria", "debatia", "proporia"],
  "argumento": ["razão", "justificação", "explicação", "defesa", "fundamento", "discussão", "pretexto"],
  "arguto": ["perspicaz", "astuto", "inteligente", "habilidoso", "sagaz", "esperto"],
  "árido": ["seco", "deserto", "estéril", "inóspito", "impróprio", "duro", "pouco fértil"],
  "aríete": ["bode", "animal de combate", "bicho", "cabra", "maça de ataque", "animal"],
  "arisca": ["agitada", "suspeita", "desconfiada", "esquiva", "brava", "desconfiada", "assustada"],
  "arisco": ["desconfiado", "bravo", "agressivo", "irritado", "repelente", "antipático", "pouco sociável"],
  "aristocracia": ["elite", "nobreza", "classe alta", "alto escalão", "classe privilegiada", "nobreza"],
  "aristocrata": ["nobre", "membro da alta sociedade", "nobre de linhagem", "membro da aristocracia", "senhor"],
  "aristocrático": ["nobre", "elevado", "de classe alta", "distinto", "sofisticado", "altivo"],
  "armário": ["guarda-roupa", "closet", "armário de armazenamento", "móvel", "gaveteiro", "compartimento"],
  "armazém": ["depósito", "loja", "almoxarifado", "armazém de mercadorias", "depósito comercial"],
  "armistício": ["trégua", "cessação de hostilidades", "acordo de paz", "suspensão de guerra"],
  "aroma": ["cheiro", "odor", "perfume", "fragrância", "essência", "odor agradável"],
  "arquétipo": ["modelo", "prototipo", "ideal", "exemplo", "paradigma", "exemplar"],
  "arquipélago": ["conjunto de ilhas", "ilha em grupo", "sistema de ilhas", "formação de ilhas"],
  "arquitetar": ["planejar", "projetar", "conceber", "desenhar", "elaborar", "formular", "planejar"],
  "arquivo": ["documento", "registro", "dossiê", "pastas", "documentação", "contabilidade"],
  "arrabalde": ["bairro", "periferia", "subúrbio", "zona rural", "área afastada"],
  "arraial": ["vila", "localidade", "povoado", "bairro", "comunidade", "colônia"],
  "arraigada": ["firmada", "enraizada", "profunda", "estabelecida", "implantada"],
  "arraigado": ["profundo", "fixado", "enraizado", "consolidado", "imparcial", "permanente"],
  "arranho": ["corte", "rasgo", "arranhão", "machucado", "ferida", "lesão"],
  "arranque": ["início", "começo", "início abrupto", "ponto de partida", "início rápido"],
  "arrasa": ["destruir", "derrubar", "arruinar", "quebrar", "dilacerar"],
  "arrasar": ["destruir", "devastar", "deteriorar", "destruir completamente"],
  "arrazoado": ["explicação", "justificação", "defesa", "argumentação", "raciocínio", "motivo"],
  "arrazoo": ["justificação", "argumento", "raciocínio", "explicação", "defesa"],
  "arrear": ["descarregar", "tirar", "remover", "abaixar", "descarregar"],
  "arrebatado": ["emocionado", "agitado", "intenso", "impressionado", "excitado"],
  "arrebatador": ["emocionante", "impressionante", "deslumbrante", "extremamente encantador", "intenso"],
  "arrebatar": ["tirar", "roubar", "arrancar", "capturar", "remover", "roubo"],
  "arrecadar": ["coletar", "recolher", "acumular", "capturar", "guardar"],
  "arredio": ["desconfiado", "agitado", "assustado", "despistado", "ansioso"],
  "arrefecer": ["esfriar", "acalmar", "reduzir", "diminuir", "amortecer"],
  "arrefecimento": ["esfriamento", "redução", "calmante", "diminuição"],
  "arreliado": ["irritado", "aborrecido", "chateado", "incomodado", "aflito"],
  "arremede": ["imitar", "copiar", "fazer imitação", "simular", "reproduzir"],
  "arremendar": ["consertar", "reparar", "remendar", "ajustar", "corrigir"],
  "arrendar": ["alugar", "ceder", "alocar", "emprestar", "locar", "alugar terrenos"],
  "arrendatário": ["inquilino", "locatário", "usuário", "morador", "tomador de aluguel"],
  "arrepender": ["desistir", "lamentar", "desejar não ter feito", "se lamentar"],
  "arrependimento": ["remorso", "culpa", "desculpa", "penitência", "lamentação"],
  "arretado": ["incrível", "fantástico", "extraordinário", "sensacional", "fabuloso", "excelente"],
  "arriar": ["abaixar", "recolher", "soltar", "deixar cair", "deter"],
  "arriaria": ["diminuiria", "reduziria", "baixaria", "recolheria", "abaixaria"],
  "arrimo": ["apoio", "sustento", "fundamento", "suporte", "amparo", "base"],
  "arrogância": ["prepotência", "soberba", "altivez", "orgulho", "desdém", "vaidade"],
  "arrogante": ["prepotente", "soberbo", "orgulhoso", "presunçoso", "desdenhoso"],
  "arrogar": ["atribuir-se", "reivindicar", "afirmar", "usurpar", "pretender", "proclamar"],
  "arroio": ["ribeirão", "riacho", "córrego", "ribeira", "águas", "curso d'água"],
  "arrojado": ["ousado", "audacioso", "valente", "corajoso", "destemido", "ousadia"],
  "arrojo": ["coragem", "audácia", "ousadia", "ousado", "valentia", "destemor"],
  "arrolado": ["enumerado", "listado", "mencionado", "citados", "relacionados"],
  "arrolar": ["enumerar", "listar", "mencionar", "citar", "relatar", "catalogar"],
  "arromba": ["destruição", "quebra", "dano", "devastação", "agitação", "violência"],
  "arroubo": ["exaltação", "entusiasmo", "frenesi", "ânimo", "arrebato", "excesso de emoção"],
  "arruinar-se": ["destruir-se", "prejudicar-se", "arruinar", "deteriorar", "perder-se"],
  "arrumar": ["organizar", "arranjar", "ordenar", "arranjar", "dispor", "ajustar"],
  "arte": ["habilidade", "técnica", "talento", "criação", "mestre", "expressão artística"],
  "artefato": ["objeto", "instrumento", "ferramenta", "artigo", "utensílio", "produto"],
  "articulação": ["conexão", "ligação", "juntura", "coerência", "associação", "união"],
  "articulado": ["conectado", "organizado", "planejado", "coeso", "combinado", "coerente"],
  "articulam": ["conectam", "organizam", "unem", "associam", "coordenam", "planejam"],
  "articular": ["conectar", "unir", "organizar", "formular", "planejar", "coordenar"],
  "articulei": ["organizei", "planejei", "conectei", "coordenei", "estruturei"],
  "artífice": ["criador", "inventor", "trabalhador", "fabricante", "construtor", "engenheiro"],
  "artificial": ["sintético", "falso", "fabricado", "não natural", "artifício", "imitação"],
  "artifício": ["estratagema", "truque", "trapaça", "técnica", "método", "manipulação"],
  "artigo": ["item", "peça", "produto", "matéria", "objeto", "item", "componente"],
  "artimanha": ["engano", "truque", "estratagema", "farsa", "artifício", "fraude"],
  "artista": ["criador", "pintor", "músico", "performer", "designer", "produtor", "arteiro"],
  "arvorar": ["erguer", "levantar", "subir", "afirmar", "exibir", "manifestar"],
  "árvore": ["planta", "arbusto", "vegetação", "flora", "árvore frutífera", "árvore alta"],
  "asa": ["pavio", "aeródromo", "asa de ave", "projeção", "flap", "estrutura de voo"],
  "ascendência": ["origem", "ascensão", "linhagem", "ancestralidade", "tradição", "ascensão"],
  "ascendente": ["elevado", "superior", "dominante", "em ascensão", "de alto escalão"],
  "ascender": ["subir", "elevar", "alcançar", "subir", "progredir", "avançar"],
  "ascensão": ["elevação", "subida", "promoção", "crescimento", "desenvolvimento", "progresso"],
  "asceta": ["ermita", "monge", "contente com o simples", "fervoroso", "disciplinado"],
  "ascetério": ["campo de retiro", "espaço de retiro", "lugar de meditação", "lugar de isolamento"],
  "ascético": ["espiritual", "disciplinado", "simplista", "de renúncia", "moderado"],
  "ascetismo": ["disciplina", "renúncia", "abnegação", "rigor", "purificação", "rejeição do luxo"],
  "asco": ["repulsa", "nojo", "desgosto", "repugnância", "aversão", "desgosto"],
  "asfixiar": ["sufocar", "estrangular", "sufocar ar", "asfixiar", "engasgar"],
  "asilo": ["abrigo", "refúgio", "lar", "casa de repouso", "santuário", "residência"],
  "asinino": ["besta", "burro", "idiota", "estúpido", "tolo", "tosco", "insensato"],
  "asnada": ["tolice", "idiotice", "baboseira", "insensatez", "tolice", "trabalho inútil"],
  "asneira": ["bobagem", "tolice", "estupidez", "besteira", "absurdo", "imprudência"],
  "asno": ["burro", "jumento", "idiota", "estúpido", "tolo", "insensato"],
  "aspecto": ["aparência", "visão", "aspecto físico", "forma", "característica", "imagem"],
  "aspectos": ["características", "detalhes", "pontos de vista", "facetas", "particularidades"],
  "aspereza": ["rigidez", "dureza", "áspero", "brusquidade", "rudeza", "intolerância"],
  "aspergir": ["spray", "molhar", "regar", "borrifar", "irrigrar", "salpicar"],
  "aspiração": ["desejo", "ambição", "objetivo", "anhelo", "vontade", "aspirante"],
  "aspirante": ["candidato", "iniciando", "novato", "noviço", "potencial", "almejador"],
  "aspirar": ["desejar", "almejar", "respirar", "sugerir", "ter como objetivo", "intentar"],
  "aspire": ["respire", "sugira", "deseje", "almeje", "pensar", "almejar"],
  "asquerosa": ["repulsiva", "nojenta", "desagradável", "repugnante", "insalubre", "sujíssima"],
  "asqueroso": ["nojento", "repulsivo", "desagradável", "repugnante", "insalubre", "nojo"],
  "assalariado": ["empregado", "trabalhador", "funcionário", "operário", "assalariado"],
  "assaltear": ["roubar", "saquear", "atacar", "agredir", "pilhar", "despojar"],
  "assar": ["cozinhar", "fazer", "preparar", "torrar", "fritar", "esquentar"],
  "assassinato": ["homicídio", "morte", "crime", "execução", "abate", "execução"],
  "assassino": ["criminoso", "homicida", "mortal", "matador", "criminoso", "perpetrador"],
  "assassinos": ["criminosos", "homicidas", "matadores", "perpetradores", "execráveis"],
  "assaz": ["bastante", "suficiente", "completamente", "muito", "consideravelmente", "muitíssimo"],
  "asseado": ["limpo", "organizado", "arrumado", "higiênico", "impecável", "puro"],
  "assecla": ["seguidor", "lacai", "vassalo", "cúmplice", "acólito", "servo"],
  "assédio": ["intimidação", "abuso", "perseguição", "agressão", "pressionamento", "violência"],
  "assegurar": ["garantir", "afirmar", "confirmar", "certificar", "assegurar", "validar"],
  "asseio": ["limpeza", "organização", "higiene", "arrumação", "limpeza", "estética"],
  "asselvajar": ["degredar", "sujar", "fazer barbaridades", "cometer excessos", "descontrolar"],
  "assembleia": ["reunião", "encontro", "congresso", "convenção", "plenária", "encontro"],
  "assentamento": ["acordo", "decisão", "assentimento", "negociação", "tomada de decisão"],
  "assentar": ["estabelecer", "fixar", "firmar", "implantar", "organizar", "iniciar"],
  "assente": ["fixado", "estabelecido", "fundado", "resolvido", "decidido"],
  "assentimento": ["acordo", "aceitação", "aprovação", "consentimento", "admissão"],
  "assentir": ["concordar", "aceitar", "aprovar", "admitir", "sancionar", "endossar"],
  "assento": ["cadeira", "poltrona", "banco", "assento", "cadeira de apoio", "local de sentar"],
  "asséptico": ["higienizado", "limpo", "sterilizado", "sem germes", "sanitário", "claro"],
  "asserção": ["afirmação", "declaração", "opinião", "oposição", "confirmação", "garantia"],
  "assertiva": ["afirmativa", "declaração", "opinião", "afirmação", "oposição", "aprovação"],
  "assertivo": ["decisivo", "afirmativo", "convincente", "claro", "resoluto", "positivo"],
  "assessor": ["consultor", "conselheiro", "assistente", "orientador", "ajudante", "facilitador"],
  "assessorado": ["assistido", "orientado", "ajudado", "consultado", "assistido"],
  "assessoria": ["consultoria", "apoio", "orientação", "suporte", "assistência"],
  "assevera": ["afirma", "decreta", "garante", "declara", "expressa", "assevera"],
  "asseverar": ["confirmar", "garantir", "afirmar", "declara", "expor", "sustentar"],
  "assexuado": ["desprovido de sexualidade", "asexual", "não sexual", "sem atrativos sexuais"],
  "assiduidade": ["frequência", "regularidade", "constância", "permanência", "assiduidade"],
  "assíduo": ["frequente", "constante", "regular", "dedicado", "assiduidade"],
  "assim": ["dessa forma", "dessa maneira", "dessa maneira", "como", "portanto", "desse jeito"],
  "assim-sendo": ["portanto", "logo", "em consequência", "dessa forma", "por isso"],
  "assimetria": ["desequilíbrio", "desproporção", "injustiça", "desarmonia", "irregularidade", "desigualdade"],
  "assimétrico": ["desigual", "irregular", "desequilibrado", "distorcido", "injusto", "incongruente"],
  "assimilação": ["integração", "absorção", "incorporação", "apreensão", "adaptação", "aculturação"],
  "assimilar": ["absorver", "integrar", "incorporar", "entender", "compreender", "adotar"],
  "assíncrono": ["não simultâneo", "não sincronizado", "dispar", "diferente", "não coordenado", "desfasado"],
  "assintomático": ["sem sintomas", "invisível", "indolente", "sem sinais", "inapresentável", "inaparente"],
  "assistência": ["ajuda", "suporte", "apoio", "assistência técnica", "acompanhamento", "assistência social"],
  "assistir": ["ver", "observar", "presenciar", "ajudar", "associar-se", "participar"],
  "assoalho": ["chão", "piso", "superfície", "soalho", "fundamento", "base"],
  "assoberbado": ["sobrecarregado", "aflito", "excessivamente ocupado", "preocupado", "atolado", "apertado"],
  "associação": ["organização", "grupo", "entidade", "parceria", "fórum", "conexão"],
  "associada": ["conectada", "unida", "ligada", "relacionada", "cooptada", "vinculada"],
  "associado": ["integrante", "membro", "coligado", "parceiro", "sócio", "filiado"],
  "associar": ["unir", "ligar", "conectar", "relacionar", "integrar", "combinar"],
  "assolar": ["devastar", "destruir", "arrasar", "deteriorar", "derrubar", "desorganizar"],
  "assumir": ["aceitar", "assumir responsabilidade", "aceitar", "tomar", "encarar", "iniciar"],
  "assunção": ["aceitação", "tomada de responsabilidade", "obrigação", "função", "atribuição", "tarefa"],
  "assunto": ["tema", "assunto", "pauta", "questão", "tópico", "problema"],
  "astral": ["espiritual", "energético", "vibracional", "mágico", "psíquico", "mental"],
  "astro": ["estrela", "corpo celeste", "luminária", "satélite", "estrela do mar", "planeta"],
  "astronauta": ["cosmonauta", "viajante espacial", "explorador do espaço", "astrónomo", "cosmólogo"],
  "astronomia": ["estudo das estrelas", "ciência celestial", "ciência do espaço", "estudo planetário", "astrologia"],
  "astronômico": ["celestial", "do espaço", "estelar", "planetário", "gigante", "cosmicamente grande"],
  "astúcia": ["habilidade", "inteligência", "astúcia", "habilidade", "espertice", "cautela"],
  "astucioso": ["esperto", "ingenioso", "artifício", "habilidoso", "astuto", "esperto"],
  "astuta": ["esperta", "inteligente", "perspicaz", "habilidosa", "ingeniosa", "inteligente"],
  "astuto": ["espertalhão", "inteligente", "artificioso", "perspicaz", "sagaz", "esperto"],
  "ata": ["documento", "registro", "memorial", "ato oficial", "relatório", "pacto"],
  "atadura": ["curativo", "bandagem", "ligadura", "envoltório", "faixa", "sutura"],
  "atalaia": ["vigilante", "sentinela", "guarda", "espião", "observador", "vigia"],
  "atarracado": ["baixo", "encolhido", "compacto", "baixo e largo", "forte", "grosso"],
  "ataviar-se": ["engalanar", "arrumar-se", "vestir-se", "adornar-se", "enfeitar-se", "decorar-se"],
  "atávico": ["ancestral", "hereditário", "primitivo", "instintivo", "ancestralidade", "histórico"],
  "atavismo": ["herança", "repetição", "resquício", "traço antigo", "comportamento herdado"],
  "até": ["até aquele ponto", "no limite", "no máximo", "completamente", "inclusive"],
  "até aquele momento": ["até então", "até aquele ponto", "neste momento", "no presente", "até agora"],
  "até lá": ["quando chegar", "no futuro", "em breve", "no momento marcado", "logo"],
  "ateia": ["não crente", "agnóstica", "sem fé", "sem crença religiosa"],
  "ateliê": ["estúdio", "oficina", "local de trabalho", "espaço artístico", "sala de arte"],
  "atemorizar": ["assustar", "aterrorizar", "medo", "amedrontar", "atemorizar", "incutir medo"],
  "atemporal": ["fora do tempo", "não datado", "intemporal", "eterno", "sempre atual", "fora de época"],
  "atenção": ["cuidado", "foco", "concentração", "interesse", "observação", "alerta"],
  "atenciosamente": ["cordialmente", "com atenção", "com carinho", "com consideração", "respeitosamente"],
  "atencioso": ["cortês", "educado", "dedicado", "cuidadoso", "amável", "carinhoso"],
  "atendam": ["ajudem", "assistem", "acolham", "servem", "auxiliam", "orientam"],
  "atendendo": ["ajudando", "auxiliando", "prestando assistência", "assistindo", "acolhendo", "respondendo"],
  "atender": ["ajudar", "assistir", "prestar serviço", "acolher", "servir", "dar suporte"],
  "atendíamos": ["auxiliávamos", "prestávamos", "ajudávamos", "acolhíamos", "oferecíamos ajuda"],
  "atendimento": ["assistência", "ajuda", "suporte", "acolhimento", "atendimento ao cliente", "serviço"],
  "atentado": ["ataque", "agressão", "violência", "tentativa de homicídio", "incidente", "ato de violência"],
  "atentamente": ["com atenção", "cuidadosamente", "detidamente", "com concentração", "observando"],
  "atentar": ["prestar atenção", "considerar", "observar", "avaliar", "prestar atenção", "focar"],
  "atento": ["alerta", "concentrado", "atencioso", "vigilante", "cuidado", "observador"],
  "atenuação": ["diminuição", "redução", "suavização", "moderação", "amenização", "alívio"],
  "atenuado": ["suavizado", "reduzido", "diminuído", "amenizado", "amenizado", "diminuído"],
  "atenuante": ["mitigador", "aliviador", "suavizante", "amenizador", "moderador", "mitigante"],
  "atenuar": ["suavizar", "diminuir", "reduzir", "amenizar", "mitigar", "moderar"],
  "ater": ["chegar", "atingir", "encontrar", "superar", "atingir"],
  "aterrorizante": ["aterrorizante", "assustador", "medonho", "horrível", "terrível", "apavorante"],
  "ateu": ["não crente", "agnóstico", "sem fé", "sem religião", "incrédulo", "não religioso"],
  "atiçar": ["incitar", "provocar", "estimular", "despertar", "agitar", "excitar"],
  "atinar": ["compreender", "perceber", "entender", "encontrar", "perceber", "notar"],
  "atinente": ["relevante", "apropriado", "pertinente", "congruente", "adequado", "direcionado"],
  "atingimento": ["alcance", "efeito", "atingir", "conquista", "realização", "execução"],
  "atingimos": ["alcançamos", "conseguimos", "executamos", "realizamos", "atingimos", "obtivemos"],
  "atingir": ["alcançar", "atingir", "superar", "conquistar", "cumprir", "atender"],
  "atingirão": ["alcançarão", "conquistarão", "atingirão", "serão capazes", "realizarão", "conseguirão"],
  "atípico": ["inusitado", "anômalo", "diferente", "irregular", "pouco usual", "fora do comum"],
  "atitude": ["comportamento", "ação", "postura", "atuação", "mentalidade", "opinião"],
  "ative": ["execute", "realize", "faça funcionar", "inicie", "comece", "ative"],
  "atividade": ["ação", "ocupação", "tarefa", "função", "atividade prática", "emprego"],
  "atividades": ["tarefas", "ocupações", "ações", "funções", "empregos", "deveres"],
  "ativismo": ["engajamento", "mobilização", "ação política", "activismo", "luta social", "defesa"],
  "ativista": ["defensor", "militante", "engajado", "participante", "agitador", "combatente"],
  "ativo": ["dinâmico", "vivo", "energético", "eficaz", "operante", "produtivo"],
  "atmosfera": ["ambiente", "clima", "ar", "atmosférico", "ambiente atmosférico", "atmosfera terrestre"],
  "ato": ["ação", "gesto", "movimento", "atividade", "procedimento", "manifestação"],
  "atônito": ["surpreso", "chocado", "perplexo", "estupefato", "boquiaberto", "maravilhado"],
  "atormentação": ["sofrimento", "aflição", "tortura", "angústia", "padecimento", "aflição mental"],
  "atormentado": ["afligido", "sofrido", "atormentado", "torturado", "preocupado", "afligido"],
  "atormentador": ["torturador", "angustiante", "aflitivo", "opressor", "assustador", "inquietante"],
  "atraente": ["charmoso", "sedutor", "bonito", "interessante", "encantador", "apetitoso"],
  "atraíamos": ["seduzíamos", "chamávamos", "encantávamos", "atraímos", "captávamos", "envolvíamos"],
  "atraiçoado": ["traído", "enganado", "desleal", "fiel", "infiel", "desleal"],
  "atraído": ["chamado", "seduzido", "convencido", "chamado", "encantado", "sugado"],
  "atrapalhar": ["interferir", "dificultar", "complicar", "atrasar", "desorganizar", "confundir"],
  "atrás": ["por trás", "retroceder", "posteriormente", "atrasado", "para trás", "em retaguarda"],
  "atrasada": ["demorada", "atrasada", "desatualizada", "retrasada", "adiada", "tardia"],
  "atrasado": ["demorado", "atrasado", "retardado", "desatualizado", "prejudicado", "retardado"],
  "atrasar": ["atrasar-se", "demorar", "postergar", "interromper", "segurar", "retrasar"],
  "atraso": ["demora", "retardo", "adiamento", "retraso", "diferimento", "postergação"],
  "através": ["por meio", "via", "com", "por", "utilizando", "atravessando"],
  "através de": ["por meio de", "usando", "com", "utilizando", "atravessando", "por intermédio de"],
  "atravessadamente": ["de forma apressada", "de maneira desordenada", "descontroladamente", "com pressa", "sem cuidado", "desorientadamente"],
  "atrelado": ["ligado", "conectado", "vinculado", "associado", "relacionado", "atado"],
  "atrevidaço": ["muito atrevido", "excessivamente ousado", "desrespeitoso", "audacioso", "impertinente", "atrevido demais"],
  "atribuição": ["tarefa", "função", "responsabilidade", "encargo", "missão", "atributo"],
  "atribuições": ["funções", "tarefas", "encargos", "responsabilidades", "atributos", "missões"],
  "atribuída": ["designada", "imposta", "dada", "concedida", "delegada", "passada"],
  "atribuído": ["designado", "imposto", "concedido", "passado", "devido", "delegado"],
  "atribuir": ["dar", "designar", "impor", "conceder", "passar", "delegar"],
  "atribulado": ["preocupado", "aflito", "sobrecarregado", "desorganizado", "atordoado", "atrapalhado"],
  "atributo": ["qualidade", "característica", "caráter", "propriedade", "aspecto", "função"],
  "atrito": ["conflito", "desentendimento", "fricção", "choque", "disputa", "desavença"],
  "atrocidade": ["barbárie", "crueldade", "violência", "abominação", "injustiça", "atrocidade moral"],
  "atrocidades": ["barbáries", "crueldades", "violências", "abusos", "injustiças", "monstruosidades"],
  "atrofiado": ["enfraquecido", "deteriorado", "debilitado", "atrofiado", "diminuto", "murchado"],
  "atrofiar": ["deteriorar", "enfraquecer", "debilitar", "reduzir", "murchar", "diminuir"],
  "atroz": ["cruel", "barbárico", "monstruoso", "terrível", "brutal", "desumano"],
  "atua": ["trabalha", "age", "executa", "realiza", "funciona", "opera"],
  "atuação": ["ação", "trabalho", "desempenho", "atividade", "função", "exercício"],
  "atuado": ["realizado", "feito", "executado", "desempenhado", "concluído", "processado"],
  "atual": ["presente", "moderno", "atualizado", "recentemente", "em curso", "contemporâneo"],
  "atualização": ["renovação", "modernização", "reformulação", "ajuste", "atualização de dados", "atualização de informações"],
  "atualizado": ["modernizado", "renovado", "ajustado", "reformulado", "atualizado", "melhorado"],
  "atualizar": ["renovar", "modernizar", "reformular", "ajustar", "atualizar dados", "atualizar informações"],
  "atualmente": ["hoje", "no momento", "agora", "atualmente falando", "no presente", "no atual momento"],
  "atuando": ["realizando", "operando", "trabalhando", "funcionando", "desempenhando", "executando"],
  "atuar": ["agir", "trabalhar", "executar", "operar", "desempenhar", "agir de forma"],
  "atuasse": ["agisse", "fizesse", "trabalhasse", "operasse", "funcionasse", "desempenhasse"],
  "aturdido": ["atordoado", "confuso", "desorientado", "tonto", "surpreendido", "abalado"],
  "audácia": ["ousadia", "coragem", "atrevimento", "audacioso", "desafio", "bravura"],
  "audaciosa": ["ousada", "arrojada", "desafiante", "corajosa", "intrépida", "valente"],
  "audacioso": ["corajoso", "ousado", "arrojado", "intrépido", "desafiante", "audacioso"],
  "audaz": ["corajoso", "ousado", "arrojado", "valente", "audacioso", "intrépido"],
  "audiência": ["sessão", "plenário", "ouvido", "reunião", "escuta", "sessão pública"],
  "auferido": ["recebido", "adquirido", "ganho", "obtido", "conquistado", "angariado"],
  "auferir": ["receber", "obter", "adquirir", "ganhar", "conquistar", "arrecadar"],
  "auge": ["pico", "clímax", "apogeu", "topo", "cúspide", "crescimento máximo"],
  "augúrio": ["presságio", "previsão", "pressentimento", "sinal", "oráculo", "augúrio favorável"],
  "augusto": ["respeitável", "nobre", "ilustre", "honrado", "digno", "grandioso"],
  "aula": ["lição", "ensino", "treinamento", "educação", "sessão", "classificação"],
  "aumenta": ["cresce", "aumenta", "expande", "eleva", "amplia", "expande"],
  "aumentado": ["expandido", "crescido", "elevar", "ampliado", "aumentado", "acrescido"],
  "aumentar": ["crescer", "expandir", "elevar", "ampliar", "incrementar", "acrescentar"],
  "aumento": ["crescimento", "expansão", "acréscimo", "elevação", "ampliação", "expansão"],
  "aura": ["campo energético", "atmosfera", "halo", "glória", "luminosidade", "vibe"],
  "auréola": ["halo", "glória", "coroa", "luz", "aura", "resplendor"],
  "auricular": ["do ouvido", "auditivo", "relativo ao ouvido", "sonoro", "auditivo", "escutável"],
  "aurora": ["alvorada", "amanhecer", "início", "primeiros raios", "luz da manhã", "começo"],
  "auscultar": ["escutar", "ouvir", "examinar", "verificar", "analisar", "investigar"],
  "ausência": ["falta", "privação", "inexistência", "não presença", "desaparecimento", "vacuidade"],
  "ausente": ["faltando", "não presente", "desaparecido", "em falta", "inexistente", "desaparecido"],
  "auspício": ["presságio", "indicação", "favor", "benesse", "indício", "sinal"],
  "auspícios": ["presságios", "indicações", "sinais", "favores", "benesses", "oráculos"],
  "auspicioso": ["favorável", "promissor", "benéfico", "positivo", "favorável", "benévolo"],
  "austera": ["rigorosa", "severa", "sóbria", "dura", "restrita", "rígida"],
  "austeridade": ["severidade", "rigor", "rigidez", "sóbrio", "restrição", "simplicidade"],
  "austero": ["severo", "rigoroso", "rígido", "restrito", "sóbrio", "distoante"],
  "autarquia": ["autossuficiência", "independência", "autonomia", "independência administrativa", "autossuficiente", "administração independente"],
  "autêntica": ["genuína", "real", "verdadeira", "legítima", "pura", "confiável"],
  "autenticado": ["verificado", "validado", "confirmado", "certificado", "homologado", "legalizado"],
  "autenticidade": ["genuinidade", "realidade", "veracidade", "legitimidade", "verificação", "originalidade"],
  "autêntico": ["genuíno", "verdadeiro", "real", "original", "legítimo", "não falsificado"],
  "auto": ["próprio", "pessoal", "individual", "autossuficiente", "autônomo", "solitário"],
  "autocomiseração": ["autopiedade", "autoindulgência", "autoapatia", "compaixão por si mesmo", "autovitimização", "autoestima baixa"],
  "autoconfiança": ["segurança", "certeza", "autoestima", "fé em si mesmo", "confiança", "convicção"],
  "autoconhecimento": ["conhecimento de si", "autoentendimento", "autocompreensão", "reflexão interna", "introspecção", "autodeterminação"],
  "autocontrole": ["controle próprio", "domínio próprio", "disciplina", "autoajuste", "controle emocional", "controle interno"],
  "autóctone": ["nativo", "originário", "autêntico", "local", "próprio da terra", "inerente"],
  "autoestima": ["amor próprio", "valorização", "autoconfiança", "orgulho de si", "dignidade", "segurança interna"],
  "automóvel": ["carro", "veículo", "automóvel", "carroceria", "carro de passeio", "veículo motorizado"],
  "autonomia": ["independência", "autossuficiência", "autodeterminação", "autogoverno", "liberdade", "autocontrole"],
  "autônomo": ["independente", "livre", "autossuficiente", "autogovernado", "sem vínculo", "autodidata"],
  "autor": ["criador", "escritor", "inventor", "originador", "responsável", "compositor"],
  "autoria": ["criação", "responsabilidade", "propriedade", "ação do autor", "autoria intelectual", "origem"],
  "autoridade": ["poder", "controle", "domínio", "influência", "liderança", "competência"],
  "autoritária": ["despótica", "opressiva", "absoluta", "autocrática", "dictatorial", "impositiva"],
  "autoritário": ["despótico", "opressor", "autocrático", "tirânico", "impositivo", "controlador"],
  "autoritarismo": ["despotismo", "tirania", "opressão", "autocracia", "controle", "dominação"],
  "autorização": ["aprovação", "permissão", "consentimento", "licença", "habilitação", "autorização formal"],
  "autos": ["documentos", "registros", "papéis", "ações", "processos", "registros oficiais"],
  "autossuficiente": ["independente", "autoalimentado", "autossustentado", "autocontido", "autossuficiência", "independente em recursos"],
  "autuação": ["imposição de multa", "penalidade", "ação legal", "processo", "infração", "indicação"],
  "autuado": ["penalizado", "multado", "processado", "notificado", "acuzado", "condenado"],
  "autuar": ["multar", "penalizar", "notificar", "processar", "acusar", "impor multa"],
  "auxiliar": ["ajudar", "assistir", "apoio", "assistir", "apoiar", "colaborar"],
  "auxiliar-se": ["ajudar-se", "assister-se", "apoiar-se", "cooperar", "colaborar", "auxiliar-se"],
  "auxilie": ["ajude", "assista", "socorra", "apóie", "coopere", "colabore"],
  "auxílio": ["ajuda", "assistência", "suporte", "socorro", "ajuste", "apoiamento"],
  "aval": ["aprovação", "garantia", "autorização", "fiança", "certificação", "apoio"],
  "avaliação": ["análise", "avaliação", "exame", "avaliação crítica", "ponderação", "julgar"],
  "avaliado": ["analisado", "avaliado", "examinado", "apreciado", "considerado", "verificado"],
  "avaliam": ["analisam", "examinam", "avaliam", "apreciam", "consideram", "verificam"],
  "avaliar": ["analisar", "examinar", "ponderar", "avaliar", "julgar", "verificar"],
  "avalie": ["analise", "examine", "aprecie", "considere", "verifique", "julgue"],
  "avalizar": ["confirmar", "aprovar", "validar", "garantir", "autenticar", "certificar"],
  "avançamento": ["progresso", "desenvolvimento", "crescimento", "evolução", "impulso", "expansão"],
  "avançar": ["progredir", "crescer", "evoluir", "expandir", "ir adiante", "seguir em frente"],
  "avançaria": ["progrediria", "cresceria", "evoluiria", "seguiria em frente", "expandiria", "prosseguiria"],
  "avante": ["para frente", "adiante", "à frente", "em direção à frente", "seguindo", "para o futuro"],
  "avarento": ["ganancioso", "mesquinho", "pegador", "coveiro", "hoarder", "mesquinho"],
  "avareza": ["ganância", "mesquinhez", "cobiça", "ambição excessiva", "egoísmo", "egoísmo materialista"],
  "avaria": ["dano", "defeito", "estrago", "dano material", "falha", "problema"],
  "avaro": ["ganancioso", "mesquinho", "coveiro", "despótico", "pequeno", "egoísta"],
  "avassalador": ["arrasador", "dominante", "forte", "incontrolável", "poderoso", "imperioso"],
  "avatar": ["imagem", "representação", "persona", "alter ego", "figura", "personagem"],
  "avejão": ["grande ave", "pássaro", "ave imponente", "animal de grande porte"],
  "avença": ["acordo", "trato", "entendimento", "pacto", "compromisso", "arranjo"],
  "avental": ["roupa de proteção", "vestimenta", "fato", "cobertura", "roupa de trabalho", "capote"],
  "aventar": ["lançar", "arremessar", "ventilar", "soprar", "discutir", "pensar sobre"],
  "aventura": ["expedição", "viagem", "experiência", "descoberta", "desafio", "emoção"],
  "aventureiro": ["explorador", "desbravador", "explorador de novos horizontes", "corajoso", "desafiador", "perigoso"],
  "averiguar": ["verificar", "investigar", "examinar", "checar", "analisar", "confirmar"],
  "aversão": ["antipatia", "repulsa", "desgosto", "desapreço", "avaliação negativa", "não gostar"],
  "avesso": ["inverso", "contrário", "oposto", "contraposição", "antônimo", "inverso completo"],
  "aviamento": ["suprimento", "equipamento", "fornecimento", "acessórios", "material de apoio", "munição"],
  "avião": ["aeronave", "avião comercial", "aeroplano", "aeromóvel", "média aeronave", "transporte aéreo"],
  "aviar": ["preparar", "arranjar", "preparar para viagem", "combinar", "provisionar", "preparar algo"],
  "aviasse": ["preparasse", "arrumasse", "organizar", "elaborar", "organizar", "compor"],
  "ávida": ["desejosa", "ansiosa", "intensa", "avidente", "sedenta", "cobiçosa"],
  "avidez": ["desejo", "ânsia", "sede", "fome", "cobiça", "desejo excessivo"],
  "avido": ["ansioso", "desejoso", "cobiçoso", "saciado", "aflito", "sedento"],
  "aviltado": ["humilhado", "desprezado", "submisso", "desvalorizado", "desprezado", "rebaixado"],
  "aviltamento": ["humilhação", "depreciação", "desvalorização", "rebaixamento", "desdém", "afronta"],
  "aviltante": ["humilhante", "desprezível", "depreciativo", "rebaixante", "miserável", "desonroso"],
  "aviltar": ["humilhar", "rebaixar", "depreciar", "desvalorizar", "desprezar", "submeter"],
  "avisar": ["informar", "alertar", "comunicar", "notificar", "avertir", "advertir"],
  "aviso": ["alerta", "notificação", "advertência", "informação", "comunicação", "aviso prévio"],
  "avistam": ["veem", "observam", "enxergam", "percebem", "olham", "detectam"],
  "avistarmos": ["vermos", "olharmos", "observarmos", "enxergarmos", "encontrarmos", "percebermos"],
  "avivar": ["animar", "agitar", "revigorar", "fortalecer", "reanimar", "energizar"],
  "avizinhamento": ["proximidade", "vizinhança", "aproximação", "circunstância", "contiguidade", "contato próximo"],
  "avocar": ["chamar", "convocar", "chamar para si", "atribuir", "instruir", "chamar para julgamento"],
  "avoengo": ["ascendência", "ancestralidade", "raiz familiar", "linhagem", "origem", "ancestral"],
  "avulso": ["isolado", "solitário", "desconectado", "fora de conjunto", "independente", "não relacionado"],
  "axe": ["machado", "ferramenta", "instrumento de corte", "martelo", "ferramenta de madeira", "cutelo"],
  "axila": ["embaixo do braço", "sulco axilar", "cavidade axilar", "área do braço", "parte inferior do braço", "do braço"],
  "axiologia": ["teoria dos valores", "estudo dos valores", "filosofia dos valores", "teoria ética", "teoria do bem", "valores humanos"],
  "axioma": ["princípio", "verdade", "afirmação", "postulado", "lei", "fundamento"],
  "azáfama": ["pressa", "agitação", "correria", "turbulência", "atividade", "aflição"],
  "azêmola": ["farinha de trigo", "farinha fina", "amido", "farinha", "resíduo de trigo", "produto de trigo"],
  "azo": ["necessidade", "urgência", "pressa", "agitação", "transtorno", "correria"],
  "azoar": ["zoar", "brincar", "trollar", "provocar", "mofar", "zombar"],
  "azougue": ["mercúrio", "substância química", "metal pesado", "elemento", "metal líquido", "azougue líquido"],
  "azul": ["cor", "tonalidade", "cor celeste", "azul marinho", "azul claro", "cor do céu"],
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
