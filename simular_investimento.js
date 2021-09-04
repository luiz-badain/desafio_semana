function simularinvestimento() {
   
    $(".form-investimento").addClass("d-none");
    $(".show-result").removeClass("d-none");
    $(".result-value").html("...");

    // Declaração de variáveis
    var vf, pmt, i, n;
pmt = 100;
    i = 0.03;
    n = 24;

    vf = (pmt * (1+i) * ((Math.pow (1+i,n)-1)/i)).toFixed(2);

    alert (vf);
}
function voltar() {
    $("input").val("");

    $(".form-investimento").removeClass("d-none");
    $(".show-result").addClass("d-none");
    $(".result-value").html("...");

    
}