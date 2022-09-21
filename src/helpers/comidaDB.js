let comidaDB = [
    {
        nombre: 'Confiteria' ,
        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/confiteria.png?alt=media&token=32cbcb46-d8b9-40e4-92ec-0143546792b1",
        paquete : [
            {
                nombre: "Combos",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/combos.jpg?alt=media&token=f7d5acb4-e01b-4756-ad8b-b8806504e64c",
                combos:[
                    {
                        nombre: "Cine Combito",
                        imagen:"https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cinecombito.png?alt=media&token=8300cefc-1d28-42d8-95c2-3f5b4cb3ce7c",
                        descripcion: "1 Caja crispetas de sal 55 g + 1 Gaseosa 640 ml + 1 chocolatina Jet 30g"
                    },

                    {
                        nombre: "Combo Personal",
                        imagen:"https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/combopersonal.png?alt=media&token=50122364-6998-4f61-a3c3-b51bed5667a4",
                        descripcion:"1 Crispeta de sal 120 g + 1 perro caliente + 1 Gaseosa 640 ml + 1 Kit Kat 41 g"
                    },

                    {
                        nombre: "Combo para dos",
                        imagen:"https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/comboparados.png?alt=media&token=f9bbf715-2678-42a8-8329-b1a502bb870c",
                        descripcion:"1 Crispeta de sal 120 g + 2 perros calientes + 2 Gaseosas 640 ml + 1 Kit Kat 41 g + 1 chocolatina Jet 30 g"
                    },

                    {   
                        nombre: "Combo crispetas",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/combocrispetas.png?alt=media&token=d750dc36-de95-4cd9-81bc-4065b96bb3b6",
                        descripcion: "1 Crispeta de sal 150 g + 2 Gaseosas 640 ml"

                    },
                ] 
            },

            {
                nombre:"Crispetas",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/crispetas.jpg?alt=media&token=2d9154fe-b59d-45f7-b883-56c6c110934c",
                combos:[
                    {
                        nombre:"Adición Crispeta Mezclada (sal y caramelo)",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/crispetamezclada.jpg?alt=media&token=f00f2cd3-f6e4-4428-b774-b528bb2df6f3",
                        descripcion: "Mitad caramelo / mitad sal . No aplica en Medellín ni Envigado"

                    },

                    {
                        nombre:"Adición Crispeta Caramelo",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/crispetacaramello.jpg?alt=media&token=5be843cb-8266-4ad2-ae1e-8ac79f007e85",
                        descripcion: "Adición crispeta caramelo completa. No aplica en Medellín ni Envigado"
                    },

                    {
                        nombre:"Crispeta Mediana 120 gr (sal)",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/crispetamediana.jpg?alt=media&token=d0180a39-18da-4a69-8f9e-a14a2dd9a85c",
                        descripcion: ""
                    },

                    {
                        nombre:"Crispeta Grande 150 gr (sal)",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/crispetagrande.jpg?alt=media&token=b8003eda-5da1-482b-961c-38699c0a44cd",
                        descripcion: ""
                    }

                ]
            },

            {
                nombre:"Perro Caliente y Nachoscon queso cheddar",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/perrocalienteynachos.jpg?alt=media&token=0bc4fc73-3da9-4376-8936-1e24ce399af2",
                combos:[
                    {
                        nombre:"Paquete de nachos 60 g",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/PaqueteNachos.jpg?alt=media&token=03bdaa5d-13e8-4af7-b154-321cdfcede0b",
                        descripcion: "Paquete de nachos 60 g"
                    },

                    {
                        nombre:"Nachos con queso cheddar",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Nachosconqueso.jpg?alt=media&token=5b84abef-b5b9-45ee-8616-9de243b5dfe2",
                        descripcion: ""

                    },

                    {
                        nombre:"Perro Caliente",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/PerroCaliente.jpg?alt=media&token=34cc55fb-8c63-492a-8ef9-b50da885ee96",
                        descripcion: ""
                    },

                    {
                        nombre:"Adición Queso cheddar",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/adiccionQueso.jpg?alt=media&token=7663861a-b4c9-4ddd-b6f7-6be1e4165e54",
                        descripcion: "Porción queso cheddar 85 g"
                    },
                ]
            },

            {
                nombre:"Chocolatina",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/chocolatinas.jpg?alt=media&token=670b7538-affe-4e94-8f6c-751152ec8373",
                combos:[
                    {
                        nombre:"Chocolatina Jet 30 g",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/chocolatinaJet30g.jpg?alt=media&token=1323326c-0506-4f1b-a8e5-ad4acce4a53a",
                        descripcion: ""
                    },

                    {
                        nombre:"Chocolatina Kit Kat",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/KitKat.jpg?alt=media&token=4582f8ea-1e48-4107-b449-d317015740d3",
                        descripcion: ""
                    },
                ]
            },

            {
                nombre:"Bebidas",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/BEBIDAS.png?alt=media&token=ad28d17b-140b-4a93-b516-94115d1a0d2d",
                combos:[
                    {
                        nombre:"Agua PET 600 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/AguaPET.jpg?alt=media&token=dba2f092-f494-4f08-a04f-0af5459e3eab",
                        descripcion: ""
                    },

                    {
                        nombre:"Gaseosa 640 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/gaseosa640.png?alt=media&token=796805a7-3532-4201-9c4f-8b8752ef2705",
                        descripcion: ""
                    },

                    {
                        nombre:"Gaseosa 960 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/gaseosa960.png?alt=media&token=6e323eec-ed21-4227-bf4f-68da0461cad2",
                        descripcion: ""
                    },

                ]
            }

        ]

        

        
    },

    {
        nombre: 'Juan Valdez' ,
        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/JUANVALDEZ.jpg?alt=media&token=4bd7e117-079a-4bd1-b3cd-5a6f7c14767f",
        paquete : [
            {
                nombre: "Cafes",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cafes.jpg?alt=media&token=1c3063e1-164c-4656-9db5-1416813cdd26",
                combos:[
                    {
                        nombre: "Café Americano Gr 220 ml",
                        imagen:"https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cafeamericano.png?alt=media&token=191cffd8-dcca-4b81-a22f-bd37fcf0faac",
                        descripcion: ""
                    },

                    {
                        nombre: "Café Tinto Gr 220 ml",
                        imagen:"https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cafetinto.png?alt=media&token=089cb75d-9e99-40bd-a09b-4b71bfc99acc",
                        descripcion:""
                    },

                    {
                        nombre: "Café con Leche Gr 270 ml",
                        imagen:"https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cafeleche.png?alt=media&token=5831b31b-60a6-42b8-ac86-0447c41fdc35",
                        descripcion:""
                    },

                    {   
                        nombre: "Café Mocca Gr 220 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cafemocca.png?alt=media&token=8b440d0e-73d6-4b63-81dd-b618e1221ebd",
                        descripcion: ""

                    },

                    {
                        nombre: "Capuccino Gr 220 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/capuccino.png?alt=media&token=3be53c7c-3b0c-4e69-8f1d-5aba8a8d469a",
                        descripcion: ""
                    },

                    {
                        nombre: "Espresso 35 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/ESPRESSO.png?alt=media&token=f369ecd9-28d8-4b17-a095-28f5f526012b",
                        descripcion: ""
                    }
                ] 
            },

            {
                nombre: "Bebidas Frias",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/bebidasfrias.png?alt=media&token=05fa8892-703e-4715-b8a2-d3442ec04d56",
                combos:[

                    {
                        nombre: "Frappe Agua Maracuyá 300 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/FRUPPE_AGUA_MARACUYA_300ML.png?alt=media&token=82b278ae-1c25-4e31-9920-04d69673d471",
                        descripcion: ""
                    },

                    {
                        nombre: "Fusión Agua Frutos Rojos 415 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/FRUSION_AGUA_FRUTOS_ROJOS_300ML.png?alt=media&token=cdd41a2f-6c42-4d45-9221-5d3e18caef33",
                        descripcion: ""
                    },

                    {
                        nombre: "Granizado de Leche Gr 300 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/GRANIZADO_DE_LECHE_GRANDE_300ML.png?alt=media&token=0fff1bbe-8aec-4421-90c8-b7c9647d1321",
                        descripcion: ""
                    },

                    {
                        nombre: "Nevado Arequipe 300 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/NEVADO_AREQUIPE_300ML.png?alt=media&token=4ea16bb8-2c3c-41e0-9d86-3e291fb992a5",
                        descripcion: ""
                    }
                ]
            },

            {
                nombre: "Pasteleria",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Pasteleria.jpeg?alt=media&token=147bbcfa-df38-48f6-a4e2-5e6f89a17ae3",
                combos:[
                    {
                        nombre: "Almojabana",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/ALMOJABANA.png?alt=media&token=4828d73b-2484-4e13-a841-80f899a53e03",
                        descripcion: ""
                    },

                    {
                        nombre: "Galleta Choco Chips",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/GALLETA_CHOCOCHIP.png?alt=media&token=61211bce-a6b2-4c62-a76d-5b2db58948dd",
                        descripcion: ""
                    },

                    {
                        nombre: "Mantecada",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/MANTECADA.png?alt=media&token=a03aa4d1-3a84-48ba-830a-06481c9a784c",
                        descripcion: ""
                    },

                    {
                        nombre: "Palito de Queso",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/PALITO_DE_QUESO.png?alt=media&token=37a83b0f-db0d-4205-aa5d-f5ce86a0a5ea",
                        descripcion: ""
                    },

                    {
                        nombre: "Pan De Bono",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/PANDEBONO.png?alt=media&token=13c637da-4b2c-4d70-8509-46d21b504f64",
                        descripcion: ""
                    },

                    {
                        nombre: "Pastel de Pollo y Champiñones",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/PASTE_DE_POLLO_Y_CHAMPIN%E2%95%A0%C3%A2ONES.png?alt=media&token=eec848f8-813a-4591-b140-038abeea60b8",
                        descripcion: ""

                    }
                ]
                
            },

            {
                nombre: "Bebidas Calientes",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/bebidascalientes.jpg?alt=media&token=9610b98b-cc59-4385-b233-a43adf4cb036",
                combos:[
                    {
                        nombre: "Té Chai Gr 220 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/techai.png?alt=media&token=6c7c71eb-fb4f-47ab-93fa-ec7d500b70ab",
                        descripcion: "Deliciosa combinación de especias y miel en té que relaja tu cuerpo y mente"
                    },

                    {
                        nombre: "Té Chai Gr 175 ml",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/techai.png?alt=media&token=6c7c71eb-fb4f-47ab-93fa-ec7d500b70ab",
                        descripcion: "Deliciosa combinación de especias y miel en té que relaja tu cuerpo y mente"
                    },


                ]
            }

        ]

    },

    {
        nombre: 'Barras de Sushi' ,
        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/barrassushi.jpg?alt=media&token=821cf882-815b-4446-bf62-cb6d61dc0e3d",
        paquete : [
            {
                nombre: "Ceviches",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Ceviches.jpg?alt=media&token=e1a995d0-e9d8-4d88-a1e4-9c6f06ff691b",
                combos:[
                    {
                        nombre: "Ceviche Colombiano",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Ceviche%20Colombiano.jpg?alt=media&token=df89b8ee-180e-432a-adc3-f746165a2c25",
                        descripcion: "Camarón, mango y maíz en aderezo de tomate con limón, cilantro y un toque de cebolla roja."
                    },

                    {
                        nombre: "Ceviche Peruano",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Cecviche%20Peruano.jpg?alt=media&token=ad8a2c9f-6997-4fae-ac80-00cdc9b288bb",
                        descripcion: "Tilapia fresca, aguacate, maíz y leche de tigre en aderezo de ají amarillo con cilantro, limón y un toque de cebolla roja."
                    },

                    {
                        nombre: "Ceviche Limeño",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/CEVICHE%20LIME%C3%91O.jpg?alt=media&token=084fa9f7-b3fb-4eab-9873-1ea859850287",
                        descripcion: "Camarón, tilapia fresca, palmito de cangrejo, maíz, aguacate, cebolla, cilantro y limón."
                    },

                ]
            },

            {
                nombre: "Pokes",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/pokes.jpg?alt=media&token=8e3a578f-44c6-4ab9-96f4-452641de797e",
                combos:[
                    {
                        nombre: "Poke Salmón",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/POKE%20DE%20SALM%C3%93N.png?alt=media&token=c402ae8c-e4dc-445f-9b92-d42274110e16",
                        descripcion: "Salmón, seaweed salad, nori picado, aguacate y edamame sobre arroz de sushi, acompañado de salsa ponzu y ajonjolí."
                    },

                    {
                        nombre: "Poke Salmón Teriyaki",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/POKE%20SALMON%20TERIYAKI.jpg?alt=media&token=5a5f8601-21d5-4c92-8721-e542d543bdcd",
                        descripcion: "Salmón glaseado en salsa teriyaki y ajonjolí, palmito de cangrejo, seaweed salad, edamame, aguacate, tomate cherry sobre arroz de sushi."
                    }
                ]
            },

            {
                nombre: "Makis",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/makis.jpg?alt=media&token=8488a75d-6183-4a63-aefd-7ff7d39c92d8",
                combos:[
                    {
                        nombre: "Cine Colombia Roll",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Cine%20Colombia%20Roll.jpg?alt=media&token=0e376aa7-b5f8-4f89-81a8-8597fe20ac5c",
                        descripcion: "Salmón, palmito de cangrejo, aguacate, salsa teriyaki, mayonesa de wasabi y ajonjolí." 
                    },

                    {
                        nombre: "Spider Roll",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Spider%20Roll.jpg?alt=media&token=4428e70f-a9dc-43de-bc14-1b324efad17f",
                        descripcion: "Langostino, salmón y aguacate con palmito de cangrejo en salsa dinamita, ajonjolí y cebollín."
                    },

                    {
                        nombre: "Salmon Teriyaki",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Salm%C3%B3n%20Teriyaki%20Roll.jpg?alt=media&token=e4e9c603-1f73-4e31-800f-ced562d2dd2e",
                        descripcion: "Salmón glaseado en salsa teriyaki con aguacate y cebollín, envuelto en palmito de cangrejo, salsa dinamita y ajonjolí."
                    },

                    {
                        nombre: "Inka Roll",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Inka%20Roll.jpg?alt=media&token=46015194-9ef2-4089-91b1-4928504b4f0c",
                        descripcion: "Langostino, pargo rojo y palmito de cangrejo con cebolla roja, cilantro, maíz, mango y aguacate en aderezo de ají amarillo con quinua."
                    },

                    {
                        nombre: "Philadelphia Roll",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Philadelphia%20Roll.jpg?alt=media&token=4c5acd67-2a7b-451e-9885-a11065a78f47",
                        descripcion: "Salmón, queso crema, ajonjolí blanco tostado y cebollín."
                    },

                    {
                        nombre: "Royal Tiger",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/Royal%20Tiger%20Roll.jpg?alt=media&token=27502b64-482c-4764-a9de-328a37d440a4",
                        descripcion: "Langostino, pargo rojo, palmito de cangrejo, aguacate, mayonesa japonesa y ajonjolí."
                    }
                ]
            },

            {
                nombre: "Cervezas",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cervezas.png?alt=media&token=ac767122-214d-468d-9eae-54684c7b8fef",
                combos:[
                    {
                        nombre: "Cerveza Stella Artois",
                        imagen: "",
                        descripcion: "330 ML"
                    },

                    {
                        nombre: "Cerveza Club Colombia Dorada",
                        imagen: "",
                        descripcion: "330 ML"
                    },

                    {
                        nombre: "Cerveza Club Colombia Roja",
                        imagen: "",
                        descripcion: "330 ML"
                    }
                ]
            }
        ]
    },

    {
        nombre: 'Cinepolitana' ,
        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cinepolitana.jpg?alt=media&token=4617956b-f97d-47d1-a1e7-275d1f3decb2",
        paquete : [
            {
                nombre: "Pizzas Platino",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/pizzasplatino.jpg?alt=media&token=09054412-5657-467f-8c4c-0d6643559a7d",
                combos:[
                    {
                        nombre: "4 Quesos",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/4quesos.jpg?alt=media&token=a4ab1e5a-c911-4f4f-b01d-59997eb7ec0e",
                        descripcion: "Pizza con salsa pomodoro, queso mozzarella, queso mozzarella de búfala, queso parmesano, queso azul y tomate cherry"
                    },

                    {
                        nombre: "Cine Colombia",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/cinecolombia.jpg?alt=media&token=ffb58137-6d74-496c-9961-67fdbf8468f7",
                        descripcion: "Pizza con salsa pomodoro, queso mozzarella, pera, queso azul y prosciutto"
                    },

                    {
                        nombre: "Prosciutto",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/proscituto.jpg?alt=media&token=6692b543-e3be-49ad-9ac5-e7f2a701bc5e",
                        descripcion: "Pizza con salsa pomodoro, queso mozzarella, rúgula, queso mozzarella de búfala, tomate cherry, queso parmesano y prosciutto"
                    }
                ]
            },

            {
                nombre: "Pizzas Tradicionales",
                imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/pizzatradicional.jpg?alt=media&token=3f574242-f45f-49d8-a652-f08f14078b0c",
                combos:[
                    {
                        nombre: "Carnes",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/carnes.jpg?alt=media&token=d654550a-6441-458b-a36f-ea847626babf",
                        descripcion: "Pizza con salsa pomodoro, queso mozzarella, pepperoni, tocineta y jamón"
                    },

                    {
                        nombre: "Hawaiana",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/hawaiana.jpg?alt=media&token=c10380f8-9ff1-45d9-a282-62752a8ba994",
                        descripcion: "Pizza con salsa pomodoro, queso mozzarella, jamón y piña"
                    },

                    {
                        nombre: "Pepperoni",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/PEPPERONI.jpg?alt=media&token=166231ba-c4e8-447b-9a13-eb5a26ce9680",
                        descripcion: "Pizza con salsa pomodoro, queso mozzarella y pepperoni"
                    },

                    {
                        nombre: "Pollo, Champiñones y Tocineta",
                        imagen: "https://firebasestorage.googleapis.com/v0/b/cine-2ddbf.appspot.com/o/pollochamp.jpg?alt=media&token=ab0ef744-f65f-4c02-89d4-ec1577804b3f",
                        descripcion:"Pizza con salsa pomodoro, queso mozzarella, pollo, champiñones y tocineta"
                    }
                ]
            }

        ]
    }
]