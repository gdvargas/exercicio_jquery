
$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
        event.preventDefault();

        var nomeTarefa = $('#nomeTarefa').val();

        if (nomeTarefa) {
            adicionarTarefa(nomeTarefa);
            $('#nomeTarefa').val('');
        }
    });

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});

function adicionarTarefa(nomeTarefa) {
    var novaTarefa = $('<li>').text(nomeTarefa);
    $('#listaTarefas').append(novaTarefa);
}
