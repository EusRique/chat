var app = require('./config/server')

var server = app.listen(3000, function(){
  console.log("Servidor Executando!!!")
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
  console.log('Usuário conectou');

  socket.on('disconnect', function(){
    console.log('Usuário desconectou');
  });

  socket.on('msgParaServidor', function(data){
    socket.emit(
      'msgParaCliente', 
      {apelido: data.apelido, mensagem: data.mensagem}
    );

    socket.broadcast.emit(
      'msgParaCliente', 
      {apelido: data.apelido, mensagem: data.mensagem}
    );

    if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
      socket.emit(
        'participantesParaClientes', 
        {apelido: data.apelido}
      );
  
      socket.broadcast.emit(
        'participantesParaClientes', 
        {apelido: data.apelido}
      );
    }
  })
})