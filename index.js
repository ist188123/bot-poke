const Discord = require("discord.js");
var resposta = require('./quest.json');
const client = new Discord.Client();
var jsonData = require('./nest.json');
const prefix = "+";
const http = require('http');


//console.log(tamanhoFicheiro)


//-------------------------
//funcoes -----
//-------------------------
var add_minutes = function (dt, minutes) {
    var d = new Date(dt.getTime() + minutes * 60000),
        dformat = [mzero(d.getUTCHours() + 1),
        mzero(d.getMinutes())].join(':');

    return dformat;
}

var mzero = function (mzero) {
    if (mzero < 10) {
        mzero = "0" + mzero
    }
    return mzero;
}

//var pCode='http://pnraidspn.atwebpages.com/raid.php'
function leinforaid(pCode, cb) {  //leraud

    http.request(pCode).on('response', function (response) {
        var data = '';
        response.on("data", function (chunk) {
            data += chunk;
        });
        response.on('end', function () {
            var pCJSON = JSON.parse(data);
            cb(pCJSON);

        });
    }).end();
}

async function listaraids(endereco) {

    var lista = "";
    var result = await leinforaid(endereco, async function (pCLatLng) {
        pCLatLng.forEach(nivel => {
            lista = lista + "Raid " + nivel.nivel + " - " + nivel.boss + "\n"
        })

        console.log(lista)
    })
}

//-------------------------
//fim funcoes -----
//-------------------------




