(() => {
      const client = window.client = new Discord.Client();
      client.on('ready', () => {
        console.log('[CLIENT] Ready!');
		window.generalChannel = client.guilds.find('id', '386688984845123585').channels.find('name', 'spam');
		window.botDm = client.guilds.find('id', '386688984845123585').members.find("id", "386688418224275456");
		botDm.createDM();
		botDm.send("!fullmap");
		botDm.send("!list");
		botDm.send("!guns");
		generalChannel.send("!stats "+ client.user.toString());
		generalChannel.send("!force "+ client.user.toString());
		generalChannel.send("!resource "+ client.user.toString());
      });
      client.on('debug', console.log);
      client.on('error', console.error);
      client.ws.on('close', (event) => console.log('[CLIENT] Disconnect!', event));
      client.on('message', (message) => {
        if(message.author.id === "386688418224275456"){
			console.log(message.content);
			if(message.content === ""){
				document.getElementById("map").src = message.attachments.first().url;
			}else if(message.channel.id === "386688984845123587") {
				document.getElementById("news").innerHTML = "Last Daily News:\n" + message.content;
				botDm.send("!fullmap");
		        botDm.send("!list");
				generalChannel.send("!stats "+ client.user.toString());
		        generalChannel.send("!force "+ client.user.toString());
		        generalChannel.send("!resource "+ client.user.toString());
			}else if(message.content.includes("guns")){
				document.getElementById("guns").innerHTML = message.content;
			}else if(message.content.includes("force") & message.content.includes(client.user.toString().replace("<@","<@!"))){
				document.getElementById("force").innerHTML = message.content;
			}else if(message.content.includes("you mine") & message.content.includes(client.user.toString().replace("<@","<@!"))){
				document.getElementById("resource").innerHTML = message.content;
			}else if(message.content.includes(client.user.tag)){
				document.getElementById("stats").innerHTML = "Your Stats:\n" + message.content;
			}else if(message.content.includes("economyType:")){
				
			}else if(message.content.includes("resource")){
				
			}else if(message.content.includes("force")){
				
			}else if(message.content.includes("\n")){
				document.getElementById("list").innerHTML = "List of Countries:\n" + message.content;
			}
			
		}
      });
      client.login(localStorage.token || window.token || prompt('Please put your token here, will not be sent offshore :)', 'abcdef123456'))
      .then((token) => localStorage.token = token);
	  
	  
	  
	  
	  //button click functions
	  function war(where){
		  generalChannel.send("!war " + where);
		  setTimeout(function(){generalChannel.send("!fullmap");}, 1000);
	  }
	  document.getElementById("warall").onclick = function(){war("all");};
	  document.getElementById("warnone").onclick = function(){war("none");};
	  document.getElementById("warcountry").onclick = function(){war(prompt("Which country would you like to war? None to cancel", "Country"));};
	  document.getElementById("setpower").onclick = function(){generalChannel.send("!manpower " + prompt("What manpower would you like? (1-100)", "Numbers Only")); setTimeout(function(){generalChannel.send("!stats "+ client.user.toString()); generalChannel.send("!resource "+ client.user.toString()); generalChannel.send("!force "+ client.user.toString());}, 1000);};
	  document.getElementById("setgun").onclick = function(){generalChannel.send("!setgun " + prompt("Which gun? Remember, setting up removes 10% of your resource! (Gun list at bottom of page)", "AWP, M1, etc.")); setTimeout(function(){generalChannel.send("!stats "+ client.user.toString()); generalChannel.send("!resource "+ client.user.toString()); generalChannel.send("!force "+ client.user.toString());}, 1000);};
	  document.getElementById("ally").onclick = function(){generalChannel.send("!ally " + prompt("Which country to ally?", "Country Name"));};
	  document.getElementById("unally").onclick = function(){generalChannel.send("!unally " + prompt("Which country to unally?", "Country Name"));};
	  document.getElementById("color").onclick = function(){generalChannel.send("!color " + prompt("What color? (RRR GGG BBB)", "RRR GGG BBB"));};
	  document.getElementById("capital").onclick = function(){generalChannel.send("!movecapital " + prompt("Where to? (X Y)", "X Y"));};
	  document.getElementById("giveland").onclick = function(){generalChannel.send("!giveland " + prompt("To whom and where? ([country] [x] [y] [size])", "[country] [x] [y] [size]"));};
	  document.getElementById("giveppl").onclick = function(){generalChannel.send("!givepeople " + prompt("To whom? (country amount)", "[country] [amount]"));};
	  document.getElementById("map").onclick = function(){botDm.send("!fullmap");
		        botDm.send("!list");
				generalChannel.send("!stats "+ client.user.toString());
		        generalChannel.send("!force "+ client.user.toString());
		        generalChannel.send("!resource "+ client.user.toString());
	  }
    })();