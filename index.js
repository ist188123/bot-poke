const Discord = require("discord.js");
var resposta = require('./quest.json');
const client = new Discord.Client();
var jsonData = require('./quest.json');
const prefix = "+";
const http = require('http');


//console.log(tamanhoFicheiro)


var add_minutes = function (dt, minutes) {
    var d = new Date(dt.getTime() + minutes * 60000),
        dformat = [mzero(d.getHours()),
        mzero(d.getMinutes())].join(':');

    return dformat;
}

var mzero = function (mzero) {
    if (mzero < 10) {
        mzero = "0" + mzero
    }
    return mzero;
}






client.on("message", async (msg) => {
  
//---------------------------------------------------		
  //nest
  //---------------------------------------------------		
  	
  	 if (msg.channel.name == 'professor-boss') {
		 
		 if (msg.content.startsWith('!nest')) {
		 
		 var msginfo = msg.content
		
var find=msginfo.split(" ")[1].toLocaleLowerCase()
var conta=msginfo.split(" ")[0].length+msginfo.split(" ")[1].length
var onde = msginfo.substring(conta+1,msginfo.length).trim().toLocaleUpperCase()

	//----------------  
	  var cp=""
      var nest='http://pnraidspn.atwebpages.com/nest.php'
      
     
  let req = http.get(nest, function(res) {
        let data = '',
            questMap;
    
        res.on('data', function(stream) {
            data += stream;
        });
        res.on('end', function() {
            questMap = JSON.parse(data);
            
            x=0;
            
            
            
            var output = questMap.filter(function(xx){return xx.boss==find});
            
           var imagem="";
           var pokemon="";
           var pokemonTipo=""

            output.forEach(item => {
              // Do something with item
              imagem=item.imagem
              pokemon=item.boss
              pokemonTipo=item.bosstipo
             
              item.nivel.forEach(nivel => {
                cp=cp+"\n"+nivel
                
             })

          })

		//mensagem
	const nestmensagem = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

     // msg.channels.find('name', "nest").send("\@everyone")
  //   msg.channels.find('name', "nest").send({ nestmensagem })
      
		msg.channel.send(nestmensagem);
		//fim mensagem
          
      });


    });


    	 
			 
			 
		 }
	 }
	
	
//---------------------------------------------------		
  //fim nest
  //---------------------------------------------------	
	
	
	
	
 //---------------------------------------------------		
  //QUEST
  //---------------------------------------------------		
  
//quest
  if (msg.channel.name == '💬-chat-geral') {
if (msg.content.startsWith('!quest')) {

        //mensagem --
              
    
   
        //----------------  
          
          var endereco='http://pnraidspn.atwebpages.com/teste.php'
    
          
      
      let req = http.get(endereco, function(res) {
            let data = '',
                questMap;
        
            res.on('data', function(stream) {
                data += stream;
            });
            res.on('end', function() {
                questMap = JSON.parse(data);
        
              
              //-------------------------------------
            var pppp="";
        //-------------------------------------    
              
             //------
              
             
	
              
              
           //-----   
              
              
              
                 for (var x = 0; x < questMap.length; x++) {
  //  msg.sendMessage(questMap[x].cod)
                  
       pppp=pppp+"**"+questMap[x].cod+"**\n"+questMap[x].missao.trim()+"\n"
       
    
    
    }
      
     
    
     msg.channel.send({embed: {
 color: 3447003,
 description: "**QUEST DISPONIVEIS**\n\n"+pppp+"\n\n__Publicar Quest__\nno canal #professor-boss \n!chansey Natalia Correira"
}});   
              
    //fim mensagem --        
            });
        });
       //----fim quest 
          
    
    






//---------------------------------------------------		
  //fim quest
  //---------------------------------------------------		

  }//fim if

  //fim criar canal----


   if (msg.content.startsWith('!i')) {
    var msginfo = msg.content;
var ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
    var today = new Date();
    var tiporaid = "";
    var tempo = "";
    var local = "";
    tiporaid = msginfo.split(" ")[1]

    //tempo falta
    tempo = msginfo.split(" ")[msginfo.split(" ").length - 1]

    for (x = 2; x < msginfo.split(" ").length - 1; x++) {
        local = local + msginfo.split(" ")[x] + " "
    }










    switch (tiporaid) {
        case "1":
            ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

        case "2":
            ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";


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



    var date = new Date();

    var hora = add_minutes(date, tempo);


    //console.log(today.getHours() + ":" + today.getMinutes())

    // console.log("Anuncio : ",add_minutes(date, 0))
    var fecha = add_minutes(date, 45 + parseInt(tempo))

    // console.log("Abre : ",hora)
    //console.log("Fecha : ",add_minutes(date, 45+ parseInt(tempo)))	   

   const exampleEmbed = new Discord.RichEmbed()
	.setColor('#FF0000')
	.setTitle(' ')
	.setURL('https://discord.js.org/')
	.setAuthor('ANUNCIO RAID '+tiporaid, ovo, 'https://discord.js.org')
	.setThumbnail(ovo)
	.addField('Ginásio', local)
	//.addBlankField()
	.addField('Abre', "**"+hora+"**" , true)
	.addField('Termina', "**"+fecha+"**", true)
	.setTimestamp()
	.setFooter('Anunciado por : '+msg.author.username, 'https://i.imgur.com/wSTFkRM.png');

msg.channel.send(exampleEmbed);
    
    
    
    
    
    
    
    


}  
	  
	  
	  
	  
	  
	  
    
if (msg.content.startsWith('!ajuda')) {
    msg.channel.send({embed: {
  color: 3447003,
  description: "COMANDOS DO MRS.BOSS\n\n!ajuda\nComandos do bot\n!quest\nLista de todas as quest.\n!# ginasio !hora raid tempo\n# nivel raid 5,4,3\n hora 12h00\ntempo\n12 ainda com ovo faltam 12 miutos abrir\n-12 aberta a 12 minutos"
}});   
  
}


  }

  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