client.on("message", async (msg) => {

    //---------------------------------------------------		
    //nest
    //---------------------------------------------------		

    if (msg.channel.name == 'professor-boss') {

        if (msg.content.startsWith('!nest')) {

            var msginfo = msg.content
            var dia = new Date();
            var hoje = dia.getDate() + "-" + dia.getMonth() + "-" + dia.getFullYear();
            var find = msginfo.split(" ")[1].toLocaleLowerCase()
            var conta = msginfo.split(" ")[0].length + msginfo.split(" ")[1].length
            var onde = msginfo.substring(conta + 1, msginfo.length).trim().toLocaleUpperCase()

            //----------------  
            var cp = ""
            var nest = 'http://pnraidspn.atwebpages.com/nest.php'


            let req = http.get(nest, function (res) {
                let data = '',
                    questMap;

                res.on('data', function (stream) {
                    data += stream;
                });
                res.on('end', function () {
                    questMap = JSON.parse(data);

                    x = 0;



                    var output = questMap.filter(function (xx) { return xx.boss == find });

                    var imagem = "";
                    var pokemon = "";
                    var pokemonTipo = ""

                    output.forEach(item => {
                        // Do something with item
                        imagem = item.imagem
                        pokemon = item.boss
                        pokemonTipo = item.bosstipo

                        item.nivel.forEach(nivel => {
                            cp = cp + "\n" + nivel

                        })

                    })

                    //mensagem
                    const nestmensagem = new Discord.RichEmbed()
                        .setColor('#FF0000')
                        .setTitle('Reporte de ninho ' + hoje)
                        .setURL('https://discord.js.org/')
                        .setAuthor('Ninho de ' + pokemon.toLocaleUpperCase(), imagem, 'https://discord.js.org')
                        .setThumbnail(imagem)
                        .addField('Local', onde)
                        //.addBlankField()
                        .addField('CP IV (100%)', cp, true)
                        .setTimestamp()
                        .setFooter('Reportado por : ' + msg.author.username, 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');

                    msg.guild.channels.find("name", "nest").sendMessage("\@everyone");
                    msg.guild.channels.find("name", "nest").sendMessage(nestmensagem);

                    //msg.channel.send(nestmensagem);
                    //fim mensagem

                });


            });





        }



        //---------------------------------------------------		
        //fim nest
        //---------------------------------------------------	




        //---------------------------------------------------		
        //QUEST
        //---------------------------------------------------		

        //quest

        if (msg.content.startsWith('!quest')) {

            //mensagem --



            //----------------  

            var endereco = 'http://pnraidspn.atwebpages.com/teste.php'



            let req = http.get(endereco, function (res) {
                let data = '',
                    questMap;

                res.on('data', function (stream) {
                    data += stream;
                });
                res.on('end', function () {
                    questMap = JSON.parse(data);


                    //-------------------------------------
                    var pppp = "";
                    //-------------------------------------    

                    //------





                    //-----   



                    for (var x = 0; x < questMap.length; x++) {
                        //  msg.sendMessage(questMap[x].cod)

                        pppp = pppp + "**" + questMap[x].cod + "**\n" + questMap[x].missao.trim() + "\n"



                    }



                    msg.channel.send({
                        embed: {
                            color: 3447003,
                            description: "**QUEST DISPONIVEIS**\n\n" + pppp + "\n\n__Publicar Quest__\nno canal #professor-boss \n!chansey Natalia Correira"
                        }
                    });

                    //fim mensagem --        
                });
            });
            //----fim quest 









            //---------------------------------------------------		
            //fim quest
            //---------------------------------------------------		

        }//fim if

        //fim criar canal----

             //---------------------------------------------------		
            // informa raid
            //---------------------------------------------------		

        if (msg.content.startsWith('!i')) {
            var msginfo = msg.content;

var today = new Date();



    var boss = ""
    var ovo = ""
    var tiporaid = "";
    var tempo = "";
    var local = "";

    //nivel raid
    tiporaid = msg.split(" ")[1]

    //tempo falta
    tempo = msg.split(" ")[msg.split(" ").length - 1]





    for (x = 2; x < msg.split(" ").length - 1; x++) {
        local = local + msg.split(" ")[x] + " "
    }
    async function informaraid(tiporaid,endereco) {


        var ispokemon = isNaN(tiporaid);
        console.log("--ispokemon--->", ispokemon)
        if (ispokemon) {
            tempo = -tempo
            console.log(tempo)
        }
        var result = await leinforaid(endereco,async function (pCLatLng) {
            pCLatLng.forEach(nivel => {
                if (ispokemon) {

                    if (nivel.boss == tiporaid) {
                        tiporaid = nivel.nivel;
                        boss = nivel.imagem;

                    }

                } else {
                    if (nivel.nivel == tiporaid) {
                        tiporaid = nivel.nivel;
                        boss = "";
                    }

                }


            })


            //------------------------------


            switch (tiporaid) {
                case "1":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
                    break;
                case "2":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
                    break;

                case "3":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

                    break;
                case "4":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

                    break;
                case "5":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";

                    break;

            }

            //se não tiver boss então mostra a imagem do ovo
            if (boss == "") {
                boss = ovo;

            }


            if (typeof parseInt(tiporaid) == "number" && tiporaid.trim() != "") {

                var date = new Date();

                var horaatual = add_minutes(date, 0)
                var hora = add_minutes(date, tempo);
                var fecha = add_minutes(date, 45 + parseInt(tempo))



                    const raidinfomsg = new Discord.RichEmbed()
                        .setColor('#FF0000')
                        .setTitle(horaatual)
                        .setURL('https://discord.js.org/')
                        .setAuthor('ANUNCIO RAID ' + tiporaid, ovo, 'https://discord.js.org')
                        .setThumbnail(boss)
                        .addField('Ginásio', local)
                        //.addBlankField()
                        .addField('Abre', "**" + hora + "**", true)
                        .addField('Termina', "**" + fecha + "**", true)
                        .setTimestamp()
                        .setFooter('Anunciado por : ' + msg.author.username, 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');
                    msg.guild.channels.find("name", "info-raids").sendMessage(raidinfomsg);
          }else{
              msg.channel.send({
                embed: {
                    color: 3447003,
                    description: "ATENÇÃO:\nFalta o **nivel** da raid exemplo:\n!i **1** piscinas 22\n\nOu o Pokemon "+tiporaid+" não está carregado"
                }
            });
          
          }



                });//leinforaid	      

            }

if(isNaN(tempo)){
    msg.channel.send({
                embed: {
                    color: 3447003,
                    description: "ATENÇÃO:\nFalta o **tempo** da raid exemplo:\n!i tyra piscinas **22**"
                }
            });
   
}else{
   informaraid(tiporaid,'http://pnraidspn.atwebpages.com/raid.php')
}
          
 }

             //---------------------------------------------------		
            // fim informa raid
            //---------------------------------------------------		






        if (msg.content.startsWith('!ajuda')) {
            msg.channel.send({
                embed: {
                    color: 3447003,
                    description: "COMANDOS DO MRS.BOSS\n\n!ajuda\nComandos do bot\n!quest\nLista de todas as quest.\n!# ginasio !hora raid tempo\n# nivel raid 5,4,3\n hora 12h00\ntempo\n12 ainda com ovo faltam 12 miutos abrir\n-12 aberta a 12 minutos"
                }
            });

        }

        
    if (msg.startsWith("!listar")) {
    listaraids('http://pnraidspn.atwebpages.com/raid.php')

}
        
        

    }//fim canal boss

    //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
