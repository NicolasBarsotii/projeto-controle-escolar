const confimarlogin =() =>{
            const nomecorreto = "fulano";
            const senhacorreta = "12345";

            const nome = document.getElementById("nome").value;
            const senha = document.getElementById("senha").value;
            const resultado = document.getElementById("resultado");

            if (nome === nomecorreto || senha === senhacorreta){

                window.location.href = "/html/tela-notas.html";

            } else {
                resultado.textContent ="login invalido";
                resultado.style.color =" red";
            }

        }

