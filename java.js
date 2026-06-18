function analisarLavoura(){

    let temperatura = Math.floor(Math.random() * 15) + 20;
    let umidade = Math.floor(Math.random() * 40) + 50;
    let chuva = Math.floor(Math.random() * 100);
    let produtividade = Math.floor(Math.random() * 20) + 80;
    
    document.getElementById("temperatura").innerHTML =
    temperatura + "°C";
    
    document.getElementById("umidade").innerHTML =
    umidade + "%";
    
    document.getElementById("chuva").innerHTML =
    chuva + "%";
    
    document.getElementById("produtividade").innerHTML =
    produtividade + "%";
    
    document.getElementById("relatorio").innerHTML =
    
    "🤖 Análise concluída.<br><br>" +
    
    "🌡️ Temperatura: " + temperatura + "°C<br>" +
    
    "💧 Umidade: " + umidade + "%<br>" +
    
    "🌧️ Chance de chuva: " + chuva + "%<br>" +
    
    "📈 Produtividade prevista: " + produtividade + "%<br><br>" +
    
    "✅ Sistema funcionando corretamente.";
    }