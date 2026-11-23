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
      280,
      298
     ],
     "texto": "Seguir: Avenida JK - Vista aérea",
     "icone": "drone"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      552,
      208
     ],
     "texto": "Voltar ao mapa"
    },
    {
     "tipo": "seguir",
     "at": [
      499,
      267
     ],
     "texto": "Seguir: Espaço Cultural",
     "para": "palmas-espaco-cultural",
     "icone": "drone"
    },
    {
     "tipo": "seguir",
     "at": [
      1039,
      279
     ],
     "texto": "Seguir: Praia da Graciosa",
     "para": "palmas-praia-da-graciosa-1"
    },
    {
     "tipo": "seguir",
     "at": [
      1087,
      278
     ],
     "texto": "Seguir: Praia das Arnos",
     "para": "palmas-praia-das-arnos-1",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-av-jk-4",
   "nome": "Avenida JK - Vista aérea",
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
      774,
      377
     ],
     "texto": "Seguir: Avenida JK - área comercial"
    },
    {
     "tipo": "voltar",
     "para": "palmas-palacio-araguaia",
     "at": [
      817,
      283
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
      234,
      305
     ],
     "texto": "Voltar: Avenida JK - Vista aérea",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-espaco-cultural",
   "nome": "Espaço Cultural",
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
      826,
      266
     ],
     "texto": "Seguir: Parque Cesamar",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "at": [
      550,
      330
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
      251,
      335
     ],
     "texto": "Seguir: Parque Cesamar - Lago",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "para": "palmas-espaco-cultural",
     "at": [
      813,
      284
     ],
     "texto": "Voltar: Espaço Cultural",
     "icone": "drone"
    }
   ]
  },
  {
   "id": "palmas-parque-cesamar-2",
   "nome": "Parque Cesamar - Lago",
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
      223,
      270
     ],
     "texto": "Parque Cesamar",
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
      181,
      254
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
      148,
      329
     ],
     "texto": "Seguir: Praia da Graciosa - Vista 3",
     "icone": "drone"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-da-graciosa-1",
     "at": [
      643,
      306
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
      460,
      345
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
      323,
      288
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
      448,
      326
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
   "legenda": "Na região norte de Palmas, a orla da Praia das Arnos, também chamada de Orla 14, é um espaço urbanizado às margens do Lago de Palmas, com calçadão para atividades físicas e eventos. A praia é tradicional pelas barracas que servem tucunaré na brasa.",
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
      344,
      258
     ],
     "texto": "Palácio Araguaia",
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
      1019,
      311
     ],
     "texto": "Seguir: Praia das Arnos - Vista 3"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-das-arnos-1",
     "at": [
      413,
      287
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
      189,
      285
     ],
     "texto": "Seguir: Praia das Arnos - Vista 4"
    },
    {
     "tipo": "voltar",
     "para": "palmas-praia-das-arnos-2",
     "at": [
      479,
      110
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
      818,
      278
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
      820,
      254
     ],
     "texto": "Seguir: Igreja N. S. do Rosário · Vista Interior 1"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      98,
      286
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  },
  {
   "id": "igreja-nossa-senhora-do-rosario-monte-do-carmo-interior-1",
   "nome": "Igreja N. S. do Rosário · Vista Interior 1",
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
     "texto": "Seguir: Igreja N. S. do Rosário · Vista Interior 2"
    }
   ]
  },
  {
   "id": "igreja-nossa-senhora-do-rosario-monte-do-carmo-interior-2",
   "nome": "Igreja N. S. do Rosário · Vista Interior 2",
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
     "texto": "Fachada - Igreja N. S. do Rosário",
     "para": "fachada"
    }
   ]
  },
  {
   "id": "natividade-igreja-matriz-fachada",
   "nome": "Igreja Matriz · fachada",
   "grupo": "Natividade",
   "vista": [
    284,
    111
   ],
   "aerea": false,
   "legenda": "Natividade, a cidade mais antiga do Tocantins, nasceu da exploração do ouro em 1734. O centro histórico, com cerca de 250 imóveis, foi tombado pelo Iphan em 1987.\n\nA Igreja Matriz, erguida em 1759, guarda a imagem de Nossa Senhora da Natividade, levada para a região em 1735. O Tocantins é o único estado brasileiro que tem Nossa Senhora da Natividade como padroeira, celebrada em 8 de setembro.",
   "pontos": [
    {
     "tipo": "seguir",
     "para": "natividade-igreja-matriz-interior",
     "at": [
      279,
      274
     ],
     "texto": "Seguir: Igreja Matriz · interior"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      1029,
      259
     ],
     "texto": "Voltar ao mapa"
    },
    {
     "tipo": "seguir",
     "at": [
      111,
      237
     ],
     "texto": "Museu de Natividade",
     "para": "natividade-museu-praca"
    }
   ]
  },
  {
   "id": "natividade-igreja-matriz-interior",
   "nome": "Igreja Matriz · interior",
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
      192,
      266
     ],
     "texto": "Voltar: Igreja Matriz · fachada"
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
      933,
      211
     ],
     "texto": "Seguir: Museu · entrada"
    },
    {
     "tipo": "voltar",
     "para": "natividade-igreja-matriz-fachada",
     "at": [
      686,
      212
     ],
     "texto": "Voltar: Igreja Matriz · fachada"
    },
    {
     "tipo": "seguir",
     "at": [
      857,
      205
     ],
     "texto": "Ruínas da Igreja de Nossa Senhora do Rosário dos Pretos",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada"
    }
   ]
  },
  {
   "id": "natividade-museu-entrada",
   "nome": "Museu · entrada",
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
     "texto": "Seguir: Museu · sala de exposições"
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
   "nome": "Museu · sala de exposições",
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
      116,
      300
     ],
     "texto": "Voltar: Museu · entrada"
    }
   ]
  },
  {
   "id": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada",
   "nome": "Ruínas do Rosário dos Pretos · fachada",
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
      547,
      259
     ],
     "texto": "Seguir: Ruínas do Rosário dos Pretos · interior"
    },
    {
     "tipo": "voltar",
     "para": "natividade-museu-praca",
     "at": [
      1071,
      262
     ],
     "texto": "Voltar: Museu Histórico de Natividade · Praça Leopoldo de Bulhões"
    },
    {
     "tipo": "seguir",
     "at": [
      28,
      250
     ],
     "texto": "Dona Romana",
     "para": "natividade-dona-romana-1"
    }
   ]
  },
  {
   "id": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-interior",
   "nome": "Ruínas do Rosário dos Pretos · interior",
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
     "texto": "Voltar: Ruínas do Rosário dos Pretos · fachada"
    }
   ]
  },
  {
   "id": "natividade-dona-romana-1",
   "nome": "Dona Romana - Vista 1",
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
     "texto": "Seguir: Dona Romana - Vista 2"
    },
    {
     "tipo": "voltar",
     "para": "natividade-ruinas-igreja-nossa-senhora-do-rosario-dos-pretos-fachada",
     "at": [
      998,
      259
     ],
     "texto": "Voltar: Ruínas do Rosário dos Pretos · fachada"
    }
   ]
  },
  {
   "id": "natividade-dona-romana-2",
   "nome": "Dona Romana - Vista 2",
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
     "texto": "Voltar: Dona Romana - Vista 1"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      424,
      312
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
      1005,
      275
     ],
     "texto": "Seguir: Cachoeira do Formiga - Vista 2"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      833,
      282
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
      47,
      294
     ],
     "texto": "Seguir: Fervedouro do Ceiça"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-do-formiga-1",
     "at": [
      1049,
      278
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
      839,
      169
     ],
     "texto": "Seguir: Dunas · Lagoa do Jacaré"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-do-formiga-2",
     "at": [
      839,
      230
     ],
     "texto": "Voltar: Cachoeira do Formiga - Vista 2"
    }
   ]
  },
  {
   "id": "jalapao-dunas-lagoa-do-jacare",
   "nome": "Dunas · Lagoa do Jacaré",
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
      983,
      235
     ],
     "texto": "Seguir: Dunas"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-fervedouro",
     "at": [
      81,
      213
     ],
     "texto": "Voltar: Fervedouro do Ceiça"
    },
    {
     "tipo": "seguir",
     "at": [
      560,
      440
     ],
     "texto": "Rio Novo",
     "para": "jalapao-rio-novo"
    }
   ]
  },
  {
   "id": "jalapao-dunas",
   "nome": "Dunas",
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
      134,
      268
     ],
     "texto": "Voltar: Dunas · Lagoa do Jacaré"
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
      235,
      272
     ],
     "texto": "Seguir: Cachoeira da Velha - Vista 1"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-dunas-lagoa-do-jacare",
     "at": [
      614,
      251
     ],
     "texto": "Voltar: Dunas · Lagoa do Jacaré"
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
      1060,
      269
     ],
     "texto": "Seguir: Cachoeira da Velha - Vista 2"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-rio-novo",
     "at": [
      494,
      285
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
      765,
      112
     ],
     "texto": "Seguir: Pôr do sol"
    },
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-da-velha-1",
     "at": [
      842,
      325
     ],
     "texto": "Voltar: Cachoeira da Velha - Vista 1"
    }
   ]
  },
  {
   "id": "jalapao-por-do-sol",
   "nome": "Pôr do sol",
   "grupo": "Jalapão",
   "vista": [
    930,
    153
   ],
   "aerea": false,
   "legenda": "O Parque Estadual do Jalapão foi criado em 12 de janeiro de 2001 e protege 158.885 hectares de Cerrado, com dunas, cachoeiras, veredas e fauna ameaçada. É administrado pelo Naturatins e é o maior parque estadual do Tocantins.",
   "pontos": [
    {
     "tipo": "voltar",
     "para": "jalapao-cachoeira-da-velha-2",
     "at": [
      137,
      263
     ],
     "texto": "Voltar: Cachoeira da Velha - Vista 2"
    },
    {
     "tipo": "mapa",
     "para": "menu",
     "at": [
      489,
      392
     ],
     "texto": "Voltar ao mapa"
    }
   ]
  }
 ]
};
