$(document).ready(function () {

    //Outra forma é usando o evento .on
    $("form").on("submit", (e) => {
        e.preventDefault();
        const inputText = $("#inputText").val();
        
        const novoItem = $('<li title="Clique para marcar ou desmarcar tarefa" class="undone" style="display: none"> </li>');

        $(`<p>${inputText} <svg class="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="red"/></svg> </p>`).appendTo(novoItem);

        //Agora adicionar a li na ul
        $(novoItem).appendTo("ul");
        //usar animação com jQuery na adição 
        $(novoItem).fadeIn();
        //para limpar o input
        $("#inputText").val("");

    });

    $("#list").on("click", "li", function (e) {
        $(e.target).toggleClass("done")
    });

    //Usando parents ou closest
    // $('#list').on("click", "li .trash", e => $(e.target).closest('li').remove());
    $("#list").on("click", ".trash", function (e) {
        $(e.target).parents('li').remove();
    });



});