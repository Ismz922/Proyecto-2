const productos = [
    {
        "id": 1,
        "nombre": "Meta Quest 1",
        "precio": 299.99,
        "stock": "Online",
        "descripcion": "El Meta Quest 1 es un dispositivo de realidad virtual todo en uno desarrollado por Meta. No requiere cables ni PC para funcionar, ofreciendo una experiencia inmersiva y completa.",
        "imagenes": ["./IMG/metaQuest1_img1.jpg","./IMG/metaQuest1_img2.jpg","./IMG/metaQuest1_img3.jpg","./IMG/metaQuest1_img4.jpg"],
        "categorias": ["Meta", "Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Juan Pérez",
                "estrellas": 4,
                "texto": "Muy buen visor, aunque le falta un poco más de resolución."
            },
            {
                "usuario": "Lucía Fernández",
                "estrellas": 5,
                "texto": "La mejor compra que he hecho, totalmente recomendable."
            },
            {
                "usuario": "Carlos Méndez",
                "estrellas": 4,
                "texto": "Es un gran producto, pero la duración de la batería podría mejorar."
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Meta Quest 2",
        "precio": 399.99,
        "stock": "Online",
        "descripcion": "Meta Quest 2 ofrece una resolución más alta y un rendimiento mejorado en comparación con su predecesor. Es un visor de realidad virtual todo en uno que no requiere PC ni cables.",
        "imagenes": ["./IMG/metaQuest2_img1.jpg","./IMG/metaQuest2_img2.jpg","./IMG/metaQuest2_img3.jpg","./IMG/metaQuest2_img4.jpg"],
        "categorias": ["Meta", "Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "2 años",
        "reseñas": [
            {
                "usuario": "Ana López",
                "estrellas": 5,
                "texto": "Impresionante experiencia, es un dispositivo increíble."
            },
            {
                "usuario": "Miguel García",
                "estrellas": 4,
                "texto": "Me encanta, pero el ajuste de la correa podría ser más cómodo."
            },
            {
                "usuario": "Sofía Martínez",
                "estrellas": 5,
                "texto": "La resolución y la velocidad son excelentes, ¡muy recomendable!"
            }
        ]
    },
    {
        "id": 3,
        "nombre": "Meta Quest 3",
        "precio": 499.99,
        "stock": "Tienda física",
        "descripcion": "El Meta Quest 3 es la última versión de la línea Quest, con una mayor resolución, mejor procesamiento y nuevas características para una experiencia de realidad virtual superior.",
        "imagenes": ["./IMG/metaQuest3_img1.jpg","./IMG/metaQuest3_img2.jpg","./IMG/metaQuest3_img3.jpg","./IMG/metaQuest3_img4.jpg"],
        "categorias": ["Meta", "Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "2 años",
        "reseñas": [
            {
                "usuario": "Javier Ramos",
                "estrellas": 5,
                "texto": "Este visor supera todas mis expectativas. ¡Increíble!"
            },
            {
                "usuario": "Elena Morales",
                "estrellas": 4,
                "texto": "Es un dispositivo impresionante, aunque un poco caro."
            },
            {
                "usuario": "Fernando Díaz",
                "estrellas": 5,
                "texto": "La experiencia de realidad virtual con este visor es inigualable."
            }
        ]
    },
    {
        "id": 4,
        "nombre": "Meta Quest Pro",
        "precio": 899.99,
        "stock": "Online",
        "descripcion": "Meta Quest Pro es el visor más avanzado de Meta, diseñado para profesionales y entusiastas de la realidad virtual que buscan el mejor rendimiento y calidad.",
        "imagenes": ["./IMG/metaQuestPro_img1.jpg","./IMG/metaQuestPro_img2.jpg","./IMG/metaQuestPro_img3.jpg","./IMG/metaQuestPro_img4.jpg"],
        "categorias": ["Meta", "Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "2 años",
        "reseñas": [
            {
                "usuario": "Laura Jiménez",
                "estrellas": 5,
                "texto": "Vale cada centavo, la calidad es insuperable."
            },
            {
                "usuario": "Pedro Alonso",
                "estrellas": 4,
                "texto": "Es un excelente producto, pero el precio es algo elevado."
            },
            {
                "usuario": "Adriana Torres",
                "estrellas": 5,
                "texto": "La experiencia con este visor es realmente profesional."
            }
        ]
    },
    {
        "id": 5,
        "nombre": "HTC VIVE Pro 2",
        "precio": 1371.02,
        "stock": "Tienda física",
        "descripcion": "El HTC VIVE Pro 2 es un visor de realidad virtual de alta calidad que ofrece seguimiento preciso y una experiencia inmersiva completa, ideal para juegos y aplicaciones profesionales.",
        "imagenes": ["./IMG/HTCVivePro2_img1.jpg","./IMG/HTCVivePro2_img2.jpg","./IMG/HTCVivePro2_img3.jpg","./IMG/HTCVivePro2_img4.jpg"],
        "categorias": ["HTC", "Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Diego Romero",
                "estrellas": 4,
                "texto": "Gran visor, pero es un poco pesado para sesiones largas."
            },
            {
                "usuario": "Isabel Vargas",
                "estrellas": 5,
                "texto": "La calidad del seguimiento y la inmersión es insuperable."
            },
            {
                "usuario": "Antonio Ruiz",
                "estrellas": 5,
                "texto": "Perfecto para aplicaciones profesionales, muy satisfecho."
            }
        ]
    },
    {
        "id": 6,
        "nombre": "Valve Index",
        "precio": 999.99,
        "stock": "Tienda física",
        "descripcion": "Valve Index es uno de los visores de realidad virtual más avanzados, conocido por su alta resolución, frecuencia de actualización rápida y controles avanzados.",
        "imagenes": ["./IMG/ValveIndex_img1.jpg","./IMG/ValveIndex_img2.jpg","./IMG/ValveIndex_img3.jpg","./IMG/ValveIndex_img4.jpg"],
        "categorias": ["Valve", "Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "2 años",
        "reseñas": [
            {
                "usuario": "Marta Castillo",
                "estrellas": 5,
                "texto": "El mejor visor que he probado, ¡sin duda alguna!"
            },
            {
                "usuario": "Luis Gómez",
                "estrellas": 5,
                "texto": "La calidad y la inmersión que ofrece este visor es simplemente asombrosa."
            },
            {
                "usuario": "Andrea Navarro",
                "estrellas": 4,
                "texto": "Es un excelente producto, pero el precio es bastante elevado."
            }
        ]
    },
    {
        "id": 7,
        "nombre": "Pico 4",
        "precio": 499.99,
        "stock": "Online",
        "descripcion": "Pico 4 es un visor de realidad virtual autónomo que ofrece una experiencia inmersiva con una alta resolución y un diseño ligero y cómodo.",
        "imagenes": ["./IMG/Pico4_img1.jpg","./IMG/Pico4_img2.jpg","./IMG/Pico4_img3.png","./IMG/Pico4_img4.jpg"],
        "categorias": ["Visor"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Rosa Medina",
                "estrellas": 4,
                "texto": "Muy cómodo y ligero, pero la calidad de imagen podría mejorar."
            },
            {
                "usuario": "Manuel Díaz",
                "estrellas": 5,
                "texto": "Excelente visor, especialmente por su precio. Muy recomendable."
            },
            {
                "usuario": "Paula Herrera",
                "estrellas": 4,
                "texto": "El visor es bueno, pero el soporte técnico podría ser mejor."
            }
        ]
    },
    {
        "id": 8,
        "nombre": "VIVE Tracker",
        "precio": 149.99,
        "stock": "Online",
        "descripcion": "Trackers de cuerpo completo que permiten un seguimiento preciso de los movimientos del cuerpo para una experiencia de realidad virtual más inmersiva y realista.",
        "imagenes": ["./IMG/VIVETracker_img1.jpg","./IMG/VIVETracker_img2.jpg","./IMG/VIVETracker_img3.jpg","./IMG/VIVETracker_img4.jpg"],
        "categorias": ["HTC", "Accesorio"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Cristina López",
                "estrellas": 5,
                "texto": "El mejor tracker que he probado, muy preciso."
            },
            {
                "usuario": "David Ortiz",
                "estrellas": 4,
                "texto": "Funciona muy bien, aunque me costó un poco configurarlo."
            },
            {
                "usuario": "Jorge Fernández",
                "estrellas": 4,
                "texto": "Cumple su función, aunque podría ser más económico."
            }
        ]
    },
    {
        "id": 9,
        "nombre": "Mandos adicionales para Meta Quest",
        "precio": 79.99,
        "stock": "Tienda física",
        "descripcion": "Mandos adicionales para Meta Quest, diseñados para ofrecer un control preciso y una interacción intuitiva en la realidad virtual.",
        "imagenes": ["https://lookaside.fbsbx.com/elementpath/media/?media_id=5780385225373918&version=1711615157&transcode_extension=webp","./IMG/MandosQuest2_img2.jpg","./IMG/MandosQuest2_img3.jpg","./IMG/MandosQuest2_img4.jpg"],
        "categorias": ["Meta", "Accesorio"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Patricia Blanco",
                "estrellas": 5,
                "texto": "Son muy precisos y cómodos de usar, excelente compra."
            },
            {
                "usuario": "Ricardo Villalobos",
                "estrellas": 4,
                "texto": "Los mandos funcionan muy bien, pero son algo costosos."
            },
            {
                "usuario": "Daniel Reyes",
                "estrellas": 4,
                "texto": "Buen producto, aunque me gustaría que incluyeran más funciones."
            }
        ]
    },
    {
        "id": 10,
        "nombre": "Funda rígida de transporte compatible con Meta Quest 3/Quest 2/Vision Pro",
        "precio": 19.99,
        "stock": "Online",
        "descripcion": "Funda de diseño patentado para Meta Quest 3, Quest 2 y Vision Pro. Esta funda de transporte rígida está especialmente diseñada para Meta Quest 3, Quest 2 y Vision Pro. No es compatible con la correa Elite ni con otras trampas para la cabeza de terceros con batería.",
        "imagenes": ["./IMG/Estuche_img1.jpg","./IMG/Estuche_img2.jpg","./IMG/Estuche_img3.jpg","./IMG/Estuche_img4.jpg"],
        "categorias": ["Meta", "Accesorio"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Laura Torres",
                "estrellas": 5,
                "texto": "Protege muy bien el visor, muy satisfecha con la compra."
            },
            {
                "usuario": "Francisco Moreno",
                "estrellas": 4,
                "texto": "Es resistente y compacta, pero no cabe con todos los accesorios."
            },
            {
                "usuario": "Carla Jiménez",
                "estrellas": 4,
                "texto": "Buena funda, aunque me hubiera gustado que tuviera más compartimentos."
            }
        ]
    },
    {
        "id": 11,
        "nombre": "Base de carga para mandos Meta Quest",
        "precio": 54.99,
        "stock": "Tienda física",
        "descripcion": "Base de carga para mandos de realidad virtual, permite cargar fácilmente tus mandos y mantenerlos organizados.",
        "imagenes": ["./IMG/BaseCarga_img1.jpg","./IMG/BaseCarga_img2.jpg","./IMG/BaseCarga_img3.jpg","./IMG/BaseCarga_img4.jpg"],
        "categorias": ["Meta", "Accesorio"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "1 año",
        "reseñas": [
            {
                "usuario": "Gabriela Sánchez",
                "estrellas": 5,
                "texto": "Muy práctica, mantiene los mandos organizados y siempre cargados."
            },
            {
                "usuario": "Alberto Delgado",
                "estrellas": 4,
                "texto": "Funciona bien, aunque tarda un poco en cargar completamente los mandos."
            },
            {
                "usuario": "Marcela Villalobos",
                "estrellas": 4,
                "texto": "Buena base de carga, pero podría ser más rápida."
            }
        ]
    },
    {
        "id": 12,
        "nombre": "Correa rígida BOBOVR M2",
        "precio": 89.99,
        "stock": "Online",
        "descripcion": "BOBOVR M2 es compatible con Quest 2. BOBOVR M2 ofrece una comodidad y ajustabilidad mejorada para sesiones de juego más agradables.",
        "imagenes": ["./IMG/BOBOVRM2_img1.jpg","./IMG/BOBOVRM2_img2.jpg","./IMG/BOBOVRM2_img3.jpg","./IMG/BOBOVRM2_img4.jpg"],
        "categorias": ["Meta", "Accesorio"],
        "tiempos_entrega_envio": "3-5 días hábiles, gastos de envío incluidos",
        "opciones_entrega": "Entrega a domicilio",
        "garantia": "18 meses",
        "reseñas": [
            {
                "usuario": "Verónica Ruiz",
                "estrellas": 5,
                "texto": "Muy cómoda y fácil de ajustar, perfecta para largas sesiones."
            },
            {
                "usuario": "Héctor Ramos",
                "estrellas": 4,
                "texto": "Buena correa, pero el precio es un poco alto para lo que ofrece."
            },
            {
                "usuario": "Natalia Castro",
                "estrellas": 4,
                "texto": "Es cómoda, aunque me hubiera gustado un diseño más ergonómico."
            }
        ]
    }
];
