/* Tour Atrativos do Tocantins — configuração das cenas */
window.TOUR = {
 "titulo": "Atrativos do Tocantins",
 "subtitulo": "Tour virtual 360°",
 "cenaInicial": "menu",
 "cenas": [
  {
   "id": "menu",
   "nome": "Mapa dos atrativos",
   "grupo": "Início",
   "vista": [
    389,
    215
   ],
   "fov": 72,
   "legenda": "Bem-vindo ao Tocantins em 360°!\n\nO passeio começa no saguão do Palácio Araguaia, em Palmas, diante do mapa do estado. Toque em um dos pins amarelos para visitar Palmas, Monte do Carmo, Natividade ou o Jalapão.\n\nComo navegar:\n• Arraste a imagem para olhar em volta e use a rolagem ou o gesto de pinça para aproximar.\n• Pin verde: segue para o próximo ponto. Pin laranja: volta ao anterior.\n• Ícone de drone: leva a uma vista aérea.\n• Ícone de mapa azul, ou o botão de mapa no alto da tela: volta a este mapa.\n• Botão \"Sobre este lugar\": conta a história de cada atrativo.\n• Menu ☰: lista todas as cenas para ir direto a qualquer uma.",
   "botao": "Boas-vindas e como navegar",
   "pontos": [
    {
     "tipo": "dest",
     "para": "palmas-palacio-araguaia",
     "at": [
      386,
      239
     ],
     "texto": "Palmas"
    },
    {
     "tipo": "dest",
     "para": "fachada",
     "at": [
      391,
      253
     ],
     "texto": "Monte do Carmo"
    },
    {
     "tipo": "dest",
     "para": "natividade-igreja-matriz-fachada",
     "at": [
      400,
      273
     ],
     "texto": "Natividade"
    },
    {
     "tipo": "dest",
     "para": "jalapao-cachoeira-do-formiga-1",
     "at": [
      421,
      246
     ],
     "texto": "Jalapão"
    }
   ]
  },
  {
   "id": "palmas-palacio-araguaia",
   "nome": "Palácio Araguaia Governador José Wilson Siqueira Campos",
   "grupo": "Palmas",
   "vista": [
    554,
    318
   ],
   "aerea": true,
   "legenda": "Sede do Poder Executivo do Tocantins, o Palácio Araguaia Governador José Wilson Siqueira Campos foi inaugurado em 9 de março de 1991, cerca de dois anos depois da escolha do local da nova capital. O nome homenageia o Rio Araguaia, o outro grande rio que banha o estado.\n\nO palácio fica no centro da Praça dos Girassóis, onde estão também o Cruzeiro, primeiro monumento erguido em Palmas, esculpido em pau-brasil, o Memorial Coluna Prestes e o marco do Centro Geodésico do Brasil.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-av-jk-4",
     "at": [
      542,
      254
     ],
     "texto": "Seguir: Avenida JK - vista aérea",
     "icone": "drone"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      539,
      218
     ],
     "texto": "Voltar ao mapa"
    },
    {
     "tipo": "seguir",
     "at": [
      764,
      251
     ],
     "texto": "Seguir: Espaço Cultural José Gomes Sobrinho",
     "para": "palmas-espaco-cultural",
     "icone": "drone"
    },
    {
     "tipo": "seguir",
     "at": [
      1050,
      253
     ],
     "texto": "Seguir: Praia da Graciosa",
     "para": "palmas-praia-da-graciosa-1"
    },
    {
     "tipo": "seguir",
     "at": [
      73,
      262
     ],
     "texto": "Seguir: Praia das Arnos",
     "para": "palmas-praia-das-arnos-1",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-av-jk-4",
   "nome": "Avenida JK - vista aérea",
   "grupo": "Palmas",
   "vista": [
    822,
    218
   ],
   "aerea": true,
   "legenda": "A Avenida JK e a Avenida Teotônio Segurado são os grandes eixos de Palmas e se encontram na Praça dos Girassóis, onde fica o Palácio Araguaia. A pedra fundamental da capital foi lançada em 20 de maio de 1989, no local da futura praça.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-av-jk-2",
     "at": [
      780,
      335
     ],
     "texto": "Seguir: Avenida JK - área comercial"
    },
    {
     "tipo": "voltar",
     "para": "palmas-palacio-araguaia",
     "at": [
      804,
      273
     ],
     "texto": "Voltar: Palácio Araguaia Governador José Wilson Siqueira Campos",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-av-jk-2",
   "nome": "Avenida JK - área comercial",
   "grupo": "Palmas",
   "vista": [
    550,
    275
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "palmas-av-jk-4",
     "at": [
      218,
      206
     ],
     "texto": "Voltar: Avenida JK - vista aérea",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-espaco-cultural",
   "nome": "Espaço Cultural José Gomes Sobrinho",
   "grupo": "Palmas",
   "vista": [
    965,
    295
   ],
   "aerea": true,
   "legenda": "Inaugurado em 1996, o Espaço Cultural é um marco arquitetônico de Palmas e palco de espetáculos regionais e nacionais. Desde 2004 leva o nome de José Gomes Sobrinho, poeta, escritor, músico e teatrólogo.\n\nO complexo reúne o Theatro Fernanda Montenegro, o cinema Sala Sinhozinho, biblioteca, a Galeria Municipal de Artes e a Grande Praça, usada para shows e eventos.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-parque-cesamar-1",
     "at": [
      877,
      265
     ],
     "texto": "Seguir: Parque Cesamar",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "at": [
      539,
      272
     ],
     "texto": "Voltar: Palácio Araguaia",
     "para": "palmas-palacio-araguaia",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-parque-cesamar-1",
   "nome": "Parque Cesamar",
   "grupo": "Palmas",
   "vista": [
    914,
    331
   ],
   "aerea": true,
   "legenda": "Uma das principais áreas verdes de Palmas, o Parque Cesamar tem quase 100 hectares, com lago, pista de caminhada e corrida de 2.840 metros, academia ao ar livre e parque infantil.\n\nParte do parque é reserva biológica e protege o manancial do córrego Brejo Comprido.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-parque-cesamar-2",
     "at": [
      246,
      318
     ],
     "texto": "Seguir: Parque Cesamar - lago",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "para": "palmas-espaco-cultural",
     "at": [
      860,
      265
     ],
     "texto": "Voltar: Espaço Cultural José Gomes Sobrinho",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-parque-cesamar-2",
   "nome": "Parque Cesamar - lago",
   "grupo": "Palmas",
   "vista": [
    350,
    275
   ],
   "aerea": true,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "at": [
      228,
      242
     ],
     "texto": "Voltar: Parque Cesamar",
     "para": "palmas-parque-cesamar-1",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-da-graciosa-1",
   "nome": "Praia da Graciosa - Vista 1",
   "grupo": "Palmas",
   "vista": [
    353,
    198
   ],
   "aerea": false,
   "legenda": "Cartão-postal de Palmas, a Praia da Graciosa fica às margens do lago formado pelo represamento da Usina Hidrelétrica de Lajeado, no Rio Tocantins, com mais de 170 km de extensão.\n\nO calçadão, com quadras de esporte e restaurantes, é usado para caminhadas, corridas e passeios de bicicleta, e é um dos lugares preferidos para ver o pôr do sol.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-da-graciosa-2",
     "at": [
      233,
      203
     ],
     "texto": "Seguir: Praia da Graciosa - Vista 2",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "at": [
      814,
      199
     ],
     "texto": "Voltar: Palácio Araguaia",
     "para": "palmas-palacio-araguaia",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-da-graciosa-2",
   "nome": "Praia da Graciosa - Vista 2",
   "grupo": "Palmas",
   "vista": [
    548,
    221
   ],
   "aerea": true,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-da-graciosa-3",
     "at": [
      1038,
      318
     ],
     "texto": "Seguir: Praia da Graciosa - Vista 3",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-da-graciosa-1",
     "at": [
      402,
      318
     ],
     "texto": "Voltar: Praia da Graciosa - Vista 1"
    }
   ]
  },
  {
   "id": "palmas-praia-da-graciosa-3",
   "nome": "Praia da Graciosa - Vista 3",
   "grupo": "Palmas",
   "vista": [
    550,
    275
   ],
   "aerea": true,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-da-graciosa-4",
     "at": [
      934,
      352
     ],
     "texto": "Seguir: Praia da Graciosa - Vista 4",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-da-graciosa-2",
     "at": [
      777,
      340
     ],
     "texto": "Voltar: Praia da Graciosa - Vista 2",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-da-graciosa-4",
   "nome": "Praia da Graciosa - Vista 4",
   "grupo": "Palmas",
   "vista": [
    458,
    235
   ],
   "aerea": true,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-da-graciosa-5",
     "at": [
      295,
      275
     ],
     "texto": "Seguir: Praia da Graciosa - Vista 5"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-da-graciosa-3",
     "at": [
      95,
      295
     ],
     "texto": "Voltar: Praia da Graciosa - Vista 3",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-da-graciosa-5",
   "nome": "Praia da Graciosa - Vista 5",
   "grupo": "Palmas",
   "vista": [
    472,
    164
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "palmas-praia-da-graciosa-4",
     "at": [
      863,
      170
     ],
     "texto": "Voltar: Praia da Graciosa - Vista 4",
     "icone": "drone"
    },
    {
     "tipo": "mapa",
     "at": [
      471,
      145
     ],
     "texto": "Voltar ao mapa",
     "para": "menu"
    }
   ]
  },
  {
   "id": "palmas-praia-das-arnos-1",
   "nome": "Praia das Arnos - Vista 1",
   "grupo": "Palmas",
   "vista": [
    565,
    248
   ],
   "aerea": true,
   "legenda": "Na região norte de Palmas, a Praia das Arnos fica às margens do Lago de Palmas, formado pelo represamento do Rio Tocantins. Tem faixa de areia para banho e restaurantes à beira do lago.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-das-arnos-2",
     "at": [
      464,
      257
     ],
     "texto": "Seguir: Praia das Arnos - Vista 2",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "at": [
      370,
      250
     ],
     "texto": "Voltar: Palácio Araguaia",
     "para": "palmas-palacio-araguaia",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-das-arnos-2",
   "nome": "Praia das Arnos - Vista 2",
   "grupo": "Palmas",
   "vista": [
    550,
    275
   ],
   "aerea": true,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-das-arnos-3",
     "at": [
      1053,
      291
     ],
     "texto": "Seguir: Praia das Arnos - Vista 3"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-das-arnos-1",
     "at": [
      428,
      273
     ],
     "texto": "Voltar: Praia das Arnos - Vista 1",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-das-arnos-3",
   "nome": "Praia das Arnos - Vista 3",
   "grupo": "Palmas",
   "vista": [
    550,
    275
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "palmas-praia-das-arnos-5",
     "at": [
      267,
      262
     ],
     "texto": "Seguir: Praia das Arnos - Vista 4"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-das-arnos-2",
     "at": [
      429,
      201
     ],
     "texto": "Voltar: Praia das Arnos - Vista 2",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-praia-das-arnos-5",
   "nome": "Praia das Arnos - Vista 4",
   "grupo": "Palmas",
   "vista": [
    680,
    230
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "palmas-praia-das-arnos-3",
     "at": [
      812,
      259
     ],
     "texto": "Voltar: Praia das Arnos - Vista 3"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      699,
      410
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  },
  {
   "id": "fachada",
   "nome": "Igreja de Nossa Senhora do Rosário · fachada",
   "grupo": "Monte do Carmo",
   "vista": [
    828,
    93
   ],
   "aerea": false,
   "legenda": "Construída em 1801 por João Ayres da Silva, contratado pela Irmandade de Nossa Senhora do Rosário pelo valor de 1.200 oitavas de ouro. A igreja abriga a imagem de Nossa Senhora do Carmo, padroeira da cidade, e por isso também é conhecida como Igreja de Nossa Senhora do Carmo. Foi tombada como Patrimônio Cultural do Tocantins em 2012.\n\nMonte do Carmo nasceu da mineração de ouro: o arraial foi fundado em 1741. Em julho, os festejos da padroeira, do Divino e de Nossa Senhora do Rosário acontecem em frente à igreja, com o cortejo das Taieiras.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "igreja-nossa-senhora-do-rosario-monte-do-carmo-interior-1",
     "at": [
      801,
      250
     ],
     "texto": "Seguir: Igreja de Nossa Senhora do Rosário · interior 1"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      269,
      288
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  },
  {
   "id": "igreja-nossa-senhora-do-rosario-monte-do-carmo-interior-1",
   "nome": "Igreja de Nossa Senhora do Rosário · interior 1",
   "grupo": "Monte do Carmo",
   "vista": [
    841,
    214
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "igreja-nossa-senhora-do-rosario-monte-do-carmo-interior-2",
     "at": [
      306,
      344
     ],
     "texto": "Seguir: Igreja de Nossa Senhora do Rosário · interior 2"
    }
   ]
  },
  {
   "id": "igreja-nossa-senhora-do-rosario-monte-do-carmo-interior-2",
   "nome": "Igreja de Nossa Senhora do Rosário · interior 2",
   "grupo": "Monte do Carmo",
   "vista": [
    764,
    244
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      924,
      284
     ],
     "texto": "Voltar ao mapa"
    },
    {
     "tipo": "voltar",
     "at": [
      213,
      288
     ],
     "texto": "Voltar: Igreja de Nossa Senhora do Rosário · fachada",
     "para": "fachada"
    }
   ]
  },
  {
   "id": "natividade-igreja-matriz-fachada",
   "nome": "Paróquia Nossa Senhora da Natividade · fachada",
   "grupo": "Natividade",
   "vista": [
    284,
    111
   ],
   "aerea": false,
   "legenda": "Natividade, a cidade mais antiga do Tocantins, nasceu da exploração do ouro em 1734. O centro histórico, com cerca de 250 imóveis, foi tombado pelo Iphan em 1987.\n\nA igreja da Paróquia Nossa Senhora da Natividade, a Matriz da cidade, foi erguida em 1759 e foi tombada pelo Estado em 1980. Ela guarda a imagem de Nossa Senhora da Natividade, levada para a região em 1735. O Tocantins é o único estado brasileiro que tem Nossa Senhora da Natividade como padroeira, celebrada em 8 de setembro.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "natividade-igreja-matriz-interior",
     "at": [
      289,
      245
     ],
     "texto": "Seguir: Paróquia Nossa Senhora da Natividade · interior"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      30,
      244
     ],
     "texto": "Voltar ao mapa"
    },
    {
     "tipo": "seguir",
     "at": [
      139,
      199
     ],
     "texto": "Seguir: Museu Histórico de Natividade",
     "para": "natividade-museu-praca"
    },
    {
     "tipo": "seguir",
     "at": [
      1038,
      232
     ],
     "texto": "Seguir: Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada"
    }
   ]
  },
  {
   "id": "natividade-igreja-matriz-interior",
   "nome": "Paróquia Nossa Senhora da Natividade · interior",
   "grupo": "Natividade",
   "vista": [
    747,
    236
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "natividade-igreja-matriz-fachada",
     "at": [
      210,
      257
     ],
     "texto": "Voltar: Paróquia Nossa Senhora da Natividade · fachada"
    }
   ]
  },
  {
   "id": "natividade-museu-praca",
   "nome": "Museu Histórico de Natividade · Praça Leopoldo de Bulhões",
   "grupo": "Natividade",
   "vista": [
    554,
    222
   ],
   "aerea": false,
   "legenda": "O Museu Histórico de Natividade funciona no prédio da antiga cadeia pública, da época do Império, na Praça Senador Leopoldo de Bulhões. O prédio foi restaurado pelo Programa Monumenta e o acervo conta a história da cidade desde o ciclo do ouro.\n\nNa mesma praça, o antigo prédio da Câmara Municipal abriga o Centro de Artesanato e Apoio ao Turista.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "natividade-museu-entrada",
     "at": [
      921,
      254
     ],
     "texto": "Seguir: Museu Histórico de Natividade · entrada"
    },
    {
     "tipo": "voltar",
     "para": "natividade-igreja-matriz-fachada",
     "at": [
      768,
      203
     ],
     "texto": "Voltar: Paróquia Nossa Senhora da Natividade · fachada"
    },
    {
     "tipo": "seguir",
     "at": [
      871,
      211
     ],
     "texto": "Seguir: Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada"
    }
   ]
  },
  {
   "id": "natividade-museu-entrada",
   "nome": "Museu Histórico de Natividade · entrada",
   "grupo": "Natividade",
   "vista": [
    584,
    251
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "natividade-museu-sala-1",
     "at": [
      1027,
      279
     ],
     "texto": "Seguir: Museu Histórico de Natividade · sala de exposições"
    },
    {
     "tipo": "voltar",
     "para": "natividade-museu-praca",
     "at": [
      59,
      290
     ],
     "texto": "Voltar: Museu Histórico de Natividade · Praça Leopoldo de Bulhões"
    }
   ]
  },
  {
   "id": "natividade-museu-sala-1",
   "nome": "Museu Histórico de Natividade · sala de exposições",
   "grupo": "Natividade",
   "vista": [
    697,
    201
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "natividade-museu-entrada",
     "at": [
      111,
      276
     ],
     "texto": "Voltar: Museu Histórico de Natividade · entrada"
    }
   ]
  },
  {
   "id": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada",
   "nome": "Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos · fachada",
   "grupo": "Natividade",
   "vista": [
    551,
    108
   ],
   "aerea": false,
   "legenda": "A Igreja de Nossa Senhora do Rosário dos Pretos começou a ser erguida no século XVIII por pessoas negras escravizadas, em pedra canga, para ser o templo de sua devoção a Nossa Senhora do Rosário. A obra foi interrompida e nunca concluída.\n\nTombadas pelo Estado em 1980 e protegidas pelo Iphan, as ruínas são o cartão-postal de Natividade e um dos símbolos do Tocantins. No Largo do Rosário acontecem atividades culturais e religiosas.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-interior",
     "at": [
      537,
      255
     ],
     "texto": "Seguir: Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos · interior"
    },
    {
     "tipo": "voltar",
     "para": "natividade-igreja-matriz-fachada",
     "at": [
      1069,
      241
     ],
     "texto": "Voltar: Paróquia Nossa Senhora da Natividade · fachada"
    },
    {
     "tipo": "seguir",
     "at": [
      19,
      238
     ],
     "texto": "Seguir: Centro Bom Jesus de Nazaré (Dona Romana)",
     "para": "natividade-dona-romana-1"
    },
    {
     "tipo": "seguir",
     "at": [
      152,
      234
     ],
     "texto": "Seguir: Paróquia Nossa Senhora da Natividade",
     "para": "natividade-igreja-matriz-fachada"
    }
   ]
  },
  {
   "id": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-interior",
   "nome": "Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos · interior",
   "grupo": "Natividade",
   "vista": [
    142,
    201
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada",
     "at": [
      715,
      246
     ],
     "texto": "Voltar: Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos · fachada"
    }
   ]
  },
  {
   "id": "natividade-dona-romana-1",
   "nome": "Centro Bom Jesus de Nazaré (Dona Romana) · Vista 1",
   "grupo": "Natividade",
   "vista": [
    505,
    182
   ],
   "aerea": false,
   "legenda": "No Sítio Jacuba, a 4 km de Natividade, Dona Romana, nascida em 1942, criou o Centro Bom Jesus de Nazaré, onde vive desde 1989.\n\nO espaço reúne esculturas a céu aberto: as mais antigas de pedra canga e cimento, as mais recentes com arames, pedaços de espelho e cores. A obra de Dona Romana atrai visitantes de várias partes do mundo.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "natividade-dona-romana-2",
     "at": [
      710,
      280
     ],
     "texto": "Seguir: Centro Bom Jesus de Nazaré (Dona Romana) · Vista 2"
    },
    {
     "tipo": "voltar",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada",
     "at": [
      994,
      222
     ],
     "texto": "Voltar: Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos · fachada"
    }
   ]
  },
  {
   "id": "natividade-dona-romana-2",
   "nome": "Centro Bom Jesus de Nazaré (Dona Romana) · Vista 2",
   "grupo": "Natividade",
   "vista": [
    412,
    174
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "natividade-dona-romana-1",
     "at": [
      1057,
      333
     ],
     "texto": "Voltar: Centro Bom Jesus de Nazaré (Dona Romana) · Vista 1"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      409,
      271
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  },
  {
   "id": "jalapao-cachoeira-do-formiga-1",
   "nome": "Cachoeira do Formiga - Vista 1",
   "grupo": "Jalapão",
   "vista": [
    623,
    253
   ],
   "aerea": false,
   "legenda": "Perto de Mateiros, no Rio Formiga, a cachoeira forma uma piscina natural de água verde-esmeralda tão transparente que se vê o fundo de areia clara. A pequena queda funciona como uma hidromassagem natural.\n\nÉ uma das atrações mais visitadas do Jalapão. Fica em propriedade particular, com taxa de visitação.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-cachoeira-do-formiga-2",
     "at": [
      269,
      250
     ],
     "texto": "Seguir: Cachoeira do Formiga - Vista 2"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      885,
      273
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  },
  {
   "id": "jalapao-cachoeira-do-formiga-2",
   "nome": "Cachoeira do Formiga - Vista 2",
   "grupo": "Jalapão",
   "vista": [
    550,
    275
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-fervedouro",
     "at": [
      48,
      275
     ],
     "texto": "Seguir: Fervedouro do Ceiça"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-do-formiga-1",
     "at": [
      1000,
      237
     ],
     "texto": "Voltar: Cachoeira do Formiga - Vista 1"
    }
   ]
  },
  {
   "id": "jalapao-fervedouro",
   "nome": "Fervedouro do Ceiça",
   "grupo": "Jalapão",
   "vista": [
    318,
    220
   ],
   "aerea": false,
   "legenda": "Fervedouros são nascentes que brotam pelo fundo de areia de um poço: a água sobe sem parar e movimenta a areia, dando a impressão de fervura. Apesar do nome, a água é fria, e a pressão é tanta que não dá para afundar.\n\nO Fervedouro do Ceiça, também chamado de Fervedouro das Bananeiras, em Mateiros, foi o primeiro aberto à visitação no Jalapão.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-dunas-lagoa-do-jacare",
     "at": [
      832,
      223
     ],
     "texto": "Seguir: Lagoa do Jacaré"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-do-formiga-2",
     "at": [
      831,
      257
     ],
     "texto": "Voltar: Cachoeira do Formiga - Vista 2"
    }
   ]
  },
  {
   "id": "jalapao-dunas-lagoa-do-jacare",
   "nome": "Lagoa do Jacaré",
   "grupo": "Jalapão",
   "vista": [
    138,
    212
   ],
   "aerea": false,
   "legenda": "Ao pé das dunas, a Lagoa do Jacaré está no caminho de quem sobe para a areia dourada, com a Serra do Espírito Santo ao fundo.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-dunas",
     "at": [
      985,
      258
     ],
     "texto": "Seguir: Dunas do Jalapão"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-fervedouro",
     "at": [
      607,
      228
     ],
     "texto": "Voltar: Fervedouro do Ceiça"
    },
    {
     "tipo": "seguir",
     "at": [
      543,
      231
     ],
     "texto": "Seguir: Rio Novo",
     "para": "jalapao-rio-novo"
    }
   ]
  },
  {
   "id": "jalapao-dunas",
   "nome": "Dunas do Jalapão",
   "grupo": "Jalapão",
   "vista": [
    407,
    226
   ],
   "aerea": false,
   "legenda": "As Dunas do Jalapão se formam pela erosão do arenito da Serra do Espírito Santo: o vento carrega os grãos e os acumula ao pé da serra, por isso a areia tem tom dourado. Chegam a dezenas de metros de altura e mudam de cor com o sol, e o fim de tarde é o momento mais procurado.\n\nFicam a cerca de 35 km de Mateiros, dentro do Parque Estadual do Jalapão, e a visita exige agendamento.",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "jalapao-dunas-lagoa-do-jacare",
     "at": [
      427,
      244
     ],
     "texto": "Voltar: Lagoa do Jacaré"
    }
   ]
  },
  {
   "id": "jalapao-rio-novo",
   "nome": "Rio Novo",
   "grupo": "Jalapão",
   "vista": [
    531,
    136
   ],
   "aerea": false,
   "legenda": "Um dos principais rios do Jalapão, o Rio Novo tem águas limpas e transparentes. No período de seca, bancos de areia formam prainhas, como a Prainha do Rio Novo, perto da Cachoeira da Velha.\n\nNo rio, o Naturatins mantém um projeto de pesquisa com o pato-mergulhão, ave criticamente ameaçada de extinção.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-cachoeira-da-velha-1",
     "at": [
      808,
      259
     ],
     "texto": "Seguir: Cachoeira da Velha - Vista 1"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-dunas-lagoa-do-jacare",
     "at": [
      554,
      218
     ],
     "texto": "Voltar: Lagoa do Jacaré"
    }
   ]
  },
  {
   "id": "jalapao-cachoeira-da-velha-1",
   "nome": "Cachoeira da Velha - Vista 1",
   "grupo": "Jalapão",
   "vista": [
    124,
    234
   ],
   "aerea": false,
   "legenda": "Maior cachoeira do Parque Estadual do Jalapão, a Cachoeira da Velha é alimentada pelo Rio Novo. As águas caem em dupla ferradura, com cerca de 100 metros de largura e 15 metros de queda.\n\nPela força da correnteza, o banho não é permitido, e a vista é feita de uma plataforma. Daqui sai o rafting pelo Rio Novo. Segundo a lenda, uma velha viveu muitos anos por ali, o que deu nome à cachoeira.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-cachoeira-da-velha-2",
     "at": [
      14,
      262
     ],
     "texto": "Seguir: Cachoeira da Velha - Vista 2"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-rio-novo",
     "at": [
      654,
      251
     ],
     "texto": "Voltar: Rio Novo"
    }
   ]
  },
  {
   "id": "jalapao-cachoeira-da-velha-2",
   "nome": "Cachoeira da Velha - Vista 2",
   "grupo": "Jalapão",
   "vista": [
    755,
    241
   ],
   "aerea": false,
   "legenda": "",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "jalapao-por-do-sol",
     "at": [
      757,
      239
     ],
     "texto": "Seguir: Pôr do sol no Jalapão"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-da-velha-1",
     "at": [
      760,
      298
     ],
     "texto": "Voltar: Cachoeira da Velha - Vista 1"
    }
   ]
  },
  {
   "id": "jalapao-por-do-sol",
   "nome": "Pôr do sol no Jalapão",
   "grupo": "Jalapão",
   "vista": [
    930,
    153
   ],
   "aerea": false,
   "legenda": "As bolinhas brancas no campo são o chuveirinho, uma das sempre-vivas: nome popular dado a plantas da família Eriocaulaceae, que vivem em áreas abertas e ensolaradas do Cerrado. O capim-dourado, usado no artesanato do Jalapão, é da mesma família e cresce nos campos úmidos da região.\n\nO Jalapão é a maior área contínua de Cerrado protegido do Brasil, e a paisagem é um mosaico: campo limpo, só com capim; campo sujo, com arbustos espalhados; cerrado típico, com árvores baixas e retorcidas; veredas, com buritis nas áreas encharcadas; e matas de galeria ao longo dos rios. O Parque Estadual do Jalapão, criado em 2001, protege 158.885 hectares desse Cerrado.",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-da-velha-2",
     "at": [
      304,
      241
     ],
     "texto": "Voltar: Cachoeira da Velha - Vista 2"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      389,
      259
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  }
 ]
};
